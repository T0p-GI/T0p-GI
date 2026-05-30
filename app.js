/* ============================================================================
   CyberCore Arena — app.js
   ----------------------------------------------------------------------------
   All interactivity: routing, gamification (XP / streaks / badges / mastery),
   learning pages, flashcards, quizzes, the practice engine, the NEW topic-test
   GATEKEEPER system, and the timed Boss Mode exam with FULL auto-marking and
   grade prediction. State persists in localStorage. No build step, no frameworks.

   GATING MODEL (new):
     • CO1 is unlocked by default.
     • Each content area ends with a mandatory Topic Test.
     • Scoring ≥ 70% on a Topic Test unlocks the NEXT content area.
     • Boss Mode unlocks only when ALL three Topic Tests are passed.
     • All test/exam content is generated ONLY from CO1–CO3 (see data.js).
   ========================================================================== */

(() => {
  "use strict";

  const { WORLDS, EXAM, TOPIC_TESTS, BADGES } = window.CYBERCORE;
  const STORAGE_KEY = "cybercore-arena-v2"; // bumped: new gating state shape

  /* ---------------------------------------------------------------------------
     STATE + PERSISTENCE
     ------------------------------------------------------------------------- */
  const defaultState = () => ({
    xp: 0,
    flips: 0,                       // flashcards flipped (for badge)
    streak: 0,
    lastVisit: null,                // ISO date (yyyy-mm-dd)
    levels: {},                     // levelId -> { quizBest, learned, mastery }
    badges: {},                     // badgeId -> true
    // ---- Gatekeeper state (persisted) ----
    worldUnlocked: { co1: true },   // worldId -> true once unlocked (CO1 default)
    testBest: {},                   // worldId -> best test fraction (0..1)
    testPassed: {},                 // worldId -> true once passed (>= 70%)
    bossUnlocked: false,            // true only when all three tests passed
    bossBest: null,                 // { marks, percent, grade, date }
    name: "Player-1"
  });

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = Object.assign(defaultState(), JSON.parse(raw));
      // guarantee CO1 always unlocked even on older saves
      parsed.worldUnlocked = Object.assign({ co1: true }, parsed.worldUnlocked);
      return parsed;
    } catch (e) { return defaultState(); }
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  function levelState(id) {
    if (!state.levels[id]) state.levels[id] = { quizBest: 0, learned: false, mastery: 0 };
    return state.levels[id];
  }

  // Worlds that were unlocked during THIS session — used for the unlock animation.
  const justUnlocked = new Set();

  /* ---------------------------------------------------------------------------
     XP / LEVELLING
     ------------------------------------------------------------------------- */
  function playerLevelInfo() {
    let lvl = 1, need = 100, into = state.xp;
    while (into >= need) { into -= need; lvl++; need = Math.round(need * 1.35); }
    return { level: lvl, into, need, pct: Math.round((into / need) * 100) };
  }
  function addXP(amount, reason) {
    if (amount <= 0) return;
    state.xp += amount;
    toast(`+${amount} XP`, reason || "", "xp");
    save();
  }

  /* ---------------------------------------------------------------------------
     STREAK (daily)
     ------------------------------------------------------------------------- */
  function todayStr() { return new Date().toISOString().slice(0, 10); }
  function refreshStreak() {
    const today = todayStr();
    if (state.lastVisit === today) return;
    if (state.lastVisit) {
      const diff = (new Date(today) - new Date(state.lastVisit)) / 86400000;
      state.streak = diff === 1 ? state.streak + 1 : 1;
    } else { state.streak = 1; }
    state.lastVisit = today;
    if (state.streak >= 3) earnBadge("streak-3");
    save();
  }

  /* ---------------------------------------------------------------------------
     BADGES
     ------------------------------------------------------------------------- */
  function earnBadge(id) {
    if (state.badges[id]) return;
    state.badges[id] = true;
    const b = BADGES.find(x => x.id === id);
    if (b) toast(`Badge unlocked: ${b.name}`, `${b.icon} ${b.desc}`, "badge");
    save();
  }

  /* ---------------------------------------------------------------------------
     GATEKEEPER  —  world locking / unlocking
     ------------------------------------------------------------------------- */
  function worldIndex(worldId) { return WORLDS.findIndex(w => w.id === worldId); }
  function isWorldUnlocked(worldId) { return worldId === "co1" || state.worldUnlocked[worldId] === true; }
  function isTestPassed(worldId) { return state.testPassed[worldId] === true; }

  // Called after a topic test is scored. Records the score and, on a pass,
  // unlocks the next content area (with a celebratory toast + animation).
  function applyTopicTestResult(worldId, fraction) {
    const prevBest = state.testBest[worldId] || 0;
    if (fraction > prevBest) state.testBest[worldId] = fraction;

    const passed = fraction >= TOPIC_TESTS.passMark;
    if (passed && !state.testPassed[worldId]) {
      state.testPassed[worldId] = true;
      // Badge for clearing this content area
      earnBadge(worldId + "-clear");
      // Unlock the NEXT content area in sequence
      const next = WORLDS[worldIndex(worldId) + 1];
      if (next && !state.worldUnlocked[next.id]) {
        state.worldUnlocked[next.id] = true;
        justUnlocked.add(next.id);
        toast("Content Area Unlocked! 🔓", `${next.icon} ${next.name} is now available`, "badge");
      }
      checkBossUnlock();
    }
    save();
    return passed;
  }

  // Boss Mode unlocks ONLY when CO1, CO2 and CO3 topic tests are all passed.
  function checkBossUnlock() {
    const allPassed = WORLDS.every(w => isTestPassed(w.id));
    if (allPassed && !state.bossUnlocked) {
      state.bossUnlocked = true;
      earnBadge("boss-unlocked");
      toast("👹 BOSS MODE UNLOCKED!", "All three topic tests passed", "badge");
      save();
    }
  }

  /* ---------------------------------------------------------------------------
     LEVEL COMPLETION (mastery is for progress display / badges, NOT gating)
     ------------------------------------------------------------------------- */
  function recomputeMastery(id) {
    const ls = levelState(id);
    ls.mastery = Math.round(((ls.learned ? 100 : 0) + Math.round(ls.quizBest * 100)) / 2);
  }
  function markLearned(id) {
    const ls = levelState(id);
    if (!ls.learned) { ls.learned = true; addXP(20, "Topic studied"); }
    recomputeMastery(id);
    earnBadge("first-steps");
    save();
  }
  function recordQuiz(id, fraction) {
    const ls = levelState(id);
    if (fraction > ls.quizBest) ls.quizBest = fraction;
    recomputeMastery(id);
    if (fraction >= 1) earnBadge("quiz-ace");
    save();
  }

  /* ---------------------------------------------------------------------------
     DOM HELPERS
     ------------------------------------------------------------------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, props = {}, ...kids) => {
    const n = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if (v !== null && v !== undefined) n.setAttribute(k, v);
    });
    kids.flat().forEach(c => n.append(c instanceof Node ? c : document.createTextNode(c)));
    return n;
  };
  const view = () => $("#view");

  function toast(title, sub, kind) {
    const wrap = $("#toasts");
    const t = el("div", { class: `toast ${kind === "badge" ? "badge-toast" : ""}` },
      el("div", { class: "t-title" }, title),
      sub ? el("div", { class: "t-sub" }, sub) : "");
    wrap.append(t);
    setTimeout(() => t.remove(), 3400);
  }

  /* ---------------------------------------------------------------------------
     SIDEBAR / NAVIGATOR  (shows 🔒 on locked worlds, ✔ on passed worlds)
     ------------------------------------------------------------------------- */
  function renderSidebar(active) {
    const info = playerLevelInfo();
    const nav = $("#nav");
    nav.innerHTML = "";

    nav.append(el("div", { class: "nav-stats" },
      el("span", { class: "chip" }, "⭐ Lv ", el("b", {}, String(info.level))),
      el("span", { class: "chip" }, "🔥 ", el("b", {}, String(state.streak)), " day"),
      el("span", { class: "chip" }, "💠 ", el("b", {}, String(state.xp)), " XP")));

    nav.append(navLink("🏠 Dashboard", "", active === "home", () => go("home")));

    WORLDS.forEach(w => {
      const unlocked = isWorldUnlocked(w.id);
      const passed = isTestPassed(w.id);
      const sec = el("div", { class: "nav-section" });

      // World heading with lock / tick / unlock animation
      const animClass = justUnlocked.has(w.id) ? " nav-unlock-anim" : "";
      const statusIcon = passed ? "✔" : (unlocked ? "" : "🔒");
      sec.append(el("div", { class: "nav-world-title" + animClass },
        `${w.icon} ${w.name}`,
        statusIcon ? el("span", { class: passed ? "tick-pass" : "lock-ic" }, statusIcon) : "",
        el("span", { class: "code" }, w.code)));

      if (unlocked) {
        w.levels.forEach(l => {
          const ls = levelState(l.id);
          const done = ls.mastery >= 100;
          sec.append(navLink(l.title, l.spec, active === l.id,
            () => go("level", { world: w.id, level: l.id }),
            done ? "✅" : (ls.mastery > 0 ? "•" : "")));
        });
        // Topic Test entry for this content area
        sec.append(navLink(
          passed ? "📝 Topic Test ✔" : "📝 Topic Test", "unlock gate",
          active === "test-" + w.id, () => go("test", { world: w.id })));
      } else {
        sec.append(el("div", { class: "nav-locked-note" }, "🔒 Pass the previous test to unlock"));
      }
      nav.append(sec);
    });

    const extra = el("div", { class: "nav-section" });
    extra.append(el("div", { class: "nav-world-title" }, "🏆 Arena"));
    extra.append(navLink(state.bossUnlocked ? "👹 Boss Mode Exam" : "🔒 Boss Mode (locked)", "90 marks",
      active === "boss", () => go("boss")));
    extra.append(navLink("🎖️ Badges", "", active === "badges", () => go("badges")));
    extra.append(navLink("📊 Leaderboard", "", active === "leaderboard", () => go("leaderboard")));
    nav.append(extra);

    // Clear the one-shot unlock animation after it has rendered
    if (justUnlocked.size) setTimeout(() => justUnlocked.clear(), 1500);
  }

  function navLink(label, spec, isActive, onClick, tick = "") {
    return el("div", { class: `nav-link ${isActive ? "active" : ""}`, onclick: onClick },
      el("span", {}, label),
      spec ? el("span", { class: "spec" }, spec) : "",
      tick ? el("span", { class: "tick" }, tick) : "");
  }

  /* ---------------------------------------------------------------------------
     ROUTER
     ------------------------------------------------------------------------- */
  let route = { name: "home", params: {} };
  function go(name, params = {}) {
    route = { name, params };
    closeSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
    render();
  }
  function render() {
    const activeKey = route.name === "level" ? route.params.level
      : route.name === "test" ? "test-" + route.params.world : route.name;
    renderSidebar(activeKey);
    const v = view(); v.innerHTML = "";
    switch (route.name) {
      case "home":        renderHome(v); break;
      case "world":       renderWorld(v, route.params.world); break;
      case "level":       renderLevel(v, route.params.world, route.params.level); break;
      case "test":        renderTopicTest(v, route.params.world); break;
      case "boss":        renderBoss(v); break;
      case "badges":      renderBadges(v); break;
      case "leaderboard": renderLeaderboard(v); break;
      default:            renderHome(v);
    }
  }

  /* ---------------------------------------------------------------------------
     HOME / DASHBOARD
     ------------------------------------------------------------------------- */
  function renderHome(v) {
    const info = playerLevelInfo();
    const passedCount = WORLDS.filter(w => isTestPassed(w.id)).length;

    v.append(el("div", { class: "hero" },
      el("h2", { class: "neon-text" }, "CYBERCORE ARENA"),
      el("p", {}, "Clear three content-area worlds, then pass each Topic Test to unlock the next. Pass all three to face Boss Mode — a full Core Paper 1 exam built entirely from your CO1–CO3 syllabus. Earn XP, streaks and badges as you go."),
      el("div", { class: "xpbar-wrap" },
        el("div", { class: "xpbar" }, el("span", { style: `width:${info.pct}%` })),
        el("div", { class: "lvl-row" },
          el("span", {}, `Level ${info.level}`),
          el("span", {}, `${info.into} / ${info.need} XP to next level`))),
      el("div", { style: "margin-top:14px;display:flex;gap:10px;flex-wrap:wrap" },
        el("span", { class: "chip" }, `✅ ${passedCount}/3 topic tests passed`),
        el("span", { class: "chip" }, `🔥 ${state.streak}-day streak`),
        el("span", { class: "chip" }, `🎖️ ${Object.keys(state.badges).length}/${BADGES.length} badges`))));

    v.append(el("h3", {}, "Content areas"));
    const grid = el("div", { class: "grid-cards" });
    WORLDS.forEach(w => {
      const unlocked = isWorldUnlocked(w.id);
      const passed = isTestPassed(w.id);
      const done = w.levels.filter(l => levelState(l.id).mastery >= 100).length;
      const pct = Math.round((done / w.levels.length) * 100);
      const card = el("div", { class: `world-card ${unlocked ? "" : "card-locked"}`,
        onclick: () => go("world", { world: w.id }) },
        el("div", { class: "wc-icon" }, unlocked ? w.icon : "🔒"),
        el("h3", {}, w.name, passed ? el("span", { class: "tick-pass" }, " ✔") : ""),
        el("div", { class: "muted", style: "font-size:.8rem" }, w.blurb),
        el("div", { class: "wc-bar" }, el("span", { style: `width:${pct}%` })),
        el("div", { class: "wc-meta" },
          el("span", {}, `${w.code} · ${w.levels.length} levels`),
          el("span", {}, unlocked ? `${pct}%` : "Locked")));
      grid.append(card);
    });
    v.append(grid);

    const bossReady = state.bossUnlocked;
    v.append(el("div", { class: "panel", style: "margin-top:22px" },
      el("h3", {}, bossReady ? "👹 Boss Mode is unlocked!" : "🔒 Boss Mode locked"),
      el("p", { class: "muted" }, bossReady
        ? "You passed all three topic tests. Sit the full 90-mark exam simulation."
        : "Pass the CO1, CO2 and CO3 topic tests (70%+ each) to unlock the timed exam."),
      el("button", {
        class: `btn ${bossReady ? "purple" : ""}`, disabled: bossReady ? null : "true",
        onclick: () => bossReady && go("boss")
      }, bossReady ? "Enter Boss Mode" : "Locked")));
  }

  /* ---------------------------------------------------------------------------
     WORLD VIEW  (locked message OR levels + Topic Test card)
     ------------------------------------------------------------------------- */
  function renderWorld(v, worldId) {
    const w = WORLDS.find(x => x.id === worldId);
    v.append(el("div", { class: "topbar" },
      el("button", { class: "btn ghost small", onclick: () => go("home") }, "← Home"),
      el("h2", { style: "margin:0" }, `${w.icon} ${w.name}`),
      el("span", { class: "chip" }, w.code)));

    // Locked content area → explain how to unlock and stop here
    if (!isWorldUnlocked(w.id)) {
      const prev = WORLDS[worldIndex(w.id) - 1];
      v.append(el("div", { class: "panel center" },
        el("div", { style: "font-size:3rem" }, "🔒"),
        el("h3", {}, "Content Area Locked"),
        el("p", { class: "muted" }, `Pass the ${prev ? prev.name : "previous"} Topic Test (70%+) to unlock ${w.name}.`),
        prev ? el("button", { class: "btn", onclick: () => go("test", { world: prev.id }) },
          `Go to ${prev.name} Topic Test`) : ""));
      return;
    }

    v.append(el("p", { class: "muted" }, w.blurb));
    const grid = el("div", { class: "level-grid" });
    w.levels.forEach((l, i) => {
      const ls = levelState(l.id);
      grid.append(el("div", { class: "level-card", onclick: () => go("level", { world: w.id, level: l.id }) },
        el("div", { class: "lc-spec" }, `LEVEL ${i + 1} · ${l.spec}`),
        el("h4", {}, l.title),
        el("div", { class: "lc-sum" }, l.summary),
        el("div", { class: "lc-foot" },
          el("div", { class: "mastery" }, el("span", { style: `width:${ls.mastery}%` })),
          ls.mastery >= 100 ? el("span", { class: "badge-done" }, "✅") : el("span", { class: "muted" }, `${ls.mastery}%`))));
    });
    v.append(grid);

    // Topic Test gate card at the end of the content area
    const passed = isTestPassed(w.id);
    const best = state.testBest[w.id] ? Math.round(state.testBest[w.id] * 100) : null;
    v.append(el("div", { class: `panel gate-card ${passed ? "gate-pass" : ""}`, style: "margin-top:18px" },
      el("h3", {}, passed ? "📝 Topic Test — Passed ✔" : "📝 Topic Test (required to progress)"),
      el("p", { class: "muted" },
        `Answer a mix of multiple-choice, short-answer and a 6-mark question drawn only from ${w.name}. Score 70%+ to unlock the next content area.`
        + (best !== null ? `  Your best: ${best}%.` : "")),
      el("button", { class: "btn green", onclick: () => go("test", { world: w.id }) },
        passed ? "Retake Topic Test" : "Start Topic Test")));
  }

  /* ---------------------------------------------------------------------------
     LEVEL VIEW (Learn / Flashcards / Quiz / Practice)
     ------------------------------------------------------------------------- */
  function renderLevel(v, worldId, levelId) {
    const w = WORLDS.find(x => x.id === worldId);
    const l = w.levels.find(x => x.id === levelId);
    const ls = levelState(l.id);

    v.append(el("div", { class: "topbar" },
      el("button", { class: "btn ghost small", onclick: () => go("world", { world: w.id }) }, `← ${w.name}`),
      el("div", {},
        el("div", { class: "lc-spec", style: "color:var(--neon-2)" }, `${w.code} · ${l.spec}`),
        el("h2", { style: "margin:0" }, l.title)),
      el("span", { class: "spacer" }),
      el("span", { class: "chip" }, `Mastery ${ls.mastery}%`)));

    const panel = el("div", { class: "panel" });
    const tabs = el("div", { class: "tabs" });
    const body = el("div", {});
    const tabDefs = [
      ["📖 Learn", () => learnTab(body, l)],
      ["🃏 Flashcards", () => flashTab(body, l)],
      ["🎯 Quiz", () => quizTab(body, l)],
      ["✍️ Practice", () => practiceTab(body, l)]
    ];
    tabDefs.forEach(([label, fn], i) => {
      const t = el("div", { class: `tab ${i === 0 ? "active" : ""}`, onclick: () => {
        [...tabs.children].forEach(c => c.classList.remove("active"));
        t.classList.add("active"); body.innerHTML = ""; fn();
      } }, label);
      tabs.append(t);
    });
    panel.append(tabs, body); v.append(panel);
    learnTab(body, l);

    const flat = WORLDS.flatMap(ww => ww.levels.map(ll => ({ w: ww, l: ll })));
    const idx = flat.findIndex(x => x.l.id === l.id);
    const next = flat[idx + 1];
    const sameWorldNext = next && next.w.id === w.id;
    v.append(el("div", { class: "topbar", style: "margin-top:18px" },
      el("span", { class: "spacer" }),
      sameWorldNext
        ? el("button", { class: "btn", onclick: () => go("level", { world: next.w.id, level: next.l.id }) }, `Next: ${next.l.title} →`)
        : el("button", { class: "btn green", onclick: () => go("test", { world: w.id }) }, "Take the Topic Test →")));
  }

  function learnTab(body, l) {
    const wrap = el("div", { class: "learn-body" });
    l.learn.forEach(html => wrap.append(el("div", { html })));
    body.append(wrap);
    body.append(el("div", { style: "margin-top:18px" },
      el("button", { class: "btn green", onclick: (e) => {
        markLearned(l.id);
        e.target.textContent = "✓ Marked as studied"; e.target.disabled = true;
        renderSidebar(l.id);
      } }, levelState(l.id).learned ? "✓ Studied" : "Mark as studied (+20 XP)")));
  }

  function flashTab(body, l) {
    let idx = 0;
    const card = el("div", { class: "flashcard" });
    const inner = el("div", { class: "flash-inner" });
    const front = el("div", { class: "flash-face front" }, el("span", { class: "tag" }, "Question"), el("div", {}));
    const back = el("div", { class: "flash-face back" }, el("span", { class: "tag" }, "Answer"), el("div", {}));
    inner.append(front, back); card.append(inner);
    const counter = el("div", { class: "flash-counter" });
    function paint() {
      card.classList.remove("flipped");
      front.lastChild.textContent = l.flashcards[idx].f;
      back.lastChild.textContent = l.flashcards[idx].b;
      counter.textContent = `${idx + 1} / ${l.flashcards.length}`;
    }
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      if (card.classList.contains("flipped")) { state.flips++; if (state.flips >= 50) earnBadge("flash-50"); save(); }
    });
    body.append(el("div", { class: "flash-stage" }, card,
      el("div", { class: "flash-controls" },
        el("button", { class: "btn ghost small", onclick: () => { idx = (idx - 1 + l.flashcards.length) % l.flashcards.length; paint(); } }, "← Prev"),
        counter,
        el("button", { class: "btn ghost small", onclick: () => { idx = (idx + 1) % l.flashcards.length; paint(); } }, "Next →")),
      el("div", { class: "muted", style: "font-size:.78rem" }, "Click the card to flip it.")));
    paint();
  }

  function quizTab(body, l) {
    let i = 0, correct = 0, answered = false;
    const wrap = el("div", {}); body.append(wrap);
    function paintQ() {
      answered = false; wrap.innerHTML = "";
      const q = l.quiz[i];
      wrap.append(el("div", { class: "quiz-progress" }, `Question ${i + 1} of ${l.quiz.length} · Score ${correct}`));
      wrap.append(el("div", { class: "quiz-q" }, q.q));
      const opts = el("div", { class: "quiz-options" });
      q.options.forEach((opt, oi) => opts.append(el("button", { class: "opt", onclick: (e) => choose(oi, e.target) }, opt)));
      wrap.append(opts);
    }
    function choose(oi, btn) {
      if (answered) return; answered = true;
      const q = l.quiz[i];
      const buttons = [...btn.parentElement.children];
      buttons.forEach(b => b.disabled = true);
      if (oi === q.answer) { btn.classList.add("correct"); correct++; }
      else { btn.classList.add("wrong"); buttons[q.answer].classList.add("correct"); }
      wrap.append(el("div", { class: "quiz-feedback" }, oi === q.answer ? "✅ Correct! " : "❌ Not quite. ", q.why));
      wrap.append(el("div", { style: "margin-top:14px" },
        el("button", { class: "btn", onclick: () => { i++; i < l.quiz.length ? paintQ() : finish(); } },
          i + 1 < l.quiz.length ? "Next question →" : "See results")));
    }
    function finish() {
      const frac = correct / l.quiz.length;
      recordQuiz(l.id, frac);
      addXP(Math.round(frac * 30) + (frac >= 1 ? 20 : 0), "Quiz complete");
      renderSidebar(l.id);
      wrap.innerHTML = "";
      wrap.append(el("div", { class: "panel center" },
        el("h3", {}, frac >= 1 ? "🎯 Perfect run!" : "Quiz complete"),
        el("div", { class: "result-grade", style: "font-size:2.6rem" }, `${correct}/${l.quiz.length}`),
        el("p", { class: "muted" }, `Best mastery for this level is now ${levelState(l.id).mastery}%`),
        el("button", { class: "btn", onclick: () => { i = 0; correct = 0; paintQ(); } }, "Try again")));
    }
    paintQ();
  }

  function practiceTab(body, l) {
    body.append(el("p", { class: "muted" }, "Write an exam-style answer, then reveal the model answer to self-mark."));
    const fc = l.flashcards[0];
    body.append(el("div", { class: "quiz-q" }, `Explain or describe: ${fc.f}`));
    const ta = el("textarea", { class: "answer-box", placeholder: "Type your answer here…" });
    body.append(ta);
    const reveal = el("div", {});
    body.append(el("div", { style: "margin-top:12px" },
      el("button", { class: "btn", onclick: () => {
        reveal.innerHTML = "";
        const words = ta.value.trim().split(/\s+/).filter(Boolean).length;
        reveal.append(el("div", { class: "markscheme" },
          el("h4", {}, "✅ Model answer"), el("p", {}, fc.b),
          el("p", { class: "muted", style: "font-size:.8rem" }, `You wrote ${words} words. Compare against the model answer.`)));
        addXP(10, "Practice attempt");
      } }, "Reveal model answer (+10 XP)")));
    body.append(reveal);
  }

  /* ===========================================================================
     AUTO-MARKING ENGINE  (shared by Topic Tests and Boss Mode)
     ===========================================================================
     • markMcq        — 1 if the chosen option matches, else 0.
     • markShortAuto  — proportion of marks from `accept` keyword hits vs minKeywords.
     • markExtended   — levels-based coverage: fraction of `accept` keyword-GROUPS
                        present in the answer, multiplied by the question's marks.
     Returns { awarded, level, coverage } so the UI can show the mark scheme.
     ========================================================================= */
  function normalise(text) { return " " + (text || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ") + " "; }

  function markMcq(q, given) { return given && given.picked === q.answer ? q.marks : 0; }

  function markShortAuto(q, text) {
    if (!text || !text.trim()) return 0;
    const t = normalise(text);
    const hits = (q.accept || []).filter(k => t.includes(" " + k.toLowerCase() + " ") || t.includes(k.toLowerCase())).length;
    const need = q.minKeywords || 1;
    return Math.min(q.marks, Math.round(Math.min(1, hits / need) * q.marks));
  }

  // Levels-based auto-marking for 6/9/12-mark questions.
  function markExtended(q, text) {
    if (!text || !text.trim()) return { awarded: 0, coverage: 0 };
    const t = normalise(text);
    const groups = q.accept || [];
    // A group is "covered" if ANY of its synonym keywords appears in the answer.
    const covered = groups.filter(group => group.some(k => t.includes(k.toLowerCase()))).length;
    const coverage = groups.length ? covered / groups.length : 0;
    // Light length factor: very short answers cannot reach the top band.
    const words = text.trim().split(/\s+/).length;
    const lengthCap = Math.min(1, words / (q.marks * 12));
    const score = Math.min(coverage, Math.max(coverage * 0.6, lengthCap)); // coverage-led, length-capped
    const awarded = Math.max(0, Math.min(q.marks, Math.round(score * q.marks)));
    return { awarded, coverage };
  }

  // Find which level descriptor a mark falls into (for display).
  function levelFor(q, mark) {
    let label = "";
    q.levels.forEach(lv => {
      const [lo, hi] = lv.range.includes("-") ? lv.range.split("-").map(Number) : [Number(lv.range), Number(lv.range)];
      if (mark >= lo && mark <= hi) label = lv.text;
    });
    return label;
  }

  /* ===========================================================================
     TOPIC TEST  (gatekeeper)
     ===========================================================================
     generateTopicTest(world): builds 10–20 questions ONLY from that content area:
       • `mcqCount` MCQs sampled from the world's per-level quizzes
       • the authored short-answer questions for that world
       • the authored 6-mark question for that world
     ========================================================================= */
  function generateTopicTest(world) {
    const cfg = TOPIC_TESTS.byWorld[world.id];
    // Pool every MCQ from the world's levels, then sample mcqCount of them.
    const pool = [];
    world.levels.forEach(l => l.quiz.forEach(qz =>
      pool.push({ type: "mcq", marks: 1, q: qz.q, options: qz.options, answer: qz.answer, why: qz.why })));
    const mcqs = shuffle(pool).slice(0, Math.min(TOPIC_TESTS.mcqCount, pool.length))
      .map((q, i) => Object.assign({ id: `${world.id}-M${i + 1}` }, q));
    // Authored shorts + one 6-mark question (already CO-specific in data.js).
    const shorts = cfg.shorts.map(s => Object.assign({}, s, { type: "short" }));
    return [...mcqs, ...shorts, cfg.sixMark];
  }

  let topicSession = null; // { world, questions, answers }

  function renderTopicTest(v, worldId) {
    const w = WORLDS.find(x => x.id === worldId);
    if (!isWorldUnlocked(w.id)) { go("world", { world: w.id }); return; }

    // Build a fresh randomised test if not already mid-attempt for this world.
    if (!topicSession || topicSession.world.id !== w.id || topicSession.submitted) {
      topicSession = { world: w, questions: generateTopicTest(w), answers: {}, submitted: false };
    }
    const s = topicSession;
    const maxMarks = s.questions.reduce((a, q) => a + q.marks, 0);

    v.append(el("div", { class: "topbar" },
      el("button", { class: "btn ghost small", onclick: () => go("world", { world: w.id }) }, `← ${w.name}`),
      el("h2", { style: "margin:0" }, `📝 ${w.name} — Topic Test`),
      el("span", { class: "spacer" }),
      el("span", { class: "chip" }, `Pass mark 70% · ${maxMarks} marks`)));

    v.append(el("div", { class: "panel" },
      el("p", { class: "muted" }, "All questions below are drawn only from this content area. Answer them all, then submit to be auto-marked. Score 70%+ to unlock the next content area.")));

    s.questions.forEach((q, i) => v.append(renderTestQuestion(q, i)));

    v.append(el("div", { class: "center", style: "margin-top:18px" },
      el("button", { class: "btn green", onclick: () => submitTopicTest(v) }, "Submit Topic Test")));
  }

  function renderTestQuestion(q, i) {
    const card = el("div", { class: "panel qcard" });
    card.append(el("div", { class: "qhead" },
      el("span", { class: "qno" }, `Q${i + 1}`),
      el("span", { class: "qmarks" }, `${q.marks} mark${q.marks > 1 ? "s" : ""}`)));
    if (q.context) card.append(el("div", { class: "qctx" }, q.context));
    card.append(el("div", { class: "quiz-q" }, q.q));
    if (q.type === "mcq") {
      const opts = el("div", { class: "quiz-options" });
      q.options.forEach((opt, oi) => {
        const b = el("button", { class: "opt", onclick: () => {
          [...opts.children].forEach(c => c.classList.remove("active-pick"));
          b.classList.add("active-pick");
          topicSession.answers[q.id] = { picked: oi };
        } }, opt);
        opts.append(b);
      });
      card.append(opts);
    } else {
      const ta = el("textarea", { class: "answer-box", placeholder: "Type your answer…" });
      ta.addEventListener("input", () => topicSession.answers[q.id] = { value: ta.value });
      card.append(ta);
    }
    return card;
  }

  function submitTopicTest() {
    const s = topicSession; s.submitted = true;
    let total = 0, max = 0;
    const breakdown = [];
    s.questions.forEach(q => {
      max += q.marks;
      const a = s.answers[q.id] || {};
      let awarded = 0;
      if (q.type === "mcq") awarded = markMcq(q, a);
      else if (q.type === "short") awarded = markShortAuto(q, a.value || "");
      else awarded = markExtended(q, a.value || "").awarded; // 6-mark
      total += awarded;
      breakdown.push({ q, awarded, given: a });
    });
    const fraction = max ? total / max : 0;
    const passed = applyTopicTestResult(s.world.id, fraction); // gating + unlock
    addXP(Math.round(fraction * 40) + (passed ? 30 : 0), "Topic test");
    renderTopicTestResult(s.world, total, max, fraction, passed, breakdown);
  }

  function renderTopicTestResult(world, total, max, fraction, passed, breakdown) {
    const v = view(); v.innerHTML = "";
    renderSidebar("test-" + world.id);
    const pct = Math.round(fraction * 100);

    v.append(el("div", { class: "panel center" },
      el("div", { style: "font-size:3rem" }, passed ? "✅" : "❌"),
      el("h2", {}, passed ? "Topic Test Passed!" : "Not quite — try again"),
      el("div", { class: "result-grade", style: "font-size:3rem" }, `${pct}%`),
      el("p", { class: "muted" }, `${total} / ${max} marks · pass mark 70%`),
      passed
        ? el("p", {}, "🔓 The next content area is now unlocked. Keep going!")
        : el("p", {}, "You need 70% to unlock the next area. Review the topics and retry — unlimited attempts."),
      el("div", { style: "margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap" },
        el("button", { class: "btn green", onclick: () => { topicSession = null; go("test", { world: world.id }); } },
          passed ? "↻ Retake test" : "🔁 Retry Test"),
        passed && WORLDS[worldIndex(world.id) + 1]
          ? el("button", { class: "btn purple", onclick: () => go("world", { world: WORLDS[worldIndex(world.id) + 1].id }) }, "Next area →")
          : "",
        state.bossUnlocked ? el("button", { class: "btn purple", onclick: () => go("boss") }, "👹 Boss Mode") : "",
        el("button", { class: "btn ghost", onclick: () => go("world", { world: world.id }) }, "Back to area"))));

    // Per-question breakdown with mark scheme
    const panel = el("div", { class: "panel" });
    panel.append(el("h3", {}, "Marking breakdown"));
    breakdown.forEach((r, i) => {
      const detail = el("details", { style: "margin:6px 0" },
        el("summary", { html: `<b>Q${i + 1}</b> — ${r.awarded}/${r.q.marks} marks` }),
        el("div", { class: "muted", style: "font-size:.84rem;margin:6px 0" }, r.q.q));
      if (r.q.type === "mcq") {
        detail.append(el("div", { class: "markscheme" },
          el("p", {}, "Correct answer: ", el("b", {}, r.q.options[r.q.answer])),
          el("p", { class: "muted", style: "font-size:.8rem" }, "Your answer: " +
            (r.given.picked !== undefined ? r.q.options[r.given.picked] : "(blank)"))));
      } else {
        const ms = el("div", { class: "markscheme" },
          el("h4", {}, "Mark scheme"), el("p", {}, r.q.model));
        if (r.q.indicative) ms.append(el("ul", {}, r.q.indicative.map(p => el("li", {}, p))));
        ms.append(el("p", { class: "muted", style: "font-size:.8rem;white-space:pre-wrap" },
          "Your answer: " + (r.given.value || "(blank)")));
        detail.append(ms);
      }
      panel.append(detail);
    });
    v.append(panel);
  }

  /* ===========================================================================
     BOSS MODE EXAM  (full paper, auto-marked)
     ========================================================================= */
  let exam = null;

  function renderBoss(v) {
    if (!state.bossUnlocked) {
      v.append(el("div", { class: "panel center" },
        el("h2", {}, "🔒 Boss Mode Locked"),
        el("p", { class: "muted" }, "Pass all three Topic Tests (70%+ each) to unlock the full exam simulation."),
        WORLDS.map(w => el("div", { class: "chip", style: "margin:4px" },
          `${w.icon} ${w.name}: ${isTestPassed(w.id) ? "Passed ✔" : "Not passed"}`)),
        el("div", { style: "margin-top:16px" }, el("button", { class: "btn", onclick: () => go("home") }, "Back to training"))));
      return;
    }
    if (exam && exam.running) { renderExamRunning(v); return; }

    v.append(el("div", { class: "hero" },
      el("h2", { class: "neon-text" }, "👹 BOSS MODE — Core Paper 1"),
      el("p", {}, "A full Core Paper 1-style exam (90 marks): Section A short questions (MCQ + short answer, 30 marks) and Section B extended questions worth 6, 9 and 12 marks (60 marks). Every question is original and built only from your CO1–CO3 syllabus. The whole paper is auto-marked, with a full mark scheme, breakdown, percentage and predicted grade."),
      state.bossBest ? el("div", { class: "chip", style: "margin-top:8px" },
        `🏅 Personal best: ${state.bossBest.marks}/90 — Grade ${state.bossBest.grade}`) : ""));

    v.append(el("div", { class: "panel" },
      el("h3", {}, "Choose your challenge"),
      el("div", { style: "display:flex;gap:12px;flex-wrap:wrap;margin-top:10px" },
        el("button", { class: "btn purple", onclick: () => startExam(EXAM.durationSeconds) }, "⏱️ Full Exam — 2h 15m"),
        el("button", { class: "btn", onclick: () => startExam(1800) }, "⚡ Arena Sprint — 30m"),
        el("button", { class: "btn ghost", onclick: () => startExam(0) }, "🧘 Untimed Practice")),
      el("p", { class: "muted", style: "margin-top:12px;font-size:.82rem" },
        "Questions are randomised each attempt. XP is awarded for completing the paper, with bonuses for higher grades.")));
  }

  function startExam(duration) {
    const a = shuffle([...EXAM.sectionA]);
    const b = shuffle([...EXAM.sectionB]);
    exam = {
      running: true, duration, remaining: duration,
      questions: [...a.map(q => ({ q, section: "A" })), ...b.map(q => ({ q, section: "B" }))],
      answers: {}, timerId: null
    };
    if (duration > 0) exam.timerId = setInterval(tickExam, 1000);
    go("boss");
  }
  function tickExam() {
    exam.remaining--;
    const t = $("#boss-timer");
    if (t) { t.textContent = fmtTime(exam.remaining); t.classList.toggle("danger", exam.remaining <= 300); }
    if (exam.remaining <= 0) { clearInterval(exam.timerId); submitExam(); }
  }

  function renderExamRunning(v) {
    v.append(el("div", { class: "boss-hud" },
      el("div", {}, "👹 ", el("b", {}, "Boss Mode")),
      exam.duration > 0 ? el("div", { class: "timer", id: "boss-timer" }, fmtTime(exam.remaining)) : el("div", { class: "timer" }, "∞"),
      el("div", { class: "exam-progress" },
        el("div", { class: "bar" }, el("span", { id: "exam-bar", style: "width:0%" })),
        el("div", { class: "muted", id: "exam-count", style: "font-size:.74rem;margin-top:4px" }, "0 answered")),
      el("button", { class: "btn green small", onclick: () => confirmSubmit() }, "Submit paper")));

    let lastSection = "";
    exam.questions.forEach((item, i) => {
      if (item.section !== lastSection) {
        lastSection = item.section;
        v.append(el("div", { class: "section-flag" },
          item.section === "A" ? "● Section A — 30 marks (short answer)" : "● Section B — 60 marks (extended response: 6 / 9 / 12 marks)"));
      }
      v.append(renderExamQuestion(item.q, i));
    });
    v.append(el("div", { class: "center", style: "margin-top:20px" },
      el("button", { class: "btn green", onclick: () => confirmSubmit() }, "Submit paper for marking")));
    updateExamProgress();
  }

  function renderExamQuestion(q, i) {
    const card = el("div", { class: "panel qcard" });
    card.append(el("div", { class: "qhead" },
      el("span", { class: "qno" }, `Q${i + 1}`),
      el("span", { class: "qmarks" }, `${q.marks} mark${q.marks > 1 ? "s" : ""}`)));
    if (q.context) card.append(el("div", { class: "qctx" }, q.context));
    card.append(el("div", { class: "quiz-q" }, q.q));
    if (q.type === "mcq") {
      const opts = el("div", { class: "quiz-options" });
      q.options.forEach((opt, oi) => {
        const b = el("button", { class: "opt", onclick: () => {
          [...opts.children].forEach(c => c.classList.remove("active-pick"));
          b.classList.add("active-pick"); b.style.borderColor = "var(--neon)";
          exam.answers[q.id] = { picked: oi }; updateExamProgress();
        } }, opt);
        opts.append(b);
      });
      card.append(opts);
    } else {
      const ta = el("textarea", { class: "answer-box",
        placeholder: q.type === "extended" ? "Write your extended response here…" : "Type your answer…" });
      ta.addEventListener("input", () => { exam.answers[q.id] = { value: ta.value }; updateExamProgress(); });
      card.append(ta);
    }
    return card;
  }

  function updateExamProgress() {
    const answered = Object.keys(exam.answers).filter(id => {
      const a = exam.answers[id];
      return a && (a.picked !== undefined || (a.value && a.value.trim()));
    }).length;
    const total = exam.questions.length;
    const bar = $("#exam-bar"); if (bar) bar.style.width = `${Math.round((answered / total) * 100)}%`;
    const c = $("#exam-count"); if (c) c.textContent = `${answered}/${total} answered`;
  }
  function confirmSubmit() {
    const answered = Object.keys(exam.answers).length;
    if (answered < exam.questions.length &&
      !confirm(`You have answered ${answered} of ${exam.questions.length} questions. Submit anyway?`)) return;
    submitExam();
  }

  // FULL auto-marking of the paper (Section A points-based, Section B levels-based).
  function submitExam() {
    if (exam.timerId) clearInterval(exam.timerId);
    exam.running = false;

    let aMarks = 0, aMax = 0, bMarks = 0, bMax = 0;
    const results = [];

    EXAM.sectionA.forEach(q => {
      aMax += q.marks;
      const a = exam.answers[q.id] || {};
      const awarded = q.type === "mcq" ? markMcq(q, a) : markShortAuto(q, a.value || "");
      aMarks += awarded;
      results.push({ section: "A", q, awarded, given: a });
    });
    EXAM.sectionB.forEach(q => {
      bMax += q.marks;
      const a = exam.answers[q.id] || {};
      const { awarded, coverage } = markExtended(q, a.value || "");
      bMarks += awarded;
      results.push({ section: "B", q, awarded, coverage, given: a });
    });

    const total = aMarks + bMarks;
    const percent = Math.round((total / EXAM.totalMarks) * 100);
    const gradeObj = EXAM.grades.find(g => total >= g.min);
    const grade = gradeObj.grade;

    // XP + badges + personal best
    let xp = 60 + total;
    if (["A*", "A", "B", "C"].includes(grade)) { xp += 60; earnBadge("boss-pass"); }
    if (grade === "A*") earnBadge("boss-astar");
    addXP(xp, "Boss Mode complete");
    if (!state.bossBest || total > state.bossBest.marks) state.bossBest = { marks: total, percent, grade, date: todayStr() };
    save();

    renderExamResults({ aMarks, aMax, bMarks, bMax, total, percent, grade, gradeObj, xp, results });
    if (grade === "A*") fireConfetti();
  }

  function renderExamResults(r) {
    const v = view(); v.innerHTML = "";
    renderSidebar("boss");

    v.append(el("div", { class: "panel center" },
      el("h2", {}, "🏆 Boss Mode Result"),
      el("div", { class: "result-grade" }, r.grade),
      el("p", { class: "muted" }, r.gradeObj.blurb),
      el("div", { style: "max-width:440px;margin:18px auto 0" },
        resultRow("Section A (short answer)", `${r.aMarks} / ${r.aMax}`),
        resultRow("Section B (extended)", `${r.bMarks} / ${r.bMax}`),
        resultRow("Total", `${r.total} / ${EXAM.totalMarks}`),
        resultRow("Percentage", `${r.percent}%`),
        resultRow("Predicted grade", r.grade),
        resultRow("XP earned", `+${r.xp}`)),
      el("div", { style: "margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap" },
        el("button", { class: "btn purple", onclick: () => { exam = null; go("boss"); } }, "↻ Retake exam"),
        el("button", { class: "btn ghost", onclick: () => go("badges") }, "View badges"),
        el("button", { class: "btn ghost", onclick: () => go("home") }, "Home"))));

    // Full per-question mark scheme + breakdown
    const panel = el("div", { class: "panel" });
    panel.append(el("h3", {}, "Mark scheme & per-question breakdown"));
    r.results.forEach((row, i) => {
      const q = row.q;
      const detail = el("details", { style: "margin:6px 0" },
        el("summary", { html: `<b>[${row.section}] Q${i + 1}</b> — ${row.awarded}/${q.marks} marks` }),
        q.context ? el("div", { class: "qctx" }, q.context) : "",
        el("div", { class: "muted", style: "font-size:.86rem;margin:6px 0" }, q.q));
      if (q.type === "mcq") {
        detail.append(el("div", { class: "markscheme" },
          el("p", {}, "Correct answer: ", el("b", {}, q.options[q.answer])),
          el("p", { class: "muted", style: "font-size:.8rem" }, "Your answer: " +
            (row.given.picked !== undefined ? q.options[row.given.picked] : "(blank)"))));
      } else if (q.type === "short") {
        detail.append(el("div", { class: "markscheme" },
          el("h4", {}, "Mark scheme"), el("p", {}, q.model),
          el("p", { class: "muted", style: "font-size:.8rem;white-space:pre-wrap" }, "Your answer: " + (row.given.value || "(blank)"))));
      } else {
        // Extended: show level reached, indicative content + sample high-level answer
        const ms = el("div", { class: "markscheme" },
          el("h4", {}, `Levels-based mark scheme — ${Math.round((row.coverage || 0) * 100)}% indicative coverage`),
          el("p", {}, el("b", {}, "Level reached: "), levelFor(q, row.awarded)),
          el("p", {}, el("b", {}, "Sample high-level answer: "), q.model),
          el("p", { class: "muted", style: "margin-top:6px" }, "Indicative content:"),
          el("ul", {}, q.indicative.map(p => el("li", {}, p))),
          el("p", { class: "muted", style: "font-size:.8rem;white-space:pre-wrap" }, "Your answer: " + (row.given.value || "(blank)")));
        detail.append(ms);
      }
      panel.append(detail);
    });
    v.append(panel);
  }
  function resultRow(label, value) { return el("div", { class: "result-row" }, el("span", {}, label), el("b", {}, value)); }

  /* ---------------------------------------------------------------------------
     BADGES VIEW
     ------------------------------------------------------------------------- */
  function renderBadges(v) {
    v.append(el("div", { class: "topbar" }, el("h2", { style: "margin:0" }, "🎖️ Badges"),
      el("span", { class: "spacer" }), el("span", { class: "chip" }, `${Object.keys(state.badges).length}/${BADGES.length}`)));
    const grid = el("div", { class: "badge-grid" });
    BADGES.forEach(b => {
      const earned = !!state.badges[b.id];
      grid.append(el("div", { class: `badge ${earned ? "earned" : "locked"}` },
        el("div", { class: "b-icon" }, earned ? b.icon : "🔒"),
        el("div", { class: "b-name" }, b.name),
        el("div", { class: "b-desc" }, b.desc)));
    });
    v.append(grid);
  }

  /* ---------------------------------------------------------------------------
     LEADERBOARD
     ------------------------------------------------------------------------- */
  function renderLeaderboard(v) {
    const rivals = [
      { name: "N3onByte", xp: 1850 }, { name: "QubitQueen", xp: 1420 }, { name: "RootCause", xp: 1110 },
      { name: "PacketPirate", xp: 880 }, { name: "FlowchartFox", xp: 640 }, { name: "CacheCadet", xp: 410 },
      { name: "NullPointer", xp: 230 }
    ];
    const board = [...rivals, { name: state.name + " (You)", xp: state.xp, you: true }].sort((a, b) => b.xp - a.xp);
    v.append(el("div", { class: "topbar" }, el("h2", { style: "margin:0" }, "📊 Leaderboard"),
      el("span", { class: "spacer" }), el("button", { class: "btn ghost small", onclick: () => renameSelf() }, "✎ Rename")));
    v.append(el("p", { class: "muted" }, "Climb the Arena ranks by earning XP across levels, topic tests and Boss Mode."));
    board.forEach((row, i) => v.append(el("div", { class: `lb-row ${row.you ? "you" : ""}` },
      el("span", { class: "lb-rank" }, `#${i + 1}`), el("span", { class: "lb-name" }, row.name), el("span", { class: "lb-xp" }, `${row.xp} XP`))));
  }
  function renameSelf() {
    const n = prompt("Enter your Arena name:", state.name);
    if (n && n.trim()) { state.name = n.trim().slice(0, 18); save(); render(); }
  }

  /* ---------------------------------------------------------------------------
     MISC HELPERS
     ------------------------------------------------------------------------- */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  }
  function fmtTime(s) {
    s = Math.max(0, s);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return (h > 0 ? `${h}:` : "") + `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  function fireConfetti() {
    const colors = ["#38f0ff", "#b14bff", "#2bff88", "#ffd64a", "#ff3d81"];
    for (let i = 0; i < 80; i++) {
      const p = el("div", {});
      Object.assign(p.style, { position: "fixed", top: "-10px", left: Math.random() * 100 + "vw",
        width: "8px", height: "8px", background: colors[i % colors.length], zIndex: 60, borderRadius: "2px",
        pointerEvents: "none", transform: `rotate(${Math.random() * 360}deg)`,
        transition: "transform 2.4s linear, top 2.4s linear, opacity 2.4s" });
      document.body.append(p);
      requestAnimationFrame(() => {
        p.style.top = 100 + Math.random() * 20 + "vh";
        p.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 720}deg)`;
        p.style.opacity = "0";
      });
      setTimeout(() => p.remove(), 2600);
    }
  }

  /* ---------------------------------------------------------------------------
     SIDEBAR TOGGLE (mobile)
     ------------------------------------------------------------------------- */
  function openSidebar() {
    $("#sidebar").classList.add("open");
    if (!$("#scrim")) document.body.append(el("div", { class: "scrim", id: "scrim", onclick: closeSidebar }));
  }
  function closeSidebar() { $("#sidebar").classList.remove("open"); const s = $("#scrim"); if (s) s.remove(); }

  /* ---------------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------------- */
  function init() {
    refreshStreak();
    checkBossUnlock();
    $("#menu-toggle").addEventListener("click", openSidebar);
    $("#brand").addEventListener("click", () => go("home"));
    render();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
