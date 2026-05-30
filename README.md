# ⚡ CyberCore Arena

A fully interactive, gaming-style revision website for the **Pearson T Level
Technical Qualification in Digital Support & Security — Core Paper 1**.

It teaches, tests and gamifies the syllabus from the **ZigZag Education Course
Companions**:

| World | Source | Content Area |
|-------|--------|--------------|
| 🧩 **Problem Solving** | CO1 | Computational thinking, algorithms, strategies |
| 🛠️ **Digital Support** | CO2 | Infrastructure, cabling, comms, testing, data, diagrams, risk, projects |
| 🌐 **Emerging Issues** | CO3 | Digital impact, inclusion, end-users, emerging technologies |

The **Boss Mode** exam simulation mirrors the structure of the *Core Paper 1
Specimen Assessment Material* (90 marks, 2 h 15 m) and applies the mark-scheme
logic from the official mark scheme (points-based for Section A, levels-based
indicative content for Section B).

---

## 🎮 What's inside

- **Topic Navigator** — sidebar listing every CO1–CO3 topic with spec-point refs.
- **Interactive Learning Pages** — explanations, examples, diagrams (described),
  flip **flashcards**, and **mini-quizzes** for each level.
- **Practice Engine** — long-form prompts with model answers for self-marking.
- **Topic-Test Gatekeeper** — each content area ends with a mandatory test
  (MCQs + short answers + a 6-mark question). **Score ≥ 70 % to unlock the next
  content area.** Fail → unlimited **Retry**. CO2/CO3 show a 🔒 until unlocked.
- **Boss Mode Exam** — unlocks only after **all three topic tests pass**. Timed
  (full 2 h 15 m, 30-min sprint, or untimed), randomised order, **fully
  auto-marked** Section A (MCQ + short) and Section B (6/9/12-mark, levels-based
  by indicative-content coverage), with a full mark scheme, per-question
  breakdown, total, percentage and **grade prediction (A\*–U)**.
- **Gamification** — XP & player levels, daily **streaks**, per-topic **mastery
  bars**, **badges**, and a motivational **leaderboard**.
- **Dark neon cyber theme** — animated grid background, glow effects, smooth
  transitions, fully responsive (desktop → mobile).
- **Persistence** — all progress saved in `localStorage` (no account needed).

---

## 📁 Folder structure

```
cybercore-arena/
├── index.html          # App shell (sidebar + main view container)
├── css/
│   └── styles.css      # Dark neon theme, animated grid, responsive layout
├── js/
│   ├── data.js         # ALL syllabus content + exam bank (window.CYBERCORE)
│   └── app.js          # Routing, gamification, learning, quizzes, exam engine
└── README.md           # This file
```

---

## ▶️ How to run (no build step)

It's pure HTML/CSS/JavaScript (ES6) — **no install, no dependencies**.

### Option 1 — Open directly
Double-click **`index.html`**, or drag it into your browser.

### Option 2 — Local web server (recommended)
A local server avoids any browser file-path quirks:

```bash
# From inside the cybercore-arena folder:

# Python 3
python -m http.server 8000

# or Node (if installed)
npx serve .
```

Then visit **http://localhost:8000**.

> Tested in current Chrome, Edge and Firefox.

---

## 🕹️ How to play

1. **CO1 is open from the start.** CO2 and CO3 begin **locked (🔒)**.
2. Open a **level** and work through the tabs:
   **📖 Learn → 🃏 Flashcards → 🎯 Quiz → ✍️ Practice**.
3. When you've studied a content area, take its **📝 Topic Test** at the end.
   **Score ≥ 70 %** to unlock the next area (a *"Content Area Unlocked!"* toast
   fires and the area animates to a ✔). Below 70 %? Hit **Retry Test** — unlimited
   attempts.
4. Pass **all three** topic tests to unlock **👹 Boss Mode**.
5. Sit the auto-marked exam and get your full mark scheme, breakdown,
   **predicted grade** and XP. Earn an **A\*** for the Legendary badge. 🌟

### Reset progress
Open your browser console on the page and run:
```js
localStorage.removeItem('cybercore-arena-v2'); location.reload();
```

---

## 🧾 Boss Mode marking explained (fully automatic)

- **Section A (30 marks)** — MCQ + short answer, **auto-marked**: multiple-choice
  are checked against the correct option; short answers use keyword matching
  against the accepted mark-scheme responses (proportional to the marks).
- **Section B (60 marks)** — original scenario questions worth **6, 9 and 12
  marks**, **levels-based and auto-marked**: each answer is scored by how much of
  the question's **indicative content** it covers (synonym keyword groups), capped
  by answer length, then mapped to a level band. You're shown the **level
  reached**, a **sample high-level answer** and the full **indicative content**.
- **Topic tests** use the same engine: MCQ (auto), short answer (keyword) and the
  6-mark question (indicative coverage), summed to a percentage with a 70 % gate.
- **Grade prediction** uses approximate boundaries out of 90 (A\* ≥ 72 down to U).
  Boundaries are indicative for revision motivation, not official Pearson values.

---

## 📚 Where the content comes from (important)

- **All questions, flashcards, quizzes, topic tests and Boss Mode content are
  written only from the ZigZag CO1 / CO2 / CO3 Course Companions.** Topics,
  definitions and examples are paraphrased from those books.
- **The Pearson Specimen paper + mark scheme were used only as a *format*
  reference** — exam structure, difficulty, question style and how 6/9/12-mark
  questions and mark schemes are written. **No Pearson scenario or question is
  reproduced**; every Boss Mode scenario is original and syllabus-based.

---

## ⚠️ Notes & attribution

- Content is a study aid **derived from** the ZigZag Education Course Companions
  and structured around the Pearson specification. It is for **personal revision**
  only.
- Grade boundaries are approximate and for practice purposes; always check the
  exam board for definitive specification and assessment guidance.
- *T Level* is a registered trade mark of the Institute for Apprenticeships and
  Technical Education. Pearson and ZigZag Education are the respective rights
  holders of their materials. This project is not affiliated with or endorsed by
  them.

Built for focused, fun exam prep. Good luck in the Arena! ⚡
