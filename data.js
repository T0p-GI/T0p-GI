/* ============================================================================
   CyberCore Arena — data.js
   ----------------------------------------------------------------------------
   ALL syllabus content lives here, sourced from the ZigZag Education Course
   Companions for the Pearson T Level in Digital Support & Security:
     • CO1 — Problem Solving
     • CO2 — Introduction to Digital Support
     • CO3 — Data
   Boss Mode questions mirror the structure of the Pearson Core Paper 1
   Specimen Assessment Material (90 marks, 2h15) and its mark scheme.

   Data shape:
     WORLDS = [ { id, code, name, blurb, icon, levels:[ LEVEL ] } ]
     LEVEL  = { id, spec, title, summary, learn:[html...], flashcards:[{f,b}],
                quiz:[{q, options:[...], answer:Index, why}] }
   EXAM   = { sectionA:[...], sectionB:[...], grades:[...] }
   ========================================================================== */

/* ----------------------------------------------------------------------------
   WORLD 1 — PROBLEM SOLVING (CO1)
   -------------------------------------------------------------------------- */
const WORLD_PROBLEM_SOLVING = {
  id: "co1",
  code: "CO1",
  name: "Problem Solving",
  blurb: "Computational thinking, algorithms and problem-solving strategies.",
  icon: "🧩",
  levels: [
    {
      id: "ct-intro",
      spec: "1.1.1–1.1.5",
      title: "Computational Thinking",
      summary: "What computational thinking is and its four components.",
      learn: [
        "<p><b>Computational thinking</b> is a problem-solving technique used to take complex problems, understand them, and devise potential solutions. Representing a problem in a logical, structured way makes it easier to solve. Solutions <i>may</i> be implemented on a computer, but not necessarily.</p>",
        "<p>The <b>four components</b> you must know are:</p>",
        "<ul><li><b>Decomposition</b> — breaking a complex problem into smaller, manageable parts.</li><li><b>Pattern recognition</b> — identifying similarities or trends so known solutions can be reused.</li><li><b>Abstraction</b> — focusing on key information and ignoring irrelevant detail.</li><li><b>Algorithmic approach</b> — creating a step-by-step solution (a form of decomposition).</li></ul>",
        "<p><b>Benefits:</b> solves problems too complex to tackle otherwise; lets parts be given to different specialist teams; previously-solved parts can be reused.</p>",
        "<p><b>Drawbacks:</b> too much time/cost on planning can delay implementation; forcing a neat breakdown can miss nuance or interdependencies; once broken down a particular way it can be hard to adapt to change.</p>"
      ],
      flashcards: [
        { f: "Define computational thinking.", b: "A problem-solving technique that takes complex problems, understands them, and devises solutions by representing them logically and structurally." },
        { f: "Name the four components of computational thinking.", b: "Decomposition, pattern recognition, abstraction, and an algorithmic approach." },
        { f: "Give one drawback of computational thinking.", b: "Too much time/cost spent on planning can delay implementation; a neat breakdown may miss nuance or interdependencies." }
      ],
      quiz: [
        { q: "Which component involves breaking a complex problem into smaller parts?", options: ["Abstraction", "Decomposition", "Pattern recognition", "Iteration"], answer: 1, why: "Decomposition = breaking down into smaller, manageable parts." },
        { q: "Focusing only on key information and ignoring irrelevant detail is…", options: ["Decomposition", "Sequence", "Abstraction", "Selection"], answer: 2, why: "Abstraction filters out detail that is not needed to solve the problem." },
        { q: "Which is a genuine drawback of computational thinking?", options: ["It makes problems impossible to solve", "Planning may delay implementation", "It cannot be used on computers", "It removes the need for testing"], answer: 1, why: "Over-planning is a recognised drawback." }
      ]
    },
    {
      id: "decomposition",
      spec: "1.1.6–1.1.10",
      title: "Decomposition",
      summary: "Breaking problems into atomic, testable subtasks.",
      learn: [
        "<p><b>Decomposition</b> breaks a complicated task into smaller subtasks, and those into further subtasks, until a feasible, simple solution can be created. A subtask becomes <b>atomic</b> when it cannot be divided further and carries out a single job.</p>",
        "<p><b>Purpose of decomposition:</b></p><ol><li>Reduce complexity.</li><li>Focus on the best solution for each part.</li><li>Enable reuse where a subtask has been done before.</li><li>Enable parallel work where subtasks are independent.</li><li>Support better, quicker testing of components.</li></ol>",
        "<p><b>The four tasks of decomposition:</b> (1) Identify the main features of a problem, (2) Characterise the features, (3) Break problems down, (4) Break down solutions into individually testable parts.</p>",
        "<p>Decomposition can be represented as a <b>written description</b>, <b>block diagram</b>, <b>information flow diagram</b>, <b>flowchart</b>, or directly in <b>code</b>.</p>"
      ],
      flashcards: [
        { f: "What does 'atomic' mean in decomposition?", b: "A subtask that cannot be divided further and carries out only a single job." },
        { f: "List two purposes of decomposition.", b: "Reduce complexity; enable reuse; enable parallel work; focus on the best solution per part; support quicker testing." },
        { f: "Name three ways to represent decomposition.", b: "Written description, block diagram, information flow diagram, flowchart, or code." }
      ],
      quiz: [
        { q: "A subtask that cannot be broken down further is described as…", options: ["Modular", "Atomic", "Abstract", "Recursive"], answer: 1, why: "Atomic = a single, indivisible job." },
        { q: "Which is NOT a purpose of decomposition?", options: ["Reduce complexity", "Enable parallel work", "Increase code obfuscation", "Enable reuse"], answer: 2, why: "Obfuscation is not a goal of decomposition." },
        { q: "Decomposition primarily helps a team to…", options: ["Hide details from users", "Divide work between specialists", "Avoid testing", "Write longer code"], answer: 1, why: "Independent parts can be allocated to different teams." }
      ]
    },
    {
      id: "pattern-recognition",
      spec: "1.1.11–1.1.12",
      title: "Pattern Recognition",
      summary: "Spotting similarities to reuse known solutions.",
      learn: [
        "<p><b>Pattern recognition</b> identifies subtasks and solves them using the same method — very helpful when building similar systems or systems with similar parts.</p>",
        "<p><b>Three scenarios:</b> (1) identify trends/similarities within or between problems, (2) identify common features that already have an existing solution, (3) identify patterns from which a prediction can be made and applied.</p>",
        "<p><b>For coding</b> there are three levels of reuse: common <b>functions</b> identified at design, reusing functions from a <b>previous application</b>, and building <b>libraries</b> of routines to reuse across applications.</p>",
        "<p>Used in facial recognition, AI, codebreaking, fraud detection and product recommendation.</p>"
      ],
      flashcards: [
        { f: "Define pattern recognition.", b: "Identifying similarities/trends in problems so a known method or solution can be reused." },
        { f: "Why is experience valuable in pattern recognition?", b: "An experienced programmer can relate a new problem to one solved before and reuse code, approaches, or lessons learned." },
        { f: "Give two real-world uses of pattern-spotting algorithms.", b: "Facial recognition, AI, codebreaking, fraud detection, product recommendation." }
      ],
      quiz: [
        { q: "Pattern recognition is most useful when…", options: ["Every problem is unique", "Building similar systems with shared parts", "Avoiding reuse", "Removing all detail"], answer: 1, why: "Shared parts let you reuse known solutions." },
        { q: "Reusable routines stored for many applications are kept in a…", options: ["Trace table", "Library", "Firewall", "Codec"], answer: 1, why: "Libraries hold reusable routines." },
        { q: "Which uses pattern recognition?", options: ["Fraud detection in transactions", "Boiling a kettle", "Opening a car door", "Closing a loop"], answer: 0, why: "AI flags anomalies by recognising patterns in transaction data." }
      ]
    },
    {
      id: "abstraction",
      spec: "1.1.13–1.1.17",
      title: "Abstraction & Selecting a Component",
      summary: "Removing irrelevant detail; choosing the right CT technique.",
      learn: [
        "<p><b>Abstraction</b> gives a generalisation of what something is, how it works, and its result — a model of a complex system that includes only the fundamental characteristics. Example: a route map shows cities as nodes and roads as weighted straight lines; the real bends are irrelevant — only distance matters.</p>",
        "<p><b>Identifying key features</b> of a problem means picking out: inputs needed, expected outputs, things that vary (<b>variables</b>), things that stay fixed (<b>constants</b>), key actions, and repeated processes.</p>",
        "<p><b>Selecting a component:</b> Decomposition suits planning an event or building a website (breaks into smaller parts). Pattern recognition suits prediction, e.g. weather from past data. Abstraction suits situations where too much detail overwhelms, e.g. London→Glasgow directions listing only towns.</p>"
      ],
      flashcards: [
        { f: "Define abstraction.", b: "Removing unnecessary information so finding a solution is easier by focusing on the most important things." },
        { f: "Difference between a variable and a constant?", b: "A variable changes during execution; a constant stays fixed (e.g. pi)." },
        { f: "Which CT technique suits predicting the weather from past data?", b: "Pattern recognition." }
      ],
      quiz: [
        { q: "On a route-map abstraction, road bends are…", options: ["Modelled exactly", "Irrelevant — only distance matters", "Stored as variables", "Decomposed"], answer: 1, why: "Abstraction ignores irrelevant detail like bends." },
        { q: "Which is a constant?", options: ["The current temperature", "Pi (π)", "User input", "Loop counter"], answer: 1, why: "Pi is a fixed value." },
        { q: "Giving directions by listing only major towns is an example of…", options: ["Decomposition", "Abstraction", "Iteration", "Validation"], answer: 1, why: "Irrelevant detail (every turn) is removed." }
      ]
    },
    {
      id: "algorithms",
      spec: "1.2.1–1.2.5",
      title: "Algorithms & Representations",
      summary: "Flowcharts, written descriptions and code.",
      learn: [
        "<p>An <b>algorithm</b> is a set of step-by-step instructions for a task. Instructions must be <b>unambiguous</b> — only one way to interpret them. Algorithms can be shown as <b>flowcharts</b>, <b>written descriptions</b>, or <b>code</b>.</p>",
        "<p><b>Flowcharts</b> give a visual representation of inputs, processes and outputs and are easier for non-specialists to follow; you can easily see every option is covered. But they can become too complex and slow to draw/change.</p>",
        "<p><b>Written descriptions</b> describe the logic in structured English (e.g. <code>GET name FROM KEYBOARD</code>). There is no universal standard for them.</p>",
        "<p>For very simple problems, programmers may write directly in <b>code</b> (commented for maintenance) to save planning time — but without a written brief the solution is rarely correct first time.</p>"
      ],
      flashcards: [
        { f: "Why must algorithm instructions be unambiguous?", b: "So there is only one way to interpret each instruction." },
        { f: "Give one benefit and one drawback of flowcharts.", b: "Benefit: easy for non-specialists, you can see all options are covered. Drawback: can get too complex and slow to draw/change." },
        { f: "Name the three ways to represent an algorithm.", b: "Flowchart, written description, code." }
      ],
      quiz: [
        { q: "Algorithm instructions must be…", options: ["Ambiguous", "Unambiguous", "Encrypted", "Random"], answer: 1, why: "Only one valid interpretation is allowed." },
        { q: "Which representation is easiest for non-specialists to follow?", options: ["Raw code", "Flowchart", "Assembly", "Binary"], answer: 1, why: "Flowcharts need less specialist knowledge." },
        { q: "A drawback of writing directly in code without a brief is…", options: ["It is always faster", "It is rarely correct first time", "It cannot be tested", "It needs a flowchart"], answer: 1, why: "Without a brief, solutions are rarely right first time." }
      ]
    },
    {
      id: "flowchart-symbols",
      spec: "1.2.2",
      title: "Flowchart Symbols",
      summary: "The standard symbols used in exam flowcharts.",
      learn: [
        "<p>The specification uses these symbols:</p>",
        "<ul><li><b>Start/End</b> (rounded) — begins/ends the flowchart.</li><li><b>Input/Output</b> (parallelogram) — any input or output.</li><li><b>Process</b> (rectangle) — a process or calculation, e.g. <code>x = x + 4</code>.</li><li><b>Sub-process</b> (rectangle with side lines) — a subtask that may break down further.</li><li><b>Decision</b> (diamond) — a yes/no question that changes flow. Always has <b>two outputs</b> (True/False).</li><li><b>Connection</b> (circle) — links parts of a flowchart split across pages.</li><li><b>Arrow</b> — shows the direction of flow.</li></ul>",
        "<p><b>Exam tip:</b> the decision/selection symbol always needs <b>two output arrows</b> because the test inside the diamond always evaluates to True or False.</p>"
      ],
      flashcards: [
        { f: "What shape is a decision symbol and how many outputs does it have?", b: "A diamond — always two outputs (True/False)." },
        { f: "Which symbol represents a process or calculation?", b: "A rectangle." },
        { f: "What is the parallelogram used for?", b: "Input or output." }
      ],
      quiz: [
        { q: "How many outputs does a selection (decision) symbol have?", options: ["One", "Two", "Three", "Four"], answer: 1, why: "The test evaluates to True OR False — two output arrows." },
        { q: "A rounded rectangle at the top of a flowchart is the…", options: ["Process", "Decision", "Start", "Connector"], answer: 2, why: "Start/End uses the rounded (terminator) shape." },
        { q: "Which symbol joins parts of a flowchart across pages?", options: ["Arrow", "Connection", "Diamond", "Parallelogram"], answer: 1, why: "The connection symbol links separated parts." }
      ]
    },
    {
      id: "sequence-selection-iteration",
      spec: "1.2.6",
      title: "Sequence, Selection & Iteration",
      summary: "The three constructs that order steps in algorithms.",
      learn: [
        "<p><b>Sequence</b> executes commands one after another, in order. Operations are commands such as GET, SEND, READ, OUTPUT. <b>Syntax</b> is how commands must be laid out to be understood.</p>",
        "<p><b>Selection</b> asks questions and changes what happens depending on the answer, using <code>IF…THEN…ELSE</code> and <code>CASE…OF</code>. Sometimes no alternative action is needed; other times an <code>ELSE</code> branch is used.</p>",
        "<p><b>Iteration</b> (repetition) repeats a task a fixed number of times or until a condition is met — implemented with loops.</p><ul><li><b>FOR loop</b> — runs a set number of times using a counter.</li><li><b>WHILE loop</b> — keeps checking a condition and repeats until it becomes false.</li></ul>",
        "<p><b>Describing iteration (exam answer):</b> a test is performed, then it is repeated until the stopping condition is met.</p>"
      ],
      flashcards: [
        { f: "Define iteration.", b: "A construct that repeatedly executes a group of statements until a stopping condition is met." },
        { f: "Difference between a FOR loop and a WHILE loop?", b: "FOR runs a set number of times using a counter; WHILE repeats while a condition stays true (used when the count isn't known in advance)." },
        { f: "What does selection do?", b: "Uses a condition to decide which group of instructions (if any) is executed." }
      ],
      quiz: [
        { q: "Which loop is best when you know the number of repeats in advance?", options: ["WHILE", "FOR", "Recursive", "Infinite"], answer: 1, why: "FOR loops use a counter for a known number of iterations." },
        { q: "Executing commands one after another is…", options: ["Selection", "Iteration", "Sequence", "Abstraction"], answer: 2, why: "Sequence = ordered execution." },
        { q: "A WHILE loop stops when…", options: ["The counter hits zero", "Its condition becomes false", "The file ends", "Never"], answer: 1, why: "It repeats while the condition is true and stops when false." }
      ]
    },
    {
      id: "trace-errors",
      spec: "1.2.7–1.2.12",
      title: "Trace Tables, Errors & Translating",
      summary: "Understanding output, finding errors, converting notations.",
      learn: [
        "<p>In the exam you may be given Python or a flowchart and asked to explain what it does, predict its output, or improve it. A <b>trace (dry run) table</b> logs the output and the value of every variable step by step, so you can see exactly what happens.</p>",
        "<p><b>Testing for correctness</b> can be done two ways: (1) run the algorithm with all possible input types/combinations; (2) work through the logic exploring every path.</p>",
        "<p>Errors can be subtle — e.g. <code>return x * 3</code> when it should be <code>x * 2</code>. Always fix the <b>root cause</b>, not the symptom (a 'pointless fix' that special-cases one input is wrong).</p>",
        "<p><b>Translating notations:</b> you may be asked to write a written description from a flowchart/Python, build a flowchart from code/description, or write Python from a flowchart/description.</p>"
      ],
      flashcards: [
        { f: "What is a trace table for?", b: "To test and follow an algorithm by logging the output and every variable's value step by step." },
        { f: "Name the two ways to test if an algorithm is correct.", b: "Run it with all input combinations, OR work through the logic exploring every path." },
        { f: "Why is special-casing one input a 'pointless fix'?", b: "It treats a symptom, not the root cause — the underlying bug remains for other inputs." }
      ],
      quiz: [
        { q: "A trace table records…", options: ["Only the final output", "Every variable's value step by step", "Network packets", "Cable categories"], answer: 1, why: "It logs all variables and outputs at each step." },
        { q: "Fixing only the reported input value rather than the bug is…", options: ["Root cause analysis", "A pointless fix treating a symptom", "Abstraction", "Validation"], answer: 1, why: "It ignores the real cause." },
        { q: "Converting a flowchart into Python is an example of…", options: ["Decomposition", "Translating notations", "Iteration", "Risk assessment"], answer: 1, why: "You translate between representations of the same algorithm." }
      ]
    },
    {
      id: "strategies-approaches",
      spec: "1.3.1–1.3.2",
      title: "Top-down, Bottom-up & Modularisation",
      summary: "Structured approaches to solving large problems.",
      learn: [
        "<p><b>Modularisation</b> reduces complexity by breaking a system into independent units (modules), so separate teams can work independently.</p>",
        "<p><b>Top-down</b> takes a hierarchical approach: identify the objective, break it into goals, give goals to teams who break them into sub-goals, until small enough to brief programmers; modules are tested in isolation then assembled and tested together. Benefits: clear structure, better planning, easier to manage. Drawbacks: inflexible, over-simplification, delays.</p>",
        "<p><b>Bottom-up</b> identifies the overall goal, then teams work on areas independently without being told how. Benefits: flexible, concrete solutions early, less risk of missing detail. Drawbacks: lack of overall vision, integration challenges, redundancy. More coordination is needed to share data between areas.</p>",
        "<p>Top-down looks more organised, but many big projects fail because rigidity makes theoretical structures fail and requirements change over long timescales.</p>"
      ],
      flashcards: [
        { f: "Define modularisation.", b: "Reducing complexity by breaking a system into independent units (modules) so teams can work independently." },
        { f: "Give one benefit and one drawback of top-down problem solving.", b: "Benefit: clear structure / easier to manage. Drawback: inflexible / delays in implementation." },
        { f: "How does bottom-up differ from top-down?", b: "Bottom-up: teams work independently on areas without being told how; more coordination needed. Top-down: hierarchical breakdown of goals into sub-goals." }
      ],
      quiz: [
        { q: "Breaking a system into independent units is…", options: ["Iteration", "Modularisation", "Abstraction", "Validation"], answer: 1, why: "Modules = independent units." },
        { q: "A drawback of top-down is that it can be…", options: ["Too flexible", "Inflexible", "Untestable", "Unstructured"], answer: 1, why: "Rigidity is its main weakness." },
        { q: "A benefit of modularisation is…", options: ["No testing needed", "Parallel development & easier maintenance", "Removes all bugs", "No coordination needed"], answer: 1, why: "Independent modules support parallel work and reuse." }
      ]
    },
    {
      id: "root-cause",
      spec: "1.3.3–1.3.4",
      title: "Root Cause Analysis",
      summary: "Five Whys, FMEA and Event Tree Analysis.",
      learn: [
        "<p><b>Root cause analysis (RCA)</b> finds the origin of a problem rather than treating symptoms. Use it when a problem is difficult, the consequences are serious, or it keeps recurring. Aim to: (1) determine what happened, (2) why it happened, (3) what to do to stop it recurring.</p>",
        "<p><b>Five Whys</b> (Sakichi Toyoda) — ask 'why?' repeatedly (about five times) to dig past the first answer. Informal; ask someone who knows the system.</p>",
        "<p><b>FMEA (Failure Mode and Effects Analysis)</b> — proactively list components; for each ask failure mode, effect, cause, occurrence, severity, detection ratings. Calculate <b>RPN = severity × occurrence × detection</b>, then prioritise and act on high-risk failures.</p>",
        "<p><b>ETA (Event Tree Analysis)</b> — start with a triggering event, map consequences as branches, model the next branch for each, trace all paths to conclusion, and assign probabilities.</p>"
      ],
      flashcards: [
        { f: "When should you use root cause analysis?", b: "When a problem is difficult, has serious consequences, or keeps recurring after fixes." },
        { f: "How is the FMEA Risk Priority Number calculated?", b: "RPN = severity × occurrence × detection." },
        { f: "What does the Five Whys technique involve?", b: "Asking 'why?' repeatedly (about five times) to find the root cause." }
      ],
      quiz: [
        { q: "RPN in FMEA equals…", options: ["severity + occurrence + detection", "severity × occurrence × detection", "severity ÷ detection", "occurrence × time"], answer: 1, why: "The three ratings are multiplied." },
        { q: "Which RCA method maps consequences as branches from a triggering event?", options: ["Five Whys", "FMEA", "Event Tree Analysis", "Kanban"], answer: 2, why: "ETA traces branches from a trigger." },
        { q: "The Five Whys is best described as…", options: ["A formal RPN calculation", "An informal repeated-questioning technique", "A cabling standard", "A loop construct"], answer: 1, why: "It is informal questioning to reach the root cause." }
      ]
    },
    {
      id: "high-level-strategy",
      spec: "1.3.5–1.3.6",
      title: "High-Level Problem-Solving Strategy",
      summary: "The six-step strategy and choosing an approach.",
      learn: [
        "<p>The <b>high-level problem-solving strategy</b> has six steps:</p><ol><li><b>Define the problem</b> — clearly identify the real issue; avoid assumptions.</li><li><b>Gather information</b> — collect logs, observations, user feedback, test results.</li><li><b>Analyse the information</b> — examine for patterns/root causes (use RCA).</li><li><b>Make a plan of action</b> — list solutions, choose the best, outline steps and cost.</li><li><b>Implement the solution</b> — carry out carefully, monitor, be ready to roll back.</li><li><b>Review the solution</b> — evaluate, collect feedback, document lessons learned.</li></ol>",
        "<p><b>Problems are rarely isolated</b> — one module's bug can crash others, corrupt data, or reveal a wider pattern (e.g. one slow query suggesting the same programmer wrote other slow ones).</p>",
        "<p><b>Choosing an approach</b> depends on complexity, urgency, scope of impact, available resources, and confidence the root cause is found: simple → Five Whys; needs deep understanding → FMEA; affects many components → ETA.</p>"
      ],
      flashcards: [
        { f: "List the six steps of the high-level problem-solving strategy.", b: "Define the problem, gather information, analyse, make a plan, implement, review." },
        { f: "Why is the 'define the problem' step important?", b: "The problem must be clearly communicated to avoid wasted effort solving the wrong thing." },
        { f: "Name two factors when choosing a problem-solving approach.", b: "Complexity, urgency, scope of impact, available resources, confidence the root cause is found." }
      ],
      quiz: [
        { q: "Which is the FIRST step of the high-level strategy?", options: ["Implement the solution", "Define the problem", "Review the solution", "Gather information"], answer: 1, why: "You must define the real problem first." },
        { q: "The final step of the strategy is to…", options: ["Define the problem", "Review the solution", "Gather information", "Make a plan"], answer: 1, why: "Reviewing promotes continuous improvement." },
        { q: "If a problem affects many components, the best RCA method is often…", options: ["Five Whys", "Event Tree Analysis", "A quick patch", "Ignoring it"], answer: 1, why: "ETA helps identify all affected paths." }
      ]
    }
  ]
};

/* ----------------------------------------------------------------------------
   WORLD 2 — DIGITAL SUPPORT (CO2)
   -------------------------------------------------------------------------- */
const WORLD_DIGITAL_SUPPORT = {
  id: "co2",
  code: "CO2",
  name: "Digital Support",
  blurb: "Infrastructure, cabling, comms, testing, data, diagrams, risk & projects.",
  icon: "🛠️",
  levels: [
    {
      id: "infrastructure",
      spec: "2.1.1–2.1.6",
      title: "Infrastructure",
      summary: "Routing tables, console applications and firewalls.",
      learn: [
        "<p>A <b>routing table</b> is a list of next hops a router uses to forward packets to a destination. The <b>next hop</b> is the next router/device a packet is sent to on its journey. A <b>subnet mask</b> defines which part of an IP address is the network and which is the host; the <b>network ID</b> identifies the network.</p>",
        "<p><b>IP addresses:</b> a <b>static IP</b> is permanent/fixed; a <b>dynamic IP</b> can change and is assigned automatically by a server (DHCP).</p>",
        "<p><b>Console applications</b> let users type and run text commands. Key commands: <code>ipconfig</code> (Windows — display/manage IP config), <code>ifconfig</code> (Unix/Linux — display/configure IP settings).</p>",
        "<p>A <b>firewall</b> monitors and controls network traffic based on rules, allowing or blocking traffic to protect the network. Part of TCP/IP — the set of protocols used to connect devices on the Internet.</p>"
      ],
      flashcards: [
        { f: "What is a routing table?", b: "A list of next hops a router uses to forward packets to their destination." },
        { f: "Difference between a static and a dynamic IP address?", b: "Static is permanent/fixed; dynamic can change and is assigned automatically by a server (DHCP)." },
        { f: "What does a subnet mask define?", b: "Which part of an IP address is the network and which is the host." },
        { f: "What does a firewall do?", b: "Monitors and controls network traffic based on rules to allow or block it." }
      ],
      quiz: [
        { q: "Which command displays IP configuration on Windows?", options: ["ifconfig", "ipconfig", "ping", "tracert"], answer: 1, why: "ipconfig is the Windows command; ifconfig is Unix/Linux." },
        { q: "A firewall controls traffic based on…", options: ["Cable colour", "Rules", "Clock speed", "Codecs"], answer: 1, why: "Firewalls apply rule sets to traffic." },
        { q: "An IP address that changes and is auto-assigned is…", options: ["Static", "Dynamic", "Subnet", "Next hop"], answer: 1, why: "Dynamic IPs are assigned automatically (e.g. via DHCP)." },
        { q: "The 'next hop' is…", options: ["The final server", "The next router/device a packet is sent to", "A cable type", "A codec"], answer: 1, why: "It's the next device on the packet's journey." }
      ]
    },
    {
      id: "cabling",
      spec: "2.2.1–2.2.5",
      title: "Cabling",
      summary: "Cable types and Ethernet standards.",
      learn: [
        "<p><b>Ethernet</b> is a wired networking standard for local area networks (LANs).</p>",
        "<p><b>Cable types:</b> <b>UTP</b> (Unshielded Twisted Pair) — common in networking; <b>STP</b> (Shielded Twisted Pair) — extra shielding to reduce interference. Fibre optic carries data as light for very high speed and distance.</p>",
        "<p><b>Categories:</b> <b>Cat 5e / Cat 6 / Cat 7</b> are categories of Ethernet cable with increasing supported speeds and better shielding/interference resistance.</p>",
        "<p><b>Benefits/drawbacks:</b> higher categories give more bandwidth and less interference but cost more and can be less flexible. Shielded cable resists interference but is bulkier and more expensive than unshielded.</p>"
      ],
      flashcards: [
        { f: "What does UTP stand for and where is it used?", b: "Unshielded Twisted Pair — used in networking." },
        { f: "What does STP add over UTP?", b: "Extra shielding to reduce electromagnetic interference." },
        { f: "What are Cat 5e, 6 and 7?", b: "Categories of Ethernet cable with increasing speed and shielding." }
      ],
      quiz: [
        { q: "Ethernet is a standard for…", options: ["Wireless WANs", "Wired local area networks", "Audio codecs", "Firewalls"], answer: 1, why: "Ethernet is wired LAN networking." },
        { q: "Which cable has extra shielding against interference?", options: ["UTP", "STP", "Cat 5e", "Coaxial only"], answer: 1, why: "STP = Shielded Twisted Pair." },
        { q: "Cat 5e, Cat 6 and Cat 7 are…", options: ["Codecs", "Firewall rules", "Ethernet cable categories", "IP types"], answer: 2, why: "They are categories of Ethernet cabling." }
      ]
    },
    {
      id: "unified-comms",
      spec: "2.3.1–2.3.6",
      title: "Unified Communications",
      summary: "Communication types, network metrics and codecs.",
      learn: [
        "<p><b>VoIP</b> (Voice over Internet Protocol) makes voice calls over networks/the Internet. <b>SIP</b> (Session Initiation Protocol) sets up and manages VoIP calls.</p>",
        "<p><b>Network metrics</b> measure call/network quality:</p><ul><li><b>Latency</b> — delay in data transmission.</li><li><b>Jitter</b> — variation in packet arrival times.</li><li><b>Packet loss</b> — packets failing to reach their destination.</li></ul>",
        "<p>A <b>codec</b> compresses (coder) and decompresses (decoder) audio/video. <b>MP3</b> compresses digital audio; <b>FLAC</b> is lossless audio (no quality loss); <b>MPEG-4</b> compresses digital video.</p>",
        "<p><b>Exam point:</b> the purpose of an MP3 codec is to compress (and decompress) audio.</p>"
      ],
      flashcards: [
        { f: "What is VoIP and what protocol manages its calls?", b: "Voice over Internet Protocol; SIP (Session Initiation Protocol) sets up and manages the calls." },
        { f: "Define latency, jitter and packet loss.", b: "Latency = transmission delay; jitter = variation in packet arrival times; packet loss = packets failing to arrive." },
        { f: "What is the purpose of an MP3 codec?", b: "To compress (and decompress) digital audio." },
        { f: "How does FLAC differ from MP3?", b: "FLAC is lossless — it compresses audio without any loss of quality; MP3 is lossy." }
      ],
      quiz: [
        { q: "Variation in packet arrival times is…", options: ["Latency", "Jitter", "Packet loss", "Bandwidth"], answer: 1, why: "Jitter = variation in arrival timing." },
        { q: "Which codec is lossless?", options: ["MP3", "FLAC", "MPEG-4", "JPEG"], answer: 1, why: "FLAC compresses without quality loss." },
        { q: "SIP is used to…", options: ["Compress video", "Set up and manage VoIP calls", "Shield cables", "Assign IPs"], answer: 1, why: "Session Initiation Protocol manages VoIP sessions." },
        { q: "The purpose of an MP3 codec is to…", options: ["Encrypt audio", "Compress/decompress audio", "Route packets", "Block traffic"], answer: 1, why: "Codecs compress and decompress media." }
      ]
    },
    {
      id: "support",
      spec: "2.4.1–2.4.6",
      title: "Support & Fault Diagnosis",
      summary: "Configuring components, fault indicators, technical docs.",
      learn: [
        "<p><b>Selecting, configuring and testing</b> components means choosing the right hardware/software for the need, setting it up correctly, then checking it works.</p>",
        "<p><b>Fault indicators</b> help diagnose hardware faults:</p><ul><li><b>Beep codes</b> — audio signals from BIOS indicating hardware errors.</li><li><b>Blink codes</b> — flashing-light signals used to diagnose hardware problems.</li><li>Error codes shown on screen or displays.</li></ul>",
        "<p><b>Interpreting technical documentation</b> (manuals, manufacturer websites, knowledge bases) lets a technician diagnose problems — e.g. looking up the meaning of an error or fault code.</p>"
      ],
      flashcards: [
        { f: "What is a beep code?", b: "An audio signal from the BIOS indicating a hardware error." },
        { f: "What is a blink code?", b: "A flashing-light signal used to diagnose hardware problems." },
        { f: "How does technical documentation help fault diagnosis?", b: "It lets a technician look up the meaning of error/fault codes to find the cause and solution." }
      ],
      quiz: [
        { q: "Audio signals from the BIOS indicating hardware errors are…", options: ["Blink codes", "Beep codes", "Error logs", "Jitter"], answer: 1, why: "Beep codes are audio; blink codes are visual." },
        { q: "A technician looks up an error code in the…", options: ["Routing table", "Manufacturer's technical documentation", "Codec", "Subnet mask"], answer: 1, why: "Manuals/sites document fault codes and meanings." },
        { q: "Flashing-light hardware signals are…", options: ["Beep codes", "Blink codes", "Packet loss", "Macros"], answer: 1, why: "Blink codes use lights." }
      ]
    },
    {
      id: "testing",
      spec: "2.5.1–2.5.8",
      title: "Testing",
      summary: "Testing methods, automation, test data and checking results.",
      learn: [
        "<p><b>Testing methods:</b> <b>unit</b> (individual components), <b>integration</b> (combined components work together), <b>system</b> (complete system vs requirements), <b>acceptance</b> (meets client/user needs), <b>regression</b> (changes haven't broken existing functionality), <b>performance/stress</b> (speed/stability under load/extreme conditions), <b>usability</b> (easy/intuitive for users).</p>",
        "<p><b>Open box (white box)</b> testing uses knowledge of internal code; <b>closed box (black box)</b> testing has no knowledge of internal code.</p>",
        "<p><b>Automation</b> uses scripts and macros to run tests repeatedly. A <b>macro</b> is a recorded/written sequence of actions replayed; a <b>script</b> is a small program that automates tasks.</p>",
        "<p><b>Test data</b> includes normal, <b>boundary</b> (values at the limits of valid ranges) and erroneous data. A <b>test plan</b> lists tests, data, expected vs actual results. Check results are <b>believable</b> using logical reasoning or a domain expert.</p>"
      ],
      flashcards: [
        { f: "Difference between unit and integration testing?", b: "Unit tests individual components; integration tests that combined components work together." },
        { f: "Open box vs closed box testing?", b: "Open (white) box uses knowledge of the internal code; closed (black) box does not." },
        { f: "What is a boundary test?", b: "Testing values at the limits of valid ranges." },
        { f: "Name two ways to check results are believable.", b: "Use logical reasoning (extreme/obvious errors give impossible results), or verify with a domain expert." }
      ],
      quiz: [
        { q: "Testing combined components work together is…", options: ["Unit testing", "Integration testing", "Usability testing", "Stress testing"], answer: 1, why: "Integration tests components together." },
        { q: "Testing without knowledge of internal code is…", options: ["Open box", "Closed box", "Regression", "Boundary"], answer: 1, why: "Closed (black) box = no internal knowledge." },
        { q: "Checking changes haven't broken existing features is…", options: ["Regression testing", "Acceptance testing", "Boundary testing", "Stress testing"], answer: 0, why: "Regression protects existing functionality." },
        { q: "A test of values at the edge of valid ranges is a…", options: ["Stress test", "Boundary test", "Usability test", "Macro"], answer: 1, why: "Boundary tests probe range limits." }
      ]
    },
    {
      id: "using-data",
      spec: "2.6.1–2.6.5",
      title: "Using Data in Digital Support",
      summary: "Tabular data, validation, interrogating and saving data.",
      learn: [
        "<p><b>Organising tabular data:</b> rows usually hold records and columns hold fields. Organising by row lets you filter records; each column holds an individual field value.</p>",
        "<p><b>Validation checks</b> ensure entered data is sensible/correct: <b>type</b> (e.g. integer/Boolean), <b>presence</b>, <b>range</b>, <b>length</b> (e.g. length > 4), <b>format</b>, and <b>lookup</b> (e.g. must be alphanumeric). Validation reduces data-entry errors; <b>verification</b> (e.g. double entry) checks the copy matches.</p>",
        "<p><b>Data-entry errors:</b> a <b>transposition</b> error swaps letters/digits around (different from a transcription error).</p>",
        "<p><b>Interrogating data:</b> spreadsheet functions like <code>COUNTIF</code> and <code>SUM</code>; e.g. <code>=COUNTIF(D2:D5,\"Delivered\")+SUM(E2:E5)</code>. <b>Saving/importing</b> uses formats such as CSV, JSON, XML, text/ASCII.</p>"
      ],
      flashcards: [
        { f: "What is a transposition error?", b: "A data-entry error where the user swaps some letters or digits around." },
        { f: "Why store test pass/fail results as a Boolean?", b: "Because a Boolean can only hold one of two values (pass/fail, true/false)." },
        { f: "Name four data formats for saving/importing data.", b: "CSV, JSON, XML, text file / ASCII." },
        { f: "Give one benefit of organising data by row.", b: "It can be filtered, because each column holds an individual field value." }
      ],
      quiz: [
        { q: "Swapping letters when typing data is a…", options: ["Transcription error", "Transposition error", "Validation error", "Range error"], answer: 1, why: "Transposition = swapped characters." },
        { q: "Which validation rule would reject 'Lamp' under length(field) > 4?", options: ["It passes", "It is rejected (length 4 is not > 4)", "It's a type error", "It's a format error"], answer: 1, why: "Length 4 is NOT greater than 4, so it's rejected." },
        { q: "Which formula sums 'Delivered' counts plus SSD totals?", options: ["=SUM(D2:D5)", "=COUNTIF(D2:D5,\"Delivered\")+SUM(E2:E5)", "=AVERAGE(E2:E5)", "=COUNT(D2:D5)"], answer: 1, why: "COUNTIF counts Delivered, SUM adds SSDs." },
        { q: "A Boolean data type can store…", options: ["Any text", "One of two values", "Decimals only", "Dates"], answer: 1, why: "Boolean holds exactly two values." }
      ]
    },
    {
      id: "diagrams",
      spec: "2.7.1–2.7.8",
      title: "Diagrams in Digital Support",
      summary: "Data flow diagrams and information flow diagrams.",
      learn: [
        "<p>A <b>Data Flow Diagram (DFD)</b> shows how data moves through a system. Notation: an <b>ellipse</b> is a source/external entity; a <b>process rectangle</b> has a responsible entity/department and a verb expressing the process; <b>data stores</b> have appropriate names (not process names); <b>arrows are unidirectional</b>.</p>",
        "<p>An <b>Information Flow Diagram</b> shows how information passes between processes or people (actors/entities). It uses unidirectional arrows to show the logic of flow between actors (e.g. Employee → Guard → Application → Gate).</p>",
        "<p><b>Creating/interpreting:</b> identify entities, the data passed, the processes, and the data stores; make sure the diagram accurately represents the system and uses correct notation.</p>"
      ],
      flashcards: [
        { f: "What does a DFD show?", b: "How data moves through a system." },
        { f: "In a DFD, what does an ellipse represent?", b: "A source/external entity." },
        { f: "Which way do arrows point in a DFD/information flow diagram?", b: "They are unidirectional (one direction)." },
        { f: "What does an information flow diagram show?", b: "How information passes between processes or people (actors)." }
      ],
      quiz: [
        { q: "A DFD primarily shows…", options: ["Cable routes", "How data moves through a system", "CPU clock speed", "Risk scores"], answer: 1, why: "DFD = data movement." },
        { q: "In DFD notation, a source entity is drawn as a(n)…", options: ["Rectangle", "Ellipse", "Diamond", "Cylinder"], answer: 1, why: "Ellipse = source/external entity." },
        { q: "DFD arrows should be…", options: ["Bidirectional", "Unidirectional", "Dotted only", "Curved"], answer: 1, why: "Arrows are unidirectional." }
      ]
    },
    {
      id: "risk",
      spec: "2.8.1–2.8.5",
      title: "Risk & Risk Assessment",
      summary: "Likelihood, severity, matrices and documentation.",
      learn: [
        "<p>A <b>risk assessment</b> identifies and evaluates risks. Each risk has a <b>likelihood</b> (how probable) and a <b>severity/impact</b> (how serious).</p>",
        "<p>A <b>risk assessment matrix</b> is a grid showing likelihood against impact; it <b>multiplies them together</b> to give an overall risk score, so risks can be prioritised (low/medium/high).</p>",
        "<p><b>Risk assessment documentation</b> records the hazard, who might be harmed, existing controls, likelihood, severity, risk score, and further action needed. Interpreting it lets you decide which risks to treat first.</p>"
      ],
      flashcards: [
        { f: "What two factors make up a risk score in a matrix?", b: "Likelihood and severity/impact — multiplied together." },
        { f: "What is the purpose of a risk assessment matrix?", b: "To show likelihood vs impact and give an overall risk score for prioritisation." },
        { f: "What does risk assessment documentation record?", b: "The hazard, who might be harmed, controls, likelihood, severity, score, and further action." }
      ],
      quiz: [
        { q: "A risk score in a matrix is calculated by…", options: ["Adding likelihood and severity", "Multiplying likelihood by severity", "Dividing severity by likelihood", "Counting hazards"], answer: 1, why: "The matrix multiplies likelihood × impact." },
        { q: "Severity refers to…", options: ["How likely a risk is", "How serious the impact is", "The cable category", "The codec used"], answer: 1, why: "Severity = seriousness of impact." },
        { q: "Risk assessments are used to…", options: ["Compress audio", "Identify and evaluate risks", "Route packets", "Write macros"], answer: 1, why: "RA identifies and evaluates risk." }
      ]
    },
    {
      id: "project-management",
      spec: "2.9.1–2.9.4",
      title: "Project Management",
      summary: "Methodologies and diagrammatic techniques.",
      learn: [
        "<p><b>Methodologies:</b> <b>Waterfall</b> is a linear, sequential model (each phase completes before the next). <b>Agile</b> is iterative and flexible. <b>Kanban</b> is a visual workflow method using boards and cards.</p>",
        "<p><b>Diagrammatic techniques:</b></p><ul><li><b>Gantt chart</b> — tasks against a timeline.</li><li><b>PERT</b> — Programme Evaluation and Review Technique; shows task dependencies and time estimates.</li><li><b>Precedence table</b> — lists which tasks (predecessors) must be completed before others.</li></ul>",
        "<p><b>Suitability:</b> Waterfall suits stable, well-understood requirements; Agile/Kanban suit changing requirements and continuous delivery. Gantt suits scheduling/timelines; PERT/precedence tables suit working out dependencies and the critical path.</p>"
      ],
      flashcards: [
        { f: "Difference between Waterfall and Agile?", b: "Waterfall is linear/sequential; Agile is iterative and flexible." },
        { f: "What does a Gantt chart show?", b: "Tasks plotted against a timeline." },
        { f: "What is a precedence table?", b: "A list showing which tasks (predecessors) must be completed before others can start." },
        { f: "What does PERT stand for and show?", b: "Programme Evaluation and Review Technique — shows task dependencies and time estimates." }
      ],
      quiz: [
        { q: "A linear, sequential development model is…", options: ["Agile", "Kanban", "Waterfall", "Scrum"], answer: 2, why: "Waterfall is sequential." },
        { q: "A chart of tasks against a timeline is a…", options: ["PERT chart", "Gantt chart", "Risk matrix", "DFD"], answer: 1, why: "Gantt = tasks vs timeline." },
        { q: "A precedence table shows…", options: ["Cable categories", "Which tasks must come before others", "Network latency", "Codec types"], answer: 1, why: "It lists predecessors." },
        { q: "Kanban is best described as…", options: ["A linear model", "A visual board-and-card workflow method", "A codec", "A firewall rule"], answer: 1, why: "Kanban uses boards and cards." }
      ]
    },
    {
      id: "support-strategies",
      spec: "2.10.1–2.10.5",
      title: "Responding to Support Issues",
      summary: "Reflective models, concept mapping and design thinking.",
      learn: [
        "<p><b>Reflective models</b> help technicians learn from experience:</p><ul><li><b>Kolb's Learning Cycle</b> — four stages: concrete experience → reflective observation → abstract conceptualisation → active experimentation.</li><li><b>Gibbs' Reflective Cycle</b> — six stages: description, feelings, evaluation, analysis, conclusion, action plan.</li></ul>",
        "<p><b>Concept mapping</b> creates a diagram showing relationships between ideas/concepts, using <b>verbs</b> on the connecting lines to indicate how they are related.</p>",
        "<p>The <b>design thinking process</b> is a user-centred approach to solving support problems (empathise, define, ideate, prototype, test) — focusing on the real needs of the end user.</p>"
      ],
      flashcards: [
        { f: "Name the four stages of Kolb's Learning Cycle.", b: "Concrete experience, reflective observation, abstract conceptualisation, active experimentation." },
        { f: "Name the six stages of Gibbs' Reflective Cycle.", b: "Description, feelings, evaluation, analysis, conclusion, action plan." },
        { f: "What is a concept map and what goes on its connecting lines?", b: "A diagram showing relationships between ideas, with verbs on the lines indicating how concepts are connected." }
      ],
      quiz: [
        { q: "Gibbs' Reflective Cycle has how many stages?", options: ["Four", "Five", "Six", "Seven"], answer: 2, why: "Gibbs has six: description→action plan." },
        { q: "Kolb's cycle begins with…", options: ["Action plan", "Concrete experience", "Analysis", "Prototype"], answer: 1, why: "Kolb starts at concrete experience." },
        { q: "On a concept map, the connecting lines use…", options: ["Numbers", "Verbs to show relationships", "Colours only", "IP addresses"], answer: 1, why: "Verbs link concepts." }
      ]
    },
    {
      id: "sources-knowledge",
      spec: "2.11.1–2.11.3",
      title: "Sources of Knowledge",
      summary: "Judging reliability and validity of sources.",
      learn: [
        "<p>Technicians draw on many <b>sources of knowledge</b>: manufacturer documentation, knowledge bases, professional bodies, technical forums, colleagues and web searches.</p>",
        "<p><b>Reliability</b> = can the source be trusted/consistent? <b>Validity</b> = is the information accurate and relevant to the problem? Official manufacturer sources and professional bodies are usually more reliable than anonymous forum posts.</p>",
        "<p><b>Making judgements:</b> consider the author/authority, how current it is, whether it is corroborated by other sources, possible bias, and whether it fits the specific context. Cross-reference multiple sources before acting.</p>"
      ],
      flashcards: [
        { f: "Difference between reliability and validity of a source?", b: "Reliability = trustworthy/consistent; validity = accurate and relevant to the problem." },
        { f: "Why prefer manufacturer documentation over a forum post?", b: "It is more authoritative, current and reliable than anonymous, unverified posts." },
        { f: "Name three things to consider when judging a source.", b: "Authority/author, currency, corroboration, bias, relevance to context." }
      ],
      quiz: [
        { q: "A source being accurate and relevant describes its…", options: ["Reliability", "Validity", "Latency", "Severity"], answer: 1, why: "Validity = accurate and relevant." },
        { q: "The MOST reliable source for a server fault code is usually…", options: ["A random blog comment", "The manufacturer's documentation", "Social media gossip", "A guess"], answer: 1, why: "Manufacturer docs are authoritative." },
        { q: "Best practice before acting on information is to…", options: ["Trust the first hit", "Cross-reference multiple sources", "Ignore bias", "Avoid documentation"], answer: 1, why: "Corroboration improves confidence." }
      ]
    }
  ]
};

/* ----------------------------------------------------------------------------
   WORLD 3 — DATA (CO3)
   -------------------------------------------------------------------------- */
const WORLD_DATA = {
  id: "co3",
  code: "CO3",
  name: "Data",
  blurb: "Data & information, types, formats, storage, quality, systems, visualisation, models & access.",
  icon: "📊",
  levels: [
    {
      id: "data-info-knowledge",
      spec: "6.1.1",
      title: "Data, Information & Knowledge",
      summary: "The DIKW hierarchy and how the terms differ.",
      learn: [
        "<p>These three terms are often confused but are distinct — and form a <b>hierarchy</b> (you cannot have knowledge without information, or information without data).</p>",
        "<ul><li><b>Data</b> — raw facts and figures with no context (e.g. <code>HN39XKC</code>). It can be text, symbols or numbers and is the first building block.</li><li><b>Information</b> — data that has been given <b>context</b> to add meaning (e.g. \"HN39XKC is the number plate of a car seen outside a bank during a robbery\").</li><li><b>Knowledge</b> — the ability to understand and <b>extrapolate</b> from information to act or predict (e.g. \"the same car appeared at two robberies, so the driver may be involved\").</li></ul>",
        "<p>Experience, intuition and awareness help turn information into knowledge.</p>"
      ],
      flashcards: [
        { f: "Define data.", b: "Raw facts and figures with no context — the first building block (e.g. text, numbers or symbols)." },
        { f: "How does information differ from data?", b: "Information is data that has been given context to add meaning." },
        { f: "What is knowledge in the DIKW hierarchy?", b: "The ability to understand and extrapolate from information so it can be used to act or predict outcomes." }
      ],
      quiz: [
        { q: "'HN39XKC' on its own, with no context, is…", options: ["Information", "Data", "Knowledge", "Metadata"], answer: 1, why: "Raw facts with no context are data." },
        { q: "Adding context to data produces…", options: ["Knowledge", "Information", "More data", "A database"], answer: 1, why: "Contextualised data = information." },
        { q: "Predicting an outcome from past information demonstrates…", options: ["Data", "Knowledge", "Validation", "A data type"], answer: 1, why: "Knowledge extrapolates from information." }
      ]
    },
    {
      id: "data-generated",
      spec: "6.1.2",
      title: "How Data is Generated",
      summary: "Human, AI/ML, sensor, IoT and transactional sources.",
      learn: [
        "<p><b>Human-generated data</b> — files, emails, searches, CCTV; deliberately collected via <b>surveys</b> (questions) and <b>forms</b> (paper or online).</p>",
        "<p><b>AI & machine learning</b> — generative AI produces text/predictions/recommendations; ML repeatedly adjusts to reach a desired result. AI can create <b>synthetic data</b> (mimics real data's statistics without using real data, avoiding privacy issues). Beware <b>AI feedback loops</b> (training AI on AI-generated data reinforces bias).</p>",
        "<p><b>Sensors</b> detect changes in the environment (temperature, accelerometer, vibration, sound, light, pressure) and send data to a processor.</p>",
        "<p><b>IoT (Internet of Things)</b> — a network of interconnected smart objects, each with a unique identifier (UID), that exchange data over a network without human interaction. <b>Transactional data</b> comes from transactions (purchases, returns, invoices, payroll); loyalty schemes use it to target marketing.</p>"
      ],
      flashcards: [
        { f: "What is synthetic data?", b: "AI-created data that mimics the statistical properties of real data without using any real data — useful for testing without privacy issues." },
        { f: "Define the Internet of Things (IoT).", b: "A network of interconnected devices, each with a unique identifier (UID), that transfer data over a network without human interaction." },
        { f: "What is transactional data and give a use.", b: "Data collected from transactions (purchases, invoices, payroll). Loyalty schemes use it to spot buying trends and target marketing." }
      ],
      quiz: [
        { q: "A device that detects changes in its environment and sends data to a processor is a…", options: ["Codec", "Sensor", "Foreign key", "Blob"], answer: 1, why: "Sensors detect environmental change." },
        { q: "Data created by AI that imitates real data's statistics is…", options: ["Metadata", "Synthetic data", "Transactional data", "Big Data"], answer: 1, why: "Synthetic data mimics real data without using it." },
        { q: "Loyalty cards mainly generate…", options: ["Sensor data", "Transactional data", "Metadata", "Qualitative data"], answer: 1, why: "Purchases are transactions." }
      ]
    },
    {
      id: "ethics-value",
      spec: "6.1.3",
      title: "Ethical Data Practices & Data Value",
      summary: "Ethics, GDPR and metrics for valuing data.",
      learn: [
        "<p><b>Ethics</b> means respecting individuals' privacy, rights and dignity even where not legally required, across collection, processing, storage and use of data. Much is covered by <b>UK GDPR</b> and the <b>Data Protection Act 2018</b>.</p>",
        "<p>Ethical questions: who owns the data and is it legal to collect? Are we <b>transparent</b> and getting informed <b>consent</b>? Is data kept private/anonymous? Are we collecting the <b>minimum</b> needed? Is it kept <b>secure</b> and <b>up to date</b>? Is collection fair, non-discriminatory and unbiased? Are we accountable?</p>",
        "<p><b>Data metrics</b> (value of data, quantifiably): <b>quantity</b> (enough data to be useful/representative), <b>veracity</b> (accuracy/truthfulness — bias, errors, lies and being out of date reduce it), <b>time frame</b> (timely data is more valuable; usefulness decays), and <b>source</b> (data direct from customers is more reliable than bought lists)."
      ],
      flashcards: [
        { f: "Which two main laws cover data ethics in the UK?", b: "UK GDPR and the Data Protection Act 2018." },
        { f: "What does 'veracity' mean as a data metric?", b: "The accuracy and truthfulness of data — reduced by bias, entry errors, being out of date or falsification." },
        { f: "Why does the source of data affect its value?", b: "Data collected directly from customers is more reliable than data bought from a third-party list." }
      ],
      quiz: [
        { q: "Collecting only the data you actually need is the principle of…", options: ["Maximisation", "Data minimisation", "Redundancy", "Velocity"], answer: 1, why: "Collect the minimum needed for the task." },
        { q: "The accuracy/truthfulness of data is its…", options: ["Volume", "Veracity", "Variety", "Velocity"], answer: 1, why: "Veracity = truthfulness." },
        { q: "Survey data about fraud is often low quality because…", options: ["It is too large", "People may lie", "It is encrypted", "It is structured"], answer: 1, why: "Honesty lowers veracity for sensitive topics." }
      ]
    },
    {
      id: "why-orgs-need-data",
      spec: "6.1.4–6.1.5",
      title: "Why Organisations Need Data",
      summary: "Trends, system performance, monitoring, marketing, threats.",
      learn: [
        "<p>Organisations need data to operate and stay competitive. Uses include analysing <b>market trends</b>, <b>system performance analysis</b>, <b>user monitoring</b>, <b>targeted marketing</b>, <b>informed decision-making</b> (strategic/tactical/operational) and <b>threat/opportunity assessment</b>.</p>",
        "<p><b>System performance</b> is measured by: <b>load</b> (work handled at a time, e.g. concurrent users), <b>throughput</b> (rate of successful processing, e.g. transactions/sec), <b>outage</b> (downtime/unavailability) and <b>status</b> (current health, e.g. HTTP 200/404). Call centres use an <b>ACD</b> to report these.</p>",
        "<p><b>User monitoring</b> tracks visits, pages and time on page to understand behaviour. <b>Targeted marketing</b> uses login/purchase data to promote related products and <b>upsell</b>.</p>",
        "<p><b>Threats</b> (competitors, security, compliance) and <b>opportunities</b> (new markets, mimicking rival strategies) can both be identified from data — e.g. spotting a growing vegan market trend."
      ],
      flashcards: [
        { f: "Name the four system-performance measures.", b: "Load, throughput, outage and status." },
        { f: "Difference between load and throughput?", b: "Load = work handled at a given time (e.g. concurrent users); throughput = rate of successful processing (e.g. transactions per second)." },
        { f: "What is targeted marketing?", b: "Using data about who a customer is and what they view/buy to promote related products and upsell to them specifically." }
      ],
      quiz: [
        { q: "The number of concurrent users a system is handling is its…", options: ["Throughput", "Load", "Status", "Outage"], answer: 1, why: "Load = work handled at a time." },
        { q: "A period when a system is unavailable is an…", options: ["Outage", "Upsell", "Index", "Edge"], answer: 0, why: "Outage = downtime." },
        { q: "Suggesting a warranty to someone who bought a vacuum is…", options: ["An outage", "Upselling (targeted marketing)", "Validation", "Wrangling"], answer: 1, why: "Upselling promotes related products." }
      ]
    },
    {
      id: "transforming-data",
      spec: "6.2.1",
      title: "Transforming Data",
      summary: "Manipulating, processing and analysing data.",
      learn: [
        "<p>Methods of transforming data fall into three categories:</p>",
        "<ul><li><b>Manipulating</b> — modifying structure/content to prepare for import or analysis: filtering, sorting, renaming fields, concatenating/merging fields, type conversion (text→numbers).</li><li><b>Processing</b> — changing data for modelling/automation: pivot tables, removing extreme values, encoding (e.g. eye-colour text into standard categories), inputting missing values by inference.</li><li><b>Analysing</b> — exploring for insight: noise/anomaly removal, statistics (mean, median, variance), grouping/subtotals, correlation and outlier detection.</li></ul>",
        "<p>Example: targeted mailings need raw purchase data <b>manipulated</b> (match formats), <b>processed</b> (remove/merge records), then <b>analysed</b> (most popular items/bundles)."
      ],
      flashcards: [
        { f: "Name the three categories of transforming data.", b: "Manipulating (structure/content), processing (for modelling/automation), and analysing (for insight)." },
        { f: "Give one example of manipulating data.", b: "Filtering, sorting, renaming fields, merging fields, or type conversion (e.g. text to numbers)." },
        { f: "What is encoding when processing data?", b: "Converting free-text values into a standard set of categories (e.g. eye-colour descriptions into agreed colour codes)." }
      ],
      quiz: [
        { q: "Converting text values into numbers is an example of…", options: ["Analysing", "Manipulating", "Outputting", "Encrypting"], answer: 1, why: "Type conversion is manipulation." },
        { q: "Removing an anomalous 10°C reading from 16–19°C data is…", options: ["Manipulating structure", "Noise/outlier removal (analysing)", "Encoding", "Indexing"], answer: 1, why: "Removing anomalies is part of analysis." },
        { q: "Creating a pivot table is best described as…", options: ["Processing", "Renaming fields", "Sorting", "Validation"], answer: 0, why: "Pivot tables prepare data for modelling — processing." }
      ]
    },
    {
      id: "data-taxonomy",
      spec: "6.3.1–6.3.6",
      title: "Data Taxonomy",
      summary: "Quantitative/qualitative; discrete, continuous, categorical.",
      learn: [
        "<p><b>Quantitative data</b> is measurable and numerical, so calculations (counts, totals, averages) can be done. It is usually <b>structured</b> (predefined format, easily searched/sorted), often from closed/multiple-choice questions.</p>",
        "<p>Numeric data can be:</p><ul><li><b>Discrete</b> — countable, separate values (students in a class, dice rolls, shoe sizes).</li><li><b>Continuous</b> — infinite values in a range, measured not counted (height, time).</li><li><b>Categorical</b> — values assigned to a category (a 1–5 satisfaction rating).</li></ul>",
        "<p><b>Qualitative data</b> cannot be expressed numerically (e.g. opinions). It gives deeper insight and is collected by open questions/interviews/focus groups. It is usually <b>unstructured</b> (harder to search/analyse) but can be <b>codified</b> into structured/quantitative data (e.g. tagging comments positive/negative)."
      ],
      flashcards: [
        { f: "Quantitative vs qualitative data?", b: "Quantitative is measurable/numerical (calculations possible); qualitative cannot be expressed numerically (e.g. opinions, deeper insight)." },
        { f: "Difference between discrete and continuous data?", b: "Discrete is countable separate values (e.g. shoe sizes); continuous has infinite values in a range and is measured (e.g. height)." },
        { f: "How can qualitative data become quantitative?", b: "By codifying it into categories (e.g. tagging survey comments as positive/negative), which is an interpretation of the original." }
      ],
      quiz: [
        { q: "Height measured to many decimal places is…", options: ["Discrete", "Continuous", "Categorical", "Boolean"], answer: 1, why: "Continuous = infinite values in a range." },
        { q: "Qualitative data is usually…", options: ["Structured", "Unstructured", "Numeric", "Boolean"], answer: 1, why: "Opinions are unstructured." },
        { q: "The number of students in a class is…", options: ["Continuous", "Discrete", "Qualitative", "Unstructured"], answer: 1, why: "It is a countable, separate value." }
      ]
    },
    {
      id: "data-types",
      spec: "6.4.1–6.4.4",
      title: "Data Types",
      summary: "Integer, real, character, string, Boolean, date, Blob.",
      learn: [
        "<p>Programming languages define <b>data types</b>:</p><ul><li><b>Integer</b> — a whole number (positive, negative or zero).</li><li><b>Real</b> (float) — a number with a fractional/decimal part.</li><li><b>Character</b> — a single letter, digit, symbol or space.</li><li><b>String</b> — a sequence of characters.</li><li><b>Boolean</b> — one of two values, true or false (used for selection/repetition; combined with NOT/AND/OR).</li><li><b>Date</b> — a compound type (day, month, year, optionally time).</li><li><b>Blob</b> (Binary Large Object) — stores large binary objects such as images, video or audio in a database.</li></ul>",
        "<p><b>Structured</b> data uses predefined types (sortable, addable, comparable); <b>unstructured</b> data (e.g. a Blob) does not. <b>Choosing the right type matters</b>: CSV Booleans may be stored as 0/1 or Y/N and need converting; averages of integers must be stored as <b>real</b>."
      ],
      flashcards: [
        { f: "Difference between an integer and a real?", b: "An integer is a whole number; a real (float) has a fractional/decimal part." },
        { f: "What does a Boolean store and what is it used for?", b: "One of two values (true/false); used to control selection and repetition in programs." },
        { f: "What is a Blob used for?", b: "Storing large binary objects (images, video, audio) in a database." }
      ],
      quiz: [
        { q: "Storing pass/fail results is best done with a…", options: ["Real", "Boolean", "String", "Blob"], answer: 1, why: "Boolean holds one of two values." },
        { q: "An image stored in a database uses a…", options: ["Integer", "Character", "Blob", "Date"], answer: 2, why: "Blob = Binary Large Object." },
        { q: "The average of integer scores should be stored as…", options: ["Integer", "Real", "Boolean", "Character"], answer: 1, why: "Averages have decimals, so use real." }
      ]
    },
    {
      id: "data-formats",
      spec: "6.5.1–6.5.2",
      title: "Data Formats",
      summary: "Text, CSV, XML, JSON, ASCII and UTF-8.",
      learn: [
        "<p>Common <b>data formats</b>:</p><ul><li><b>Text (.txt)</b> — plain, unformatted text.</li><li><b>CSV</b> — comma-separated values; tabular plain text, one row per line. Very portable and widely readable, but holds no formatting.</li><li><b>XML</b> — eXtensible Markup Language; uses <b>tags</b> to define structure; human- and machine-readable; strong schema support, used by many legacy systems.</li><li><b>JSON</b> — JavaScript Object Notation; lightweight data-interchange format used by web APIs; quick to process.</li></ul>",
        "<p><b>Character sets:</b> <b>ASCII</b> is a 7-bit set of 128 characters (English only, 1 byte). <b>UTF-8</b> extends this using up to 4 bytes — backwards-compatible with ASCII and able to represent all Unicode characters (other alphabets, emojis).</p>",
        "<p><b>Choosing a format:</b> CSV for simple tabular exports; JSON for web APIs; XML for document-centric data/legacy schemas; UTF-8 as the modern multilingual standard."
      ],
      flashcards: [
        { f: "What is a CSV file and a key benefit?", b: "Comma-separated values — tabular plain text, one row per line; very portable and readable by many programs (but no formatting)." },
        { f: "How does XML structure data?", b: "Using tags that define the document structure, readable by humans and machines." },
        { f: "Difference between ASCII and UTF-8?", b: "ASCII is 7-bit/1-byte (128 English characters); UTF-8 uses up to 4 bytes, is backwards-compatible with ASCII and represents all Unicode (other languages, emojis)." }
      ],
      quiz: [
        { q: "Which lightweight format is the standard for modern web APIs?", options: ["CSV", "JSON", "ASCII", "TXT"], answer: 1, why: "JSON is the web-API interchange format." },
        { q: "Which format uses tags to define structure?", options: ["CSV", "XML", "ASCII", "TXT"], answer: 1, why: "XML is tag-based markup." },
        { q: "UTF-8 is preferred over ASCII because it…", options: ["Is smaller always", "Can represent all Unicode characters", "Has no structure", "Is encrypted"], answer: 1, why: "UTF-8 supports many languages and emojis." }
      ]
    },
    {
      id: "metadata-storage",
      spec: "6.6.1–6.6.4",
      title: "Metadata & Storage Structures",
      summary: "Metadata, file/directory structures and storage types.",
      learn: [
        "<p><b>Metadata</b> is 'data about data' — descriptions, context or attributes of the primary data (e.g. a CSV's column headers, an image's date/location/resolution, ownership/access rights). Accurate metadata aids navigation and improves <b>SEO</b>; standards bodies include ANSI and ISO.</p>",
        "<p><b>File-based structures</b> organise data into separate typed files (e.g. .docx, .xlsx) with clear naming. <b>Directory-based structures</b> organise files into folders/sub-folders (a hierarchy) — more storage overhead but quicker direct access. A file may logically belong in more than one folder, so searching is needed.</p>",
        "<p><b>Storage structures</b> — how data is physically/logically stored: flat files (CSV/JSON/XML), <b>relational databases</b> (MySQL), <b>NoSQL</b> (MongoDB), <b>data lakes/warehouses</b>, and <b>cloud object storage</b> (AWS S3). Data often must be transformed between these."
      ],
      flashcards: [
        { f: "What is metadata? Give an example.", b: "Data about data — e.g. a CSV's column headers, or an image's date, location and resolution." },
        { f: "File-based vs directory-based structures?", b: "File-based stores separate typed files; directory-based organises files into folders/sub-folders (a hierarchy) with quicker direct access but more overhead." },
        { f: "Name two types of storage structure.", b: "Flat files (CSV/JSON/XML), relational databases, NoSQL databases, data lakes/warehouses, cloud object storage." }
      ],
      quiz: [
        { q: "Column headers that tell you what each column means are…", options: ["Metadata", "A Blob", "An outage", "A foreign key"], answer: 0, why: "Metadata describes the primary data." },
        { q: "Organising files into folders and sub-folders is a…", options: ["Flat file", "Directory-based structure", "Codec", "Pivot table"], answer: 1, why: "Folders/sub-folders form a hierarchy." },
        { q: "MySQL is an example of a…", options: ["Flat file", "Relational database", "Sensor", "Character set"], answer: 1, why: "MySQL is a relational DBMS." }
      ]
    },
    {
      id: "bigdata-quality",
      spec: "6.7.1–6.7.6",
      title: "Big Data & Data Quality",
      summary: "The six Vs and data quality assurance methods.",
      learn: [
        "<p><b>Big Data</b> is extremely large, complex datasets that traditional tools struggle to process. Its <b>six Vs</b> are: <b>Volume</b> (amount), <b>Velocity</b> (speed generated), <b>Variety</b> (structured/semi/unstructured), <b>Veracity</b> (trustworthiness), <b>Value</b> (business worth) and <b>Variability</b> (changing/inconsistent data).</p>",
        "<p><b>Data quality assurance</b> methods: <b>Validation</b> (automatic check that data is sensible/in range — does not check accuracy), <b>Verification</b> (checking data is correct, e.g. double entry/proofreading), <b>Reliability</b> (accuracy & completeness), <b>Consistency</b> (uniform format across systems, e.g. 'Rd' vs 'Road'), <b>Integrity</b> (accuracy/trustworthiness across its life cycle, e.g. unbroken key relationships), and avoiding <b>Redundancy</b> (the same data duplicated, risking mismatched updates).</p>",
        "<p><b>Maintenance factors:</b> an organisation's <b>time</b>, <b>skills</b> and <b>cost</b> determine how well data is maintained (a multinational has a data protection officer; a sole trader fits it around other roles). Remember: <i>garbage in, garbage out</i>."
      ],
      flashcards: [
        { f: "List the six Vs of Big Data.", b: "Volume, Velocity, Variety, Veracity, Value and Variability." },
        { f: "Difference between validation and verification?", b: "Validation is an automatic check that data is sensible/in range (not accuracy); verification checks data is correct, e.g. by double entry or proofreading." },
        { f: "What is data redundancy and why is it a problem?", b: "The same data stored in more than one place; if updated in one place and not the other, the organisation may use erroneous data." }
      ],
      quiz: [
        { q: "The speed at which data is generated is which V?", options: ["Volume", "Velocity", "Veracity", "Value"], answer: 1, why: "Velocity = speed of generation." },
        { q: "An automatic check that an age isn't 250 is…", options: ["Verification", "Validation", "Redundancy", "Integration"], answer: 1, why: "Validation checks data is sensible/in range." },
        { q: "Storing '92 Main Rd' and '92 Main Road' in two systems is a problem of…", options: ["Velocity", "Consistency", "Volume", "Veracity"], answer: 1, why: "Inconsistent formats for the same data." }
      ]
    },
    {
      id: "data-systems",
      spec: "6.8.1–6.8.8",
      title: "Data Systems & Entry Errors",
      summary: "Data wrangling, core functions and data-entry errors.",
      learn: [
        "<p><b>Data wrangling</b> turns raw, unstructured/disorganised data into a usable structured format. Its stages are: <b>Structure → Clean → Validate → Enrich → Output</b> (clean = fill empty fields, remove duplicates, fix misplaced/charset errors; enrich = add useful extra fields).</p>",
        "<p><b>Core functions of a data system:</b> input, search, save, integrate, organise (index), output and the <b>feedback loop</b> (output is fed back in as input).</p>",
        "<p><b>Data-entry errors:</b> a <b>transcription</b> error is incorrectly copying data (misreading, mistyping, mishearing — e.g. 372.76 for 312.76); a <b>transposition</b> error is swapping two characters/digits (e.g. 1948 → 1984).</p>",
        "<p><b>Avoiding errors:</b> validation, verification (e.g. entering a password twice), drop-down menus (limit choices), pre-filled defaults, and clear UI guidance. <b>Factors affecting entry:</b> the time and expertise to design/code/test input pages, plus the time to enter and verify data."
      ],
      flashcards: [
        { f: "List the five stages of data wrangling.", b: "Structure, clean, validate, enrich, output." },
        { f: "Transcription vs transposition error?", b: "Transcription = incorrectly copying data (misread/mistype/mishear); transposition = swapping two characters or digits (e.g. 1948 → 1984)." },
        { f: "Give two ways to reduce data-entry errors on a form.", b: "Validation, verification (e.g. double entry), drop-down menus, pre-filled defaults, clear on-screen guidance." }
      ],
      quiz: [
        { q: "Typing 1948 as 1984 is a…", options: ["Transcription error", "Transposition error", "Validation error", "Feedback loop"], answer: 1, why: "Two digits are swapped — transposition." },
        { q: "The data-wrangling stage that adds useful extra fields is…", options: ["Clean", "Enrich", "Structure", "Output"], answer: 1, why: "Enrich combines/looks up extra data." },
        { q: "Output being fed back in as input describes a…", options: ["Feedback loop", "Blob", "Pivot table", "Foreign key"], answer: 0, why: "That is a control/feedback loop." }
      ]
    },
    {
      id: "data-visualisation",
      spec: "6.9.1–6.9.2",
      title: "Data Visualisation",
      summary: "Graphs, charts, tables, reports, dashboards, infographics.",
      learn: [
        "<p>Visual formats can make complex data easier to summarise and communicate to non-specialists. Choose the right one to avoid misleading the reader.</p>",
        "<ul><li><b>Graphs/charts</b> — bar charts (compare), scatter graphs (correlations/trend lines), line graphs (trends over time), pie charts (percentages), Gantt (timelines), org charts, flowcharts.</li><li><b>Tables</b> — exact values; precise but visually dense and hard to spot patterns.</li><li><b>Reports</b> — context and in-depth analysis; thorough but time-consuming to read/write.</li><li><b>Dashboards</b> — multiple interactive visualisations for real-time monitoring; risk of overload and need upkeep.</li><li><b>Infographics</b> — engaging storytelling/public communication; limited detail and risk of oversimplification.</li></ul>",
        "<p><b>Choosing:</b> graphs/charts for trends and comparisons; tables when exact values matter; reports for stakeholders; dashboards for live decision-making; infographics for general audiences."
      ],
      flashcards: [
        { f: "Which chart best shows correlation between two variables?", b: "A scatter graph (it can show trend lines)." },
        { f: "Give one benefit and one drawback of a dashboard.", b: "Benefit: interactive, real-time monitoring combining multiple visualisations. Drawback: risk of information overload and it needs infrastructure/upkeep." },
        { f: "When is a table better than a graph?", b: "When exact values and detail/accuracy are key and the audience is data-literate." }
      ],
      quiz: [
        { q: "To show proportions of total sales by payment method, use a…", options: ["Line graph", "Pie chart", "Scatter graph", "Gantt chart"], answer: 1, why: "Pie charts show percentages of a whole." },
        { q: "A drawback of infographics is…", options: ["Too much detail", "Risk of oversimplification", "They are not shareable", "They need SQL"], answer: 1, why: "Infographics can oversimplify." },
        { q: "Real-time monitoring of many metrics at once suits a…", options: ["Table", "Dashboard", "Single bar chart", "Text report"], answer: 1, why: "Dashboards combine live visualisations." }
      ]
    },
    {
      id: "data-models",
      spec: "6.10.1–6.10.4",
      title: "Data Models",
      summary: "Relational, hierarchical and network models.",
      learn: [
        "<p><b>Data modelling</b> organises data into a structure to make it accessible and useful.</p>",
        "<ul><li><b>Relational</b> — the most common; data in <b>tables</b> (entities) of <b>records</b> (rows) with a unique <b>key</b>; tables linked by <b>foreign keys</b> (e.g. one-to-many). Very efficient for large data and easy to query with SQL; normalisation reduces redundancy; complex many-level designs are harder to maintain.</li><li><b>Hierarchical</b> — a tree (like folders); each node has one parent but many children (one-to-many). Fast down well-defined paths, but slow to find children when stored relationally and poor for ad-hoc queries.</li><li><b>Network</b> — nodes link to many other nodes (<b>many-to-many</b>) via <b>edges</b> (which can carry data, e.g. distances). Great for complex relationships (social/transport networks) but complex to design and maintain.</li></ul>"
      ],
      flashcards: [
        { f: "What links tables in a relational model?", b: "Foreign keys — a key from one table referenced in another (e.g. creating a one-to-many relationship)." },
        { f: "Describe the hierarchical data model.", b: "A tree structure (like folders) where each node has one parent but can have many children — a one-to-many relationship." },
        { f: "What relationship does a network data model support, and what are its links called?", b: "Many-to-many; the links between nodes are called edges (which can have their own data, e.g. distances)." }
      ],
      quiz: [
        { q: "Which model uses tables, records and foreign keys?", options: ["Hierarchical", "Network", "Relational", "Flat"], answer: 2, why: "Relational uses linked tables." },
        { q: "A tree where each node has exactly one parent is the…", options: ["Network model", "Hierarchical model", "Relational model", "NoSQL model"], answer: 1, why: "Hierarchical = tree, one parent per node." },
        { q: "Many-to-many relationships via edges describe the…", options: ["Relational model", "Hierarchical model", "Network model", "CSV format"], answer: 2, why: "Network nodes link to many nodes via edges." }
      ]
    },
    {
      id: "data-access",
      spec: "6.11.1–6.11.3",
      title: "Data Access Across Platforms",
      summary: "Permissions, access control models and APIs.",
      learn: [
        "<p><b>Access permissions</b> limit who can see data — reducing cyberattack damage and meeting GDPR (only those who need data should access the <b>minimum</b> required). Managed via <b>authorisation</b>, <b>privileges</b> (capabilities like installing software), <b>access rights</b> (file permissions), drive access, encryption and <b>rules</b> (e.g. firewall hours, specific IPs).</p>",
        "<ul><li><b>Role-based access control (RBAC)</b> — access assigned by role/group (e.g. only HR staff see employee records). Simple and scalable but less flexible for one-offs.</li><li><b>Rule-based access control (RuBAC)</b> — specific rules per user based on time, location or device (e.g. only 8am–6pm, only company devices). Fine-grained but hard to manage with many rules.</li></ul>",
        "<p><b>APIs</b> (Application Programming Interfaces) let two applications communicate: an app sends a request (with a security key), the server looks up and processes the data, and returns it (usually as JSON or XML). APIs enable cross-platform integration but need strong security."
      ],
      flashcards: [
        { f: "What is role-based access control (RBAC)?", b: "Access assigned by role/group, so users only get the permissions their role needs (e.g. only HR can see employee records)." },
        { f: "How does RuBAC differ from RBAC?", b: "RuBAC sets rules per user based on conditions (time, location, device), giving finer control than role/group-based RBAC." },
        { f: "What is an API and what format does it usually return?", b: "A software intermediary that lets two applications communicate; it usually returns data as JSON or XML." }
      ],
      quiz: [
        { q: "Giving HR staff access to employee records via their group is…", options: ["RuBAC", "RBAC", "An API", "A Blob"], answer: 1, why: "Role/group-based = RBAC." },
        { q: "Allowing access only 8am–6pm from company devices is…", options: ["RBAC", "Rule-based access control", "Encryption", "A pivot table"], answer: 1, why: "Conditions per user = RuBAC." },
        { q: "An API usually returns requested data formatted as…", options: ["CSV or TXT", "JSON or XML", "A Blob", "ASCII art"], answer: 1, why: "APIs typically use JSON or XML." }
      ]
    },
    {
      id: "data-analysis-tools",
      spec: "6.12.1–6.12.2",
      title: "Data Analysis Tools",
      summary: "Warehouses, lakes, marts, mining, BI and CRM.",
      learn: [
        "<p><b>Storing Big Data:</b></p><ul><li><b>Data warehouse</b> — a structured database optimised to receive data from many sources and be queried quickly with SQL for reporting/analysis (like 'filtered bottled water').</li><li><b>Data lake</b> — stores raw structured <i>and</i> unstructured data in its native form (like 'water in a river'); needs more sophisticated/ML tools and cleaning before moving to a warehouse.</li><li><b>Data mart</b> — a smaller warehouse focused on one team/department (e.g. marketing).</li></ul>",
        "<p><b>Analysing data:</b> <b>data mining</b> converts raw data into useful information by finding patterns, anomalies and correlations; <b>reporting</b> turns data into charts/tables for decision-makers (some detail is lost).</p>",
        "<p><b>Business intelligence</b> uses analysis for financial planning (cash flow, break-even) and <b>CRM</b> (customer relationship management) to analyse interactions and personalise marketing. The bigger the data, the more these tools must work together (e.g. data lake → mining → CRM)."
      ],
      flashcards: [
        { f: "Difference between a data warehouse and a data lake?", b: "A warehouse stores structured, cleaned data optimised for SQL querying; a data lake stores raw structured and unstructured data in its native form." },
        { f: "What is a data mart?", b: "A smaller version of a data warehouse focused on one team or department (e.g. marketing)." },
        { f: "What is data mining?", b: "Analysing large volumes of raw data to find patterns, anomalies and correlations, turning it into useful information." }
      ],
      quiz: [
        { q: "A structured store optimised for fast SQL reporting is a…", options: ["Data lake", "Data warehouse", "Data mart", "CSV file"], answer: 1, why: "Warehouses are structured and query-optimised." },
        { q: "Raw structured and unstructured data in native form is held in a…", options: ["Data warehouse", "Data lake", "Pivot table", "Foreign key"], answer: 1, why: "Data lakes hold raw native data." },
        { q: "Finding patterns and correlations in large datasets is…", options: ["Reporting", "Data mining", "Validation", "Encoding"], answer: 1, why: "Data mining discovers patterns." }
      ]
    }
  ]
};

/* All worlds in display order */
const WORLDS = [WORLD_PROBLEM_SOLVING, WORLD_DIGITAL_SUPPORT, WORLD_DATA];

/* ----------------------------------------------------------------------------
   BOSS MODE EXAM — mirrors Pearson Core Paper 1 SAM (90 marks, 2h15)
   ----------------------------------------------------------------------------
   Section A (30 marks): short, points-based, auto-marked.
     type: "mcq"   -> single correct option (auto)
     type: "short" -> keyword-matched short answer (auto, accept[] keywords)
   Section B (60 marks): scenario, levels-based, auto-marked by indicative
     content coverage.  type: "extended" -> marks, model, indicative[], levels[]
   -------------------------------------------------------------------------- */
const EXAM = {
  durationSeconds: 8100, // 2 hours 15 minutes (full paper). App offers a short mode too.
  totalMarks: 90,

  /* ---- SECTION A : 30 marks (points-based, auto-marked) ----
     Original questions written in Pearson short-answer style but with ALL
     content drawn ONLY from the ZigZag CO1/CO2/CO3 Course Companions. */
  sectionA: [
    {
      id: "A1", marks: 1, type: "mcq", source: "CO1",
      q: "Which component of computational thinking focuses only on the key information and ignores irrelevant detail?",
      options: ["Decomposition", "Abstraction", "Pattern recognition", "Iteration"],
      answer: 1, model: "Abstraction (1)."
    },
    {
      id: "A2", marks: 1, type: "mcq", source: "CO1",
      q: "Which root cause analysis method calculates a Risk Priority Number (RPN = severity × occurrence × detection)?",
      options: ["Five Whys", "FMEA", "Event Tree Analysis", "Kanban"],
      answer: 1, model: "FMEA — Failure Mode and Effects Analysis (1)."
    },
    {
      id: "A3", marks: 2, type: "short", source: "CO1",
      q: "State two purposes of decomposition when solving a problem.",
      accept: ["reduce complexity", "complexity", "reuse", "parallel", "independent", "testing", "test", "focus", "manageable"],
      minKeywords: 2,
      model: "Any two of: reduce complexity (1); enable reuse of subtasks (1); enable parallel work on independent subtasks (1); focus on the best solution per part (1); support quicker testing of components (1)."
    },
    {
      id: "A4", marks: 1, type: "mcq", source: "CO1",
      q: "How many output arrows does the selection (decision) symbol in a flowchart have?",
      options: ["One", "Two", "Three", "Four"],
      answer: 1, model: "Two — the test always evaluates to True or False (1)."
    },
    {
      id: "A5", marks: 2, type: "short", source: "CO1",
      q: "Describe the process of iteration (give two linked points in logical order).",
      accept: ["test", "repeat", "repeated", "until", "condition", "loop", "count", "limit", "stopping", "met"],
      minKeywords: 2,
      model: "A test is performed (1), then it is repeated until the stopping condition is met (1). OR a finite loop using a count is performed (1) and repeated until the limit is reached (1)."
    },
    {
      id: "A6", marks: 1, type: "mcq", source: "CO2",
      q: "Which console command is used to display and configure IP settings on a Unix/Linux system?",
      options: ["ipconfig", "ifconfig", "ping", "tracert"],
      answer: 1, model: "ifconfig (1). (ipconfig is the Windows equivalent.)"
    },
    {
      id: "A7", marks: 2, type: "short", source: "CO2",
      q: "State one benefit and one drawback of using Shielded Twisted Pair (STP) cabling instead of UTP.",
      accept: ["interference", "shield", "shielding", "reduce", "expensive", "cost", "bulky", "bulk", "thicker", "less flexible"],
      minKeywords: 2,
      model: "Benefit: the shielding reduces electromagnetic interference (1). Drawback: STP is more expensive and bulkier/less flexible than UTP (1)."
    },
    {
      id: "A8", marks: 1, type: "mcq", source: "CO2",
      q: "Testing combined components to ensure they work together is called…",
      options: ["Unit testing", "Integration testing", "Usability testing", "Boundary testing"],
      answer: 1, model: "Integration testing (1)."
    },
    {
      id: "A9", marks: 2, type: "short", source: "CO2",
      q: "State the purpose of a codec and name one example.",
      accept: ["compress", "decompress", "compression", "audio", "video", "mp3", "flac", "mpeg", "mpeg-4"],
      minKeywords: 2,
      model: "A codec compresses and decompresses audio/video (1). Example: MP3 (audio), FLAC (lossless audio) or MPEG-4 (video) (1)."
    },
    {
      id: "A10", marks: 1, type: "mcq", source: "CO2",
      q: "In a risk assessment matrix, how is the overall risk score for a hazard calculated?",
      options: ["Likelihood + severity", "Likelihood × severity", "Severity ÷ likelihood", "Count of hazards"],
      answer: 1, model: "Likelihood × severity (1)."
    },
    {
      id: "A11", marks: 1, type: "mcq", source: "CO3",
      q: "Which data model organises data into tables of records that are linked by foreign keys?",
      options: ["Hierarchical model", "Relational model", "Network model", "Flat file"],
      answer: 1, model: "Relational model (1)."
    },
    {
      id: "A12", marks: 2, type: "short", source: "CO3",
      q: "State two of the six Vs (dimensions) of Big Data.",
      accept: ["volume", "velocity", "variety", "veracity", "value", "variability"],
      minKeywords: 2,
      model: "Any two of: Volume, Velocity, Variety, Veracity, Value, Variability (1 each)."
    },
    {
      id: "A13", marks: 3, type: "short", source: "CO1",
      q: "Explain, with justification, one drawback of using a top-down approach to problem solving.",
      accept: ["inflexible", "rigid", "rigidity", "delay", "over-simplification", "oversimplification", "requirements change", "changed", "fail"],
      minKeywords: 2,
      model: "Top-down can be inflexible/rigid (1) because the structure is fixed early (1), so when requirements change over a long project the theoretical structure fails / delays implementation (1)."
    },
    {
      id: "A14", marks: 2, type: "short", source: "CO3",
      q: "State the difference between a transcription error and a transposition error.",
      accept: ["copy", "copied", "copying", "swap", "swapped", "two", "characters", "digits", "order"],
      minKeywords: 2,
      model: "A transcription error is incorrectly copying data from one source to another (1); a transposition error is swapping two characters/digits around (1)."
    },
    {
      id: "A15", marks: 2, type: "short", source: "CO2",
      q: "Explain one benefit of using a validation check when data is entered into a system.",
      accept: ["correct", "sensible", "type", "range", "length", "format", "presence", "error", "reduce", "reject", "invalid"],
      minKeywords: 2,
      model: "A validation check ensures entered data is sensible/correct (1), e.g. a range or type check rejects invalid values, reducing data-entry errors (1)."
    },
    {
      id: "A16", marks: 6, type: "short", source: "CO3",
      q: "Explain three data-quality assurance methods an organisation could use to keep its data accurate and reliable.",
      accept: ["validation", "verification", "double entry", "proofread", "proofreading", "consistency", "consistent", "integrity", "redundancy", "duplicate", "reliability", "reliable", "training"],
      minKeywords: 3,
      model: "Award up to six marks for three developed methods, e.g.: validation automatically checks data is sensible/in range (1+1); verification (e.g. double entry/proofreading) checks data has been entered correctly (1+1); ensuring consistency and integrity, and removing redundancy (duplicate data), keeps data reliable across systems (1+1). Accept staff training and robust procedures."
    }
  ],

  /* ---- SECTION B : 60 marks (levels-based, auto-marked by indicative-content
     coverage) ----
     All scenarios are ORIGINAL and built only from CO1/CO2/CO3 content. Each
     question carries: a sample high-level answer (model), indicative content,
     levels-of-response descriptors, and `accept` keyword groups that drive the
     auto-marking coverage score. */
  sectionB: [
    {
      id: "B1", marks: 6, type: "extended", source: "CO1",
      context: "A software team has been asked to build a new app that lets students view their timetable, submit homework and receive reminders before deadlines.",
      q: "Discuss how DECOMPOSITION could be used to plan the development of this app. (6)",
      model: "High-level answer: First identify the main features — user interface, homework/assignment input, calendar, reminder/notification system and data storage. Each feature is then broken down into smaller subtasks; e.g. assignment input becomes: choose subject/class, build an entry form (title, description, due date), validate the fields, and save to storage. Subtasks are broken down repeatedly until they are atomic (a single job). Decomposition reduces complexity, lets independent subtasks (e.g. UI and storage) be given to different team members to work on in parallel, allows previously-built subtasks to be reused, and lets each part be tested individually.",
      indicative: [
        "Identify the main features (UI, input, calendar, reminders, storage).",
        "Break each feature into smaller subtasks, then into atomic subtasks (single job).",
        "Reduces complexity / makes a large problem manageable.",
        "Independent subtasks can be allocated to different people and worked on in parallel.",
        "Subtasks done before can be reused; each part can be tested individually."
      ],
      accept: [
        ["feature", "main feature", "identify"],
        ["break", "subtask", "smaller", "atomic"],
        ["complexity", "manageable"],
        ["parallel", "team", "independent", "allocate"],
        ["reuse", "test", "testing"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-2", text: "Basic: identifies decomposition with one or two relevant points; little link to the app." },
        { range: "3-4", text: "Good: breaks the app into features/subtasks with some relevant benefits." },
        { range: "5-6", text: "Thorough: clearly decomposes the app into atomic subtasks AND explains benefits (parallel work, reuse, testing) in context." }
      ]
    },
    {
      id: "B2", marks: 6, type: "extended", source: "CO2",
      context: "A gym wants a new online membership sign-up system. A new member enters their personal details; the details are checked and stored; a membership number is generated and saved, and a welcome message is returned to the member.",
      q: "Describe how a Data Flow Diagram (DFD) could be used to represent this sign-up system, including the correct DFD notation. (6)",
      model: "High-level answer: The new member is a source entity drawn as an ellipse. An arrow carries their personal details to a process (a rectangle naming the responsible department and a verb, e.g. 'Membership team — validate & register member'). The process writes member details to a 'Members' data store and reads/writes a generated membership number to a 'Membership numbers' data store. A final unidirectional arrow returns the membership number / welcome message to the member. Notation: ellipse = source entity; process rectangle has a responsible entity + verb; data stores have meaningful names (not process names); all arrows are unidirectional and labelled with the data that flows.",
      indicative: [
        "Member = source entity drawn as an ellipse.",
        "Process rectangle names a responsible entity + a verb (e.g. validate/register).",
        "Data store(s) with meaningful names hold member details and membership number.",
        "Arrows are labelled with the data that flows (details, membership number).",
        "All arrows are unidirectional; data stores are not named after processes."
      ],
      accept: [
        ["ellipse", "source", "entity", "member"],
        ["process", "rectangle", "verb", "responsible"],
        ["data store", "store", "members", "database"],
        ["arrow", "label", "flow", "details"],
        ["unidirectional", "one direction", "notation"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-2", text: "Basic: names some DFD parts with weak/incorrect notation." },
        { range: "3-4", text: "Good: most entities, processes and stores correct; mostly correct notation." },
        { range: "5-6", text: "Thorough: accurate representation of the system with fully correct DFD notation." }
      ]
    },
    {
      id: "B3", marks: 9, type: "extended", source: "CO2",
      context: "An office suffers from poor-quality VoIP video calls — staff report delays, dropouts and choppy audio. The current cabling is old UTP. A technician suggests upgrading the cabling to shielded Cat 6/Cat 7.",
      q: "Evaluate the suitability of upgrading the cabling as a way to improve the call quality. Consider points for and against and reach a supported conclusion. (9)",
      model: "High-level answer: Call quality depends on network metrics — latency (delay), jitter (variation in packet arrival) and packet loss. For: higher-category shielded cable (Cat 6/7, STP) supports more bandwidth and reduces electromagnetic interference, which can lower packet loss and jitter, improving the VoIP/SIP call quality. Against: cabling is only one factor — if the delays are caused elsewhere (an overloaded router, firewall rules, insufficient internet bandwidth or a poor codec choice) then new cable will not fix the latency; shielded cable also costs more and is bulkier/harder to install. Conclusion (best-fit): upgrading the cabling is worthwhile if interference on the old UTP is the cause, but the technician should first measure latency/jitter/packet loss to confirm the bottleneck before committing — otherwise the spend may not improve calls.",
      indicative: [
        "Call quality measured by latency, jitter and packet loss.",
        "For: Cat 6/7 + STP shielding reduces interference → less jitter/packet loss.",
        "For: higher category supports more bandwidth.",
        "Against: the cause may be elsewhere (router, firewall, internet bandwidth, codec).",
        "Against: shielded cable is more expensive and bulkier to install.",
        "Conclusion weighs the cause: test the metrics first; cabling helps only if interference is the issue."
      ],
      accept: [
        ["latency", "jitter", "packet loss", "metric"],
        ["interference", "shield", "stp", "cat 6", "cat 7"],
        ["bandwidth"],
        ["router", "firewall", "internet", "codec", "elsewhere", "other"],
        ["cost", "expensive", "bulky", "install"],
        ["conclusion", "test", "measure", "depends", "first"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-3", text: "Basic analysis; partially relevant; superficial/unsupported conclusion." },
        { range: "4-6", text: "Good analysis of for/against; relevant application; partially supported conclusion." },
        { range: "7-9", text: "Thorough analysis; comprehensive, contextual application; well-supported conclusion." }
      ]
    },
    {
      id: "B4", marks: 9, type: "extended", source: "CO1",
      context: "A company is building a large online booking platform. It will be developed by several specialist teams working at the same time, and is expected to be maintained and extended for years.",
      q: "Evaluate the suitability of using MODULARISATION as the approach for developing this platform. Consider points for and against and reach a supported conclusion. (9)",
      model: "High-level answer: Modularisation breaks the system into independent units (modules). For: separate specialist teams can develop different modules in parallel, speeding delivery; modules can be reused and are easier to maintain and extend over the years; each module can be tested in isolation before integration. Against: the interfaces between modules must be agreed and designed, which needs coordination/meetings between teams; a team can be blocked waiting on another team's module; integration introduces complex dependencies and needs comprehensive integration and usability testing at the end. Conclusion (best-fit): for a large, long-lived, multi-team platform the benefits of parallel development, reuse and maintainability outweigh the coordination overhead, so modularisation is suitable — provided clear interfaces and an integration-testing plan are defined up front.",
      indicative: [
        "Modularisation = breaking the system into independent modules.",
        "For: parallel development by specialist teams → faster delivery.",
        "For: reuse, easier maintenance and future extension.",
        "For: each module tested in isolation.",
        "Against: interfaces must be designed → coordination overhead/meetings.",
        "Against: teams can be blocked; complex dependencies; more integration/usability testing.",
        "Conclusion weighs efficiency/maintainability vs coordination for a large long-lived system."
      ],
      accept: [
        ["module", "independent", "unit", "break"],
        ["parallel", "team", "same time"],
        ["reuse", "maintain", "maintenance", "extend", "future"],
        ["test", "isolation", "integration", "usability"],
        ["interface", "coordination", "meeting", "dependency", "blocked"],
        ["conclusion", "outweigh", "suitable", "overall"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-3", text: "Basic analysis; partially relevant; superficial conclusion." },
        { range: "4-6", text: "Good analysis of for/against; relevant application; partially supported conclusion." },
        { range: "7-9", text: "Thorough analysis; comprehensive, contextual application; well-supported conclusion." }
      ]
    },
    {
      id: "B5", marks: 9, type: "extended", source: "CO3",
      context: "A library is designing a new database to store members, books and loans. Each member can borrow many books, and each book can be borrowed many times over the years. A developer suggests using a relational data model rather than a hierarchical or network model.",
      q: "Evaluate the suitability of using a RELATIONAL data model for this library system. Consider points for and against and reach a supported conclusion. (9)",
      model: "High-level answer: A relational model stores data in tables (Members, Books, Loans) where each record has a unique key and tables are linked by foreign keys, giving a one-to-many relationship (one member, many loans). For: it is very efficient for large amounts of data and can process millions of records quickly; it is easy to query with SQL; normalisation reduces redundancy and protects integrity. Against: for very complex datasets with many levels of relationships it can become hard to design and maintain; a hierarchical model is faster down well-defined tree paths (but slow to find children when stored relationally), and a network model handles many-to-many relationships more naturally. For a library, the relationships are simple one-to-many and the dataset is large, so SQL querying and reduced redundancy matter most. Conclusion (best-fit): the relational model is the most suitable choice here — its efficient querying and data integrity outweigh the design complexity, which is low for this straightforward structure.",
      indicative: [
        "Relational = tables (entities) of records with unique keys, linked by foreign keys (one-to-many).",
        "For: efficient for large data; millions of records processed quickly.",
        "For: easy to query with SQL.",
        "For: normalisation reduces redundancy and protects integrity.",
        "Against: complex many-level relationships are harder to design/maintain.",
        "Compare: hierarchical fast on tree paths; network better for many-to-many.",
        "Conclusion: relational suits the simple one-to-many, large-data library system."
      ],
      accept: [
        ["relational", "table", "record", "key"],
        ["foreign key", "one-to-many", "linked", "relationship"],
        ["sql", "query", "efficient", "large", "millions"],
        ["normalisation", "redundancy", "integrity"],
        ["hierarchical", "network", "tree", "many-to-many", "complex"],
        ["conclusion", "suitable", "outweigh", "overall"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-3", text: "Basic analysis; partially relevant; superficial conclusion." },
        { range: "4-6", text: "Good analysis comparing models; partially supported conclusion." },
        { range: "7-9", text: "Thorough analysis; comprehensive, contextual application; well-supported conclusion." }
      ]
    },
    {
      id: "B6", marks: 9, type: "extended", source: "CO2",
      context: "A development team has finished a new payroll system that calculates staff pay. Before it goes live, the team must decide which testing methods to use. Mistakes could pay staff the wrong amount.",
      q: "Evaluate which testing methods the team should use before the payroll system goes live. Consider a range of methods and reach a supported conclusion. (9)",
      model: "High-level answer: Several methods apply. Unit testing checks individual components (e.g. the tax calculation) — open-box/white-box testing uses knowledge of the code, while closed-box/black-box checks inputs vs outputs. Boundary testing of values at the limits of valid ranges is vital for pay/tax thresholds, with normal and erroneous test data in a test plan. Integration testing checks components work together; system testing checks the whole system against requirements; regression testing ensures later changes don't break working features; acceptance and usability testing confirm it meets user needs and is easy to use. For a payroll system, correctness is critical, so thorough unit + boundary testing and a documented test plan are essential, but they take time/effort. Conclusion (best-fit): because errors are costly, the team should use unit and boundary testing first (with open and closed box), then integration, system, regression and acceptance testing — the extra effort is justified by the risk of paying staff incorrectly.",
      indicative: [
        "Unit testing of individual components (e.g. tax calculation).",
        "Open-box (white) vs closed-box (black) testing.",
        "Boundary testing at the limits of valid ranges; normal/erroneous test data; test plan.",
        "Integration (components together) and system (vs requirements) testing.",
        "Regression testing so changes don't break existing features; acceptance/usability testing.",
        "Conclusion: prioritise unit + boundary testing because errors are costly; justify the extra effort."
      ],
      accept: [
        ["unit", "component"],
        ["open box", "closed box", "white", "black", "internal code"],
        ["boundary", "range", "test data", "test plan", "erroneous"],
        ["integration", "system", "requirements"],
        ["regression", "acceptance", "usability"],
        ["conclusion", "prioritise", "critical", "justified", "costly"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-3", text: "Basic: names a few methods with limited relevance; weak conclusion." },
        { range: "4-6", text: "Good: explains several methods relevantly; partially supported conclusion." },
        { range: "7-9", text: "Thorough: evaluates a range of methods in context with a well-supported conclusion." }
      ]
    },
    {
      id: "B7", marks: 12, type: "extended", source: "CO3",
      context: "A national supermarket collects huge amounts of data from loyalty cards, online orders, in-store sensors and social media. It wants to store and analyse this 'Big Data' to inform marketing and stock decisions. A consultant proposes building a data lake feeding a data warehouse, with data mining and a CRM system, but the data has quality and ethical concerns.",
      q: "Evaluate the suitability of this Big Data approach for the supermarket, considering data storage, quality and ethics, and reach a supported conclusion. (12)",
      model: "High-level answer: The data shows the six Vs — high volume, velocity (real-time orders), variety (structured transactions plus unstructured social media), variable veracity, and potential value. Storage: a data lake suits raw structured and unstructured native data, while a data warehouse is optimised for fast SQL querying and reporting; a data mart could focus on the marketing team. Data mining can then find patterns and correlations, and a CRM can personalise marketing and build loyalty. Quality concerns: validation, verification, consistency and integrity are needed, and redundancy removed, or 'garbage in, garbage out' undermines decisions. Ethics: under UK GDPR/DPA 2018 the supermarket must be transparent, gain consent, collect the minimum needed, keep data secure and avoid bias — especially when combining loyalty and social-media data. Conclusion (best-fit): the Big Data approach is suitable and valuable for marketing/stock decisions provided the data is cleaned and quality-assured and handled ethically; without strong governance the cost, poor-quality data and privacy risks could outweigh the benefits. (AO2b application carries the most weight.)",
      indicative: [
        "Six Vs: volume, velocity (real-time), variety (structured + unstructured), veracity, value, variability.",
        "Data lake for raw native data; data warehouse optimised for SQL reporting; data mart for marketing.",
        "Data mining finds patterns/correlations; CRM personalises marketing and builds loyalty.",
        "Quality: validation, verification, consistency, integrity; remove redundancy ('garbage in, garbage out').",
        "Ethics: UK GDPR/DPA 2018 — transparency, consent, data minimisation, security, avoid bias.",
        "Cost/skills/time needed to store, clean and maintain large data.",
        "Conclusion weighs value of insights against quality assurance, governance and privacy risks."
      ],
      accept: [
        ["volume", "velocity", "variety", "veracity", "value", "big data", "six vs"],
        ["data lake", "warehouse", "data mart", "storage"],
        ["data mining", "pattern", "crm", "marketing", "analysis"],
        ["validation", "verification", "consistency", "integrity", "redundancy", "quality", "garbage"],
        ["gdpr", "ethic", "consent", "transparent", "privacy", "minimum", "bias"],
        ["cost", "skills", "time", "clean", "maintain"],
        ["conclusion", "outweigh", "suitable", "provided", "overall"]
      ],
      levels: [
        { range: "0", text: "No rewardable material." },
        { range: "1-4", text: "Basic analysis; partially relevant application; superficial conclusion (AO2b weighted ×2)." },
        { range: "5-8", text: "Good analysis of storage, quality and ethics; relevant application; partially supported conclusion." },
        { range: "9-12", text: "Thorough analysis; comprehensive, consistently relevant application; well-supported conclusion." }
      ]
    }
  ],

  /* ---- Grade boundaries (approx., out of 90) for grade prediction ---- */
  grades: [
    { grade: "A*", min: 72, blurb: "Outstanding — comprehensive, consistently relevant, well-supported." },
    { grade: "A",  min: 63, blurb: "Strong — thorough analysis and good application throughout." },
    { grade: "B",  min: 54, blurb: "Good — relevant application with partially supported evaluation." },
    { grade: "C",  min: 45, blurb: "Sound — solid knowledge with some developed points." },
    { grade: "D",  min: 36, blurb: "Basic — partially relevant; conclusions superficial." },
    { grade: "E",  min: 27, blurb: "Limited — a pass, but knowledge is patchy." },
    { grade: "U",  min: 0,  blurb: "Unclassified — keep training in the Arena worlds!" }
  ]
};

/* ----------------------------------------------------------------------------
   TOPIC TESTS — gatekeeper assessments (one per content area)
   ----------------------------------------------------------------------------
   Each content area ends with a mandatory Topic Test. The MULTIPLE-CHOICE part
   of every test is generated at runtime (app.js → generateTopicTest) by pooling
   the per-level quiz questions for that world, so it is always drawn ONLY from
   that content area. The hand-authored SHORT answers and the single 6-MARK
   question below are also strictly CO1/CO2/CO3 content. The pass mark is 70%.
   -------------------------------------------------------------------------- */
const TOPIC_TESTS = {
  passMark: 0.70,           // 70% required to unlock the next content area
  mcqCount: 10,             // number of MCQs sampled from the world's level quizzes
  byWorld: {
    co1: {
      shorts: [
        { id: "T1S1", marks: 2, type: "short",
          q: "Name two of the four components of computational thinking.",
          accept: ["decomposition", "pattern", "abstraction", "algorithm"], minKeywords: 2,
          model: "Any two of: decomposition, pattern recognition, abstraction, algorithmic approach (1 each)." },
        { id: "T1S2", marks: 2, type: "short",
          q: "State two ways an algorithm can be represented.",
          accept: ["flowchart", "written", "description", "code", "pseudocode"], minKeywords: 2,
          model: "Any two of: flowchart, written description, code (1 each)." },
        { id: "T1S3", marks: 2, type: "short",
          q: "Name the root cause analysis technique that repeatedly asks 'why', and state who it is attributed to.",
          accept: ["five whys", "why", "toyoda", "toyota"], minKeywords: 1,
          model: "The Five Whys (1), attributed to Sakichi Toyoda of Toyota (1)." }
      ],
      sixMark: {
        id: "T1B", marks: 6, type: "extended", source: "CO1",
        context: "A town wants a new car-park management system that records spaces, takes payments and shows live availability.",
        q: "Discuss how the components of computational thinking (decomposition, pattern recognition and abstraction) could be applied to plan this system. (6)",
        model: "Decomposition breaks the system into features (entry/exit barriers, space counting, payment, live display) and then into atomic subtasks. Pattern recognition spots parts that resemble previously-built solutions (e.g. a payment module reused from another system) and recurring elements such as peak-time patterns. Abstraction focuses on the key information (number of free spaces, payment status) and ignores irrelevant detail (the make/colour of each car). Together these let the problem be planned clearly, divided between teams and partly reused.",
        indicative: [
          "Decomposition: break into features then atomic subtasks (barriers, counting, payment, display).",
          "Pattern recognition: reuse a previously-built module (e.g. payments) / spot recurring peak patterns.",
          "Abstraction: focus on key data (free spaces, payment) and ignore irrelevant detail.",
          "Benefits in context: clearer plan, divide work between teams, reuse."
        ],
        accept: [
          ["decomposition", "break", "subtask", "feature"],
          ["pattern", "reuse", "similar", "recurring"],
          ["abstraction", "ignore", "key", "irrelevant"],
          ["team", "plan", "divide", "parallel"]
        ],
        levels: [
          { range: "0", text: "No rewardable material." },
          { range: "1-2", text: "Basic: refers to one component with little context." },
          { range: "3-4", text: "Good: applies two components to the car-park system." },
          { range: "5-6", text: "Thorough: applies all three components clearly and in context." }
        ]
      }
    },
    co2: {
      shorts: [
        { id: "T2S1", marks: 2, type: "short",
          q: "Define the network metric 'latency' and the network metric 'jitter'.",
          accept: ["delay", "transmission", "variation", "arrival", "packet"], minKeywords: 2,
          model: "Latency = delay in data transmission (1). Jitter = variation in packet arrival times (1)." },
        { id: "T2S2", marks: 2, type: "short",
          q: "State the difference between open-box (white-box) and closed-box (black-box) testing.",
          accept: ["internal code", "knowledge", "without", "white", "black", "code"], minKeywords: 2,
          model: "Open/white-box testing uses knowledge of the internal code (1); closed/black-box testing has no knowledge of the internal code (1)." },
        { id: "T2S3", marks: 2, type: "short",
          q: "Name two categories of Ethernet cable.",
          accept: ["cat 5e", "cat 6", "cat 7", "5e", "6", "7"], minKeywords: 2,
          model: "Any two of: Cat 5e, Cat 6, Cat 7 (1 each)." }
      ],
      sixMark: {
        id: "T2B", marks: 6, type: "extended", source: "CO2",
        context: "A support technician must set up a new workstation for an office employee, and later diagnose a hardware fault on it.",
        q: "Describe how the technician would select, configure and test the components, and how they could diagnose the hardware fault. (6)",
        model: "Select: choose components that meet the user's requirements (e.g. enough RAM/storage and the right peripherals). Configure: set them up correctly — install the operating system, drivers and software, and apply network settings. Test: check each component works, e.g. confirm network connectivity and that software runs. Diagnose a fault: read fault indicators — beep codes (audio from the BIOS) and blink codes (flashing lights) indicate hardware errors, and on-screen error codes can be looked up in the manufacturer's technical documentation to find the cause and solution.",
        indicative: [
          "Select components to meet the user's requirements.",
          "Configure: install OS/drivers/software and network settings.",
          "Test each component works (e.g. connectivity, software runs).",
          "Diagnose using beep codes (BIOS audio) and blink codes (lights).",
          "Look up error codes in the manufacturer's technical documentation."
        ],
        accept: [
          ["select", "requirement", "choose"],
          ["configure", "install", "driver", "operating system", "setup"],
          ["test", "check", "connectivity", "works"],
          ["beep code", "blink code", "error code", "indicator"],
          ["documentation", "manual", "manufacturer"]
        ],
        levels: [
          { range: "0", text: "No rewardable material." },
          { range: "1-2", text: "Basic: mentions one stage (select/configure/test or diagnosis)." },
          { range: "3-4", text: "Good: covers selection, configuration/testing and some fault diagnosis." },
          { range: "5-6", text: "Thorough: clearly covers select, configure, test AND fault diagnosis with indicators/documentation." }
        ]
      }
    },
    co3: {
      shorts: [
        { id: "T3S1", marks: 2, type: "short",
          q: "Explain the difference between data and information.",
          accept: ["raw", "facts", "figures", "context", "meaning", "no context"], minKeywords: 2,
          model: "Data is raw facts and figures with no context (1); information is data that has been given context to add meaning (1)." },
        { id: "T3S2", marks: 2, type: "short",
          q: "State two of the six Vs of Big Data.",
          accept: ["volume", "velocity", "variety", "veracity", "value", "variability"], minKeywords: 2,
          model: "Any two of: Volume, Velocity, Variety, Veracity, Value, Variability (1 each)." },
        { id: "T3S3", marks: 2, type: "short",
          q: "Name two common data formats used to store or exchange data.",
          accept: ["csv", "json", "xml", "ascii", "utf-8", "utf8", "text", "txt"], minKeywords: 2,
          model: "Any two of: CSV, JSON, XML, text (.txt), ASCII, UTF-8 (1 each)." }
      ],
      sixMark: {
        id: "T3B", marks: 6, type: "extended", source: "CO3",
        context: "A charity is building a new system to collect and store donor data entered by volunteers from paper forms.",
        q: "Discuss how the charity could ensure good data quality and reduce data-entry errors in this system. (6)",
        model: "Validation should automatically check that entered data is sensible and in range (e.g. a donation amount or a valid email), rejecting impossible values. Verification, such as entering key data twice (double entry) or proofreading, checks the data was copied correctly and helps catch transcription and transposition errors. The form design helps too: drop-down menus limit choices, pre-filled defaults speed entry, and clear on-screen guidance reduces mistakes. Maintaining consistency (uniform formats), protecting integrity and removing redundant duplicate records keep the data reliable. Staff training and robust procedures support all of this — remember 'garbage in, garbage out'.",
        indicative: [
          "Validation: automatic check data is sensible/in range; rejects impossible values.",
          "Verification: double entry or proofreading catches transcription/transposition errors.",
          "Form design: drop-downs, pre-filled defaults, clear guidance reduce errors.",
          "Consistency, integrity and removing redundancy keep data reliable.",
          "Staff training and procedures ('garbage in, garbage out')."
        ],
        accept: [
          ["validation", "range", "sensible", "reject"],
          ["verification", "double entry", "proofread", "transcription", "transposition"],
          ["drop-down", "dropdown", "default", "guidance", "form"],
          ["consistency", "integrity", "redundancy", "reliable", "training"]
        ],
        levels: [
          { range: "0", text: "No rewardable material." },
          { range: "1-2", text: "Basic: names one method with little development." },
          { range: "3-4", text: "Good: covers validation/verification and form design with some development." },
          { range: "5-6", text: "Thorough: several quality-assurance methods developed clearly in context." }
        ]
      }
    }
  }
};

/* ----------------------------------------------------------------------------
   BADGES — earned through play (logic lives in app.js)
   -------------------------------------------------------------------------- */
const BADGES = [
  { id: "first-steps",   icon: "🚀", name: "First Steps",     desc: "Complete your first level." },
  { id: "co1-clear",     icon: "🧩", name: "Logic Master",    desc: "Pass the Problem Solving topic test." },
  { id: "co2-clear",     icon: "🛠️", name: "Support Hero",    desc: "Pass the Digital Support topic test." },
  { id: "co3-clear",     icon: "📊", name: "Data Master",     desc: "Pass the Data topic test." },
  { id: "flash-50",      icon: "🃏", name: "Card Shark",      desc: "Flip 50 flashcards." },
  { id: "quiz-ace",      icon: "🎯", name: "Sharpshooter",    desc: "Score 100% on any level quiz." },
  { id: "streak-3",      icon: "🔥", name: "On Fire",         desc: "Reach a 3-day study streak." },
  { id: "boss-unlocked", icon: "🔓", name: "Challenger",      desc: "Unlock Boss Mode by passing all three topic tests." },
  { id: "boss-pass",     icon: "👑", name: "Arena Champion",  desc: "Pass Boss Mode (grade C or above)." },
  { id: "boss-astar",    icon: "🌟", name: "Legendary",       desc: "Earn an A* in Boss Mode." }
];

/* Expose to app.js (plain globals — no build step / modules required) */
window.CYBERCORE = { WORLDS, EXAM, TOPIC_TESTS, BADGES };
