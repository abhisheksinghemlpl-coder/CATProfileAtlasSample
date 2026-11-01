// Profile Atlas — single-file Cloudflare Worker + Durable Object. Deploy with wrangler.toml alongside.

// src/worker.js
import { DurableObject } from "cloudflare:workers";

// data/content.js
var content_default = {
  "PILLARS": [
    {
      "id": "G-QA",
      "sec": "QA",
      "name": "Quantitative Aptitude",
      "w": 30,
      "fam": "gate",
      "dur": false,
      "tests": "Arithmetic, algebra, geometry, number properties \u2014 done fast and clean under a section clock. Not depth of maths; speed, accuracy and knowing which question to leave.",
      "claim": "Your most honest read of where QA stands",
      "claimEg": "e.g. arithmetic is solid, geometry is shaky, I attempt 18 and get 12 right",
      "probe": [
        {
          "id": "q1",
          "q": "Which two QA topics cost you the most marks right now, and what have you actually done about them this month?",
          "ph": "Name the topics. 'Everything' is not an answer a plan can use."
        },
        {
          "id": "q2",
          "q": "In your last timed QA section, how many did you attempt, how many were right, and how many were silly errors?",
          "ph": "Attempts, accuracy, careless mistakes. If you don't know, that is the first thing to fix."
        }
      ],
      "self": "How ready is your QA for a timed section today?",
      "ev": [
        {
          "id": "a",
          "t": "I've finished the core concepts across arithmetic, algebra and geometry",
          "w": 16
        },
        {
          "id": "b",
          "t": "My mental math and calculation speed are reliable under time",
          "w": 12
        },
        {
          "id": "c",
          "t": "I keep a written error log and review it",
          "w": 14
        },
        {
          "id": "d",
          "t": "I've done topic-wise timed practice, not just untimed sums",
          "w": 14
        },
        {
          "id": "e",
          "t": "My last mock QA percentile was 85 or higher",
          "w": 16
        },
        {
          "id": "f",
          "t": "I can spot and skip a time-trap question without finishing it",
          "w": 12
        },
        {
          "id": "g",
          "t": "I've drilled the topics I'm weak at, not just the ones I enjoy",
          "w": 10
        },
        {
          "id": "h",
          "t": "My accuracy in QA is above 80% of what I attempt",
          "w": 14
        }
      ],
      "sp": [
        "Which QA topic would you refuse to attempt on exam day, and why?",
        "Walk me through how you decide, in 20 seconds, whether to attempt a question.",
        "What changed in your QA between your first mock and your last?"
      ]
    },
    {
      "id": "G-VA",
      "sec": "VARC",
      "name": "Verbal & Reading Comprehension",
      "w": 30,
      "fam": "gate",
      "dur": false,
      "tests": "Reading dense, unfamiliar prose fast and answering RC without falling for the trap option \u2014 plus para-jumbles, summary and odd-one-out. Built on a reading habit, not tricks.",
      "claim": "Where VARC actually stands for you",
      "claimEg": "e.g. I read fast but overthink RC options, verbal ability section is my strength",
      "probe": [
        {
          "id": "q1",
          "q": "How much dense non-fiction do you read a day that is not exam material, and for how long?",
          "ph": "Editorials, long-form, essays. Minutes per day, honestly."
        },
        {
          "id": "q2",
          "q": "When you get RC wrong, is it comprehension or option-elimination? How do you know?",
          "ph": "Look at your last RC set. Which stage failed?"
        }
      ],
      "self": "How ready is your VARC for a timed section today?",
      "ev": [
        {
          "id": "a",
          "t": "I read dense non-fiction most days, outside prep",
          "w": 14
        },
        {
          "id": "b",
          "t": "I can finish a long RC passage and its questions inside the time budget",
          "w": 14
        },
        {
          "id": "c",
          "t": "I have a repeatable method for eliminating RC trap options",
          "w": 16
        },
        {
          "id": "d",
          "t": "Para-jumbles, summary and odd-sentence are reliable for me",
          "w": 12
        },
        {
          "id": "e",
          "t": "My last mock VARC percentile was 85 or higher",
          "w": 16
        },
        {
          "id": "f",
          "t": "I review why each wrong option was wrong, not just the right one",
          "w": 14
        },
        {
          "id": "g",
          "t": "I can hold my accuracy without slowing to a crawl",
          "w": 10
        },
        {
          "id": "h",
          "t": "I read across unfamiliar subjects \u2014 science, philosophy, economics",
          "w": 10
        }
      ],
      "sp": [
        "Summarise the last thing you read in one sentence.",
        "When two RC options both look right, how do you choose?",
        "What kind of passage throws you, and what do you do about it?"
      ]
    },
    {
      "id": "G-DI",
      "sec": "DILR",
      "name": "Data Interpretation & Logical Reasoning",
      "w": 28,
      "fam": "gate",
      "dur": false,
      "tests": "Reading a set fast, judging in 60 seconds whether it is solvable, and cracking it cleanly. The most swingy section \u2014 set selection matters as much as ability.",
      "claim": "Where DILR stands for you",
      "claimEg": "e.g. I can solve most sets but I pick the wrong ones and run out of time",
      "probe": [
        {
          "id": "q1",
          "q": "How do you decide which set to attempt first, and how long do you give a set before abandoning it?",
          "ph": "Your actual rule. If you don't have one, that is the gap."
        },
        {
          "id": "q2",
          "q": "Which set types do you avoid, and have you deliberately practised them?",
          "ph": "Games, tournaments, networks, Venn, arrangements \u2014 name the ones that scare you."
        }
      ],
      "self": "How ready is your DILR for a timed section today?",
      "ev": [
        {
          "id": "a",
          "t": "I practise DILR sets daily or near-daily",
          "w": 14
        },
        {
          "id": "b",
          "t": "I can judge in about a minute whether a set is worth attempting",
          "w": 16
        },
        {
          "id": "c",
          "t": "I have a set-selection strategy I actually follow in mocks",
          "w": 16
        },
        {
          "id": "d",
          "t": "I've drilled the set types I find hard, not only the easy ones",
          "w": 14
        },
        {
          "id": "e",
          "t": "My last mock DILR percentile was 85 or higher",
          "w": 16
        },
        {
          "id": "f",
          "t": "I keep accuracy high on the sets I choose to attempt",
          "w": 12
        },
        {
          "id": "g",
          "t": "I don't panic and switch sets halfway through",
          "w": 12
        }
      ],
      "sp": [
        "You have four sets and time for two. How do you choose?",
        "Tell me about a set you abandoned correctly, and one you should have.",
        "Which set type have you improved most on, and how?"
      ]
    },
    {
      "id": "G-MK",
      "sec": "MOCK",
      "name": "Test Craft & Mock Analysis",
      "w": 12,
      "fam": "gate",
      "dur": true,
      "tests": "The meta-skill that turns section ability into a score: taking full proctored mocks on schedule, then spending real time dissecting each one. The single biggest score mover most people neglect.",
      "claim": "Your current mock and analysis habit, honestly",
      "claimEg": "e.g. I take a mock a week but barely analyse them, or I hoard mocks and never sit a full one",
      "probe": [
        {
          "id": "q1",
          "q": "After your last full mock, how long did you spend analysing it, and what did you write down?",
          "ph": "Minutes, and what the analysis actually produced. 'I checked the score' is not analysis."
        },
        {
          "id": "q2",
          "q": "Do you take mocks in one sitting, timed, in exam conditions \u2014 or in pieces?",
          "ph": "Be honest. A mock taken in fragments teaches you very little about your temperament."
        }
      ],
      "self": "How disciplined is your mock and analysis routine?",
      "ev": [
        {
          "id": "a",
          "t": "I take full-length proctored mocks in one timed sitting",
          "w": 16
        },
        {
          "id": "b",
          "t": "I spend at least 90 minutes analysing each mock",
          "w": 18
        },
        {
          "id": "c",
          "t": "I log every mistake by type \u2014 concept, careless, selection, time",
          "w": 16
        },
        {
          "id": "d",
          "t": "My mock frequency is rising as the exam gets closer",
          "w": 10
        },
        {
          "id": "e",
          "t": "I've stopped repeating the same category of mistake across mocks",
          "w": 14
        },
        {
          "id": "f",
          "t": "I track attempts, accuracy and time per section, not just percentile",
          "w": 12
        },
        {
          "id": "g",
          "t": "I've built a personal time-and-selection strategy from my own data",
          "w": 14
        }
      ],
      "hab": true,
      "sp": [
        "What did your last mock analysis change in how you take the next one?",
        "Which mistake type shows up again and again in your log?",
        "What is your section-by-section time plan for exam day, and where did it come from?"
      ]
    },
    {
      "id": "P-AC",
      "name": "Academic Record",
      "w": 18,
      "fam": "prof",
      "dur": false,
      "frozen": true,
      "tests": "Tenth, twelfth and your degree. Most of this is frozen \u2014 a panel reads it as it is. What is live is a degree still in progress, academic diversity, and the honest story behind any dip.",
      "claim": "The academic fact you would put forward first",
      "claimEg": "e.g. 92% in twelfth, or a 9.1 CGPA in engineering, or gold medal in my department",
      "probe": [
        {
          "id": "q1",
          "q": "Where is the weakest number in your record \u2014 tenth, twelfth or degree \u2014 and what is the honest, non-defensive reason?",
          "ph": "A dip you own reads better than one you dodge. No excuses; a reason and what you did next."
        },
        {
          "id": "q2",
          "q": "What have you done academically that isn't just marks \u2014 a paper, a project, a subject you went deep on?",
          "ph": ""
        }
      ],
      "self": "How strong is your academic record for a top-school panel?",
      "ev": [
        {
          "id": "a",
          "t": "Tenth board at 85% or above",
          "w": 12
        },
        {
          "id": "b",
          "t": "Twelfth board at 85% or above",
          "w": 12
        },
        {
          "id": "c",
          "t": "Degree CGPA strong for my course (roughly top quarter)",
          "w": 16
        },
        {
          "id": "d",
          "t": "My record is consistent \u2014 no unexplained dip or gap",
          "w": 10
        },
        {
          "id": "e",
          "t": "A quantitative or analytical degree, or strong maths background",
          "w": 10
        },
        {
          "id": "f",
          "t": "A merit rank, medal, scholarship or dean's list",
          "w": 14
        },
        {
          "id": "g",
          "t": "A real academic project, paper or thesis with a result",
          "w": 16
        },
        {
          "id": "h",
          "t": "Non-engineering background (academic diversity at many schools)",
          "w": 6
        }
      ],
      "sp": [
        "Your twelfth marks dipped. What happened, and what did you learn?",
        "Why should a management school care about your degree marks?",
        "Tell me about the one academic project you're proud of."
      ]
    },
    {
      "id": "P-WK",
      "name": "Work Experience & Internships",
      "w": 22,
      "fam": "prof",
      "dur": true,
      "tests": "Not months on a payroll \u2014 a story of responsibility and measurable impact. For a professional this is your biggest asset. For a student, a documented internship or live project is how you build it.",
      "claim": "The work or internship achievement you'd lead with",
      "claimEg": "e.g. cut process time 30% in my ops role, or ran a 40-store field survey as an intern",
      "probe": [
        {
          "id": "q1",
          "q": "State one thing you changed at work or in an internship, with a number attached \u2014 money, time, users, or scale.",
          "ph": "A number a panel can test. 'Helped the team' is invisible; '30% faster' is not."
        },
        {
          "id": "q2",
          "q": "Why do you want an MBA now instead of continuing on your current track?",
          "ph": "The single most-asked question of anyone with work experience. Have a real answer."
        }
      ],
      "self": "How strong is your professional or internship story?",
      "ev": [
        {
          "id": "a",
          "t": "I have full-time work experience, or a substantial internship",
          "w": 14
        },
        {
          "id": "b",
          "t": "I can point to a result I own, with a number attached",
          "w": 18
        },
        {
          "id": "c",
          "t": "I've led or coordinated people, or owned a workstream end to end",
          "w": 14
        },
        {
          "id": "d",
          "t": "I have a promotion, rating or written recognition on record",
          "w": 12
        },
        {
          "id": "e",
          "t": "My work connects logically to why I want an MBA",
          "w": 14
        },
        {
          "id": "f",
          "t": "I've worked with data, customers or money directly",
          "w": 12
        },
        {
          "id": "g",
          "t": "A documented live project or freelance work with an outcome",
          "w": 12
        },
        {
          "id": "h",
          "t": "I can explain what my organisation does and how it makes money",
          "w": 8
        }
      ],
      "sp": [
        "Tell me the one thing you're proudest of at work, and how you measured it.",
        "What did your last appraisal say you needed to improve?",
        "If your manager were here, what would they say you're not good at?"
      ]
    },
    {
      "id": "P-LD",
      "name": "Leadership & Responsibility",
      "w": 16,
      "fam": "prof",
      "dur": true,
      "tests": "Positions of responsibility, but read as decisions and outcomes, not titles. One thing that would not exist if you had not run it.",
      "claim": "The role or initiative you'd bring up in an interview",
      "claimEg": "e.g. placement coordinator, ran the college fest, captained a team of 20",
      "probe": [
        {
          "id": "q1",
          "q": "What was the hardest call you made in that role, who was unhappy, and how did it turn out?",
          "ph": "Panels ask this exactly. The decision, the trade-off, the consequence."
        },
        {
          "id": "q2",
          "q": "What would not have happened if you had not been there?",
          "ph": ""
        }
      ],
      "self": "How much real responsibility have you carried?",
      "ev": [
        {
          "id": "a",
          "t": "I've held a formal position \u2014 club, committee, team, society",
          "w": 12
        },
        {
          "id": "b",
          "t": "I started something that didn't exist before me",
          "w": 16
        },
        {
          "id": "c",
          "t": "I've coordinated 10+ people toward a deadline",
          "w": 14
        },
        {
          "id": "d",
          "t": "I made a decision that some people disagreed with, and stood by it",
          "w": 14
        },
        {
          "id": "e",
          "t": "There's a measurable outcome \u2014 footfall, money raised, people served",
          "w": 16
        },
        {
          "id": "f",
          "t": "I handled a conflict or a failure inside the role",
          "w": 12
        },
        {
          "id": "g",
          "t": "I held the role for a sustained period, not a one-off event",
          "w": 10
        },
        {
          "id": "h",
          "t": "Someone would vouch for what I did, by name",
          "w": 6
        }
      ],
      "sp": [
        "Tell me about a time your team pushed back on you.",
        "What did you do when the initiative was failing?",
        "Who did the actual work, and what did you do?"
      ]
    },
    {
      "id": "P-EC",
      "name": "Extracurriculars & Achievements",
      "w": 12,
      "fam": "prof",
      "dur": true,
      "tests": "Sport, arts, competitions, a sustained interest pursued to a real level. Depth in one thing beats a list of certificates that end in a PDF and nothing else.",
      "claim": "The activity or achievement you'd put on the form",
      "claimEg": "e.g. state-level chess, a published poem, a case-comp win, five years of classical dance",
      "probe": [
        {
          "id": "q1",
          "q": "What have you stuck with for years, and what did the discipline of it teach you?",
          "ph": "Longevity is the signal. A hobby of three weeks is not this."
        },
        {
          "id": "q2",
          "q": "What's the highest level you competed or performed at, and what did it cost you?",
          "ph": ""
        }
      ],
      "self": "How real is your extracurricular depth?",
      "ev": [
        {
          "id": "a",
          "t": "I've pursued one activity seriously for years",
          "w": 14
        },
        {
          "id": "b",
          "t": "I've competed or performed beyond my own campus",
          "w": 14
        },
        {
          "id": "c",
          "t": "I've won or placed at district level or above",
          "w": 16
        },
        {
          "id": "d",
          "t": "A case competition, hackathon or B-plan result",
          "w": 14
        },
        {
          "id": "e",
          "t": "An achievement with an external record \u2014 a rank, a publication, a certificate that means something",
          "w": 12
        },
        {
          "id": "f",
          "t": "A genuine interest I can talk about for ten minutes with a stranger",
          "w": 12
        },
        {
          "id": "g",
          "t": "Volunteering or social work I sustained, not a one-day drive",
          "w": 10
        },
        {
          "id": "h",
          "t": "An interest that isn't on everyone else's form",
          "w": 8
        }
      ],
      "sp": [
        "Everyone lists this. Why should I believe yours is real?",
        "What's the last thing this taught you?",
        "How do you find time for it alongside everything else?"
      ]
    },
    {
      "id": "P-AW",
      "name": "Business Awareness & Current Affairs",
      "w": 16,
      "fam": "prof",
      "dur": true,
      "tests": "The raw material of WAT, GD and PI: a news habit, one industry known properly, a working grasp of the economy, and a view of your own on the things in the headlines.",
      "claim": "The business or industry you know best",
      "claimEg": "e.g. quick commerce unit economics, the semiconductor supply chain, Indian banking",
      "probe": [
        {
          "id": "q1",
          "q": "Take one industry and explain how the money moves \u2014 where revenue comes from and where it goes.",
          "ph": "Revenue lines, main costs, what's left. Approximate numbers are fine; vagueness is not."
        },
        {
          "id": "q2",
          "q": "Pick a story in the news this week and give me your own view, not the newspaper's.",
          "ph": ""
        }
      ],
      "self": "How ready are you for WAT, GD and a current-affairs grilling?",
      "ev": [
        {
          "id": "a",
          "t": "I read business and general news most days",
          "w": 14
        },
        {
          "id": "b",
          "t": "I know one industry's top players and how each makes money",
          "w": 16
        },
        {
          "id": "c",
          "t": "I understand the unit economics of at least one business",
          "w": 14
        },
        {
          "id": "d",
          "t": "I follow the economy \u2014 inflation, rates, budget, key indicators",
          "w": 12
        },
        {
          "id": "e",
          "t": "I can hold a position in a group discussion without going quiet",
          "w": 14
        },
        {
          "id": "f",
          "t": "I've practised timed written arguments (WAT-style)",
          "w": 12
        },
        {
          "id": "g",
          "t": "I form my own view on issues rather than repeating headlines",
          "w": 12
        },
        {
          "id": "h",
          "t": "I track 15+ current topics with a note on each",
          "w": 12
        }
      ],
      "sp": [
        "Argue the opposite side of the last topic you mentioned.",
        "What's the biggest cost line for that industry?",
        "What economic number worries you most right now, and why?"
      ]
    },
    {
      "id": "P-NR",
      "name": "Narrative \u2014 Why MBA & Goals",
      "w": 16,
      "fam": "prof",
      "dur": false,
      "tests": "The spine that ties the whole profile together: why an MBA, why now, where it takes you, and a story that connects your past to that future without sounding rehearsed.",
      "claim": "Your one-line answer to why an MBA",
      "claimEg": "e.g. to move from execution to running a business, with a path through consulting",
      "probe": [
        {
          "id": "q1",
          "q": "Where do you want to be in five years, specifically \u2014 role, sector, kind of problem \u2014 and how does an MBA get you there?",
          "ph": "Specific. 'A leadership role' is what everyone says and no one believes."
        },
        {
          "id": "q2",
          "q": "What's the honest, personal reason underneath the professional one?",
          "ph": "Panels can smell a rehearsed answer. The real reason is usually more convincing."
        }
      ],
      "self": "How clear and defensible is your why-MBA story?",
      "ev": [
        {
          "id": "a",
          "t": "I can say why I want an MBA in one honest sentence",
          "w": 14
        },
        {
          "id": "b",
          "t": "I have a specific 3-to-5 year goal, not a vague one",
          "w": 16
        },
        {
          "id": "c",
          "t": "My past, present and goal connect into one story",
          "w": 16
        },
        {
          "id": "d",
          "t": "I can explain why now, rather than later",
          "w": 12
        },
        {
          "id": "e",
          "t": "I've written my answers to the standard PI questions",
          "w": 14
        },
        {
          "id": "f",
          "t": "I've done at least one mock interview and acted on the feedback",
          "w": 14
        },
        {
          "id": "g",
          "t": "I have a real answer to 'what's your biggest weakness'",
          "w": 8
        },
        {
          "id": "h",
          "t": "My reasons hold up when someone pushes back on them",
          "w": 6
        }
      ],
      "sp": [
        "Why not just keep doing what you're doing?",
        "In five years, what specifically is different because you did an MBA?",
        "Convince me you won't change your mind about all this in six months."
      ]
    }
  ],
  "ACTIONS": [
    {
      "id": "QA-B1",
      "p": "G-QA",
      "l": "B",
      "t": "Rebuild the arithmetic core",
      "why": "Percentages, ratios, time-speed-distance and averages sit under half of QA. Fix these and a chunk of the section stops being scary.",
      "fs": "Pick percentages. Do 15 questions untimed today and write down which sub-type tripped you.",
      "wh": 3.5,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A topic tracker with accuracy per sub-topic",
      "lev": 4,
      "pq": [
        "Which arithmetic sub-type is still shaky?",
        "How do you convert a fraction to a percentage in your head?",
        "What's your reliable method for ratio problems?"
      ]
    },
    {
      "id": "QA-B2",
      "p": "G-QA",
      "l": "B",
      "t": "Daily mental-math drill",
      "why": "Speed is trainable. Tables, squares, cubes and fraction-percent conversions done daily free up seconds you spend elsewhere.",
      "fs": "Learn squares to 30 and fraction-to-percent for 1/n up to 12. Test yourself in 20 minutes.",
      "wh": 2,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A speed log of timed 20-question sets",
      "lev": 3,
      "hab": true,
      "pq": [
        "What's 1/7 as a percentage, fast?",
        "How much has your calculation speed improved this month?",
        "Where do you still reach for a calculator you shouldn't?"
      ]
    },
    {
      "id": "QA-I1",
      "p": "G-QA",
      "l": "I",
      "t": "Topic-wise timed practice with an error log",
      "why": "Untimed practice hides the real problem. Timed sets plus a written error log is where QA scores actually move.",
      "fs": "Do one 20-minute timed topic set today, then log every wrong answer as concept / careless / time.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An error log sorted by mistake type",
      "lev": 5,
      "pq": [
        "What's the most common mistake type in your log?",
        "Which topic has the worst accuracy-to-time ratio?",
        "What did last week's log change this week?"
      ]
    },
    {
      "id": "QA-I2",
      "p": "G-QA",
      "l": "I",
      "t": "Attack your two weakest topics",
      "why": "Most people practise what they enjoy. The score is trapped in the two topics you avoid.",
      "fs": "Name your two worst QA topics right now. Book both into this week's sessions before anything you're already good at.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Before/after accuracy on the two weak topics",
      "lev": 4,
      "pq": [
        "Which two topics did you avoid, and why?",
        "How much did accuracy move after deliberate practice?",
        "What's the next weakest topic after these two?"
      ]
    },
    {
      "id": "QA-A1",
      "p": "G-QA",
      "l": "A",
      "t": "High-difficulty sets and timed QA sections",
      "why": "Once fundamentals hold, difficulty and pace are the last mile to a 95+ section. Timed full sections build the stamina.",
      "fs": "Sit one full timed QA section today at exam length and note where your accuracy fell off a cliff.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Section-level attempt/accuracy/time data",
      "lev": 4,
      "pq": [
        "At what point in a section does your accuracy drop?",
        "Which hard topic can you now attempt that you couldn't?",
        "What's your target attempt-count for the QA section?"
      ]
    },
    {
      "id": "QA-P1",
      "p": "G-QA",
      "l": "I",
      "t": "A structured QA question bank or test series",
      "why": "A good paid bank gives graded difficulty and solutions you'd otherwise spend hours assembling. Useful, never required.",
      "fs": "If you take one, do a single graded set and check the solution quality before committing time.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "paid",
      "tier": 1,
      "art": "Graded practice history",
      "lev": 3,
      "pq": [
        "Is the paid bank actually better than free sets you've tried?",
        "Which difficulty tier are you stuck at?",
        "Are you using the solutions to learn or just to check?"
      ]
    },
    {
      "id": "VA-B1",
      "p": "G-VA",
      "l": "B",
      "t": "A daily dense-reading habit",
      "why": "VARC is a reading test wearing an exam costume. Thirty minutes a day of hard non-fiction does more than any RC 'trick'.",
      "fs": "Read one long editorial or essay today and write its argument in one sentence.",
      "wh": 3.5,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A reading log with one-line summaries",
      "lev": 5,
      "hab": true,
      "pq": [
        "What did you read today, and what was its core claim?",
        "How has your reading speed changed?",
        "What subject do you now read that you used to avoid?"
      ]
    },
    {
      "id": "VA-B2",
      "p": "G-VA",
      "l": "B",
      "t": "Build a repeatable RC method",
      "why": "Random RC accuracy comes from a random approach. A fixed method \u2014 map the structure, then answer \u2014 makes it consistent.",
      "fs": "Take one RC passage, mark the shift in each paragraph, then answer. Notice if mapping first helped.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A written RC approach you actually follow",
      "lev": 4,
      "pq": [
        "What's your step-by-step RC method?",
        "Where does your method still break down?",
        "How do you handle a passage on a subject you dislike?"
      ]
    },
    {
      "id": "VA-I1",
      "p": "G-VA",
      "l": "I",
      "t": "Timed RC with a wrong-option post-mortem",
      "why": "Reviewing why the wrong option was wrong \u2014 not just why the right one was right \u2014 is where RC accuracy is won.",
      "fs": "Do two timed RC sets, then for each miss write one line on what made the trap option tempting.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A trap-option log",
      "lev": 5,
      "pq": [
        "What kind of trap option catches you most?",
        "Is your problem comprehension or elimination?",
        "How do you decide between two plausible options?"
      ]
    },
    {
      "id": "VA-I2",
      "p": "G-VA",
      "l": "I",
      "t": "Drill para-jumbles, summary and odd-one-out",
      "why": "The non-RC verbal questions are pure marks if you make them reliable, and pure risk if you don't.",
      "fs": "Do 10 para-jumbles today and note the logic you used to fix the opening sentence.",
      "wh": 2.5,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Accuracy record on each question type",
      "lev": 3,
      "pq": [
        "What's your method for finding the opening sentence?",
        "Which of these three types is weakest for you?",
        "How reliable are you on summary questions now?"
      ]
    },
    {
      "id": "VA-A1",
      "p": "G-VA",
      "l": "A",
      "t": "Read wide, then sit full timed VARC sections",
      "why": "A 95+ VARC comes from comfort with unfamiliar, abstract prose plus section-length stamina. Both are trainable.",
      "fs": "Read one philosophy or hard-science essay today, then plan a full timed VARC section this week.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Full-section VARC performance data",
      "lev": 4,
      "pq": [
        "What kind of passage still throws you?",
        "How do you keep accuracy across a full section?",
        "What's your target VARC attempt count?"
      ]
    },
    {
      "id": "DI-B1",
      "p": "G-DI",
      "l": "B",
      "t": "Two DILR sets a day, every day",
      "why": "DILR is a pattern-recognition muscle. Daily reps are the only thing that reliably builds it.",
      "fs": "Solve two sets today, untimed, and write what type each was.",
      "wh": 3.5,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A set-type log with solve times",
      "lev": 5,
      "hab": true,
      "pq": [
        "Which set types have you seen most this week?",
        "What's your solve time trending toward?",
        "Which type still feels unfamiliar?"
      ]
    },
    {
      "id": "DI-B2",
      "p": "G-DI",
      "l": "B",
      "t": "Learn to judge a set in 60 seconds",
      "why": "Half of DILR is choosing right. Reading a set and deciding fast whether it's solvable saves the section.",
      "fs": "Look at three sets today and, before solving, rate each easy/medium/skip. Then check if you were right.",
      "wh": 2.5,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A judgement-accuracy record",
      "lev": 4,
      "pq": [
        "How do you tell a solvable set from a trap fast?",
        "When were you wrong about a set's difficulty?",
        "What signals make you skip a set now?"
      ]
    },
    {
      "id": "DI-I1",
      "p": "G-DI",
      "l": "I",
      "t": "Build a set-selection strategy and follow it",
      "why": "Ability without selection strategy still scores badly. A rule you follow under pressure is the fix.",
      "fs": "Write your rule: how many sets you scan, how long before you abandon one. Test it in the next mock.",
      "wh": 3.5,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A written, tested selection rule",
      "lev": 5,
      "pq": [
        "What's your set-selection rule, exactly?",
        "How long do you give a set before abandoning it?",
        "When did the rule save you, and when did it fail?"
      ]
    },
    {
      "id": "DI-I2",
      "p": "G-DI",
      "l": "I",
      "t": "Drill the set types you avoid",
      "why": "The scary types \u2014 games, tournaments, networks \u2014 show up in mocks precisely because people skip practising them.",
      "fs": "Pick the type you dread most and do three of them today, slowly, until the structure clicks.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Before/after solve rate on hard types",
      "lev": 4,
      "pq": [
        "Which set type did you avoid, and can you do it now?",
        "What made it click?",
        "What's the next type to attack?"
      ]
    },
    {
      "id": "DI-A1",
      "p": "G-DI",
      "l": "A",
      "t": "Novel set types and timed DILR sections",
      "why": "CAT's DILR rewards adaptability to sets you've never seen. Exposure plus timed sections builds nerve.",
      "fs": "Find an unusual set format today, solve it without help, and time yourself on a full section this week.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Full-section DILR data across set types",
      "lev": 4,
      "pq": [
        "How do you approach a set format you've never seen?",
        "What's your accuracy on the sets you choose?",
        "What's your target: how many sets, how many questions?"
      ]
    },
    {
      "id": "MK-B1",
      "p": "G-MK",
      "l": "B",
      "t": "Sit your first full mock, one timed sitting",
      "why": "Until you take a full mock in exam conditions, you're guessing at your own stamina and temperament.",
      "fs": "Block three hours this week, phone away, and take one full proctored mock start to finish.",
      "wh": 3,
      "mw": 2,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Your first honest baseline percentile",
      "lev": 4,
      "pq": [
        "What surprised you about taking a full mock?",
        "Where did your energy or focus drop?",
        "What's your baseline, and how do you feel about it?"
      ]
    },
    {
      "id": "MK-I1",
      "p": "G-MK",
      "l": "I",
      "t": "The 90-minute analysis ritual",
      "why": "This is the single biggest score mover most people skip. The mock isn't the lesson \u2014 the analysis is.",
      "fs": "Take your last mock and spend 90 minutes today logging every mistake by type: concept, careless, selection, time.",
      "wh": 3,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A per-mock error log by mistake type",
      "lev": 5,
      "hab": true,
      "pq": [
        "What does your error log say you keep getting wrong?",
        "Which mistake type is most fixable fastest?",
        "What did analysis change in your next attempt?"
      ]
    },
    {
      "id": "MK-I2",
      "p": "G-MK",
      "l": "I",
      "t": "Ramp mock frequency toward the exam",
      "why": "One mock a fortnight early, two or three a week near the end. The ramp builds exam-day endurance.",
      "fs": "Put your mock dates on a calendar now, increasing as the exam nears, and protect them like appointments.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A mock calendar with a rising curve",
      "lev": 4,
      "pq": [
        "What's your mock schedule for the final eight weeks?",
        "Are you analysing each one before taking the next?",
        "How's your stamina holding across back-to-back mocks?"
      ]
    },
    {
      "id": "MK-A1",
      "p": "G-MK",
      "l": "A",
      "t": "Build your personal exam-day strategy from your data",
      "why": "The best time-and-selection plan is the one your own mocks prove works for you \u2014 not a generic one.",
      "fs": "From your last five mocks, write your section order, time splits and skip rules. Test them next mock.",
      "wh": 2.5,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A one-page personal exam-day playbook",
      "lev": 5,
      "pq": [
        "What's your section order and why?",
        "Where does your data say you leave marks on the table?",
        "What's your rule when a section starts going badly?"
      ]
    },
    {
      "id": "MK-P1",
      "p": "G-MK",
      "l": "I",
      "t": "A quality mock test series",
      "why": "If you buy one paid thing, a good mock series is usually it \u2014 realistic difficulty and percentile calibration. Still optional.",
      "fs": "Take one mock from any series and check whether its difficulty and analytics feel exam-realistic.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "paid",
      "tier": 1,
      "art": "A calibrated percentile trend across mocks",
      "lev": 4,
      "pq": [
        "Does the series' difficulty match the real exam?",
        "Are the analytics telling you something free mocks didn't?",
        "Is your percentile trend rising across the series?"
      ]
    },
    {
      "id": "AC-B1",
      "p": "P-AC",
      "l": "B",
      "t": "Protect and lift your degree CGPA",
      "why": "If you're still studying, the one academic number you can still move is your degree CGPA. Don't let prep tank it.",
      "fs": "Check your current CGPA and the marks you need this semester to hold or lift it. Write the target down.",
      "wh": 2,
      "mw": 8,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A rising or protected CGPA",
      "lev": 3,
      "pq": [
        "What's your CGPA target this semester, and is it realistic?",
        "How are you balancing coursework with prep?",
        "Which subject is the risk to your CGPA?"
      ]
    },
    {
      "id": "AC-I1",
      "p": "P-AC",
      "l": "I",
      "t": "Prepare the honest answer for your weakest number",
      "why": "You can't change a past mark, but you can decide how it's read. A calm, owned explanation defuses it.",
      "fs": "Write, in four sentences, what happened around your weakest academic number and what you did afterwards.",
      "wh": 1,
      "mw": 2,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A rehearsed, non-defensive explanation",
      "lev": 4,
      "pq": [
        "Why did that number dip?",
        "What did you change afterwards?",
        "Why should that not worry a panel about you now?"
      ]
    },
    {
      "id": "AC-A1",
      "p": "P-AC",
      "l": "A",
      "t": "Do a real academic project with a result",
      "why": "A paper, thesis or serious project is academic evidence that isn't a mark \u2014 and it's something to actually talk about.",
      "fs": "Pick a question in your field you find genuinely interesting and draft a one-paragraph project scope today.",
      "wh": 3,
      "mw": 10,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A completed project, paper or documented result",
      "lev": 3,
      "pq": [
        "What question did your project answer?",
        "What was hard about it, and what did you find?",
        "What would you do differently with more time?"
      ]
    },
    {
      "id": "WK-B1",
      "p": "P-WK",
      "l": "B",
      "t": "Land a documented internship or live project",
      "why": "For a student, one real internship with an outcome is worth more than a page of coursework. It becomes your work story.",
      "fs": "List five organisations you could realistically intern with and draft one outreach message today.",
      "wh": 3,
      "mw": 8,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "An internship with a written outcome and a reference",
      "lev": 5,
      "pq": [
        "What did you actually do, and what changed because of it?",
        "What did the work teach you about the field?",
        "Would they take you back? Why?"
      ]
    },
    {
      "id": "WK-I1",
      "p": "P-WK",
      "l": "I",
      "t": "Turn a job responsibility into a quantified win",
      "why": "Working professionals already have the raw material. The gap is usually a result with a number a panel can test.",
      "fs": "Pick one thing you own at work and find the number \u2014 money, time, users, or scale \u2014 that proves your impact.",
      "wh": 2,
      "mw": 6,
      "per": "W",
      "cost": "free",
      "tier": 1,
      "art": "An achievement statement with a hard metric",
      "lev": 5,
      "pq": [
        "What did you change, and by how much?",
        "How did you measure it?",
        "What would your manager add or dispute?"
      ]
    },
    {
      "id": "WK-I2",
      "p": "P-WK",
      "l": "I",
      "t": "Rewrite your work as results, not duties",
      "why": "'Responsible for X' says nothing. 'Cut X by 20%' says everything. This is the resume and the PI answer both.",
      "fs": "Take your three main responsibilities and rewrite each as an outcome with a number, even if approximate.",
      "wh": 1.5,
      "mw": 3,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Result-first bullet points for every role",
      "lev": 4,
      "pq": [
        "Which of your bullets has the strongest number?",
        "Where are you still describing duties, not results?",
        "What's the one achievement you'd lead with?"
      ]
    },
    {
      "id": "WK-A1",
      "p": "P-WK",
      "l": "A",
      "t": "Own a visible cross-functional project",
      "why": "A project that crosses teams shows leadership and scope \u2014 the profile a panel remembers from a working candidate.",
      "fs": "Identify one initiative at work you could volunteer to drive, and note who you'd need to bring along.",
      "wh": 3,
      "mw": 10,
      "per": "W",
      "cost": "free",
      "tier": 1,
      "art": "A delivered cross-team project with a result",
      "lev": 4,
      "pq": [
        "Who did you have to influence without authority?",
        "What nearly derailed it?",
        "What was the measurable outcome?"
      ]
    },
    {
      "id": "WK-A2",
      "p": "P-WK",
      "l": "A",
      "t": "Take on freelance or consulting work with an outcome",
      "why": "No internship on offer? A real problem solved for a real client is work experience you created yourself.",
      "fs": "Offer to solve one concrete problem for a small business or NGO this week, for free if needed, and scope it.",
      "wh": 3,
      "mw": 10,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A delivered engagement with a client outcome",
      "lev": 3,
      "pq": [
        "What problem did you solve, and for whom?",
        "How did you price or scope it?",
        "What did the client get that they didn't have before?"
      ]
    },
    {
      "id": "LD-B1",
      "p": "P-LD",
      "l": "B",
      "t": "Take a real position of responsibility",
      "why": "A committee, club, team or society role is the standard leadership signal \u2014 provided you actually do something in it.",
      "fs": "Find one group on campus or at work looking for organisers and put your name down this week.",
      "wh": 2.5,
      "mw": 8,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A titled role with a track record",
      "lev": 4,
      "pq": [
        "What was your actual responsibility, not your title?",
        "What did you change in the role?",
        "What was the hardest part of it?"
      ]
    },
    {
      "id": "LD-B2",
      "p": "P-LD",
      "l": "B",
      "t": "Own one thing end to end",
      "why": "Leadership isn't a badge \u2014 it's being the person accountable when something ships. Volunteer to be that person once.",
      "fs": "Pick one small event or task nobody owns, and claim it start to finish. Define what 'done' means today.",
      "wh": 2,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "One thing that happened because you ran it",
      "lev": 3,
      "pq": [
        "What would not have happened without you?",
        "Who did you have to coordinate?",
        "What went wrong, and what did you do?"
      ]
    },
    {
      "id": "LD-I1",
      "p": "P-LD",
      "l": "I",
      "t": "Run an initiative with a measurable outcome",
      "why": "'I organised an event' is weak. 'I ran a drive that raised X / reached Y people' is a story with a spine.",
      "fs": "Take an initiative you're near, and define the one number that will prove it worked. Then go get that number.",
      "wh": 3,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An initiative with a hard, quotable result",
      "lev": 5,
      "pq": [
        "What was the number, and how did you hit it?",
        "Who was unhappy along the way?",
        "What did you learn about running people?"
      ]
    },
    {
      "id": "LD-A1",
      "p": "P-LD",
      "l": "A",
      "t": "Start something that didn't exist",
      "why": "Founding a club, a project or a small venture \u2014 and getting a real outcome \u2014 is the strongest leadership evidence there is.",
      "fs": "Write one paragraph on a thing your campus or workplace lacks that you could start, and the first three steps.",
      "wh": 3.5,
      "mw": 12,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A founded initiative with sustained results",
      "lev": 4,
      "pq": [
        "Why did it need to exist?",
        "How did you get the first people to join?",
        "What's it become since you started it?"
      ]
    },
    {
      "id": "EC-B1",
      "p": "P-EC",
      "l": "B",
      "t": "Commit to one interest, seriously",
      "why": "Depth beats breadth. One activity pursued for real reads better than ten certificates that led nowhere.",
      "fs": "Choose the one interest you'd defend to a stranger and schedule two hours for it this week, then keep it.",
      "wh": 2,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A sustained record in one pursuit",
      "lev": 3,
      "hab": true,
      "pq": [
        "Why this one, out of everything?",
        "What has sticking with it taught you?",
        "Where has it taken you so far?"
      ]
    },
    {
      "id": "EC-I1",
      "p": "P-EC",
      "l": "I",
      "t": "Enter a case competition or hackathon",
      "why": "A case comp is management practice with a scoreboard \u2014 and a genuinely useful line whether you place or not.",
      "fs": "Find one open case competition or hackathon this quarter and register today, solo or with a team.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A competition entry, ideally a placement",
      "lev": 4,
      "pq": [
        "What was your approach to the case?",
        "What did the judges or results teach you?",
        "What would you do differently next time?"
      ]
    },
    {
      "id": "EC-I2",
      "p": "P-EC",
      "l": "I",
      "t": "Document the achievements you already have",
      "why": "Many people have real achievements they can't prove or describe well. Fixing that is fast, high-return work.",
      "fs": "List everything you've genuinely done, and for each note the proof \u2014 a rank, a link, a name, a certificate that means something.",
      "wh": 1.5,
      "mw": 3,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An evidenced achievement list",
      "lev": 3,
      "pq": [
        "What's your strongest achievement, and can you prove it?",
        "Which of these is real depth versus a one-off?",
        "What can you actually talk about for ten minutes?"
      ]
    },
    {
      "id": "EC-A1",
      "p": "P-EC",
      "l": "A",
      "t": "Take one pursuit to a competitive or published level",
      "why": "Reaching a level others recognise \u2014 a competition, a publication, a performance \u2014 turns a hobby into evidence.",
      "fs": "Pick the one interest closest to a real milestone and define what reaching that level would take, starting now.",
      "wh": 3,
      "mw": 12,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An external recognition \u2014 rank, publication, performance",
      "lev": 3,
      "pq": [
        "What level did you reach, and how hard was it?",
        "What did competing at that level cost you?",
        "What's next for it?"
      ]
    },
    {
      "id": "AW-B1",
      "p": "P-AW",
      "l": "B",
      "t": "A daily business-news habit",
      "why": "WAT, GD and PI all run on this. Twenty minutes a day compounds into a candidate who can hold any table.",
      "fs": "Read the business section today and write one line on the story that mattered most and why.",
      "wh": 2,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A dated news journal with your own takes",
      "lev": 5,
      "hab": true,
      "pq": [
        "What's the biggest business story this week?",
        "What's your own view on it?",
        "How has your grasp of the economy changed?"
      ]
    },
    {
      "id": "AW-B2",
      "p": "P-AW",
      "l": "B",
      "t": "Learn one industry properly",
      "why": "Panels reward one industry known deeply over ten known shallowly. Pick the one you'd enjoy and go deep.",
      "fs": "Choose an industry today and write down its top three players and one line on how each makes money.",
      "wh": 2.5,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A one-page teardown of one industry",
      "lev": 4,
      "pq": [
        "How does the biggest player in that industry make money?",
        "What's its main cost line?",
        "What threatens it in the next five years?"
      ]
    },
    {
      "id": "AW-I1",
      "p": "P-AW",
      "l": "I",
      "t": "Keep a current-affairs journal with your own views",
      "why": "A summary is forgettable. A position is what wins a GD. Practise having one on everything you read.",
      "fs": "Start a running note today: 15 topics, and for each, two lines \u2014 what happened, and what you think.",
      "wh": 2,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A journal of 15+ topics with defended positions",
      "lev": 4,
      "pq": [
        "Pick a topic \u2014 argue your side, then the opposite.",
        "Which of your views has changed as you read more?",
        "What issue are you most confident discussing?"
      ]
    },
    {
      "id": "AW-I2",
      "p": "P-AW",
      "l": "I",
      "t": "Practise timed written arguments (WAT)",
      "why": "WAT is a real filter at many schools and almost nobody practises it. Twenty minutes, a prompt, a structured argument.",
      "fs": "Give yourself one prompt and 20 minutes today. Write a structured argument. Read it back for holes.",
      "wh": 1.5,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A folder of timed WAT responses",
      "lev": 4,
      "pq": [
        "How do you structure a WAT answer under time?",
        "What's the weakest part of your written argument?",
        "How do you handle a topic you know little about?"
      ]
    },
    {
      "id": "AW-A1",
      "p": "P-AW",
      "l": "A",
      "t": "Run weekly group-discussion practice",
      "why": "GD is a contact sport you can't learn alone. Regular practice with peers builds the instinct to enter and hold.",
      "fs": "Set up one GD this week with three or more people on a current topic, and get honest feedback afterwards.",
      "wh": 2,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A GD practice log with peer feedback",
      "lev": 3,
      "pq": [
        "How do you enter a GD that's already crowded?",
        "What do you do when it turns into a shouting match?",
        "When did you change the direction of a discussion?"
      ]
    },
    {
      "id": "NR-B1",
      "p": "P-NR",
      "l": "B",
      "t": "Write your why-MBA in 200 honest words",
      "why": "If you can't write it, you can't say it. Two hundred honest words is the foundation the whole interview stands on.",
      "fs": "Write 200 words on why you want an MBA \u2014 no jargon, no 'leadership role'. Read it aloud and cut anything fake.",
      "wh": 1.5,
      "mw": 2,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A tight, honest why-MBA statement",
      "lev": 5,
      "pq": [
        "Why an MBA, in one sentence?",
        "What's the real reason underneath the professional one?",
        "Why not just keep doing what you're doing?"
      ]
    },
    {
      "id": "NR-I1",
      "p": "P-NR",
      "l": "I",
      "t": "Define a specific 3-to-5 year goal and the path",
      "why": "'A leadership role' is the answer that gets you rejected. A specific role, sector and problem is the one that lands.",
      "fs": "Write your five-year target as a specific role in a specific kind of company, and the two steps the MBA unlocks.",
      "wh": 2,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A concrete goal with a plausible path",
      "lev": 5,
      "pq": [
        "Where exactly do you want to be in five years?",
        "How does the MBA connect your present to that?",
        "What's your backup if the first path doesn't open?"
      ]
    },
    {
      "id": "NR-I2",
      "p": "P-NR",
      "l": "I",
      "t": "Answer the eight standard PI questions in writing",
      "why": "Every interview draws from the same well. Writing your answers once means you're never caught flat.",
      "fs": "Write real answers today to: why MBA, why now, strengths, weakness, failure, a leadership story, why this school, and where in five years.",
      "wh": 2,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A written answer bank for the core questions",
      "lev": 4,
      "pq": [
        "What's your genuine biggest weakness?",
        "Tell me about a real failure and what it taught you.",
        "Why this school specifically?"
      ]
    },
    {
      "id": "NR-A1",
      "p": "P-NR",
      "l": "A",
      "t": "Three recorded mock interviews with post-mortems",
      "why": "Reading your answers and saying them under pressure are different skills. Recording yourself is uncomfortable and it works.",
      "fs": "Book one mock interview this week \u2014 a senior, a mentor, or a friend who'll push \u2014 and record it.",
      "wh": 2,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Three recordings, each with three written fixes",
      "lev": 5,
      "pq": [
        "What did watching yourself reveal?",
        "Which answer fell apart under pressure?",
        "What are the three fixes from your last mock?"
      ]
    },
    {
      "id": "NR-P1",
      "p": "P-NR",
      "l": "A",
      "t": "A structured GD-PI preparation program",
      "why": "A good paid program gives real panels and blunt feedback. Helpful near interview season, never necessary to clear it.",
      "fs": "Before paying, do one free mock interview and see whether your gaps really need a program or just more reps.",
      "wh": 2,
      "mw": 5,
      "per": "X",
      "cost": "paid",
      "tier": 1,
      "art": "Panel feedback across multiple mock interviews",
      "lev": 3,
      "pq": [
        "What did the panel say you do worst?",
        "Is the feedback something free practice couldn't give?",
        "Are you improving between sessions?"
      ]
    }
  ],
  "STAGES": {
    "y12": "1st / 2nd year UG",
    "prefinal": "Pre-final year UG",
    "final": "Final year UG",
    "grad": "Graduated \xB7 dedicated attempt",
    "working": "Working professional"
  },
  "DEGREES": {
    "btech": "B.Tech / B.E.",
    "bcom": "B.Com",
    "bba": "BBA / BMS",
    "bsc": "B.Sc",
    "ba": "BA / Humanities",
    "bpharm": "B.Pharm",
    "other": "Other degree"
  },
  "WORKY": {
    "y0": "Under 1 year",
    "y1": "1\u20132 years",
    "y2": "2\u20133 years",
    "y3": "3\u20135 years",
    "y5": "5+ years"
  },
  "TIERS": {
    "top": {
      "label": "IIM A / B / C, FMS, top private",
      "overall": 99,
      "gateL": 3.4,
      "profL": 3.1
    },
    "iim1": {
      "label": "Older IIMs, MDI, XLRI, SPJIMR, IIFT",
      "overall": 98,
      "gateL": 3.15,
      "profL": 2.9
    },
    "new": {
      "label": "Newer IIMs and strong private schools",
      "overall": 93,
      "gateL": 2.8,
      "profL": 2.5
    },
    "broad": {
      "label": "A solid MBA that fits your profile",
      "overall": 86,
      "gateL": 2.4,
      "profL": 2.2
    }
  },
  "SCHOOL_TIERS": [
    {
      "k": "t1",
      "nm": "IIM A / B / C, FMS, SPJIMR",
      "lo": 99,
      "hi": 100,
      "note": "99+ overall, no weak section, and academics matter for the final call."
    },
    {
      "k": "t2",
      "nm": "Older IIMs (L, K, I, S), MDI, XLRI, IIFT, NITIE",
      "lo": 96,
      "hi": 99,
      "note": "96\u201399, with sectionals holding up and a real profile behind the score."
    },
    {
      "k": "t3",
      "nm": "Newer IIMs and strong private schools",
      "lo": 90,
      "hi": 96,
      "note": "90\u201396 opens a wide, genuinely good set of schools."
    },
    {
      "k": "t4",
      "nm": "Solid private and tier-2 schools",
      "lo": 80,
      "hi": 90,
      "note": "80\u201390 still reaches respected programmes, especially with work experience."
    },
    {
      "k": "t5",
      "nm": "Broader set of MBA programmes",
      "lo": 0,
      "hi": 80,
      "note": "Below 80, look wider \u2014 and consider whether a stronger score next cycle changes the whole picture."
    }
  ]
};

// data/extra.js
var SK_PILLAR = {
  id: "P-SK",
  name: "Skills & Certifications",
  w: 12,
  fam: "prof",
  dur: true,
  tests: "Not a pile of certificates \u2014 two or three skills that fit your story and that you can actually demonstrate: Excel and analytics, finance, marketing, coding, a language.",
  claim: "The skill you could demonstrate in an interview tomorrow",
  claimEg: "e.g. built a Power BI sales dashboard in my internship; NISM Series VIII certified",
  probe: [
    { id: "q1", q: "Which one skill do you want a panel to associate with you \u2014 and how does it connect to your goal?", ph: "One skill, one reason. A list of ten courses is not an answer." },
    { id: "q2", q: "What have you built or done with a certificate you hold?", ph: "A certificate you never used is a line on a CV; a project with it is a story." }
  ],
  self: "How strong and relevant are your skills and certifications?",
  ev: [
    { id: "a", t: "I hold at least one certification from a recognised body (NPTEL, NISM, Google, Microsoft, CFA L1\u2026)", w: 14 },
    { id: "b", t: "My certifications connect to the field I want to work in", w: 16 },
    { id: "c", t: "I've applied a certified skill in a project, internship or job", w: 18 },
    { id: "d", t: "I'm comfortable with Excel beyond basics \u2014 pivots, lookups, charts", w: 12 },
    { id: "e", t: "I can work with data \u2014 SQL, Python, Power BI or similar", w: 10 },
    { id: "f", t: "I scored in the top band or with distinction in a proctored exam", w: 10 },
    { id: "g", t: "My skills are visible online \u2014 LinkedIn, GitHub or a portfolio", w: 10 },
    { id: "h", t: "I speak, or am seriously learning, a foreign language", w: 6 }
  ],
  sp: [
    "You have five certificates. Which one actually changed how you work?",
    "Show me something you built with that skill.",
    "Why this skill, and not something closer to your degree?"
  ]
};
var SK_ACTIONS = [
  { id: "SK-B1", p: "P-SK", l: "B", t: "Pick the one skill that fits your goal", why: "Random certificates read as box-ticking. One skill chosen for a reason reads as intent.", fs: "Write your 3-year goal in one line, then list the two skills people in that role use every day.", wh: 1, mw: 2, per: "X", cost: "free", tier: 1, art: "A one-page skill map: goal \u2192 skills \u2192 course", lev: 3, pq: ["Why this skill and not another?", "Who in your target role uses it, and how?", "What will you be able to do in six months that you cannot today?"] },
  { id: "SK-B2", p: "P-SK", l: "B", t: "Get genuinely good at Excel", why: "Every MBA internship assumes it. Pivots, lookups and a clean chart are the minimum; a small model is a talking point.", fs: "Take any dataset (your expenses, a cricket season) and build one pivot table and one chart today.", wh: 2, mw: 6, per: "X", cost: "free", tier: 1, art: "A model or dashboard file you built yourself", lev: 4, hab: true, pq: ["What is the most complex sheet you have built?", "When would you use INDEX-MATCH over VLOOKUP?", "Walk me through a chart you made and what it showed."] },
  { id: "SK-I1", p: "P-SK", l: "I", t: "Earn a proctored certification", why: "Proctored exams (NPTEL, NISM, Google, Microsoft) carry more weight than click-through course certificates.", fs: "Shortlist two proctored certifications in your chosen skill and note the next exam dates.", wh: 3, mw: 8, per: "X", cost: "free", tier: 1, art: "A certificate with a score or grade", lev: 4, pq: ["Why did you choose this certification?", "What was hardest in the syllabus?", "How have you used it since?"] },
  { id: "SK-I2", p: "P-SK", l: "I", t: "Complete a virtual job simulation", why: "Free company simulations (consulting, banking, marketing) let you do real-format work and talk about it credibly.", fs: "Pick one simulation in the field you are targeting and finish the first task this week.", wh: 2, mw: 3, per: "X", cost: "free", tier: 1, art: "Completion certificate plus your work sample", lev: 3, pq: ["What did the simulation ask you to produce?", "What did you learn about the job itself?", "Would you want that role? Why?"] },
  { id: "SK-A1", p: "P-SK", l: "A", t: "Apply the skill to a real problem", why: "A skill used on a real problem \u2014 a club, a family business, an NGO \u2014 turns a certificate into a result.", fs: "List three people or groups with a problem your skill could help with. Message one today.", wh: 3, mw: 8, per: "X", cost: "free", tier: 1, art: "A published project with a measurable outcome", lev: 5, pq: ["What was the problem and who had it?", "What changed because of your work?", "What would you do differently?"] }
];

// src/engine.js
var PILLARS = [...content_default.PILLARS.filter((p) => p.fam === "prof"), SK_PILLAR];
var ACTIONS = [...content_default.ACTIONS.filter((a) => a.p.startsWith("P-") && a.cost !== "paid"), ...SK_ACTIONS];
var STAGES = content_default.STAGES;
var DEGREES = content_default.DEGREES;
var WORKY = content_default.WORKY;
var TIERS = content_default.TIERS;
var PMAP = Object.fromEntries(PILLARS.map((p) => [p.id, p]));
var AMAP = Object.fromEntries(ACTIONS.map((a) => [a.id, a]));
var SHORT = { "P-AC": "Academics", "P-WK": "Work & interns", "P-LD": "Leadership", "P-EC": "Extra-curric", "P-AW": "Awareness", "P-NR": "Narrative", "P-SK": "Skills & certs" };
var TARGET_PROF = { top: 78, iim1: 70, new: 60, broad: 50 };
var LEVELS = [
  { k: "critical", name: "Critical", min: 0, color: "#FF5A5F" },
  { k: "gap", name: "Gap", min: 35, color: "#FF9F1C" },
  { k: "developing", name: "Developing", min: 55, color: "#3BA9FF" },
  { k: "strong", name: "Strong", min: 75, color: "#1FD1A5" }
];
var levelOf = (s) => s == null ? { k: "fog", name: "Unmapped", color: "#B8B3CC" } : [...LEVELS].reverse().find((l) => s >= l.min);
var clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v));
var DAY = 864e5;
function catDateFor(year) {
  year = +year;
  if (!year) return null;
  const d = new Date(Date.UTC(year, 10, 30));
  d.setUTCDate(30 - d.getUTCDay());
  return d.toISOString().slice(0, 10);
}
function daysTo(dateStr, now = Date.now()) {
  if (!dateStr) return null;
  const t = Date.parse(dateStr + "T09:00:00+05:30");
  const today = Date.parse(new Date(now + 5.5 * 36e5).toISOString().slice(0, 10) + "T09:00:00+05:30");
  return isNaN(t) ? null : Math.round((t - today) / DAY);
}
function defaultYears(now = Date.now()) {
  const y = new Date(now).getUTCFullYear();
  const first = daysTo(catDateFor(y), now) > 0 ? y + 1 : y + 1;
  return [first, first + 1, first + 2, first + 3, first + 4];
}
var catLabel = (y) => "CAT" + String(y).slice(-2);
var PHASES = [
  { k: "build", name: "Build phase", from: Infinity, to: 540, color: "#1FD1A5", icon: "\u{1F331}", advice: "Time is your biggest asset. Start the long-cycle things: internships, a position of responsibility, something you start yourself, a skill you will be known for." },
  { k: "prove", name: "Proof phase", from: 540, to: 270, color: "#3BA9FF", icon: "\u{1F4D0}", advice: "Turn activity into results with numbers. Compete, certify, ship the project, take on the bigger role." },
  { k: "package", name: "Package phase", from: 270, to: 90, color: "#FFC93C", icon: "\u{1F4E6}", advice: "Document and quantify everything. Draft your \u201CWhy MBA\u201D. Your profile should be story-ready before CAT season begins." },
  { k: "focus", name: "CAT season", from: 90, to: 0, color: "#FF9F1C", icon: "\u{1F3AF}", advice: "Profile on maintenance \u2014 about 1\u20132 hours a week. Keep the news habit and log what you already did; no new big projects." },
  { k: "interview", name: "Interview season", from: 0, to: -150, color: "#6C3BFF", icon: "\u{1F3A4}", advice: "WAT, GD and PI. Your narrative, mock interviews and current affairs are everything now." },
  { k: "after", name: "Season over", from: -150, to: -Infinity, color: "#B8B3CC", icon: "\u{1F3C1}", advice: "This cycle is done. Update your CAT year if you are going again \u2014 everything you built carries forward." }
];
var phaseOf = (days) => days == null ? null : PHASES.find((p) => days <= p.from && days > p.to) || PHASES[PHASES.length - 1];
var MILESTONES = [1e3, 730, 545, 365, 270, 180, 120, 90, 60, 30, 14, 7, 1];
var ROUTINE_ROWS = [
  ["sleep", "\u{1F634} Sleep", "#B8B3CC"],
  ["main", "\u{1F3EB} College / work", "#3BA9FF"],
  ["commute", "\u{1F68C} Commute", "#8A85A8"],
  ["cat", "\u{1F4DA} CAT study", "#FF5A5F"],
  ["other", "\u{1F37D} Meals, family, other", "#FFC93C"]
];
var ROUTINE_DEFAULT = { wd: { sleep: 7, main: 7, commute: 1.5, cat: 2.5, other: 3 }, we: { sleep: 8, main: 0, commute: 0, cat: 5, other: 5 } };
function timeBudget(st) {
  const p = st.profile || {}, r = p.routine;
  const day = (d) => {
    const v = { ...ROUTINE_DEFAULT[d], ...r?.[d] || {} };
    const used = ROUTINE_ROWS.reduce((s, [k]) => s + (+v[k] || 0), 0);
    return { v, used, free: Math.max(0, 24 - used) };
  };
  const wd = day("wd"), we = day("we");
  const freeWeek = Math.round((wd.free * 5 + we.free * 2) * 10) / 10;
  const catWeek = Math.round(((+wd.v.cat || 0) * 5 + (+we.v.cat || 0) * 2) * 10) / 10;
  const suggested = Math.round(freeWeek * 0.35 * 2) / 2;
  const capacity = p.profHrs != null && p.profHrs !== "" ? +p.profHrs : r ? suggested : null;
  const load = Math.round((st.plan || []).filter((x) => x.status !== "done").reduce((s, x) => s + (AMAP[x.aid]?.wh || 0), 0) * 10) / 10;
  return { set: !!r || p.profHrs != null, wd, we, freeWeek, catWeek, suggested, capacity, load, left: capacity == null ? null : Math.round((capacity - load) * 10) / 10 };
}
function marksToScore(m) {
  if (m == null || m === "" || isNaN(+m)) return null;
  let v = +m;
  if (v <= 10) v = v * 9.5;
  return clamp((v - 51.25) / 0.4375);
}
var pct = (m) => m == null || m === "" || isNaN(+m) ? null : +m <= 10 ? +m * 9.5 : +m;
function autoEv(prof = {}) {
  const out = {};
  const add = (pid, id) => (out[pid] = out[pid] || []).push(id);
  const x10 = pct(prof.x10), x12 = pct(prof.x12), ug = pct(prof.ug);
  if (x10 != null && x10 >= 85) add("P-AC", "a");
  if (x12 != null && x12 >= 85) add("P-AC", "b");
  const ms = [x10, x12, ug].filter((v) => v != null);
  if (ms.length >= 2 && !ms.some((v, i) => i && ms[i - 1] - v >= 10)) add("P-AC", "d");
  if (["btech", "bsc"].includes(prof.degree)) add("P-AC", "e");
  if (prof.degree && prof.degree !== "btech") add("P-AC", "h");
  if (prof.stage === "working" && prof.worky && prof.worky !== "y0") add("P-WK", "a");
  return out;
}
function scorePillar(p, st) {
  const prof = st.profile || {};
  const e = prof.pillars?.[p.id] || {};
  const auto = autoEv(prof)[p.id] || [];
  const ev = [.../* @__PURE__ */ new Set([...e.ev || [], ...auto])];
  const mapped = e.self != null || (e.ev || []).length > 0;
  const totW = p.ev.reduce((s, x) => s + x.w, 0);
  const have = p.ev.filter((x) => ev.includes(x.id));
  const evPct = 100 * have.reduce((s, x) => s + x.w, 0) / totW;
  const selfPct = e.self != null ? (e.self - 1) * 25 : null;
  let base = mapped ? selfPct == null ? evPct : 0.7 * evPct + 0.3 * selfPct : null;
  const sources = [];
  if (mapped) sources.push("self-map");
  if (p.id === "P-AC") {
    const ms = [prof.x10, prof.x12, prof.ug].map(marksToScore).filter((v) => v != null);
    if (ms.length) {
      const mv = ms.reduce((a, b) => a + b, 0) / ms.length;
      base = base == null ? mv : 0.5 * base + 0.5 * mv;
      sources.push("marks");
    }
  }
  if (p.id === "P-WK" && prof.stage === "working" && base != null) base = clamp(base + ({ y0: 0, y1: 6, y2: 10, y3: 12, y5: 10 }[prof.worky] || 0));
  const score = base == null ? null : Math.round(clamp(base));
  return {
    id: p.id,
    name: p.name,
    short: SHORT[p.id],
    w: p.w,
    score,
    level: levelOf(score),
    mapped,
    have: have.map((x) => x.t),
    missing: p.ev.filter((x) => !ev.includes(x.id)).sort((a, b) => b.w - a.w).map((x) => x.t),
    self: e.self,
    claim: e.claim || "",
    sources,
    auto
  };
}
function analyse(st, cfg = {}, now = Date.now()) {
  const prof = st.profile || {};
  const pillars = PILLARS.map((p) => scorePillar(p, st));
  const xs = pillars.filter((x) => x.score != null), tw = xs.reduce((s, x) => s + x.w, 0);
  const overall = tw ? Math.round(xs.reduce((s, x) => s + x.score * x.w, 0) / tw) : null;
  const mappedN = pillars.filter((x) => x.mapped).length;
  const catYear = +prof.catYear || null;
  const catDate = catDateFor(catYear);
  const days = daysTo(catDate, now);
  const phase = phaseOf(days);
  const tier = TIERS[prof.target] || TIERS.new;
  const target = TARGET_PROF[prof.target] || TARGET_PROF.new;
  const strengths = pillars.filter((x) => x.score != null && x.score >= 75).sort((a, b) => b.score - a.score);
  const lacking = pillars.filter((x) => x.score != null && x.score < 55).sort((a, b) => a.score - b.score);
  const fog = pillars.filter((x) => x.score == null);
  const time = timeBudget(st);
  const milestone = days == null ? null : MILESTONES.find((m) => days <= m && days > m - 7) || null;
  return { pillars, overall, mappedN, catYear, catDate, days, phase, tier, target, gap: overall == null ? null : target - overall, strengths, lacking, fog, time, milestone, total: PILLARS.length };
}
function xpOf(st) {
  let xp = 0;
  for (const it of st.plan || []) {
    xp += Object.values(it.steps || {}).filter(Boolean).length * 10;
    if (it.status === "done") xp += 60;
    xp += Math.min(10, (it.log || []).length) * 5;
  }
  xp += (st.checkins || []).length * 20;
  xp += (st.profile?.pillars ? Object.keys(st.profile.pillars).length : 0) * 10;
  if (st.profile?.routine) xp += 20;
  return xp;
}
function lastActivity(st) {
  const ts = [st.createdAt || 0];
  for (const it of st.plan || []) {
    ts.push(it.addedAt || 0, it.updatedAt || 0);
    for (const l of it.log || []) ts.push(l.t || 0);
  }
  for (const c of st.checkins || []) ts.push(c.t || 0);
  if (st.profile?.updatedAt) ts.push(st.profile.updatedAt);
  return Math.max(...ts);
}
function computeAlerts(st, cfg = {}, now = Date.now(), sessions = []) {
  const an = analyse(st, cfg, now);
  const out = [];
  const add = (key, urgency, title, detail, kind) => out.push({ key, urgency, title, detail, kind });
  const held = sessions.filter((s) => s.bookedBy === st.id && s.status !== "cancelled");
  const yr = an.catYear ? catLabel(an.catYear) : "CAT";
  if (an.mappedN >= an.total - 1 && !held.length) add("first-review", 2, "First profile review due", `Profile mapped (${an.mappedN}/${an.total}). No mentor session yet \u2014 walk through the map and agree the first quests.`, "review");
  if (an.days != null) {
    for (const b of [540, 270, 90, 0]) if (an.days <= b && an.days > b - 14) {
      const ph = phaseOf(an.days);
      add(`phase:${an.catYear}:${ph.k}`, b === 0 ? 2 : 1, `${ph.icon} ${yr}: entering ${ph.name.toLowerCase()} (${an.days >= 0 ? an.days + " days to go" : "CAT done"})`, ph.advice + " Re-plan quests for this phase.", "phase");
    }
  }
  const la = lastActivity(st);
  if ((st.plan || []).some((x) => x.status !== "done") && now - la > 10 * DAY) add("stalled:" + Math.floor(la / DAY), 2, `No activity for ${Math.floor((now - la) / DAY)} days`, "Open quests but nothing logged. A short call to unblock or re-scope usually restarts momentum.", "stall");
  for (const it of st.plan || []) if (it.status === "blocked") add("blocked:" + it.aid + ":" + (it.updatedAt || 0), 2, `Blocked: ${AMAP[it.aid]?.t || it.aid}`, it.blockNote || "Student marked this quest as blocked.", "blocked");
  const ck = [...st.checkins || []].sort((a, b) => a.t - b.t);
  if (ck.length >= 2 && ck.slice(-2).every((c) => c.mood <= 2)) add("mood:" + ck[ck.length - 1].t, 3, "Low mood two check-ins running", `Latest: \u201C${(ck[ck.length - 1].note || "").slice(0, 120)}\u201D. Reach out personally \u2014 this is a wellbeing check, not a progress review.`, "mood");
  const nr = an.pillars.find((p) => p.id === "P-NR");
  if (nr.score != null && nr.score < 45 && an.days != null && an.days <= 150 && an.days > -120) add("narrative:" + an.catYear, an.days <= 30 ? 2 : 1, "Narrative gap before interview season", `\u201CWhy MBA\u201D story is at ${nr.score} with ${an.days >= 0 ? an.days + " days to " + yr : "interviews under way"}. Book a narrative session.`, "narrative");
  const crit = an.lacking.filter((p) => p.score < 35);
  if (crit.length >= 3) add("critical:" + crit.map((p) => p.id).join(","), 2, `${crit.length} critical territories`, crit.map((p) => p.short).join(", ") + " \u2014 help them prioritise; not everything can be fixed at once.", "critical");
  const t = an.time;
  if (t.capacity != null && t.load > t.capacity * 1.3 && t.load - t.capacity >= 2) add("overload:" + Math.round(t.load), 1, `Over-committed: ${t.load} h/wk of quests vs ${t.capacity} h/wk available`, "Help them drop or pause a quest before something (or someone) breaks.", "overload");
  if (t.set && t.capacity != null && t.capacity < 2 && an.phase && ["build", "prove"].includes(an.phase.k)) add("notime:" + t.capacity, 1, `Only ${t.capacity} h/wk free for profile work`, `Routine leaves little room in the ${an.phase.name.toLowerCase()}. Review their week together \u2014 small daily habits may be the answer.`, "time");
  for (const h of st.help || []) if (!h.closed) add("help:" + h.id, 3, "Student asked for help", h.text, "help");
  const ack = st.ack || {};
  return out.filter((a) => !ack[a.key]).sort((a, b) => b.urgency - a.urgency);
}
function summary(st, cfg, now = Date.now(), sessions = []) {
  const an = analyse(st, cfg, now);
  const alerts = computeAlerts(st, cfg, now, sessions);
  const plan = st.plan || [];
  return {
    id: st.id,
    name: st.name,
    email: st.email,
    phone: st.phone,
    mentorId: st.mentorId || null,
    createdAt: st.createdAt,
    stage: st.profile?.stage,
    degree: st.profile?.degree,
    target: st.profile?.target,
    catYear: an.catYear,
    days: an.days,
    phase: an.phase?.k || null,
    overall: an.overall,
    mappedN: an.mappedN,
    capacity: an.time.capacity,
    load: an.time.load,
    catWeek: an.time.set ? an.time.catWeek : null,
    pillars: Object.fromEntries(an.pillars.map((p) => [p.id, p.score])),
    planN: plan.length,
    doneN: plan.filter((x) => x.status === "done").length,
    blockedN: plan.filter((x) => x.status === "blocked").length,
    lastActive: lastActivity(st),
    xp: xpOf(st),
    alerts,
    mood: (st.checkins || []).length ? [...st.checkins].sort((a, b) => a.t - b.t).slice(-1)[0].mood : null
  };
}

// data/resources.js
var resources_default = [
  // ---------- business awareness
  { id: "r-finshots", cat: "Business awareness", name: "Finshots", url: "https://finshots.in", desc: "One business or finance story explained simply, every day.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-B2"] },
  { id: "r-hindu", cat: "Business awareness", name: "The Hindu \u2014 Opinion", url: "https://www.thehindu.com/opinion/", desc: "Editorials for a daily current-affairs and opinion habit.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-I1", "AW-I2"] },
  { id: "r-mint", cat: "Business awareness", name: "Mint", url: "https://www.livemint.com", desc: "Business and economy news.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-I1"] },
  { id: "r-et", cat: "Business awareness", name: "The Economic Times", url: "https://economictimes.indiatimes.com", desc: "Industry, markets and company news.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-B2"] },
  { id: "r-bs", cat: "Business awareness", name: "Business Standard", url: "https://www.business-standard.com", desc: "Economy, policy and industry coverage.", free: true, pillars: ["P-AW"], actions: ["AW-B2", "AW-I1"] },
  { id: "r-rbi", cat: "Business awareness", name: "RBI \u2014 press releases & policy", url: "https://www.rbi.org.in", desc: "Monetary policy, rates and data straight from the source.", free: true, pillars: ["P-AW"], actions: ["AW-I1"] },
  { id: "r-budget", cat: "Business awareness", name: "Union Budget (official)", url: "https://www.indiabudget.gov.in", desc: "Budget speech and key-to-budget documents.", free: true, pillars: ["P-AW"], actions: ["AW-I1", "AW-I2"] },
  { id: "r-pib", cat: "Business awareness", name: "Press Information Bureau", url: "https://pib.gov.in", desc: "Official government announcements \u2014 good GD/WAT raw material.", free: true, pillars: ["P-AW"], actions: ["AW-I1", "AW-A1"] },
  // ---------- case competitions & contests
  { id: "r-unstop", cat: "Case comps & contests", name: "Unstop \u2014 competitions", url: "https://unstop.com/competitions", desc: "Case competitions, B-plans, quizzes and hackathons across colleges and companies.", free: true, pillars: ["P-EC", "P-LD", "P-AW"], actions: ["EC-I1", "EC-A1", "AW-A1"] },
  { id: "r-kaggle", cat: "Case comps & contests", name: "Kaggle competitions", url: "https://www.kaggle.com/competitions", desc: "Data-science competitions with public leaderboards.", free: true, pillars: ["P-EC", "P-SK"], actions: ["EC-I1", "SK-A1"] },
  { id: "r-devfolio", cat: "Case comps & contests", name: "Devfolio hackathons", url: "https://devfolio.co/hackathons", desc: "Student and open hackathons across India.", free: true, pillars: ["P-EC"], actions: ["EC-I1"] },
  { id: "r-sih", cat: "Case comps & contests", name: "Smart India Hackathon", url: "https://sih.gov.in", desc: "National hackathon on real ministry and industry problems.", free: true, pillars: ["P-EC", "P-LD"], actions: ["EC-I1", "EC-A1"] },
  { id: "r-hackerearth", cat: "Case comps & contests", name: "HackerEarth challenges", url: "https://www.hackerearth.com/challenges/", desc: "Coding and hiring challenges from companies.", free: true, pillars: ["P-EC", "P-SK"], actions: ["EC-I1"] },
  // ---------- internships & live projects
  { id: "r-internshala", cat: "Internships & projects", name: "Internshala", url: "https://internshala.com", desc: "Internships, including remote and part-time.", free: true, pillars: ["P-WK"], actions: ["WK-B1"] },
  { id: "r-aicte", cat: "Internships & projects", name: "AICTE Internship Portal", url: "https://internship.aicte-india.org", desc: "Government and industry internships for students.", free: true, pillars: ["P-WK"], actions: ["WK-B1"] },
  { id: "r-unstopint", cat: "Internships & projects", name: "Unstop \u2014 internships", url: "https://unstop.com/internships", desc: "Internships and live projects from companies.", free: true, pillars: ["P-WK"], actions: ["WK-B1", "WK-A2"] },
  { id: "r-linkedin", cat: "Internships & projects", name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs", desc: "Internships, roles and a profile recruiters read.", free: true, pillars: ["P-WK", "P-SK"], actions: ["WK-B1", "WK-I2"] },
  { id: "r-upwork", cat: "Internships & projects", name: "Upwork (freelance)", url: "https://www.upwork.com", desc: "Paid freelance work with client reviews you can show.", free: true, pillars: ["P-WK"], actions: ["WK-A2"] },
  { id: "r-forage", cat: "Internships & projects", name: "Forage \u2014 virtual job simulations", url: "https://www.theforage.com", desc: "Free company-designed simulations in consulting, banking, marketing and more.", free: true, pillars: ["P-WK", "P-SK"], actions: ["SK-I2", "WK-B1"] },
  // ---------- skills & certifications
  { id: "r-nptel", cat: "Skills & certifications", name: "NPTEL (IIT/IISc courses)", url: "https://nptel.ac.in", desc: "Free IIT courses; proctored certificate exams for a small fee.", free: true, pillars: ["P-SK", "P-AC"], actions: ["SK-I1", "AC-A1"] },
  { id: "r-swayam", cat: "Skills & certifications", name: "SWAYAM", url: "https://swayam.gov.in", desc: "Government MOOCs, many with credit transfer.", free: true, pillars: ["P-SK", "P-AC"], actions: ["SK-I1", "AC-B1"] },
  { id: "r-coursera", cat: "Skills & certifications", name: "Coursera", url: "https://www.coursera.org", desc: "University courses in finance, marketing, analytics, strategy (financial aid available).", free: true, pillars: ["P-SK", "P-AW"], actions: ["SK-I1", "AW-B2"] },
  { id: "r-edx", cat: "Skills & certifications", name: "edX", url: "https://www.edx.org", desc: "Courses from global universities; audit free.", free: true, pillars: ["P-SK", "P-AW"], actions: ["AW-B2"] },
  { id: "r-growgoogle", cat: "Skills & certifications", name: "Google Career Certificates", url: "https://grow.google/certificates/", desc: "Data analytics, project management, digital marketing.", free: false, pillars: ["P-SK"], actions: ["SK-I1"] },
  { id: "r-skillshop", cat: "Skills & certifications", name: "Google Skillshop", url: "https://skillshop.withgoogle.com", desc: "Free Google Analytics and Ads certifications.", free: true, pillars: ["P-SK", "P-WK"], actions: ["SK-I1"] },
  { id: "r-hubspot", cat: "Skills & certifications", name: "HubSpot Academy", url: "https://academy.hubspot.com", desc: "Free marketing and sales certifications.", free: true, pillars: ["P-SK"], actions: ["SK-I1"] },
  { id: "r-mslearn", cat: "Skills & certifications", name: "Microsoft Learn \u2014 Excel & Power BI", url: "https://learn.microsoft.com/training", desc: "Free data skills paths; certification exams optional.", free: true, pillars: ["P-SK", "P-WK"], actions: ["SK-B2", "SK-I1", "WK-I1"] },
  { id: "r-cfi", cat: "Skills & certifications", name: "Corporate Finance Institute", url: "https://corporatefinanceinstitute.com", desc: "Free finance and Excel fundamentals courses.", free: true, pillars: ["P-SK", "P-AW"], actions: ["SK-B2", "AW-B2"] },
  { id: "r-nism", cat: "Skills & certifications", name: "NISM certifications", url: "https://www.nism.ac.in", desc: "SEBI-recognised securities-market certifications.", free: false, pillars: ["P-SK", "P-AW"], actions: ["SK-I1"] },
  { id: "r-kagglelearn", cat: "Skills & certifications", name: "Kaggle Learn", url: "https://www.kaggle.com/learn", desc: "Short free courses in Python, SQL and data analysis.", free: true, pillars: ["P-SK", "P-AC"], actions: ["SK-B1", "AC-A1"] },
  { id: "r-khan", cat: "Skills & certifications", name: "Khan Academy \u2014 economics & finance", url: "https://www.khanacademy.org/economics-finance-domain", desc: "Free, clear basics of micro, macro and finance.", free: true, pillars: ["P-AW", "P-SK"], actions: ["AW-B2"] },
  // ---------- leadership & speaking
  { id: "r-toast", cat: "Leadership & speaking", name: "Toastmasters International", url: "https://www.toastmasters.org", desc: "Public speaking and leadership roles in local clubs.", free: false, pillars: ["P-LD", "P-NR"], actions: ["LD-B1", "AW-A1", "NR-A1"] },
  { id: "r-tedx", cat: "Leadership & speaking", name: "Organise a TEDx event", url: "https://www.ted.com/participate/organize-a-local-tedx-event", desc: "Licence and guide to run a TEDx on campus or in your city.", free: true, pillars: ["P-LD", "P-EC"], actions: ["LD-A1", "LD-I1"] },
  { id: "r-enactus", cat: "Leadership & speaking", name: "Enactus", url: "https://enactus.org", desc: "Student social-entrepreneurship projects with competitions.", free: true, pillars: ["P-LD", "P-EC"], actions: ["LD-I1", "LD-A1"] },
  // ---------- social impact
  { id: "r-nss", cat: "Social impact", name: "National Service Scheme (NSS)", url: "https://nss.gov.in", desc: "Sustained community service through your college.", free: true, pillars: ["P-EC", "P-LD"], actions: ["EC-B1", "LD-B1"] },
  { id: "r-ivol", cat: "Social impact", name: "iVolunteer", url: "https://www.ivolunteer.in", desc: "Volunteering opportunities with NGOs (online and on-ground).", free: true, pillars: ["P-EC"], actions: ["EC-B1"] },
  { id: "r-mad", cat: "Social impact", name: "Make A Difference", url: "https://makeadiff.in", desc: "Long-term volunteering with children in shelters.", free: true, pillars: ["P-EC", "P-LD"], actions: ["EC-B1"] },
  { id: "r-tfi", cat: "Social impact", name: "Teach For India Fellowship", url: "https://www.teachforindia.org", desc: "Two-year teaching fellowship \u2014 a strong leadership story.", free: true, pillars: ["P-LD", "P-WK"], actions: ["LD-A1"] },
  // ---------- writing & narrative
  { id: "r-yka", cat: "Writing & narrative", name: "Youth Ki Awaaz (publish)", url: "https://www.youthkiawaaz.com", desc: "Publish your opinion pieces \u2014 a public writing record.", free: true, pillars: ["P-AW", "P-EC"], actions: ["AW-I1", "EC-A1"] },
  { id: "r-medium", cat: "Writing & narrative", name: "Medium (blog)", url: "https://medium.com", desc: "Start a blog on your industry or interest.", free: true, pillars: ["P-AW", "P-NR"], actions: ["AW-I1", "NR-B1"] },
  { id: "r-scholar", cat: "Academics", name: "Google Scholar", url: "https://scholar.google.com", desc: "Find papers to anchor an academic project.", free: true, pillars: ["P-AC"], actions: ["AC-A1"] }
];

// src/assets.gen.js
var HTML = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Profile Atlas \u2014 CAT profile mapping</title>\n<meta name="theme-color" content="#6C3BFF">\n<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\' fill=\'%236C3BFF\' stroke=\'%2317123A\' stroke-width=\'2\'/%3E%3Cpath d=\'M12 3 L15 12 L12 21 L9 12Z\' fill=\'%23FFC93C\' stroke=\'%2317123A\' stroke-width=\'1.6\'/%3E%3C/svg%3E">\n<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">\n<style>:root{--ink:#17123A;--ink2:#4B4670;--ink3:#8A85A8;--paper:#FFF7E8;--card:#FFFFFF;--line:#17123A;--violet:#6C3BFF;--violet-l:#EDE6FF;--coral:#FF5A5F;--coral-l:#FFE3E3;--yellow:#FFC93C;--yellow-l:#FFF1C7;--mint:#1FD1A5;--mint-l:#D5F8EE;--sky:#3BA9FF;--sky-l:#DCEFFF;--orange:#FF9F1C;--orange-l:#FFE9CC;--fog:#B8B3CC;--r:18px;--sh:4px 4px 0 var(--ink);--sh-s:2px 2px 0 var(--ink);--fd:"Bricolage Grotesque",system-ui,sans-serif;--fb:"DM Sans",system-ui,sans-serif;--fm:"Space Mono",ui-monospace,monospace}*{box-sizing:border-box}html,body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.5 var(--fb);-webkit-font-smoothing:antialiased}body{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'520\' height=\'520\' viewBox=\'0 0 520 520\'%3E%3Cg fill=\'none\' stroke=\'%2317123A\' stroke-opacity=\'.06\' stroke-width=\'1.2\'%3E%3Cpath d=\'M-20 120c80-60 160 40 260-10s180-70 300 0\'/%3E%3Cpath d=\'M-20 160c90-50 170 50 270 0s170-60 290 10\'/%3E%3Cpath d=\'M-20 200c100-40 180 60 280 10s160-50 280 20\'/%3E%3Cpath d=\'M-20 360c70 40 150-50 250 0s200 60 310-10\'/%3E%3Cpath d=\'M-20 400c80 30 160-60 260-10s190 70 300 0\'/%3E%3Cellipse cx=\'400\' cy=\'280\' rx=\'60\' ry=\'34\'/%3E%3Cellipse cx=\'400\' cy=\'280\' rx=\'96\' ry=\'58\'/%3E%3Cellipse cx=\'400\' cy=\'280\' rx=\'130\' ry=\'84\'/%3E%3Cellipse cx=\'110\' cy=\'290\' rx=\'40\' ry=\'22\'/%3E%3Cellipse cx=\'110\' cy=\'290\' rx=\'72\' ry=\'44\'/%3E%3C/g%3E%3C/svg%3E")}a{color:var(--violet)}h1,h2,h3,h4{font-family:var(--fd);margin:0;letter-spacing:-.02em;line-height:1.1}h1{font-size:clamp(34px,6vw,64px);font-weight:800}h2{font-size:26px;font-weight:800}h3{font-size:19px;font-weight:700}h4{font-size:15px;font-weight:700}p{margin:.4em 0}.mono{font-family:var(--fm)}.muted{color:var(--ink2)}.faint{color:var(--ink3)}.small{font-size:13px}.tiny{font-size:11.5px}.wrap{max-width:1180px;margin:0 auto;padding:0 18px}.row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.between{justify-content:space-between}.grid{display:grid;gap:16px}.g2{grid-template-columns:repeat(2,minmax(0,1fr))}.g3{grid-template-columns:repeat(3,minmax(0,1fr))}.g4{grid-template-columns:repeat(4,minmax(0,1fr))}.span2{grid-column:span 2}@media(max-width:900px){.g3,.g4{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.g2,.g3,.g4{grid-template-columns:1fr}.span2{grid-column:auto}}.stack>*+*{margin-top:12px}.gap8{gap:8px}.grow{flex:1}.card{background:var(--card);border:2.5px solid var(--line);border-radius:var(--r);box-shadow:var(--sh);padding:18px}.card.flat{box-shadow:none}.card.tint-v{background:var(--violet-l)}.card.tint-y{background:var(--yellow-l)}.card.tint-m{background:var(--mint-l)}.card.tint-c{background:var(--coral-l)}.card.tint-s{background:var(--sky-l)}.card.dark{background:var(--ink);color:#fff}.card.dark .muted{color:#c9c4e8}.btn{appearance:none;border:2.5px solid var(--ink);background:#fff;color:var(--ink);font:700 14.5px var(--fb);padding:9px 16px;border-radius:999px;cursor:pointer;box-shadow:var(--sh-s);transition:transform .08s,box-shadow .08s;display:inline-flex;align-items:center;gap:7px;text-decoration:none;white-space:nowrap}.btn:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 var(--ink)}.btn:active{transform:translate(2px,2px);box-shadow:0 0 0 var(--ink)}.btn.pri{background:var(--violet);color:#fff}.btn.hot{background:var(--coral);color:#fff}.btn.sun{background:var(--yellow)}.btn.go{background:var(--mint)}.btn.sky{background:var(--sky);color:#fff}.btn.ghost{background:transparent;box-shadow:none;border-color:transparent;text-decoration:underline;padding:6px 8px}.btn.sm{padding:5px 11px;font-size:13px}.btn.lg{padding:14px 24px;font-size:17px}.btn[disabled]{opacity:.45;pointer-events:none}.chip{display:inline-flex;align-items:center;gap:6px;border:2px solid var(--ink);border-radius:999px;padding:3px 10px;font-weight:700;font-size:12.5px;background:#fff;white-space:nowrap}.chip.v{background:var(--violet);color:#fff}.chip.y{background:var(--yellow)}.chip.m{background:var(--mint)}.chip.c{background:var(--coral);color:#fff}.chip.s{background:var(--sky);color:#fff}.chip.o{background:var(--orange)}.chip.g{background:#eee}.chip.soft{border-width:1.5px;font-weight:600}.dot{width:10px;height:10px;border-radius:50%;display:inline-block;border:1.5px solid var(--ink)}label.f{display:block;font-weight:700;font-size:13px;margin-bottom:4px}.inp,select.inp,textarea.inp{width:100%;border:2.5px solid var(--ink);border-radius:12px;padding:10px 12px;font:15px var(--fb);background:#fff;color:var(--ink);outline:none}.inp:focus{box-shadow:0 0 0 4px var(--violet-l);border-color:var(--violet)}textarea.inp{min-height:84px;resize:vertical}.field{margin-bottom:12px}.err{background:var(--coral-l);border:2px solid var(--coral);border-radius:12px;padding:8px 12px;font-weight:600;margin:8px 0}.ok{background:var(--mint-l);border:2px solid var(--mint);border-radius:12px;padding:8px 12px;font-weight:600;margin:8px 0}.top{position:sticky;top:0;z-index:30;background:#fff7e8eb;backdrop-filter:blur(8px);border-bottom:2.5px solid var(--ink)}.top .wrap{display:flex;align-items:center;gap:14px;height:64px}.logo{display:flex;align-items:center;gap:9px;font:800 20px var(--fd);letter-spacing:-.02em;text-decoration:none;color:var(--ink);white-space:nowrap}.logo .mk{width:36px;height:36px;border-radius:11px;background:var(--violet);border:2.5px solid var(--ink);display:grid;place-items:center;box-shadow:var(--sh-s)}.nav{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;flex:1}.nav::-webkit-scrollbar{display:none}.nav a{padding:8px 13px;border-radius:999px;font-weight:700;text-decoration:none;color:var(--ink2);white-space:nowrap;border:2px solid transparent;font-size:14.5px}.nav a:hover{color:var(--ink);background:#fff}.nav a.on{background:var(--ink);color:#fff}.nav a .b{display:inline-grid;place-items:center;min-width:19px;height:19px;border-radius:99px;background:var(--coral);color:#fff;font-size:11px;margin-left:5px;padding:0 5px}.me{display:flex;align-items:center;gap:8px}.ava{width:36px;height:36px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font-weight:800;background:var(--yellow);font-family:var(--fd)}@media(max-width:760px){.top .wrap{height:auto;flex-wrap:wrap;padding-top:8px;padding-bottom:8px}.nav{order:3;flex-basis:100%}.logo span.t{display:none}}main{padding:22px 0 80px}.pagehead{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px}.pagehead .kick{font:700 12px var(--fm);letter-spacing:.12em;text-transform:uppercase;color:var(--violet)}.stat{display:flex;flex-direction:column;gap:2px}.stat .n{font:800 34px var(--fd);letter-spacing:-.03em;line-height:1}.stat .l{font-size:12.5px;font-weight:700;color:var(--ink2);text-transform:uppercase;letter-spacing:.06em}.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}.kpi{border:2.5px solid var(--ink);border-radius:16px;padding:14px;background:#fff;box-shadow:var(--sh-s)}.bar{height:12px;border:2px solid var(--ink);border-radius:99px;background:#fff;overflow:hidden}.bar>i{display:block;height:100%;background:var(--violet);border-right:2px solid var(--ink)}.bar.thin{height:8px;border-width:1.5px}.atlas{width:100%;height:auto;display:block}.atlas .hex{cursor:pointer;transition:transform .15s}.atlas .hex:hover{transform:translateY(-4px)}.atlas .hex.sel polygon.face{stroke-width:5}.legend{display:flex;gap:12px;flex-wrap:wrap;font-size:12.5px;font-weight:700}.legend span{display:inline-flex;align-items:center;gap:6px}.legend i{width:14px;height:14px;border-radius:4px;border:2px solid var(--ink);display:inline-block}.hero{padding:46px 0 26px}.hero .lead{font-size:19px;max-width:620px;color:var(--ink2)}.hl{background:linear-gradient(transparent 58%,var(--yellow) 58%);padding:0 4px}.roles{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}@media(max-width:860px){.roles{grid-template-columns:1fr}}.role{position:relative;overflow:hidden}.role .big{font-size:40px}.tabs{display:flex;gap:6px;background:#fff;border:2.5px solid var(--ink);border-radius:999px;padding:4px;width:max-content;max-width:100%;overflow:auto}.tabs button{border:0;background:transparent;font:700 13.5px var(--fb);padding:7px 14px;border-radius:999px;cursor:pointer;color:var(--ink2);white-space:nowrap}.tabs button.on{background:var(--ink);color:#fff}.wz-track{display:flex;gap:6px;align-items:center;overflow-x:auto;padding:6px 2px 10px;scrollbar-width:thin}.wz-pin{flex:0 0 auto;width:38px;height:38px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font-weight:800;background:#fff;cursor:pointer;font-size:15px;position:relative}.wz-pin.done{background:var(--mint)}.wz-pin.cur{background:var(--violet);color:#fff;transform:scale(1.12);box-shadow:var(--sh-s)}.wz-line{flex:0 0 14px;height:3px;background:var(--ink);border-radius:3px;opacity:.25}.faces{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}@media(max-width:560px){.faces{grid-template-columns:repeat(5,1fr);gap:5px}.face .lb{font-size:10.5px}}.face{border:2.5px solid var(--ink);border-radius:16px;background:#fff;padding:12px 6px;text-align:center;cursor:pointer;transition:transform .1s}.face:hover{transform:translateY(-2px)}.face .em{font-size:30px;display:block;line-height:1.1}.face .lb{font-weight:700;font-size:12.5px;display:block;margin-top:4px}.face.on{background:var(--yellow);box-shadow:var(--sh-s);transform:translateY(-3px)}.evs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media(max-width:640px){.evs{grid-template-columns:1fr}}.ev{display:flex;gap:10px;align-items:flex-start;border:2.5px solid var(--ink);border-radius:14px;padding:11px 12px;background:#fff;cursor:pointer;font-weight:600;font-size:14.2px;line-height:1.35;user-select:none;transition:background .12s}.ev .ck{flex:0 0 22px;height:22px;border-radius:7px;border:2.5px solid var(--ink);display:grid;place-items:center;font-size:13px;background:#fff;margin-top:1px}.ev.on{background:var(--mint-l)}.ev.on .ck{background:var(--mint)}.opt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}.opt{border:2.5px solid var(--ink);border-radius:14px;padding:12px;background:#fff;cursor:pointer;font-weight:700;text-align:left;font:700 14px var(--fb);color:var(--ink)}.opt small{display:block;font-weight:500;color:var(--ink2);margin-top:2px}.opt.on{background:var(--violet);color:#fff}.opt.on small{color:#e4dcff}.scorepill{display:inline-flex;align-items:center;gap:8px;border:2.5px solid var(--ink);border-radius:999px;padding:4px 14px 4px 6px;background:#fff;font-weight:800;box-shadow:var(--sh-s)}.scorepill b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;border:2px solid var(--ink);font-family:var(--fd);font-size:15px}.quest{position:relative;display:flex;flex-direction:column;gap:8px}.quest .tag{position:absolute;top:-12px;right:14px}.ql,.qstatus{display:flex;gap:6px;flex-wrap:wrap}.qstatus button{border:2px solid var(--ink);border-radius:99px;padding:5px 12px;font:700 13px var(--fb);background:#fff;cursor:pointer}.qstatus button.on.todo{background:#eee}.qstatus button.on.doing{background:var(--sky);color:#fff}.qstatus button.on.done{background:var(--mint)}.qstatus button.on.blocked{background:var(--coral);color:#fff}.steps{counter-reset:s;display:flex;flex-direction:column;gap:10px}.step{display:flex;gap:12px;border:2.5px solid var(--ink);border-radius:14px;padding:12px;background:#fff;align-items:flex-start}.step.on{background:var(--mint-l)}.step .num{flex:0 0 34px;height:34px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font:800 15px var(--fd);background:var(--yellow);cursor:pointer}.step.on .num{background:var(--mint)}.log{border-left:3px dashed var(--ink3);margin-left:8px;padding-left:16px}.log .it{position:relative;margin-bottom:12px}.log .it:before{content:"";position:absolute;left:-23px;top:4px;width:11px;height:11px;border-radius:50%;background:var(--violet);border:2px solid var(--ink)}.kan{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}@media(max-width:980px){.kan{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.kan{grid-template-columns:1fr}}.col{background:#ffffff8c;border:2.5px dashed var(--ink3);border-radius:18px;padding:10px;min-height:120px}.col h4{display:flex;justify-content:space-between;align-items:center;margin:2px 4px 10px}.qmini{background:#fff;border:2.5px solid var(--ink);border-radius:14px;padding:11px;margin-bottom:10px;cursor:pointer;box-shadow:var(--sh-s)}.qmini:hover{transform:translate(-1px,-1px)}.scrim{position:fixed;inset:0;background:#17123a8c;z-index:60;display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:4vh 12px}.modal{background:var(--paper);border:3px solid var(--ink);border-radius:22px;box-shadow:8px 8px 0 var(--ink);width:min(820px,100%);padding:22px;position:relative;animation:pop .18s ease-out}.modal.sm{width:min(480px,100%)}.modal .x{position:absolute;top:12px;right:12px}@keyframes pop{0%{transform:translateY(14px) scale(.98);opacity:0}}.toast{position:fixed;bottom:22px;left:50%;transform:translate(-50%);background:var(--ink);color:#fff;border-radius:999px;padding:11px 20px;font-weight:700;z-index:90;box-shadow:4px 4px 0 var(--violet);animation:pop .2s}.tbl{width:100%;border-collapse:separate;border-spacing:0;font-size:14px}.tbl th{text-align:left;font:700 11.5px var(--fm);text-transform:uppercase;letter-spacing:.06em;color:var(--ink2);padding:8px 10px;border-bottom:2.5px solid var(--ink);white-space:nowrap;position:sticky;top:0;background:#fff}.tbl td{padding:9px 10px;border-bottom:1.5px solid #E8E4F5;vertical-align:middle}.tbl tr.click{cursor:pointer}.tbl tr.click:hover td{background:var(--violet-l)}.tscroll{overflow:auto;max-height:70vh;border:2.5px solid var(--ink);border-radius:16px;background:#fff}.heat{display:inline-grid;place-items:center;width:34px;height:26px;border-radius:7px;font:700 12px var(--fm);border:1.5px solid rgba(23,18,58,.25)}.alert{display:flex;gap:12px;align-items:flex-start;border:2.5px solid var(--ink);border-radius:16px;padding:12px 14px;background:#fff}.alert.u3{background:var(--coral-l)}.alert.u2{background:var(--yellow-l)}.alert.u1{background:var(--sky-l)}.alert .ic{flex:0 0 38px;height:38px;border-radius:12px;border:2.5px solid var(--ink);display:grid;place-items:center;font-size:19px;background:#fff}.slot{border:2.5px solid var(--ink);border-radius:12px;padding:8px 12px;background:#fff;cursor:pointer;font-weight:700;font-size:14px}.slot:hover{background:var(--yellow)}.res{display:flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--ink);transition:transform .1s}.res:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--ink)}.res .dom{font:700 11.5px var(--fm);color:var(--violet)}.reslink{display:flex;gap:10px;align-items:center;border:2px solid var(--ink);border-radius:12px;padding:8px 12px;background:#fff;text-decoration:none;color:var(--ink);font-weight:700;font-size:14px}.reslink:hover{background:var(--yellow-l)}.reslink .arr{margin-left:auto;font-family:var(--fm)}.empty{text-align:center;padding:30px 16px;color:var(--ink2)}.empty .big{font-size:42px}.sec-title{display:flex;align-items:center;gap:10px;margin:26px 0 12px}.sec-title h3{font-size:21px}.sec-title .ln{flex:1;height:2.5px;background:var(--ink);opacity:.15;border-radius:2px}.check{display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1.5px dashed #DDD8EE}.check:last-child{border-bottom:0}.check .bx{flex:0 0 28px;height:28px;border-radius:9px;border:2.5px solid var(--ink);display:grid;place-items:center;background:#fff;font-weight:800}.check.on .bx{background:var(--mint)}.check.on .t{text-decoration:line-through;color:var(--ink3)}.ring{position:relative;display:grid;place-items:center}.ring .c{position:absolute;text-align:center;line-height:1}.mood{display:flex;gap:8px}.mood button{font-size:26px;border:2.5px solid var(--ink);background:#fff;border-radius:14px;width:52px;height:52px;cursor:pointer}.mood button.on{background:var(--yellow);transform:translateY(-3px);box-shadow:var(--sh-s)}.banner{display:flex;gap:16px;align-items:center;flex-wrap:wrap}.pulse{animation:pulse 1.6s infinite}@keyframes pulse{50%{box-shadow:0 0 0 7px #ff5a5f40,var(--sh)}}.hide{display:none!important}.lv-critical{background:var(--coral);color:#fff}.lv-gap{background:var(--orange)}.lv-developing{background:var(--sky);color:#fff}.lv-strong{background:var(--mint)}.lv-fog{background:#e7e4f0;color:var(--ink2)}.pbar{display:grid;grid-template-columns:26px 120px 1fr 44px;gap:10px;align-items:center;padding:6px 0;font-weight:700;font-size:14px;cursor:pointer}.pbar .bar{height:14px}@media(max-width:520px){.pbar{grid-template-columns:24px 90px 1fr 40px;font-size:13px}}.spark{display:block}.footer{padding:30px 0;color:var(--ink3);font-size:13px;text-align:center}.kbd{font:700 12px var(--fm);border:1.5px solid var(--ink);border-radius:6px;padding:1px 6px;background:#fff}.scrollx{overflow-x:auto;-webkit-overflow-scrolling:touch}.banner .grow{min-width:220px}@media(max-width:640px){svg.atlas{min-width:600px}svg.route{min-width:640px}.pagehead h2{font-size:28px!important}}\n</style>\n</head>\n<body>\n<div id="app"><div style="display:grid;place-items:center;height:80vh;font:700 18px system-ui;color:#4B4670">Unfolding the map\u2026</div></div>\n<script>(()=>{var J={PILLARS:[{id:"G-QA",sec:"QA",name:"Quantitative Aptitude",w:30,fam:"gate",dur:!1,tests:"Arithmetic, algebra, geometry, number properties \\u2014 done fast and clean under a section clock. Not depth of maths; speed, accuracy and knowing which question to leave.",claim:"Your most honest read of where QA stands",claimEg:"e.g. arithmetic is solid, geometry is shaky, I attempt 18 and get 12 right",probe:[{id:"q1",q:"Which two QA topics cost you the most marks right now, and what have you actually done about them this month?",ph:"Name the topics. \'Everything\' is not an answer a plan can use."},{id:"q2",q:"In your last timed QA section, how many did you attempt, how many were right, and how many were silly errors?",ph:"Attempts, accuracy, careless mistakes. If you don\'t know, that is the first thing to fix."}],self:"How ready is your QA for a timed section today?",ev:[{id:"a",t:"I\'ve finished the core concepts across arithmetic, algebra and geometry",w:16},{id:"b",t:"My mental math and calculation speed are reliable under time",w:12},{id:"c",t:"I keep a written error log and review it",w:14},{id:"d",t:"I\'ve done topic-wise timed practice, not just untimed sums",w:14},{id:"e",t:"My last mock QA percentile was 85 or higher",w:16},{id:"f",t:"I can spot and skip a time-trap question without finishing it",w:12},{id:"g",t:"I\'ve drilled the topics I\'m weak at, not just the ones I enjoy",w:10},{id:"h",t:"My accuracy in QA is above 80% of what I attempt",w:14}],sp:["Which QA topic would you refuse to attempt on exam day, and why?","Walk me through how you decide, in 20 seconds, whether to attempt a question.","What changed in your QA between your first mock and your last?"]},{id:"G-VA",sec:"VARC",name:"Verbal & Reading Comprehension",w:30,fam:"gate",dur:!1,tests:"Reading dense, unfamiliar prose fast and answering RC without falling for the trap option \\u2014 plus para-jumbles, summary and odd-one-out. Built on a reading habit, not tricks.",claim:"Where VARC actually stands for you",claimEg:"e.g. I read fast but overthink RC options, verbal ability section is my strength",probe:[{id:"q1",q:"How much dense non-fiction do you read a day that is not exam material, and for how long?",ph:"Editorials, long-form, essays. Minutes per day, honestly."},{id:"q2",q:"When you get RC wrong, is it comprehension or option-elimination? How do you know?",ph:"Look at your last RC set. Which stage failed?"}],self:"How ready is your VARC for a timed section today?",ev:[{id:"a",t:"I read dense non-fiction most days, outside prep",w:14},{id:"b",t:"I can finish a long RC passage and its questions inside the time budget",w:14},{id:"c",t:"I have a repeatable method for eliminating RC trap options",w:16},{id:"d",t:"Para-jumbles, summary and odd-sentence are reliable for me",w:12},{id:"e",t:"My last mock VARC percentile was 85 or higher",w:16},{id:"f",t:"I review why each wrong option was wrong, not just the right one",w:14},{id:"g",t:"I can hold my accuracy without slowing to a crawl",w:10},{id:"h",t:"I read across unfamiliar subjects \\u2014 science, philosophy, economics",w:10}],sp:["Summarise the last thing you read in one sentence.","When two RC options both look right, how do you choose?","What kind of passage throws you, and what do you do about it?"]},{id:"G-DI",sec:"DILR",name:"Data Interpretation & Logical Reasoning",w:28,fam:"gate",dur:!1,tests:"Reading a set fast, judging in 60 seconds whether it is solvable, and cracking it cleanly. The most swingy section \\u2014 set selection matters as much as ability.",claim:"Where DILR stands for you",claimEg:"e.g. I can solve most sets but I pick the wrong ones and run out of time",probe:[{id:"q1",q:"How do you decide which set to attempt first, and how long do you give a set before abandoning it?",ph:"Your actual rule. If you don\'t have one, that is the gap."},{id:"q2",q:"Which set types do you avoid, and have you deliberately practised them?",ph:"Games, tournaments, networks, Venn, arrangements \\u2014 name the ones that scare you."}],self:"How ready is your DILR for a timed section today?",ev:[{id:"a",t:"I practise DILR sets daily or near-daily",w:14},{id:"b",t:"I can judge in about a minute whether a set is worth attempting",w:16},{id:"c",t:"I have a set-selection strategy I actually follow in mocks",w:16},{id:"d",t:"I\'ve drilled the set types I find hard, not only the easy ones",w:14},{id:"e",t:"My last mock DILR percentile was 85 or higher",w:16},{id:"f",t:"I keep accuracy high on the sets I choose to attempt",w:12},{id:"g",t:"I don\'t panic and switch sets halfway through",w:12}],sp:["You have four sets and time for two. How do you choose?","Tell me about a set you abandoned correctly, and one you should have.","Which set type have you improved most on, and how?"]},{id:"G-MK",sec:"MOCK",name:"Test Craft & Mock Analysis",w:12,fam:"gate",dur:!0,tests:"The meta-skill that turns section ability into a score: taking full proctored mocks on schedule, then spending real time dissecting each one. The single biggest score mover most people neglect.",claim:"Your current mock and analysis habit, honestly",claimEg:"e.g. I take a mock a week but barely analyse them, or I hoard mocks and never sit a full one",probe:[{id:"q1",q:"After your last full mock, how long did you spend analysing it, and what did you write down?",ph:"Minutes, and what the analysis actually produced. \'I checked the score\' is not analysis."},{id:"q2",q:"Do you take mocks in one sitting, timed, in exam conditions \\u2014 or in pieces?",ph:"Be honest. A mock taken in fragments teaches you very little about your temperament."}],self:"How disciplined is your mock and analysis routine?",ev:[{id:"a",t:"I take full-length proctored mocks in one timed sitting",w:16},{id:"b",t:"I spend at least 90 minutes analysing each mock",w:18},{id:"c",t:"I log every mistake by type \\u2014 concept, careless, selection, time",w:16},{id:"d",t:"My mock frequency is rising as the exam gets closer",w:10},{id:"e",t:"I\'ve stopped repeating the same category of mistake across mocks",w:14},{id:"f",t:"I track attempts, accuracy and time per section, not just percentile",w:12},{id:"g",t:"I\'ve built a personal time-and-selection strategy from my own data",w:14}],hab:!0,sp:["What did your last mock analysis change in how you take the next one?","Which mistake type shows up again and again in your log?","What is your section-by-section time plan for exam day, and where did it come from?"]},{id:"P-AC",name:"Academic Record",w:18,fam:"prof",dur:!1,frozen:!0,tests:"Tenth, twelfth and your degree. Most of this is frozen \\u2014 a panel reads it as it is. What is live is a degree still in progress, academic diversity, and the honest story behind any dip.",claim:"The academic fact you would put forward first",claimEg:"e.g. 92% in twelfth, or a 9.1 CGPA in engineering, or gold medal in my department",probe:[{id:"q1",q:"Where is the weakest number in your record \\u2014 tenth, twelfth or degree \\u2014 and what is the honest, non-defensive reason?",ph:"A dip you own reads better than one you dodge. No excuses; a reason and what you did next."},{id:"q2",q:"What have you done academically that isn\'t just marks \\u2014 a paper, a project, a subject you went deep on?",ph:""}],self:"How strong is your academic record for a top-school panel?",ev:[{id:"a",t:"Tenth board at 85% or above",w:12},{id:"b",t:"Twelfth board at 85% or above",w:12},{id:"c",t:"Degree CGPA strong for my course (roughly top quarter)",w:16},{id:"d",t:"My record is consistent \\u2014 no unexplained dip or gap",w:10},{id:"e",t:"A quantitative or analytical degree, or strong maths background",w:10},{id:"f",t:"A merit rank, medal, scholarship or dean\'s list",w:14},{id:"g",t:"A real academic project, paper or thesis with a result",w:16},{id:"h",t:"Non-engineering background (academic diversity at many schools)",w:6}],sp:["Your twelfth marks dipped. What happened, and what did you learn?","Why should a management school care about your degree marks?","Tell me about the one academic project you\'re proud of."]},{id:"P-WK",name:"Work Experience & Internships",w:22,fam:"prof",dur:!0,tests:"Not months on a payroll \\u2014 a story of responsibility and measurable impact. For a professional this is your biggest asset. For a student, a documented internship or live project is how you build it.",claim:"The work or internship achievement you\'d lead with",claimEg:"e.g. cut process time 30% in my ops role, or ran a 40-store field survey as an intern",probe:[{id:"q1",q:"State one thing you changed at work or in an internship, with a number attached \\u2014 money, time, users, or scale.",ph:"A number a panel can test. \'Helped the team\' is invisible; \'30% faster\' is not."},{id:"q2",q:"Why do you want an MBA now instead of continuing on your current track?",ph:"The single most-asked question of anyone with work experience. Have a real answer."}],self:"How strong is your professional or internship story?",ev:[{id:"a",t:"I have full-time work experience, or a substantial internship",w:14},{id:"b",t:"I can point to a result I own, with a number attached",w:18},{id:"c",t:"I\'ve led or coordinated people, or owned a workstream end to end",w:14},{id:"d",t:"I have a promotion, rating or written recognition on record",w:12},{id:"e",t:"My work connects logically to why I want an MBA",w:14},{id:"f",t:"I\'ve worked with data, customers or money directly",w:12},{id:"g",t:"A documented live project or freelance work with an outcome",w:12},{id:"h",t:"I can explain what my organisation does and how it makes money",w:8}],sp:["Tell me the one thing you\'re proudest of at work, and how you measured it.","What did your last appraisal say you needed to improve?","If your manager were here, what would they say you\'re not good at?"]},{id:"P-LD",name:"Leadership & Responsibility",w:16,fam:"prof",dur:!0,tests:"Positions of responsibility, but read as decisions and outcomes, not titles. One thing that would not exist if you had not run it.",claim:"The role or initiative you\'d bring up in an interview",claimEg:"e.g. placement coordinator, ran the college fest, captained a team of 20",probe:[{id:"q1",q:"What was the hardest call you made in that role, who was unhappy, and how did it turn out?",ph:"Panels ask this exactly. The decision, the trade-off, the consequence."},{id:"q2",q:"What would not have happened if you had not been there?",ph:""}],self:"How much real responsibility have you carried?",ev:[{id:"a",t:"I\'ve held a formal position \\u2014 club, committee, team, society",w:12},{id:"b",t:"I started something that didn\'t exist before me",w:16},{id:"c",t:"I\'ve coordinated 10+ people toward a deadline",w:14},{id:"d",t:"I made a decision that some people disagreed with, and stood by it",w:14},{id:"e",t:"There\'s a measurable outcome \\u2014 footfall, money raised, people served",w:16},{id:"f",t:"I handled a conflict or a failure inside the role",w:12},{id:"g",t:"I held the role for a sustained period, not a one-off event",w:10},{id:"h",t:"Someone would vouch for what I did, by name",w:6}],sp:["Tell me about a time your team pushed back on you.","What did you do when the initiative was failing?","Who did the actual work, and what did you do?"]},{id:"P-EC",name:"Extracurriculars & Achievements",w:12,fam:"prof",dur:!0,tests:"Sport, arts, competitions, a sustained interest pursued to a real level. Depth in one thing beats a list of certificates that end in a PDF and nothing else.",claim:"The activity or achievement you\'d put on the form",claimEg:"e.g. state-level chess, a published poem, a case-comp win, five years of classical dance",probe:[{id:"q1",q:"What have you stuck with for years, and what did the discipline of it teach you?",ph:"Longevity is the signal. A hobby of three weeks is not this."},{id:"q2",q:"What\'s the highest level you competed or performed at, and what did it cost you?",ph:""}],self:"How real is your extracurricular depth?",ev:[{id:"a",t:"I\'ve pursued one activity seriously for years",w:14},{id:"b",t:"I\'ve competed or performed beyond my own campus",w:14},{id:"c",t:"I\'ve won or placed at district level or above",w:16},{id:"d",t:"A case competition, hackathon or B-plan result",w:14},{id:"e",t:"An achievement with an external record \\u2014 a rank, a publication, a certificate that means something",w:12},{id:"f",t:"A genuine interest I can talk about for ten minutes with a stranger",w:12},{id:"g",t:"Volunteering or social work I sustained, not a one-day drive",w:10},{id:"h",t:"An interest that isn\'t on everyone else\'s form",w:8}],sp:["Everyone lists this. Why should I believe yours is real?","What\'s the last thing this taught you?","How do you find time for it alongside everything else?"]},{id:"P-AW",name:"Business Awareness & Current Affairs",w:16,fam:"prof",dur:!0,tests:"The raw material of WAT, GD and PI: a news habit, one industry known properly, a working grasp of the economy, and a view of your own on the things in the headlines.",claim:"The business or industry you know best",claimEg:"e.g. quick commerce unit economics, the semiconductor supply chain, Indian banking",probe:[{id:"q1",q:"Take one industry and explain how the money moves \\u2014 where revenue comes from and where it goes.",ph:"Revenue lines, main costs, what\'s left. Approximate numbers are fine; vagueness is not."},{id:"q2",q:"Pick a story in the news this week and give me your own view, not the newspaper\'s.",ph:""}],self:"How ready are you for WAT, GD and a current-affairs grilling?",ev:[{id:"a",t:"I read business and general news most days",w:14},{id:"b",t:"I know one industry\'s top players and how each makes money",w:16},{id:"c",t:"I understand the unit economics of at least one business",w:14},{id:"d",t:"I follow the economy \\u2014 inflation, rates, budget, key indicators",w:12},{id:"e",t:"I can hold a position in a group discussion without going quiet",w:14},{id:"f",t:"I\'ve practised timed written arguments (WAT-style)",w:12},{id:"g",t:"I form my own view on issues rather than repeating headlines",w:12},{id:"h",t:"I track 15+ current topics with a note on each",w:12}],sp:["Argue the opposite side of the last topic you mentioned.","What\'s the biggest cost line for that industry?","What economic number worries you most right now, and why?"]},{id:"P-NR",name:"Narrative \\u2014 Why MBA & Goals",w:16,fam:"prof",dur:!1,tests:"The spine that ties the whole profile together: why an MBA, why now, where it takes you, and a story that connects your past to that future without sounding rehearsed.",claim:"Your one-line answer to why an MBA",claimEg:"e.g. to move from execution to running a business, with a path through consulting",probe:[{id:"q1",q:"Where do you want to be in five years, specifically \\u2014 role, sector, kind of problem \\u2014 and how does an MBA get you there?",ph:"Specific. \'A leadership role\' is what everyone says and no one believes."},{id:"q2",q:"What\'s the honest, personal reason underneath the professional one?",ph:"Panels can smell a rehearsed answer. The real reason is usually more convincing."}],self:"How clear and defensible is your why-MBA story?",ev:[{id:"a",t:"I can say why I want an MBA in one honest sentence",w:14},{id:"b",t:"I have a specific 3-to-5 year goal, not a vague one",w:16},{id:"c",t:"My past, present and goal connect into one story",w:16},{id:"d",t:"I can explain why now, rather than later",w:12},{id:"e",t:"I\'ve written my answers to the standard PI questions",w:14},{id:"f",t:"I\'ve done at least one mock interview and acted on the feedback",w:14},{id:"g",t:"I have a real answer to \'what\'s your biggest weakness\'",w:8},{id:"h",t:"My reasons hold up when someone pushes back on them",w:6}],sp:["Why not just keep doing what you\'re doing?","In five years, what specifically is different because you did an MBA?","Convince me you won\'t change your mind about all this in six months."]}],ACTIONS:[{id:"QA-B1",p:"G-QA",l:"B",t:"Rebuild the arithmetic core",why:"Percentages, ratios, time-speed-distance and averages sit under half of QA. Fix these and a chunk of the section stops being scary.",fs:"Pick percentages. Do 15 questions untimed today and write down which sub-type tripped you.",wh:3.5,mw:5,per:"X",cost:"free",tier:1,art:"A topic tracker with accuracy per sub-topic",lev:4,pq:["Which arithmetic sub-type is still shaky?","How do you convert a fraction to a percentage in your head?","What\'s your reliable method for ratio problems?"]},{id:"QA-B2",p:"G-QA",l:"B",t:"Daily mental-math drill",why:"Speed is trainable. Tables, squares, cubes and fraction-percent conversions done daily free up seconds you spend elsewhere.",fs:"Learn squares to 30 and fraction-to-percent for 1/n up to 12. Test yourself in 20 minutes.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"A speed log of timed 20-question sets",lev:3,hab:!0,pq:["What\'s 1/7 as a percentage, fast?","How much has your calculation speed improved this month?","Where do you still reach for a calculator you shouldn\'t?"]},{id:"QA-I1",p:"G-QA",l:"I",t:"Topic-wise timed practice with an error log",why:"Untimed practice hides the real problem. Timed sets plus a written error log is where QA scores actually move.",fs:"Do one 20-minute timed topic set today, then log every wrong answer as concept / careless / time.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"An error log sorted by mistake type",lev:5,pq:["What\'s the most common mistake type in your log?","Which topic has the worst accuracy-to-time ratio?","What did last week\'s log change this week?"]},{id:"QA-I2",p:"G-QA",l:"I",t:"Attack your two weakest topics",why:"Most people practise what they enjoy. The score is trapped in the two topics you avoid.",fs:"Name your two worst QA topics right now. Book both into this week\'s sessions before anything you\'re already good at.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"Before/after accuracy on the two weak topics",lev:4,pq:["Which two topics did you avoid, and why?","How much did accuracy move after deliberate practice?","What\'s the next weakest topic after these two?"]},{id:"QA-A1",p:"G-QA",l:"A",t:"High-difficulty sets and timed QA sections",why:"Once fundamentals hold, difficulty and pace are the last mile to a 95+ section. Timed full sections build the stamina.",fs:"Sit one full timed QA section today at exam length and note where your accuracy fell off a cliff.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"Section-level attempt/accuracy/time data",lev:4,pq:["At what point in a section does your accuracy drop?","Which hard topic can you now attempt that you couldn\'t?","What\'s your target attempt-count for the QA section?"]},{id:"QA-P1",p:"G-QA",l:"I",t:"A structured QA question bank or test series",why:"A good paid bank gives graded difficulty and solutions you\'d otherwise spend hours assembling. Useful, never required.",fs:"If you take one, do a single graded set and check the solution quality before committing time.",wh:4,mw:6,per:"X",cost:"paid",tier:1,art:"Graded practice history",lev:3,pq:["Is the paid bank actually better than free sets you\'ve tried?","Which difficulty tier are you stuck at?","Are you using the solutions to learn or just to check?"]},{id:"VA-B1",p:"G-VA",l:"B",t:"A daily dense-reading habit",why:"VARC is a reading test wearing an exam costume. Thirty minutes a day of hard non-fiction does more than any RC \'trick\'.",fs:"Read one long editorial or essay today and write its argument in one sentence.",wh:3.5,mw:8,per:"X",cost:"free",tier:1,art:"A reading log with one-line summaries",lev:5,hab:!0,pq:["What did you read today, and what was its core claim?","How has your reading speed changed?","What subject do you now read that you used to avoid?"]},{id:"VA-B2",p:"G-VA",l:"B",t:"Build a repeatable RC method",why:"Random RC accuracy comes from a random approach. A fixed method \\u2014 map the structure, then answer \\u2014 makes it consistent.",fs:"Take one RC passage, mark the shift in each paragraph, then answer. Notice if mapping first helped.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"A written RC approach you actually follow",lev:4,pq:["What\'s your step-by-step RC method?","Where does your method still break down?","How do you handle a passage on a subject you dislike?"]},{id:"VA-I1",p:"G-VA",l:"I",t:"Timed RC with a wrong-option post-mortem",why:"Reviewing why the wrong option was wrong \\u2014 not just why the right one was right \\u2014 is where RC accuracy is won.",fs:"Do two timed RC sets, then for each miss write one line on what made the trap option tempting.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"A trap-option log",lev:5,pq:["What kind of trap option catches you most?","Is your problem comprehension or elimination?","How do you decide between two plausible options?"]},{id:"VA-I2",p:"G-VA",l:"I",t:"Drill para-jumbles, summary and odd-one-out",why:"The non-RC verbal questions are pure marks if you make them reliable, and pure risk if you don\'t.",fs:"Do 10 para-jumbles today and note the logic you used to fix the opening sentence.",wh:2.5,mw:4,per:"X",cost:"free",tier:1,art:"Accuracy record on each question type",lev:3,pq:["What\'s your method for finding the opening sentence?","Which of these three types is weakest for you?","How reliable are you on summary questions now?"]},{id:"VA-A1",p:"G-VA",l:"A",t:"Read wide, then sit full timed VARC sections",why:"A 95+ VARC comes from comfort with unfamiliar, abstract prose plus section-length stamina. Both are trainable.",fs:"Read one philosophy or hard-science essay today, then plan a full timed VARC section this week.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"Full-section VARC performance data",lev:4,pq:["What kind of passage still throws you?","How do you keep accuracy across a full section?","What\'s your target VARC attempt count?"]},{id:"DI-B1",p:"G-DI",l:"B",t:"Two DILR sets a day, every day",why:"DILR is a pattern-recognition muscle. Daily reps are the only thing that reliably builds it.",fs:"Solve two sets today, untimed, and write what type each was.",wh:3.5,mw:8,per:"X",cost:"free",tier:1,art:"A set-type log with solve times",lev:5,hab:!0,pq:["Which set types have you seen most this week?","What\'s your solve time trending toward?","Which type still feels unfamiliar?"]},{id:"DI-B2",p:"G-DI",l:"B",t:"Learn to judge a set in 60 seconds",why:"Half of DILR is choosing right. Reading a set and deciding fast whether it\'s solvable saves the section.",fs:"Look at three sets today and, before solving, rate each easy/medium/skip. Then check if you were right.",wh:2.5,mw:4,per:"X",cost:"free",tier:1,art:"A judgement-accuracy record",lev:4,pq:["How do you tell a solvable set from a trap fast?","When were you wrong about a set\'s difficulty?","What signals make you skip a set now?"]},{id:"DI-I1",p:"G-DI",l:"I",t:"Build a set-selection strategy and follow it",why:"Ability without selection strategy still scores badly. A rule you follow under pressure is the fix.",fs:"Write your rule: how many sets you scan, how long before you abandon one. Test it in the next mock.",wh:3.5,mw:6,per:"X",cost:"free",tier:1,art:"A written, tested selection rule",lev:5,pq:["What\'s your set-selection rule, exactly?","How long do you give a set before abandoning it?","When did the rule save you, and when did it fail?"]},{id:"DI-I2",p:"G-DI",l:"I",t:"Drill the set types you avoid",why:"The scary types \\u2014 games, tournaments, networks \\u2014 show up in mocks precisely because people skip practising them.",fs:"Pick the type you dread most and do three of them today, slowly, until the structure clicks.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"Before/after solve rate on hard types",lev:4,pq:["Which set type did you avoid, and can you do it now?","What made it click?","What\'s the next type to attack?"]},{id:"DI-A1",p:"G-DI",l:"A",t:"Novel set types and timed DILR sections",why:"CAT\'s DILR rewards adaptability to sets you\'ve never seen. Exposure plus timed sections builds nerve.",fs:"Find an unusual set format today, solve it without help, and time yourself on a full section this week.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"Full-section DILR data across set types",lev:4,pq:["How do you approach a set format you\'ve never seen?","What\'s your accuracy on the sets you choose?","What\'s your target: how many sets, how many questions?"]},{id:"MK-B1",p:"G-MK",l:"B",t:"Sit your first full mock, one timed sitting",why:"Until you take a full mock in exam conditions, you\'re guessing at your own stamina and temperament.",fs:"Block three hours this week, phone away, and take one full proctored mock start to finish.",wh:3,mw:2,per:"X",cost:"free",tier:1,art:"Your first honest baseline percentile",lev:4,pq:["What surprised you about taking a full mock?","Where did your energy or focus drop?","What\'s your baseline, and how do you feel about it?"]},{id:"MK-I1",p:"G-MK",l:"I",t:"The 90-minute analysis ritual",why:"This is the single biggest score mover most people skip. The mock isn\'t the lesson \\u2014 the analysis is.",fs:"Take your last mock and spend 90 minutes today logging every mistake by type: concept, careless, selection, time.",wh:3,mw:6,per:"X",cost:"free",tier:1,art:"A per-mock error log by mistake type",lev:5,hab:!0,pq:["What does your error log say you keep getting wrong?","Which mistake type is most fixable fastest?","What did analysis change in your next attempt?"]},{id:"MK-I2",p:"G-MK",l:"I",t:"Ramp mock frequency toward the exam",why:"One mock a fortnight early, two or three a week near the end. The ramp builds exam-day endurance.",fs:"Put your mock dates on a calendar now, increasing as the exam nears, and protect them like appointments.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"A mock calendar with a rising curve",lev:4,pq:["What\'s your mock schedule for the final eight weeks?","Are you analysing each one before taking the next?","How\'s your stamina holding across back-to-back mocks?"]},{id:"MK-A1",p:"G-MK",l:"A",t:"Build your personal exam-day strategy from your data",why:"The best time-and-selection plan is the one your own mocks prove works for you \\u2014 not a generic one.",fs:"From your last five mocks, write your section order, time splits and skip rules. Test them next mock.",wh:2.5,mw:5,per:"X",cost:"free",tier:1,art:"A one-page personal exam-day playbook",lev:5,pq:["What\'s your section order and why?","Where does your data say you leave marks on the table?","What\'s your rule when a section starts going badly?"]},{id:"MK-P1",p:"G-MK",l:"I",t:"A quality mock test series",why:"If you buy one paid thing, a good mock series is usually it \\u2014 realistic difficulty and percentile calibration. Still optional.",fs:"Take one mock from any series and check whether its difficulty and analytics feel exam-realistic.",wh:4,mw:6,per:"X",cost:"paid",tier:1,art:"A calibrated percentile trend across mocks",lev:4,pq:["Does the series\' difficulty match the real exam?","Are the analytics telling you something free mocks didn\'t?","Is your percentile trend rising across the series?"]},{id:"AC-B1",p:"P-AC",l:"B",t:"Protect and lift your degree CGPA",why:"If you\'re still studying, the one academic number you can still move is your degree CGPA. Don\'t let prep tank it.",fs:"Check your current CGPA and the marks you need this semester to hold or lift it. Write the target down.",wh:2,mw:8,per:"S",cost:"free",tier:1,art:"A rising or protected CGPA",lev:3,pq:["What\'s your CGPA target this semester, and is it realistic?","How are you balancing coursework with prep?","Which subject is the risk to your CGPA?"]},{id:"AC-I1",p:"P-AC",l:"I",t:"Prepare the honest answer for your weakest number",why:"You can\'t change a past mark, but you can decide how it\'s read. A calm, owned explanation defuses it.",fs:"Write, in four sentences, what happened around your weakest academic number and what you did afterwards.",wh:1,mw:2,per:"X",cost:"free",tier:1,art:"A rehearsed, non-defensive explanation",lev:4,pq:["Why did that number dip?","What did you change afterwards?","Why should that not worry a panel about you now?"]},{id:"AC-A1",p:"P-AC",l:"A",t:"Do a real academic project with a result",why:"A paper, thesis or serious project is academic evidence that isn\'t a mark \\u2014 and it\'s something to actually talk about.",fs:"Pick a question in your field you find genuinely interesting and draft a one-paragraph project scope today.",wh:3,mw:10,per:"S",cost:"free",tier:1,art:"A completed project, paper or documented result",lev:3,pq:["What question did your project answer?","What was hard about it, and what did you find?","What would you do differently with more time?"]},{id:"WK-B1",p:"P-WK",l:"B",t:"Land a documented internship or live project",why:"For a student, one real internship with an outcome is worth more than a page of coursework. It becomes your work story.",fs:"List five organisations you could realistically intern with and draft one outreach message today.",wh:3,mw:8,per:"S",cost:"free",tier:1,art:"An internship with a written outcome and a reference",lev:5,pq:["What did you actually do, and what changed because of it?","What did the work teach you about the field?","Would they take you back? Why?"]},{id:"WK-I1",p:"P-WK",l:"I",t:"Turn a job responsibility into a quantified win",why:"Working professionals already have the raw material. The gap is usually a result with a number a panel can test.",fs:"Pick one thing you own at work and find the number \\u2014 money, time, users, or scale \\u2014 that proves your impact.",wh:2,mw:6,per:"W",cost:"free",tier:1,art:"An achievement statement with a hard metric",lev:5,pq:["What did you change, and by how much?","How did you measure it?","What would your manager add or dispute?"]},{id:"WK-I2",p:"P-WK",l:"I",t:"Rewrite your work as results, not duties",why:"\'Responsible for X\' says nothing. \'Cut X by 20%\' says everything. This is the resume and the PI answer both.",fs:"Take your three main responsibilities and rewrite each as an outcome with a number, even if approximate.",wh:1.5,mw:3,per:"X",cost:"free",tier:1,art:"Result-first bullet points for every role",lev:4,pq:["Which of your bullets has the strongest number?","Where are you still describing duties, not results?","What\'s the one achievement you\'d lead with?"]},{id:"WK-A1",p:"P-WK",l:"A",t:"Own a visible cross-functional project",why:"A project that crosses teams shows leadership and scope \\u2014 the profile a panel remembers from a working candidate.",fs:"Identify one initiative at work you could volunteer to drive, and note who you\'d need to bring along.",wh:3,mw:10,per:"W",cost:"free",tier:1,art:"A delivered cross-team project with a result",lev:4,pq:["Who did you have to influence without authority?","What nearly derailed it?","What was the measurable outcome?"]},{id:"WK-A2",p:"P-WK",l:"A",t:"Take on freelance or consulting work with an outcome",why:"No internship on offer? A real problem solved for a real client is work experience you created yourself.",fs:"Offer to solve one concrete problem for a small business or NGO this week, for free if needed, and scope it.",wh:3,mw:10,per:"S",cost:"free",tier:1,art:"A delivered engagement with a client outcome",lev:3,pq:["What problem did you solve, and for whom?","How did you price or scope it?","What did the client get that they didn\'t have before?"]},{id:"LD-B1",p:"P-LD",l:"B",t:"Take a real position of responsibility",why:"A committee, club, team or society role is the standard leadership signal \\u2014 provided you actually do something in it.",fs:"Find one group on campus or at work looking for organisers and put your name down this week.",wh:2.5,mw:8,per:"S",cost:"free",tier:1,art:"A titled role with a track record",lev:4,pq:["What was your actual responsibility, not your title?","What did you change in the role?","What was the hardest part of it?"]},{id:"LD-B2",p:"P-LD",l:"B",t:"Own one thing end to end",why:"Leadership isn\'t a badge \\u2014 it\'s being the person accountable when something ships. Volunteer to be that person once.",fs:"Pick one small event or task nobody owns, and claim it start to finish. Define what \'done\' means today.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"One thing that happened because you ran it",lev:3,pq:["What would not have happened without you?","Who did you have to coordinate?","What went wrong, and what did you do?"]},{id:"LD-I1",p:"P-LD",l:"I",t:"Run an initiative with a measurable outcome",why:"\'I organised an event\' is weak. \'I ran a drive that raised X / reached Y people\' is a story with a spine.",fs:"Take an initiative you\'re near, and define the one number that will prove it worked. Then go get that number.",wh:3,mw:8,per:"X",cost:"free",tier:1,art:"An initiative with a hard, quotable result",lev:5,pq:["What was the number, and how did you hit it?","Who was unhappy along the way?","What did you learn about running people?"]},{id:"LD-A1",p:"P-LD",l:"A",t:"Start something that didn\'t exist",why:"Founding a club, a project or a small venture \\u2014 and getting a real outcome \\u2014 is the strongest leadership evidence there is.",fs:"Write one paragraph on a thing your campus or workplace lacks that you could start, and the first three steps.",wh:3.5,mw:12,per:"X",cost:"free",tier:1,art:"A founded initiative with sustained results",lev:4,pq:["Why did it need to exist?","How did you get the first people to join?","What\'s it become since you started it?"]},{id:"EC-B1",p:"P-EC",l:"B",t:"Commit to one interest, seriously",why:"Depth beats breadth. One activity pursued for real reads better than ten certificates that led nowhere.",fs:"Choose the one interest you\'d defend to a stranger and schedule two hours for it this week, then keep it.",wh:2,mw:8,per:"X",cost:"free",tier:1,art:"A sustained record in one pursuit",lev:3,hab:!0,pq:["Why this one, out of everything?","What has sticking with it taught you?","Where has it taken you so far?"]},{id:"EC-I1",p:"P-EC",l:"I",t:"Enter a case competition or hackathon",why:"A case comp is management practice with a scoreboard \\u2014 and a genuinely useful line whether you place or not.",fs:"Find one open case competition or hackathon this quarter and register today, solo or with a team.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"A competition entry, ideally a placement",lev:4,pq:["What was your approach to the case?","What did the judges or results teach you?","What would you do differently next time?"]},{id:"EC-I2",p:"P-EC",l:"I",t:"Document the achievements you already have",why:"Many people have real achievements they can\'t prove or describe well. Fixing that is fast, high-return work.",fs:"List everything you\'ve genuinely done, and for each note the proof \\u2014 a rank, a link, a name, a certificate that means something.",wh:1.5,mw:3,per:"X",cost:"free",tier:1,art:"An evidenced achievement list",lev:3,pq:["What\'s your strongest achievement, and can you prove it?","Which of these is real depth versus a one-off?","What can you actually talk about for ten minutes?"]},{id:"EC-A1",p:"P-EC",l:"A",t:"Take one pursuit to a competitive or published level",why:"Reaching a level others recognise \\u2014 a competition, a publication, a performance \\u2014 turns a hobby into evidence.",fs:"Pick the one interest closest to a real milestone and define what reaching that level would take, starting now.",wh:3,mw:12,per:"X",cost:"free",tier:1,art:"An external recognition \\u2014 rank, publication, performance",lev:3,pq:["What level did you reach, and how hard was it?","What did competing at that level cost you?","What\'s next for it?"]},{id:"AW-B1",p:"P-AW",l:"B",t:"A daily business-news habit",why:"WAT, GD and PI all run on this. Twenty minutes a day compounds into a candidate who can hold any table.",fs:"Read the business section today and write one line on the story that mattered most and why.",wh:2,mw:8,per:"X",cost:"free",tier:1,art:"A dated news journal with your own takes",lev:5,hab:!0,pq:["What\'s the biggest business story this week?","What\'s your own view on it?","How has your grasp of the economy changed?"]},{id:"AW-B2",p:"P-AW",l:"B",t:"Learn one industry properly",why:"Panels reward one industry known deeply over ten known shallowly. Pick the one you\'d enjoy and go deep.",fs:"Choose an industry today and write down its top three players and one line on how each makes money.",wh:2.5,mw:6,per:"X",cost:"free",tier:1,art:"A one-page teardown of one industry",lev:4,pq:["How does the biggest player in that industry make money?","What\'s its main cost line?","What threatens it in the next five years?"]},{id:"AW-I1",p:"P-AW",l:"I",t:"Keep a current-affairs journal with your own views",why:"A summary is forgettable. A position is what wins a GD. Practise having one on everything you read.",fs:"Start a running note today: 15 topics, and for each, two lines \\u2014 what happened, and what you think.",wh:2,mw:8,per:"X",cost:"free",tier:1,art:"A journal of 15+ topics with defended positions",lev:4,pq:["Pick a topic \\u2014 argue your side, then the opposite.","Which of your views has changed as you read more?","What issue are you most confident discussing?"]},{id:"AW-I2",p:"P-AW",l:"I",t:"Practise timed written arguments (WAT)",why:"WAT is a real filter at many schools and almost nobody practises it. Twenty minutes, a prompt, a structured argument.",fs:"Give yourself one prompt and 20 minutes today. Write a structured argument. Read it back for holes.",wh:1.5,mw:5,per:"X",cost:"free",tier:1,art:"A folder of timed WAT responses",lev:4,pq:["How do you structure a WAT answer under time?","What\'s the weakest part of your written argument?","How do you handle a topic you know little about?"]},{id:"AW-A1",p:"P-AW",l:"A",t:"Run weekly group-discussion practice",why:"GD is a contact sport you can\'t learn alone. Regular practice with peers builds the instinct to enter and hold.",fs:"Set up one GD this week with three or more people on a current topic, and get honest feedback afterwards.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"A GD practice log with peer feedback",lev:3,pq:["How do you enter a GD that\'s already crowded?","What do you do when it turns into a shouting match?","When did you change the direction of a discussion?"]},{id:"NR-B1",p:"P-NR",l:"B",t:"Write your why-MBA in 200 honest words",why:"If you can\'t write it, you can\'t say it. Two hundred honest words is the foundation the whole interview stands on.",fs:"Write 200 words on why you want an MBA \\u2014 no jargon, no \'leadership role\'. Read it aloud and cut anything fake.",wh:1.5,mw:2,per:"X",cost:"free",tier:1,art:"A tight, honest why-MBA statement",lev:5,pq:["Why an MBA, in one sentence?","What\'s the real reason underneath the professional one?","Why not just keep doing what you\'re doing?"]},{id:"NR-I1",p:"P-NR",l:"I",t:"Define a specific 3-to-5 year goal and the path",why:"\'A leadership role\' is the answer that gets you rejected. A specific role, sector and problem is the one that lands.",fs:"Write your five-year target as a specific role in a specific kind of company, and the two steps the MBA unlocks.",wh:2,mw:4,per:"X",cost:"free",tier:1,art:"A concrete goal with a plausible path",lev:5,pq:["Where exactly do you want to be in five years?","How does the MBA connect your present to that?","What\'s your backup if the first path doesn\'t open?"]},{id:"NR-I2",p:"P-NR",l:"I",t:"Answer the eight standard PI questions in writing",why:"Every interview draws from the same well. Writing your answers once means you\'re never caught flat.",fs:"Write real answers today to: why MBA, why now, strengths, weakness, failure, a leadership story, why this school, and where in five years.",wh:2,mw:4,per:"X",cost:"free",tier:1,art:"A written answer bank for the core questions",lev:4,pq:["What\'s your genuine biggest weakness?","Tell me about a real failure and what it taught you.","Why this school specifically?"]},{id:"NR-A1",p:"P-NR",l:"A",t:"Three recorded mock interviews with post-mortems",why:"Reading your answers and saying them under pressure are different skills. Recording yourself is uncomfortable and it works.",fs:"Book one mock interview this week \\u2014 a senior, a mentor, or a friend who\'ll push \\u2014 and record it.",wh:2,mw:5,per:"X",cost:"free",tier:1,art:"Three recordings, each with three written fixes",lev:5,pq:["What did watching yourself reveal?","Which answer fell apart under pressure?","What are the three fixes from your last mock?"]},{id:"NR-P1",p:"P-NR",l:"A",t:"A structured GD-PI preparation program",why:"A good paid program gives real panels and blunt feedback. Helpful near interview season, never necessary to clear it.",fs:"Before paying, do one free mock interview and see whether your gaps really need a program or just more reps.",wh:2,mw:5,per:"X",cost:"paid",tier:1,art:"Panel feedback across multiple mock interviews",lev:3,pq:["What did the panel say you do worst?","Is the feedback something free practice couldn\'t give?","Are you improving between sessions?"]}],STAGES:{y12:"1st / 2nd year UG",prefinal:"Pre-final year UG",final:"Final year UG",grad:"Graduated \\xB7 dedicated attempt",working:"Working professional"},DEGREES:{btech:"B.Tech / B.E.",bcom:"B.Com",bba:"BBA / BMS",bsc:"B.Sc",ba:"BA / Humanities",bpharm:"B.Pharm",other:"Other degree"},WORKY:{y0:"Under 1 year",y1:"1\\u20132 years",y2:"2\\u20133 years",y3:"3\\u20135 years",y5:"5+ years"},TIERS:{top:{label:"IIM A / B / C, FMS, top private",overall:99,gateL:3.4,profL:3.1},iim1:{label:"Older IIMs, MDI, XLRI, SPJIMR, IIFT",overall:98,gateL:3.15,profL:2.9},new:{label:"Newer IIMs and strong private schools",overall:93,gateL:2.8,profL:2.5},broad:{label:"A solid MBA that fits your profile",overall:86,gateL:2.4,profL:2.2}},SCHOOL_TIERS:[{k:"t1",nm:"IIM A / B / C, FMS, SPJIMR",lo:99,hi:100,note:"99+ overall, no weak section, and academics matter for the final call."},{k:"t2",nm:"Older IIMs (L, K, I, S), MDI, XLRI, IIFT, NITIE",lo:96,hi:99,note:"96\\u201399, with sectionals holding up and a real profile behind the score."},{k:"t3",nm:"Newer IIMs and strong private schools",lo:90,hi:96,note:"90\\u201396 opens a wide, genuinely good set of schools."},{k:"t4",nm:"Solid private and tier-2 schools",lo:80,hi:90,note:"80\\u201390 still reaches respected programmes, especially with work experience."},{k:"t5",nm:"Broader set of MBA programmes",lo:0,hi:80,note:"Below 80, look wider \\u2014 and consider whether a stronger score next cycle changes the whole picture."}]};var ot={id:"P-SK",name:"Skills & Certifications",w:12,fam:"prof",dur:!0,tests:"Not a pile of certificates \\u2014 two or three skills that fit your story and that you can actually demonstrate: Excel and analytics, finance, marketing, coding, a language.",claim:"The skill you could demonstrate in an interview tomorrow",claimEg:"e.g. built a Power BI sales dashboard in my internship; NISM Series VIII certified",probe:[{id:"q1",q:"Which one skill do you want a panel to associate with you \\u2014 and how does it connect to your goal?",ph:"One skill, one reason. A list of ten courses is not an answer."},{id:"q2",q:"What have you built or done with a certificate you hold?",ph:"A certificate you never used is a line on a CV; a project with it is a story."}],self:"How strong and relevant are your skills and certifications?",ev:[{id:"a",t:"I hold at least one certification from a recognised body (NPTEL, NISM, Google, Microsoft, CFA L1\\u2026)",w:14},{id:"b",t:"My certifications connect to the field I want to work in",w:16},{id:"c",t:"I\'ve applied a certified skill in a project, internship or job",w:18},{id:"d",t:"I\'m comfortable with Excel beyond basics \\u2014 pivots, lookups, charts",w:12},{id:"e",t:"I can work with data \\u2014 SQL, Python, Power BI or similar",w:10},{id:"f",t:"I scored in the top band or with distinction in a proctored exam",w:10},{id:"g",t:"My skills are visible online \\u2014 LinkedIn, GitHub or a portfolio",w:10},{id:"h",t:"I speak, or am seriously learning, a foreign language",w:6}],sp:["You have five certificates. Which one actually changed how you work?","Show me something you built with that skill.","Why this skill, and not something closer to your degree?"]},nt=[{id:"SK-B1",p:"P-SK",l:"B",t:"Pick the one skill that fits your goal",why:"Random certificates read as box-ticking. One skill chosen for a reason reads as intent.",fs:"Write your 3-year goal in one line, then list the two skills people in that role use every day.",wh:1,mw:2,per:"X",cost:"free",tier:1,art:"A one-page skill map: goal \\u2192 skills \\u2192 course",lev:3,pq:["Why this skill and not another?","Who in your target role uses it, and how?","What will you be able to do in six months that you cannot today?"]},{id:"SK-B2",p:"P-SK",l:"B",t:"Get genuinely good at Excel",why:"Every MBA internship assumes it. Pivots, lookups and a clean chart are the minimum; a small model is a talking point.",fs:"Take any dataset (your expenses, a cricket season) and build one pivot table and one chart today.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"A model or dashboard file you built yourself",lev:4,hab:!0,pq:["What is the most complex sheet you have built?","When would you use INDEX-MATCH over VLOOKUP?","Walk me through a chart you made and what it showed."]},{id:"SK-I1",p:"P-SK",l:"I",t:"Earn a proctored certification",why:"Proctored exams (NPTEL, NISM, Google, Microsoft) carry more weight than click-through course certificates.",fs:"Shortlist two proctored certifications in your chosen skill and note the next exam dates.",wh:3,mw:8,per:"X",cost:"free",tier:1,art:"A certificate with a score or grade",lev:4,pq:["Why did you choose this certification?","What was hardest in the syllabus?","How have you used it since?"]},{id:"SK-I2",p:"P-SK",l:"I",t:"Complete a virtual job simulation",why:"Free company simulations (consulting, banking, marketing) let you do real-format work and talk about it credibly.",fs:"Pick one simulation in the field you are targeting and finish the first task this week.",wh:2,mw:3,per:"X",cost:"free",tier:1,art:"Completion certificate plus your work sample",lev:3,pq:["What did the simulation ask you to produce?","What did you learn about the job itself?","Would you want that role? Why?"]},{id:"SK-A1",p:"P-SK",l:"A",t:"Apply the skill to a real problem",why:"A skill used on a real problem \\u2014 a club, a family business, an NGO \\u2014 turns a certificate into a result.",fs:"List three people or groups with a problem your skill could help with. Message one today.",wh:3,mw:8,per:"X",cost:"free",tier:1,art:"A published project with a measurable outcome",lev:5,pq:["What was the problem and who had it?","What changed because of your work?","What would you do differently?"]}];var C=[...J.PILLARS.filter(e=>e.fam==="prof"),ot],we=[...J.ACTIONS.filter(e=>e.p.startsWith("P-")&&e.cost!=="paid"),...nt],oe=J.STAGES,We=J.DEGREES,ct=J.WORKY,ye=J.TIERS,F=Object.fromEntries(C.map(e=>[e.id,e])),E=Object.fromEntries(we.map(e=>[e.id,e])),N={"P-AC":"Academics","P-WK":"Work & interns","P-LD":"Leadership","P-EC":"Extra-curric","P-AW":"Awareness","P-NR":"Narrative","P-SK":"Skills & certs"},T={"P-AC":"\\u{1F393}","P-WK":"\\u{1F4BC}","P-LD":"\\u{1F6A9}","P-EC":"\\u{1F3C6}","P-AW":"\\u{1F4F0}","P-NR":"\\u{1F9ED}","P-SK":"\\u{1F6E0}"},lt={top:78,iim1:70,new:60,broad:50},Ye={top:"most territories Strong, none Critical",iim1:"a majority Strong or Developing, none Critical",new:"a solid all-round profile with no Critical gaps",broad:"no Critical gaps and one or two clear strengths"},U=[{k:"critical",name:"Critical",min:0,color:"#FF5A5F"},{k:"gap",name:"Gap",min:35,color:"#FF9F1C"},{k:"developing",name:"Developing",min:55,color:"#3BA9FF"},{k:"strong",name:"Strong",min:75,color:"#1FD1A5"}],Y=e=>e==null?{k:"fog",name:"Unmapped",color:"#B8B3CC"}:[...U].reverse().find(t=>e>=t.min),Ge=(e,t=0,a=100)=>Math.max(t,Math.min(a,e)),ge=864e5;function H(e){if(e=+e,!e)return null;let t=new Date(Date.UTC(e,10,30));return t.setUTCDate(30-t.getUTCDay()),t.toISOString().slice(0,10)}function Xt(e,t=Date.now()){if(!e)return null;let a=Date.parse(e+"T09:00:00+05:30"),i=Date.parse(new Date(t+5.5*36e5).toISOString().slice(0,10)+"T09:00:00+05:30");return isNaN(a)?null:Math.round((a-i)/ge)}var P=e=>"CAT"+String(e).slice(-2),Z=[{k:"build",name:"Build phase",from:1/0,to:540,color:"#1FD1A5",icon:"\\u{1F331}",advice:"Time is your biggest asset. Start the long-cycle things: internships, a position of responsibility, something you start yourself, a skill you will be known for."},{k:"prove",name:"Proof phase",from:540,to:270,color:"#3BA9FF",icon:"\\u{1F4D0}",advice:"Turn activity into results with numbers. Compete, certify, ship the project, take on the bigger role."},{k:"package",name:"Package phase",from:270,to:90,color:"#FFC93C",icon:"\\u{1F4E6}",advice:"Document and quantify everything. Draft your \\u201CWhy MBA\\u201D. Your profile should be story-ready before CAT season begins."},{k:"focus",name:"CAT season",from:90,to:0,color:"#FF9F1C",icon:"\\u{1F3AF}",advice:"Profile on maintenance \\u2014 about 1\\u20132 hours a week. Keep the news habit and log what you already did; no new big projects."},{k:"interview",name:"Interview season",from:0,to:-150,color:"#6C3BFF",icon:"\\u{1F3A4}",advice:"WAT, GD and PI. Your narrative, mock interviews and current affairs are everything now."},{k:"after",name:"Season over",from:-150,to:-1/0,color:"#B8B3CC",icon:"\\u{1F3C1}",advice:"This cycle is done. Update your CAT year if you are going again \\u2014 everything you built carries forward."}],pt=e=>e==null?null:Z.find(t=>e<=t.from&&e>t.to)||Z[Z.length-1],Ut=[1e3,730,545,365,270,180,120,90,60,30,14,7,1],be=[["sleep","\\u{1F634} Sleep","#B8B3CC"],["main","\\u{1F3EB} College / work","#3BA9FF"],["commute","\\u{1F68C} Commute","#8A85A8"],["cat","\\u{1F4DA} CAT study","#FF5A5F"],["other","\\u{1F37D} Meals, family, other","#FFC93C"]],He={wd:{sleep:7,main:7,commute:1.5,cat:2.5,other:3},we:{sleep:8,main:0,commute:0,cat:5,other:5}};function Ke(e){let t=e.profile||{},a=t.routine,i=d=>{let u={...He[d],...a?.[d]||{}},v=be.reduce((w,[y])=>w+(+u[y]||0),0);return{v:u,used:v,free:Math.max(0,24-v)}},n=i("wd"),o=i("we"),s=Math.round((n.free*5+o.free*2)*10)/10,r=Math.round(((+n.v.cat||0)*5+(+o.v.cat||0)*2)*10)/10,m=Math.round(s*.35*2)/2,c=t.profHrs!=null&&t.profHrs!==""?+t.profHrs:a?m:null,h=Math.round((e.plan||[]).filter(d=>d.status!=="done").reduce((d,u)=>d+(E[u.aid]?.wh||0),0)*10)/10;return{set:!!a||t.profHrs!=null,wd:n,we:o,freeWeek:s,catWeek:r,suggested:m,capacity:c,load:h,left:c==null?null:Math.round((c-h)*10)/10}}function Vt(e){if(e==null||e===""||isNaN(+e))return null;let t=+e;return t<=10&&(t=t*9.5),Ge((t-51.25)/.4375)}function Qt(e){return e?.stage==="working"?"W":"S"}var fe=e=>e==null||e===""||isNaN(+e)?null:+e<=10?+e*9.5:+e;function ht(e={}){let t={},a=(r,m)=>(t[r]=t[r]||[]).push(m),i=fe(e.x10),n=fe(e.x12),o=fe(e.ug);i!=null&&i>=85&&a("P-AC","a"),n!=null&&n>=85&&a("P-AC","b");let s=[i,n,o].filter(r=>r!=null);return s.length>=2&&!s.some((r,m)=>m&&s[m-1]-r>=10)&&a("P-AC","d"),["btech","bsc"].includes(e.degree)&&a("P-AC","e"),e.degree&&e.degree!=="btech"&&a("P-AC","h"),e.stage==="working"&&e.worky&&e.worky!=="y0"&&a("P-WK","a"),t}function zt(e,t){let a=t.profile||{},i=a.pillars?.[e.id]||{},n=ht(a)[e.id]||[],o=[...new Set([...i.ev||[],...n])],s=i.self!=null||(i.ev||[]).length>0,r=e.ev.reduce((w,y)=>w+y.w,0),m=e.ev.filter(w=>o.includes(w.id)),c=100*m.reduce((w,y)=>w+y.w,0)/r,h=i.self!=null?(i.self-1)*25:null,d=s?h==null?c:.7*c+.3*h:null,u=[];if(s&&u.push("self-map"),e.id==="P-AC"){let w=[a.x10,a.x12,a.ug].map(Vt).filter(y=>y!=null);if(w.length){let y=w.reduce((g,I)=>g+I,0)/w.length;d=d==null?y:.5*d+.5*y,u.push("marks")}}e.id==="P-WK"&&a.stage==="working"&&d!=null&&(d=Ge(d+({y0:0,y1:6,y2:10,y3:12,y5:10}[a.worky]||0)));let v=d==null?null:Math.round(Ge(d));return{id:e.id,name:e.name,short:N[e.id],w:e.w,score:v,level:Y(v),mapped:s,have:m.map(w=>w.t),missing:e.ev.filter(w=>!o.includes(w.id)).sort((w,y)=>y.w-w.w).map(w=>w.t),self:i.self,claim:i.claim||"",sources:u,auto:n}}function V(e,t={},a=Date.now()){let i=e.profile||{},n=C.map(A=>zt(A,e)),o=n.filter(A=>A.score!=null),s=o.reduce((A,O)=>A+O.w,0),r=s?Math.round(o.reduce((A,O)=>A+O.score*O.w,0)/s):null,m=n.filter(A=>A.mapped).length,c=+i.catYear||null,h=H(c),d=Xt(h,a),u=pt(d),v=ye[i.target]||ye.new,w=lt[i.target]||lt.new,y=n.filter(A=>A.score!=null&&A.score>=75).sort((A,O)=>O.score-A.score),g=n.filter(A=>A.score!=null&&A.score<55).sort((A,O)=>A.score-O.score),I=n.filter(A=>A.score==null),M=Ke(e),W=d==null?null:Ut.find(A=>d<=A&&d>A-7)||null;return{pillars:n,overall:r,mappedN:m,catYear:c,catDate:h,days:d,phase:u,tier:v,target:w,gap:r==null?null:w-r,strengths:y,lacking:g,fog:I,time:M,milestone:W,total:C.length}}var _t=e=>e>=90?["Excellent","good"]:e>=80?["Strong","good"]:e>=70?["Average","info"]:["Below average","warn"],Jt={y0:6,y1:18,y2:30,y3:48,y5:72};function Q(e,t=Date.now()){let a=e.profile||{},i=[],n=(h,d,u,v="info",w=null)=>i.push({icon:h,title:d,text:u,tone:v,pillar:w}),o=h=>h!=null&&h!==""&&+h<=10?+h>=9?92:+h>=8?84:+h>=7?74:64:fe(h),s=[["Class 10",o(a.x10)],["Class 12",o(a.x12)],["Graduation",o(a.ug)]].filter(h=>h[1]!=null);if(s.length){n("\\u{1F393}","Your academic record",s.map(([d,u])=>`${d}: <b>${_t(u)[0]}</b>`).join(" \\xB7 "),s.some(d=>d[1]<70)?"warn":s.every(d=>d[1]>=85)?"good":"info","P-AC");for(let d=1;d<s.length;d++)s[d-1][1]-s[d][1]>=10&&n("\\u{1F4C9}",`Dip from ${s[d-1][0]} to ${s[d][0]}`,"A drop like this is a common interview question. Prepare a short, honest explanation and show what changed since.","warn","P-AC");s.every(d=>d[1]>=85)?n("\\u2B50","Academics are a strength","Many schools weigh past academics in their shortlisting scores \\u2014 yours work in your favour. Protect your graduation scores.","good","P-AC"):s.some(d=>d[1]<70)&&n("\\u{1F50E}","Check each school\\u2019s academic criteria","Schools weigh 10th, 12th and graduation differently, and some set minimum marks for shortlisting. Read each school\\u2019s admission policy for your batch, and lean on the territories you can still grow.","warn","P-AC");let h=fe(a.ug);h!=null&&["y12","prefinal","final"].includes(a.stage)&&n("\\u{1F4C8}","Graduation marks are still moving",`Your final graduation score is what schools will see. ${h<75?"Every remaining semester is a chance to lift it.":"Keep it steady through the final semesters."}`,"info","P-AC")}a.degree&&(a.degree==="btech"?n("\\u{1F9E9}","Engineering background","You are in the largest applicant pool. Differentiate through work impact, skills and a clear story rather than marks alone.","info","P-NR"):n("\\u{1F308}","Academic diversity","Several schools value non-engineering backgrounds in shortlisting. Make your degree part of your story, not something to explain away.","good","P-NR")),(a.gender==="f"||a.gender==="o")&&n("\\u2696\\uFE0F","Gender diversity","Several schools consider gender diversity in their admissions process \\u2014 check each school\\u2019s policy for your batch.","info");let r=+a.catYear;if(r){let h=Date.parse(H(r)+"T09:00:00+05:30"),d=Math.max(0,(h-t)/(30.4*ge));if(a.stage==="working"){let u=(Jt[a.worky]||0)+d;n("\\u{1F4BC}",`Work experience by ${P(r)}`,`About <b>${(u/12).toFixed(1)} years</b> at CAT time, a little more by joining. Many schools reward work experience \\u2014 the quality of what you did matters as much as the length.`,"info","P-WK")}else["y12","prefinal"].includes(a.stage)&&d>18?n("\\u{1F5D3}",`${Math.round(d)} months to ${P(r)}`,"That is long enough for two or three internship or project cycles and a real leadership role. Start the long-cycle quests now.","good","P-WK"):a.stage==="grad"&&r-new Date(t).getUTCFullYear()>=1&&n("\\u{1F9ED}","A gap year needs a story","If you are not working before CAT, plan what you will show for this time \\u2014 a job, internship, project or skill. Panels ask.","warn","P-WK");["final","prefinal","y12"].includes(a.stage)&&d<14&&n("\\u{1F392}","Likely a fresher application",`If you write ${P(r)} before working, internships, live projects and leadership roles carry the \\u201Cwork\\u201D story.`,"info","P-WK")}let m=ht(a),c=Object.values(m).flat().length;return c&&n("\\u2705",`${c} item${c>1?"s":""} auto-ticked on your map`,"Filled in from your marks, degree and work-ex \\u2014 you don\\u2019t need to tick them again.","good"),i}var Fe=new Set(["WK-B1","WK-A1","WK-A2","LD-B1","LD-I1","LD-A1","EC-A1","AC-B1","AC-A1","SK-I1","SK-A1","EC-B1"]),rt=new Set(["WK-I2","EC-I2","NR-B1","NR-I1","AC-I1","WK-I1"]),dt=new Set(["NR-I2","NR-A1","NR-P1","AW-I2","AW-A1","AW-I1","NR-I1"]);function ne(e,t){let a=e.profile||{},i=Qt(a),n=a.budget||"free",o=new Set((e.plan||[]).map(u=>u.aid)),s=t.phase?.k||"prove",r=t.time.left,m=[];for(let u of we){if(u.per!=="X"&&u.per!==i||u.cost==="paid"&&n==="free")continue;let v=t.pillars.find(A=>A.id===u.p),w=v.score==null?30:v.score,y=u.l==="B"?w<45?1:w<60?.6:.2:u.l==="I"?w>=30&&w<78?1:.45:w>=60?1:w>=45?.4:.12,g=1,I="";s==="build"?Fe.has(u.id)?(g=1.5,I="long-cycle \\u2014 best started early"):dt.has(u.id)&&u.id!=="AW-I1"&&(g=.45):s==="prove"?(Fe.has(u.id)||u.l==="I")&&(g=1.25):s==="package"?rt.has(u.id)?(g=1.6,I="package phase \\u2014 document it now"):Fe.has(u.id)&&u.mw>8&&(g=.6):s==="focus"?u.wh<=2&&(rt.has(u.id)||u.hab)?(g=1.5,I="light enough for CAT season"):g=.35:s==="interview"&&(dt.has(u.id)||u.p==="P-NR"?(g=2,I="interview season"):g=.3);let M=1;r!=null&&u.wh>Math.max(0,r)&&(M=r<=0?.55:.75);let W=F[u.p].w*(100-w)/100*u.lev*y*g*M*(v.score==null?1.15:1);m.push({a:u,value:W,pillar:v,inPlan:o.has(u.id),overBudget:M<1,reason:`${v.short} ${v.score==null?"is still unmapped":`is at ${v.score} (${v.level.name.toLowerCase()})`}${I?" \\xB7 "+I:""}.`})}m.sort((u,v)=>v.value-u.value);let c=[],h=[],d={};for(let u of m)(d[u.a.p]||0)<2&&c.length<9?(c.push(u),d[u.a.p]=(d[u.a.p]||0)+1):h.push(u);return[...c,...h]}function $e(e){let t=Math.max(1,Math.ceil(e.mw/2));return[{k:"start",t:"Do the first step today",d:e.fs},{k:"rhythm",t:`Block ${Zt(e.wh)} a week in your routine for ${e.mw} weeks`,d:e.hab?"This is a habit \\u2014 small and daily beats big and rare. Same time every day.":"Pick fixed slots in your free hours now; a quest without calendar time quietly dies."},{k:"mid",t:`Week ${t} checkpoint \\u2014 review what\'s working`,d:"Write two lines in the update log: what moved, what didn\'t. Flag your mentor if you are stuck."},{k:"proof",t:`Build the proof: ${e.art}`,d:"Paste a link (Drive, LinkedIn, certificate, GitHub, doc) in an update \\u2014 this is what you will show a panel."},{k:"pi",t:"Make it interview-ready",d:"Answer the three questions a panel will ask about this, below."}]}function Zt(e){return e<1?`${Math.round(e*60)} min`:`${e} hr${e===1?"":"s"}`}function ke(e){let t=E[e.aid];if(!t)return 0;let a=$e(t);return e.status==="done"?100:Math.round(100*a.filter(i=>e.steps?.[i.k]).length/a.length)}function Me(e){let t=0;for(let a of e.plan||[])t+=Object.values(a.steps||{}).filter(Boolean).length*10,a.status==="done"&&(t+=60),t+=Math.min(10,(a.log||[]).length)*5;return t+=(e.checkins||[]).length*20,t+=(e.profile?.pillars?Object.keys(e.profile.pillars).length:0)*10,e.profile?.routine&&(t+=20),t}var ve=[{min:0,name:"Explorer"},{min:150,name:"Scout"},{min:400,name:"Navigator"},{min:800,name:"Pathfinder"},{min:1400,name:"Cartographer"},{min:2200,name:"Trailblazer"}];function Xe(e){let t=ve[0],a=null;for(let i=0;i<ve.length;i++)e>=ve[i].min&&(t=ve[i],a=ve[i+1]||null);return{...t,next:a}}function ea(e){let t=[e.createdAt||0];for(let a of e.plan||[]){t.push(a.addedAt||0,a.updatedAt||0);for(let i of a.log||[])t.push(i.t||0)}for(let a of e.checkins||[])t.push(a.t||0);return e.profile?.updatedAt&&t.push(e.profile.updatedAt),Math.max(...t)}function ut(e,t={},a=Date.now(),i=[]){let n=V(e,t,a),o=[],s=(y,g,I,M,W)=>o.push({key:y,urgency:g,title:I,detail:M,kind:W}),r=i.filter(y=>y.bookedBy===e.id&&y.status!=="cancelled"),m=n.catYear?P(n.catYear):"CAT";if(n.mappedN>=n.total-1&&!r.length&&s("first-review",2,"First profile review due",`Profile mapped (${n.mappedN}/${n.total}). No mentor session yet \\u2014 walk through the map and agree the first quests.`,"review"),n.days!=null){for(let y of[540,270,90,0])if(n.days<=y&&n.days>y-14){let g=pt(n.days);s(`phase:${n.catYear}:${g.k}`,y===0?2:1,`${g.icon} ${m}: entering ${g.name.toLowerCase()} (${n.days>=0?n.days+" days to go":"CAT done"})`,g.advice+" Re-plan quests for this phase.","phase")}}let c=ea(e);(e.plan||[]).some(y=>y.status!=="done")&&a-c>10*ge&&s("stalled:"+Math.floor(c/ge),2,`No activity for ${Math.floor((a-c)/ge)} days`,"Open quests but nothing logged. A short call to unblock or re-scope usually restarts momentum.","stall");for(let y of e.plan||[])y.status==="blocked"&&s("blocked:"+y.aid+":"+(y.updatedAt||0),2,`Blocked: ${E[y.aid]?.t||y.aid}`,y.blockNote||"Student marked this quest as blocked.","blocked");let h=[...e.checkins||[]].sort((y,g)=>y.t-g.t);h.length>=2&&h.slice(-2).every(y=>y.mood<=2)&&s("mood:"+h[h.length-1].t,3,"Low mood two check-ins running",`Latest: \\u201C${(h[h.length-1].note||"").slice(0,120)}\\u201D. Reach out personally \\u2014 this is a wellbeing check, not a progress review.`,"mood");let d=n.pillars.find(y=>y.id==="P-NR");d.score!=null&&d.score<45&&n.days!=null&&n.days<=150&&n.days>-120&&s("narrative:"+n.catYear,n.days<=30?2:1,"Narrative gap before interview season",`\\u201CWhy MBA\\u201D story is at ${d.score} with ${n.days>=0?n.days+" days to "+m:"interviews under way"}. Book a narrative session.`,"narrative");let u=n.lacking.filter(y=>y.score<35);u.length>=3&&s("critical:"+u.map(y=>y.id).join(","),2,`${u.length} critical territories`,u.map(y=>y.short).join(", ")+" \\u2014 help them prioritise; not everything can be fixed at once.","critical");let v=n.time;v.capacity!=null&&v.load>v.capacity*1.3&&v.load-v.capacity>=2&&s("overload:"+Math.round(v.load),1,`Over-committed: ${v.load} h/wk of quests vs ${v.capacity} h/wk available`,"Help them drop or pause a quest before something (or someone) breaks.","overload"),v.set&&v.capacity!=null&&v.capacity<2&&n.phase&&["build","prove"].includes(n.phase.k)&&s("notime:"+v.capacity,1,`Only ${v.capacity} h/wk free for profile work`,`Routine leaves little room in the ${n.phase.name.toLowerCase()}. Review their week together \\u2014 small daily habits may be the answer.`,"time");for(let y of e.help||[])y.closed||s("help:"+y.id,3,"Student asked for help",y.text,"help");let w=e.ack||{};return o.filter(y=>!w[y.key]).sort((y,g)=>g.urgency-y.urgency)}var f=(e,t=document)=>t.querySelector(e),l=e=>String(e??"").replace(/[&<>"\']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&#39;"})[t]),R={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{t==null?localStorage.removeItem(e):localStorage.setItem(e,t)}catch{}}};async function x(e,t="GET",a){let i=R.get("atlas.tok"),n=await fetch("/api"+e,{method:t,headers:{"content-type":"application/json",...i?{authorization:"Bearer "+i}:{}},body:a?JSON.stringify(a):void 0}),s=(n.headers.get("content-type")||"").includes("json")?await n.json():await n.text();if(n.status===401&&i&&!e.startsWith("/login")&&(R.set("atlas.tok",null),R.set("atlas.role",null),location.hash="",location.reload()),!n.ok)throw new Error(s.error||"Something went wrong");return s}var mt;function k(e){document.querySelectorAll(".toast").forEach(a=>a.remove());let t=document.createElement("div");t.className="toast",t.textContent=e,document.body.appendChild(t),clearTimeout(mt),mt=setTimeout(()=>t.remove(),2600)}function B(e,t=""){j();let a=document.createElement("div");return a.className="scrim",a.id="scrim",a.innerHTML=`<div class="modal ${t}" role="dialog"><button class="btn sm x" data-close>\\u2715</button>${e}</div>`,a.addEventListener("mousedown",i=>{i.target===a&&j()}),a.addEventListener("click",i=>{i.target.closest("[data-close]")&&j()}),document.body.appendChild(a),document.body.style.overflow="hidden",a.firstElementChild}function j(){let e=f("#scrim");e&&e.remove(),document.body.style.overflow=""}var z=e=>String(e||"?").split(/\\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase(),K=(e,t={day:"numeric",month:"short"})=>e?new Date(e).toLocaleDateString("en-IN",t):"\\u2014",q=e=>new Date(e).toLocaleString("en-IN",{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit"}),gt=e=>new Date(e).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"}),ee=e=>{let t=(Date.now()-e)/6e4;return t<1?"just now":t<60?Math.round(t)+" min ago":t<1440?Math.round(t/60)+" h ago":Math.round(t/1440)+" d ago"},ta=e=>Y(e).color,re=e=>{try{return new URL(e).hostname.replace(/^www\\./,"")}catch{return e}};function Ae(e,t=34){return`<b class="lv-${Y(e).k}" style="width:${t}px;height:${t}px">${e??"?"}</b>`}var Ve=56,le=Math.sqrt(3)*Ve,Ce=1.5*Ve,Ue={"P-NR":[380,178],"P-AC":[380-le/2,178-Ce],"P-WK":[380+le/2,178-Ce],"P-SK":[380+le,178],"P-LD":[380+le/2,178+Ce],"P-EC":[380-le/2,178+Ce],"P-AW":[380-le,178]},vt=(e,t,a=Ve-3)=>Array.from({length:6},(i,n)=>{let o=Math.PI/180*(60*n-30);return`${(e+a*Math.cos(o)).toFixed(1)},${(t+a*Math.sin(o)).toFixed(1)}`}).join(" ");function te(e,{sel:t=null,pin:a=null,compact:i=!1}={}){let n=e.pillars.map(s=>{let[r,m]=Ue[s.id],c=s.level,h=s.score==null;return`<g class="hex ${t===s.id?"sel":""}" data-hex="${s.id}" tabindex="0" role="button" aria-label="${l(s.name)} ${h?"unmapped":s.score}">\n      <polygon points="${vt(r+4,m+5)}" fill="#17123A"/>\n      <polygon class="face" points="${vt(r,m)}" fill="${h?"url(#fog)":c.color}" stroke="#17123A" stroke-width="3" stroke-linejoin="round"/>\n      <text x="${r}" y="${m-20}" text-anchor="middle" font-size="17">${T[s.id]}</text>\n      <text x="${r}" y="${m+9}" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="${h?20:27}" fill="${h?"#4B4670":c.k==="critical"||c.k==="developing"?"#fff":"#17123A"}">${h?"???":s.score}</text>\n      <text x="${r}" y="${m+29}" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="11.5" fill="${!h&&(c.k==="critical"||c.k==="developing")?"#fff":"#17123A"}">${l(N[s.id])}</text>\n    </g>`}).join(""),o="";if(a&&Ue[a]){let[s,r]=Ue[a];o=`<g pointer-events="none"><g transform="translate(${s+30},${r-66})"><path d="M0 0 C-16 0 -22 14 -14 26 L0 46 L14 26 C22 14 16 0 0 0Z" fill="#FF5A5F" stroke="#17123A" stroke-width="3"/><circle cx="0" cy="15" r="6" fill="#fff" stroke="#17123A" stroke-width="2.5"/></g>\n      <g transform="translate(${s+48},${r-78})"><rect width="96" height="24" rx="12" fill="#17123A"/><text x="48" y="16.5" fill="#fff" font-family="Space Mono,monospace" font-size="11" font-weight="700" text-anchor="middle">START HERE</text></g></g>`}return`<div class="scrollx"><svg class="atlas" viewBox="0 0 760 ${i?340:350}" xmlns="http://www.w3.org/2000/svg">\n    <defs><pattern id="fog" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#EAE7F2"/><line x1="0" y1="0" x2="0" y2="10" stroke="#C9C4DC" stroke-width="5"/></pattern>\n    <radialGradient id="isl" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#FFE9B8"/><stop offset="1" stop-color="#FFF7E8" stop-opacity="0"/></radialGradient></defs>\n    <g fill="none" stroke="#3BA9FF" stroke-opacity=".25" stroke-width="1.6"><ellipse cx="380" cy="178" rx="250" ry="166"/><ellipse cx="380" cy="178" rx="290" ry="190" stroke-dasharray="4 8"/><path d="M0 330 C140 312 230 346 360 330 S590 314 760 332"/></g>\n    <ellipse cx="380" cy="178" rx="240" ry="160" fill="url(#isl)"/>\n    <text x="28" y="34" font-family="Space Mono,monospace" font-size="12" font-weight="700" fill="#6C3BFF" letter-spacing="2">YOUR PROFILE ISLAND</text>\n    <text x="28" y="52" font-family="DM Sans,sans-serif" font-size="12" fill="#4B4670">your story sits at the centre \\u2014</text>\n    <text x="28" y="68" font-family="DM Sans,sans-serif" font-size="12" fill="#4B4670">every territory around it feeds it</text>\n    <g transform="translate(712,40)"><circle r="20" fill="#fff" stroke="#17123A" stroke-width="2.5"/><path d="M0 -15 L5 0 L0 15 L-5 0Z" fill="#FF5A5F" stroke="#17123A" stroke-width="1.5"/><text y="-23" text-anchor="middle" font-size="10" font-weight="800" font-family="Space Mono,monospace">N</text></g>\n    ${n}${o}\n  </svg></div>`}function qe(){return`<div class="legend">${U.map(e=>`<span><i style="background:${e.color}"></i>${e.name} ${e.min?"\\u2265"+e.min:"<35"}</span>`).join("")}<span><i style="background:repeating-linear-gradient(45deg,#EAE7F2 0 4px,#C9C4DC 4px 8px)"></i>Unmapped</span></div>`}function De(e,t=[],{start:a=null}={}){if(!e.catDate)return"";let i=Date.parse(e.catDate+"T09:00:00+05:30"),n=Date.now(),o=i+150*864e5,s=Math.min(n-30*864e5,a||n,i-120*864e5),r=1e3,m=20,c=980,h=W=>m+(Math.max(s,Math.min(o,W))-s)/(o-s)*(c-m),d=Z.filter(W=>W.k!=="after").map(W=>{let A=Math.max(s,i-Math.min(W.from,5e3)*864e5),O=i-W.to*864e5;if(O<=s)return"";let Te=h(A),Oe=h(O);return`<rect x="${Te}" y="58" width="${Math.max(0,Oe-Te)}" height="30" fill="${W.color}" fill-opacity=".85" stroke="#17123A" stroke-width="2"/>${Oe-Te>70?`<text x="${(Te+Oe)/2}" y="77" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="12.5" fill="#17123A">${W.icon} ${W.name}</text>`:""}`}).join(""),u=[],v=new Date(s);v.setDate(1),v.setMonth(v.getMonth()+1);let w=(o-s)/864e5,y=w>700?6:w>360?3:1;for(;v.getTime()<o;v.setMonth(v.getMonth()+y))u.push(`<text x="${h(v.getTime())}" y="48" text-anchor="middle" font-family="Space Mono,monospace" font-size="10.5" fill="#8A85A8">${v.toLocaleDateString("en-IN",{month:"short",year:"2-digit"})}</text>`);let g=t.filter(W=>W.due&&W.status!=="done").map(W=>{let A=Date.parse(W.due);return`<g transform="translate(${h(A)},100)"><title>${l(E[W.aid]?.t||"")} \\u2014 due ${W.due}</title><path d="M0 -8 L7 4 L-7 4Z" fill="#6C3BFF" stroke="#17123A" stroke-width="1.5"/></g>`}).join(""),I=h(i),M=h(n);return`<div class="scrollx"><svg class="route" viewBox="0 0 ${r} 150" style="width:100%;height:auto;display:block" xmlns="http://www.w3.org/2000/svg">${u}${d}${g}\n    <g transform="translate(${I},58)"><line y1="-30" y2="40" stroke="#17123A" stroke-width="3"/><path d="M0 -30 L24 -22 L0 -14Z" fill="#FF5A5F" stroke="#17123A" stroke-width="2.5"/><text x="28" y="-16" font-family="Space Mono,monospace" font-weight="700" font-size="12" fill="#17123A">${P(e.catYear)} \\xB7 ${new Date(i).toLocaleDateString("en-IN",{day:"numeric",month:"short"})}</text></g>\n    <g transform="translate(${M},73)"><circle r="11" fill="#fff" stroke="#17123A" stroke-width="3"/><circle r="5" fill="#FF5A5F"/></g>\n    <g transform="translate(${Math.min(Math.max(M,60),900)},132)"><rect x="-56" y="-15" width="112" height="24" rx="12" fill="#17123A"/><text y="1" text-anchor="middle" fill="#fff" font-family="Space Mono,monospace" font-weight="700" font-size="11.5">YOU \\xB7 TODAY</text></g>\n    <path d="M${M} 85 L${Math.min(Math.max(M,60),900)} 117" stroke="#17123A" stroke-width="2" stroke-dasharray="3 3"/></svg></div>`}function de(e){return`<div style="display:flex;height:34px;border:2.5px solid var(--ink);border-radius:10px;overflow:hidden;background:#fff">${be.map(([a,i,n])=>[a,i,n,+e.v[a]||0]).filter(a=>a[3]>0).map(([a,i,n,o])=>`<div title="${l(i)}: ${o}h" style="width:${o/24*100}%;background:${n};border-right:1.5px solid var(--ink);display:grid;place-items:center;font:700 11px var(--fm);color:#17123A;overflow:hidden">${o>=1.5?o+"h":""}</div>`).join("")}${e.free>0?`<div title="Free: ${e.free}h" style="flex:1;background:repeating-linear-gradient(45deg,#D5F8EE 0 6px,#fff 6px 12px);display:grid;place-items:center;font:800 12px var(--fm);color:#0b8a6b">${e.free.toFixed(1).replace(".0","")}h free</div>`:""}</div>`}function Se(e,t=300){let a=t/2,i=t/2-42,n=e.pillars.length,o=(h,d)=>{let u=-Math.PI/2+h*2*Math.PI/n;return[a+Math.cos(u)*i*d/100,a+Math.sin(u)*i*d/100]},s=[25,50,75,100].map(h=>`<polygon points="${e.pillars.map((d,u)=>o(u,h).join(",")).join(" ")}" fill="none" stroke="#17123A" stroke-opacity="${h===100?.35:.12}" stroke-width="1.5"/>`).join(""),r=e.pillars.map((h,d)=>o(d,h.score??0).join(",")).join(" "),m=e.pillars.map((h,d)=>{let[u,v]=o(d,122);return`<text x="${u}" y="${v+4}" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="11" fill="#17123A">${l(N[h.id])}</text>`}).join(""),c=e.pillars.map((h,d)=>{let[u,v]=o(d,h.score??0);return`<circle cx="${u}" cy="${v}" r="5" fill="${ta(h.score)}" stroke="#17123A" stroke-width="2"/>`}).join("");return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:${t}px;height:auto;display:block;margin:auto">${s}<polygon points="${r}" fill="#6C3BFF" fill-opacity=".22" stroke="#6C3BFF" stroke-width="3" stroke-linejoin="round"/>${c}${m}</svg>`}function ft(e,t=120,a="#6C3BFF",i=""){let n=t/2-9,o=2*Math.PI*n,s=Math.max(0,Math.min(100,e||0));return`<div class="ring" style="width:${t}px;height:${t}px"><svg width="${t}" height="${t}"><circle cx="${t/2}" cy="${t/2}" r="${n}" fill="#fff" stroke="#17123A" stroke-width="2.5"/><circle cx="${t/2}" cy="${t/2}" r="${n-5}" fill="none" stroke="#EEE" stroke-width="9"/><circle cx="${t/2}" cy="${t/2}" r="${n-5}" fill="none" stroke="${a}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${2*Math.PI*(n-5)*s/100} 999" transform="rotate(-90 ${t/2} ${t/2})"/></svg><div class="c">${i}</div></div>`}var xe=e=>new Date(e).toISOString().replace(/[-:]/g,"").replace(/\\.\\d{3}/,"");function Ee(e,t){let a=new Date(e.start),i=new Date(a.getTime()+e.dur*6e4);return"https://calendar.google.com/calendar/render?"+new URLSearchParams({action:"TEMPLATE",text:`Mentor session \\u2014 ${t}`,dates:`${xe(a)}/${xe(i)}`,details:`${e.topic?"Topic: "+e.topic+`\n`:""}${e.link?"Join: "+e.link+`\n`:""}Booked via Profile Atlas`,location:e.link||""}).toString()}function Ne(e,t){let a=new Date(e.start),i=new Date(a.getTime()+e.dur*6e4),n=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Profile Atlas//EN","BEGIN:VEVENT","UID:"+e.id+"@profile-atlas","DTSTAMP:"+xe(Date.now()),"DTSTART:"+xe(a),"DTEND:"+xe(i),"SUMMARY:Mentor session \\u2014 "+t,"DESCRIPTION:"+(e.topic||"").replace(/\\n/g," ")+(e.link?" Join: "+e.link:""),"LOCATION:"+(e.link||""),"BEGIN:VALARM","TRIGGER:-PT30M","ACTION:DISPLAY","DESCRIPTION:Mentor session in 30 min","END:VALARM","END:VEVENT","END:VCALENDAR"].join(`\\r\n`),o=document.createElement("a");o.href=URL.createObjectURL(new Blob([n],{type:"text/calendar"})),o.download="mentor-session.ics",o.click()}function ce(e,t=90,a=26,i="#6C3BFF"){let n=e.filter(m=>m>0);if(n.length<2)return"";let o=Math.min(...n)-2,s=Math.max(...n)+2,r=n.map((m,c)=>`${(c*(t-4)/(n.length-1)+2).toFixed(1)},${(a-2-(m-o)/(s-o)*(a-4)).toFixed(1)}`).join(" ");return`<svg class="spark" width="${t}" height="${a}"><polyline points="${r}" fill="none" stroke="${i}" stroke-width="2.5" stroke-linejoin="round"/></svg>`}var ae=[[1,"\\u{1F629}","Drained"],[2,"\\u{1F615}","Low"],[3,"\\u{1F610}","Okay"],[4,"\\u{1F642}","Good"],[5,"\\u{1F525}","On fire"]],yt=[[1,"\\u{1F331}","Not started"],[2,"\\u{1F62C}","Shaky"],[3,"\\u{1F642}","Getting there"],[4,"\\u{1F4AA}","Solid"],[5,"\\u{1F680}","Panel-ready"]];var p=null,pe=null,ze=null,_e=!1,wt=null,Le={B:"Foundation",I:"Build",A:"Stretch"},je={B:"m",I:"s",A:"v"},G=["basics","goals","time",...C.map(e=>e.id),"review"];async function At(e){pe=e;let t=await x("/me");p={d:t,me:t.me,base:t.now,view:"map",step:0,qtab:"mine",qf:"all",rf:{q:"",cat:"all",mine:!1}},p.me.profile=p.me.profile||{},p.me.profile.pillars=p.me.profile.pillars||{},pe.addEventListener("click",ba),pe.addEventListener("input",$a),pe.addEventListener("change",ka),document.addEventListener("click",xa),document.addEventListener("input",xt),document.addEventListener("change",xt),window.addEventListener("hashchange",bt),bt(),clearInterval(wt),wt=setInterval(aa,45e3),p.me.profile.stage||(location.hash="#/profile")}function bt(){let e=location.hash.replace(/^#\\/?/,"").split("/")[0]||"map";p.view=["map","profile","time","quests","mentor","resources"].includes(e)?e:"map",S(),window.scrollTo(0,0)}function D(e=!1){clearTimeout(ze),ze=setTimeout(async()=>{_e=!0;try{let t=await x("/me/data","PUT",{profile:p.me.profile,plan:p.me.plan,checkins:p.me.checkins,name:p.me.name,phone:p.me.phone,base:p.base});Je(t),Qe("Saved \\u2713")}catch(t){Qe("\\u26A0 "+t.message)}_e=!1},e?0:650),Qe("Saving\\u2026")}function Qe(e){let t=f("#savestate");t&&(t.textContent=e)}function Je(e){p.base=e.now;let t=new Set(p.me.plan.map(i=>i.aid)),a=(e.me.plan||[]).filter(i=>!t.has(i.aid));a.length&&(p.me.plan.push(...a),k(`Your mentor added ${a.length} quest${a.length>1?"s":""} for you`)),Object.assign(p.d,{alerts:e.alerts,open:e.open,mine:e.mine,mentor:e.mentor,resources:e.resources,cfg:e.cfg});for(let i of["notes","nudges","ack","help","mentorId"])p.me[i]=e.me[i];a.length&&S()}async function aa(){if(!(_e||ze&&document.querySelector("#savestate")?.textContent==="Saving\\u2026"||document.hidden))try{let e=await x("/me"),t=JSON.stringify([p.d.open?.length,p.d.mine?.map(i=>i.status),p.me.notes?.length,p.me.nudges?.length]);Je(e);let a=JSON.stringify([p.d.open?.length,p.d.mine?.map(i=>i.status),p.me.notes?.length,p.me.nudges?.length]);t!==a&&!f("#scrim")&&!["profile"].includes(p.view)&&S()}catch{}}async function Re(e,t){let a=await x(e,"POST",t||{});return Je(a),a}function sa(e){let t=p.an,a=Me(p.me),i=Xe(a),n=(p.d.alerts||[]).length+(p.me.nudges||[]).filter(s=>!s.seen).length,o=[["map","\\u{1F5FA}\\uFE0F Map"],["profile","\\u{1F9ED} My profile"],["quests","\\u{1F3AF} Quests"],["time","\\u23F1 My time"],["mentor","\\u{1F91D} Mentor"],["resources","\\u{1F517} Resources"]];return`<header class="top"><div class="wrap">\n    <a class="logo" href="#/map"><span class="mk">${ie()}</span><span class="t">Profile Atlas</span></a>\n    <nav class="nav">${o.map(([s,r])=>`<a href="#/${s}" class="${p.view===s?"on":""}">${r}${s==="mentor"&&n?`<span class="b">${n}</span>`:""}${s==="quests"&&p.me.plan.filter(m=>m.status==="doing").length?`<span class="b" style="background:var(--sky)">${p.me.plan.filter(m=>m.status==="doing").length}</span>`:""}</a>`).join("")}</nav>\n    <div class="me">\n      ${t.days!=null&&t.days>=0?`<span class="chip y mono" title="Days to ${P(t.catYear)} (${t.catDate})">\\u23F3 ${P(t.catYear)} \\xB7 ${t.days}d</span>`:t.catYear?`<span class="chip v mono">${P(t.catYear)} \\xB7 ${t.phase.name}</span>`:""}\n      <span class="chip v" title="${a} XP">${i.name}</span>\n      <button class="ava" data-a="account" title="Account">${l(z(p.me.name))}</button>\n    </div></div></header>\n  <main><div class="wrap">${e}</div></main>\n  <div class="footer">${l(p.d.cfg.program)}${p.d.cfg.prep?` \\xB7 CAT practice on <a href="${l(p.d.cfg.prep.url)}" target="_blank" rel="noopener">${l(p.d.cfg.prep.name)}</a>`:""} \\xB7 <span id="savestate">All changes saved</span></div>`}function ie(){return\'<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#17123A" stroke-width="2"/><path d="M12 3 L15 12 L12 21 L9 12Z" fill="#FFC93C" stroke="#17123A" stroke-width="1.6"/><path d="M12 3 L15 12 L9 12Z" fill="#FF5A5F" stroke="#17123A" stroke-width="1.6"/></svg>\'}function S(){p.an=V(p.me,p.d.cfg);let e={map:oa,profile:la,quests:ha,time:ga,mentor:ua,resources:fa}[p.view];pe.innerHTML=sa(e())}function ia(){let e=p.me,t=p.an;return[{ok:t.mappedN>=t.total-1,t:`Map at least ${t.total-1} of your ${t.total} territories`,go:"#/profile"},{ok:t.time.set,t:"Set your weekly time budget",go:"#/time"},{ok:e.plan.length>=3,t:"Pick 3 quests for the next month",go:"#/quests",n:`${Math.min(3,e.plan.length)}/3`},{ok:e.plan.some(a=>Object.values(a.steps||{}).some(Boolean)),t:"Tick off the first step of a quest",go:"#/quests"},{ok:(p.d.mine||[]).some(a=>a.status!=="cancelled"),t:"Book your first mentor review",go:"#/mentor"},{ok:e.checkins.length>0,t:"Do your weekly check-in",a:"checkin"}]}function oa(){let e=p.an,t=p.me,a=l((t.name||"").split(" ")[0]),i=ne(t,e).filter(g=>!g.inPlan).slice(0,3),n=i[0]?.a.p||e.lacking[0]?.id||null,o=ia(),s=o.filter(g=>g.ok).length,r=(t.nudges||[]).filter(g=>!g.seen),m=p.d.alerts||[],c=Me(t),h=Xe(c),d=[...t.checkins].sort((g,I)=>I.t-g.t)[0],u=!d||Date.now()-d.t>6*864e5,v=`<div class="pagehead"><div><div class="kick">Your profile atlas</div><h2 style="font-size:clamp(28px,4vw,40px)">Hi ${a} \\u2014 here\'s where you stand.</h2>\n    <p class="muted">${e.mappedN<e.total?`${e.total-e.mappedN} territor${e.total-e.mappedN===1?"y is":"ies are"} still in the fog. `:""}${e.phase?`You\'re in the <b>${e.phase.name.toLowerCase()}</b> of your ${P(e.catYear)} journey.`:""}</p></div>\n    <div class="row"><a class="btn" href="#/profile">\\u270F\\uFE0F Update my map</a><button class="btn ${u?"sun":""}" data-a="checkin">\\u{1F4DD} Weekly check-in</button></div></div>`;for(let g of r)v+=`<div class="card tint-v banner" style="margin-bottom:14px"><div class="ava" style="background:var(--violet);color:#fff">${l(z(g.by))}</div><div class="grow"><b>${l(g.by)}</b> <span class="faint small">${ee(g.t)}</span><div>${l(g.text)}</div></div>${g.book?\'<a class="btn pri" href="#/mentor">Pick a slot</a>\':""}<button class="btn sm" data-a="nudge-seen">Got it</button></div>`;e.milestone&&e.days>=0&&(v+=`<div class="card dark banner" style="margin-bottom:14px"><div style="font:800 40px var(--fd);color:var(--yellow)">${e.days}</div><div class="grow"><b style="font-size:17px">${e.milestone===1,"days"} to ${P(e.catYear)} \\u2014 a milestone \\u23F3</b><div class="muted small">${l(e.phase.advice)}</div></div><a class="btn sun" href="#/quests" data-a="qtab" data-x="sugg">Re-plan for this phase</a></div>`),m.length&&(v+=`<div class="card tint-c banner pulse" style="margin-bottom:16px"><div style="font-size:34px">\\u{1F9ED}</div><div class="grow"><b>Time to talk to your mentor.</b> <span class="muted">${l(m[0].title)}${m.length>1?` \\xB7 +${m.length-1} more reason${m.length>2?"s":""}`:""}</span></div><a class="btn hot" href="#/mentor">Book a session \\u2192</a></div>`),e.mappedN===0&&(v+=`<div class="card tint-y" style="padding:30px;margin-bottom:18px"><div class="grid g2" style="align-items:center"><div><div class="kick mono small" style="color:var(--violet)">STEP 1 OF YOUR EXPEDITION</div><h2 style="font-size:34px;margin:6px 0">Your map is all fog. Let\'s chart it.</h2><p class="muted">Seven quick territories \\u2014 tap what\'s true, rate yourself, add your best proof. Takes about 12 minutes and it saves as you go.</p><a class="btn pri lg" href="#/profile" style="margin-top:10px">Start mapping \\u2192</a></div><div>${te(e)}</div></div></div>`),v+=`<div class="grid g3">\n    <div class="card span2"><div class="row between"><h3>The atlas</h3>${qe()}</div>${te(e,{pin:n})}<p class="small muted" style="margin:0">Tap any territory to see what\'s there, what\'s missing and how to fix it. ${n?\'The <b style="color:var(--coral)">START HERE</b> pin marks your highest-value move.\':""}</p>\n    <div class="grid g2" style="gap:0 22px;margin-top:10px">${e.pillars.map(g=>`<div class="pbar" data-hex="${g.id}"><span>${T[g.id]}</span><span>${l(g.short)}</span>${g.score==null?\'<span class="small faint">fog</span><span></span>\':`<div class="bar"><i style="width:${g.score}%;background:${g.level.color}"></i></div><span class="mono">${g.score}</span>`}</div>`).join("")}</div></div>\n    <div class="card stack">\n      <div class="row" style="gap:16px">${ft(e.overall,118,"#6C3BFF",`<div class="mono tiny faint">READINESS</div><div style="font:800 34px var(--fd)">${e.overall??"\\u2014"}</div>`)}\n      <div class="stack grow" style="margin:0"><div><div class="row between small"><b>\\u{1F3AF} Goal</b><b>${e.strengths.length}/${e.total} strong</b></div><div class="bar thin"><i style="width:${e.strengths.length/e.total*100}%;background:var(--mint)"></i></div><div class="tiny muted">${l(e.tier.label)} \\u2014 aim for ${l(Ye[p.me.profile.target]||Ye.new)}.</div></div>\n      <div><div class="row between small"><b>\\u23F1 Time budget</b><b>${e.time.capacity!=null?`${e.time.load}/${e.time.capacity} h`:"\\u2014"}</b></div><div class="bar thin"><i style="width:${e.time.capacity?Math.min(100,e.time.load/Math.max(.5,e.time.capacity)*100):0}%;background:${e.time.left!=null&&e.time.left<0?"var(--coral)":"var(--sky)"}"></i></div><div class="tiny muted">${e.time.capacity==null?\'<a href="#/time">Set your weekly hours \\u2192</a>\':e.time.left<0?`Over-committed by ${-e.time.left} h/wk`:`${e.time.left} h/wk still free for quests`}</div></div>\n      <div><div class="row between small"><b>\\u{1F5FA} Mapped</b><b>${e.mappedN}/${e.total}</b></div><div class="bar thin"><i style="width:${e.mappedN/e.total*100}%;background:var(--sky)"></i></div></div></div></div>\n      <div class="card flat tint-v" style="padding:12px"><div class="row between"><b>\\u{1F3C5} ${h.name}</b><span class="mono small">${c} XP</span></div><div class="bar thin" style="margin-top:6px"><i style="width:${h.next?Math.round((c-h.min)/(h.next.min-h.min)*100):100}%"></i></div><div class="tiny muted" style="margin-top:4px">${h.next?`${h.next.min-c} XP to ${h.next.name} \\u2014 earn it by ticking steps, posting updates and checking in.`:"Top rank. Legendary."}</div></div>\n      <div><div class="row between"><b>Getting started</b><span class="chip ${s===o.length?"m":"y"}">${s}/${o.length}</span></div>\n      ${o.map(g=>`<div class="check ${g.ok?"on":""}"><span class="bx">${g.ok?"\\u2713":""}</span><span class="t grow small" style="font-weight:600">${g.t}</span>${g.ok?"":g.a?`<button class="btn sm" data-a="${g.a}">Go</button>`:`<a class="btn sm" href="${g.go}">Go</a>`}</div>`).join("")}</div>\n    </div></div>`,e.catYear&&(v+=`<div class="card" style="margin-top:16px"><div class="row between"><div><h3>\\u{1F5D3} Your road to ${P(e.catYear)}</h3><div class="small muted">CAT ${e.catYear} \\xB7 ${K(e.catDate,{weekday:"long",day:"numeric",month:"long",year:"numeric"})} (last Sunday of November)</div></div>\n    <div class="row">${e.days>=0?`<span class="chip y mono" style="font-size:15px;padding:6px 14px">\\u23F3 ${e.days} days \\xB7 ${Math.floor(e.days/7)} weeks</span>`:`<span class="chip v">${P(e.catYear)} done</span>`}<span class="chip" style="background:${e.phase.color}">${e.phase.icon} ${e.phase.name}</span></div></div>\n    ${De(e,t.plan,{start:t.createdAt})}\n    <div class="grid g2" style="margin-top:8px"><p class="small" style="margin:0"><b>${e.phase.icon} What this phase is for:</b> ${l(e.phase.advice)}</p><p class="small muted" style="margin:0">\\u25B2 purple markers are your quest due dates. CAT syllabus prep happens separately${p.d.cfg.prep?` on <a href="${l(p.d.cfg.prep.url)}" target="_blank" rel="noopener">${l(p.d.cfg.prep.name)}</a>`:""} \\u2014 here we only plan your profile around it.</p></div></div>`);let w=(g,I)=>g.length?g.map(M=>`<div class="pbar" data-hex="${M.id}"><span>${T[M.id]}</span><span>${l(M.short)}</span>${I==="fog"?\'<span class="small faint">not mapped yet</span><span></span>\':`<div class="bar"><i style="width:${M.score}%;background:${M.level.color}"></i></div><span class="mono">${M.score}</span>`}</div>${I==="lack"&&M.missing[0]?`<div class="tiny muted" style="margin:-4px 0 8px 36px">Missing: ${l(M.missing[0])}</div>`:""}`).join(""):`<div class="small muted">${I==="strong"?"Nothing at 75+ yet \\u2014 every Cartographer starts somewhere.":I==="lack"?"No territory below 55. Nice.":"Everything is mapped. \\u{1F389}"}</div>`;v+=`<div class="grid g3" style="margin-top:16px">\n    <div class="card tint-m"><h3>\\u{1F4AA} Strong ground</h3><p class="small muted">What a panel will already respect.</p>${w(e.strengths,"strong")}</div>\n    <div class="card tint-c"><h3>\\u{1F6A7} Where you\'re lacking</h3><p class="small muted">Below 55 \\u2014 this is where the plan goes.</p>${w(e.lacking,"lack")}</div>\n    <div class="card"><h3>\\u{1F32B} Still in the fog</h3><p class="small muted">Unmapped territories count as unknown risk.</p>${w(e.fog,"fog")}${e.fog.length?\'<a class="btn sm pri" style="margin-top:8px" href="#/profile" data-a="wz-fog">Map them \\u2192</a>\':""}</div></div>`;let y=Q(t);return y.length&&(v+=`<div class="sec-title"><h3>\\u{1F50D} What we picked up from your details</h3><span class="ln"></span><a class="btn sm" href="#/profile" data-a="wz" data-x="1">Edit details</a></div><div class="grid g3">${y.map(Ze).join("")}</div>`),v+=`<div class="sec-title"><h3>\\u{1F3AF} Your next best moves</h3><span class="ln"></span><a class="btn sm" href="#/quests" data-a="qtab" data-x="sugg">See all suggestions</a></div>\n    ${i.length?`<div class="grid g3">${i.map((g,I)=>It(g,I===0)).join("")}</div>`:`<div class="card empty">You\'ve added every suggested quest. Go do them! \\u{1F4A5}</div>`}`,v+=`<div class="grid g2" style="margin-top:16px"><div class="card"><h3>\\u{1F4DD} Weekly check-in</h3>${d?`<p class="small muted">Last: ${ee(d.t)} \\xB7 ${ae[d.mood-1][1]} ${ae[d.mood-1][2]} \\xB7 ${d.hours||0} hrs on profile</p>${d.win?`<p>\\u{1F3C1} <b>Win:</b> ${l(d.win)}</p>`:""}${d.note&&d.note!==d.win?`<p>\\u{1F9F1} <b>Blocker:</b> ${l(d.note)}</p>`:""}`:\'<p class="muted">Two minutes, once a week. Your mentor sees the trend and steps in early if you are stuck or low.</p>\'}\n      <button class="btn ${u?"sun":""}" data-a="checkin">${u?"Check in now":"Check in again"}</button>\n      ${t.checkins.length>1?`<div style="margin-top:10px" class="row small muted">Hours trend ${ce([...t.checkins].sort((g,I)=>g.t-I.t).map(g=>+g.hours||.1),120,30,"#1FD1A5")} Mood ${ce([...t.checkins].sort((g,I)=>g.t-I.t).map(g=>g.mood),120,30,"#FF5A5F")}</div>`:""}</div>\n    <div class="card"><h3>\\u2696\\uFE0F Balance</h3>${Se(e,300)}</div></div>`,v}var St=(e=!1)=>{let t=p.d.cfg.prep;return t?`<div class="card" style="background:#d9f1f7;${e?"padding:12px 14px":""}"><div class="row" style="gap:12px"><span style="font-size:${e?22:28}px">\\u{1F4DA}</span><div class="grow" style="min-width:200px"><b>CAT syllabus prep lives on <span class="mono">${l(t.name)}</span></b><div class="small muted">Sectionals, unlimited QA and detailed analysis happen there. Here we only plan your profile around those hours.</div></div><a class="btn sm sky" href="${l(t.url)}" target="_blank" rel="noopener">Practise sectionals \\u2197</a>${t.signin?`<a class="btn sm" href="${l(t.signin)}" target="_blank" rel="noopener">Sign in \\u2197</a>`:""}</div></div>`:""},Ze=e=>`<div class="card ${e.tone==="good"?"tint-m":e.tone==="warn"?"tint-y":"tint-s"}" style="padding:14px"><div class="row" style="gap:10px;align-items:flex-start"><span style="font-size:24px">${e.icon}</span><div><b>${e.title}</b><div class="small muted" style="margin-top:2px">${e.text}</div></div></div></div>`;function It(e,t){let a=e.a,i=F[a.p];return`<div class="card quest ${t?"tint-y":""}">${t?\'<span class="chip c tag">\\u2605 Top pick</span>\':""}\n    <div class="ql"><span class="chip soft">${T[a.p]} ${l(N[a.p])}</span><span class="chip ${je[a.l]}">${Le[a.l]}</span>${a.cost==="paid"?\'<span class="chip y">\\u20B9 paid</span>\':""}</div>\n    <h3>${l(a.t)}</h3><p class="small muted" style="margin:0">${l(a.why)}</p>\n    <div class="small"><b>Why you:</b> ${l(e.reason)}</div>\n    ${e.overBudget&&!e.inPlan?`<div class="tiny" style="color:var(--coral);font-weight:700">\\u2696\\uFE0F Needs ${a.wh} h/wk \\u2014 more than you have free right now</div>`:""}\n    <div class="row small faint mono">\\u23F1 ${a.wh} h/wk \\xB7 ${a.mw} wks \\xB7 impact ${"\\u25CF".repeat(a.lev)}${"\\u25CB".repeat(5-a.lev)}</div>\n    <div class="row" style="margin-top:auto">${e.inPlan?`<button class="btn sm" data-a="quest" data-x="${a.id}">Open</button><span class="chip m">In your plan</span>`:`<button class="btn sm pri" data-a="add" data-x="${a.id}">+ Add quest</button><button class="btn sm" data-a="quest" data-x="${a.id}">Details</button>`}</div></div>`}function na(e){let t=p.an,a=t.pillars.find(s=>s.id===e),i=F[e],n=ne(p.me,t).filter(s=>s.a.p===e).slice(0,4),o=Pt({p:e}).slice(0,6);B(`<div class="row" style="gap:14px"><div style="font-size:42px">${T[e]}</div><div class="grow"><div class="kick mono tiny" style="color:var(--violet)">PROFILE TERRITORY \\xB7 weight ${i.w}</div><h2>${l(i.name)}</h2></div><div class="scorepill">${Ae(a.score,44)}${a.level.name}</div></div>\n    <p class="muted">${l(i.tests)}</p>${a.sources.length?`<p class="tiny faint mono">Based on: ${a.sources.join(" + ")}</p>`:""}\n    ${a.claim?`<div class="card flat tint-v small" style="padding:10px 14px"><b>Your best proof:</b> ${l(a.claim)}</div>`:""}\n    <div class="grid g2" style="margin-top:14px"><div><h4>\\u2705 What\'s there</h4>${a.have.length?a.have.map(s=>`<div class="small" style="padding:4px 0">\\u2713 ${l(s)}</div>`).join(""):\'<div class="small muted">Nothing ticked yet.</div>\'}</div>\n    <div><h4>\\u274C What\'s missing</h4>${a.missing.slice(0,6).map(s=>`<div class="small" style="padding:4px 0">\\u25CB ${l(s)}</div>`).join("")||\'<div class="small muted">Nothing \\u2014 fully stocked.</div>\'}</div></div>\n    <div class="sec-title"><h3>Quests for this territory</h3><span class="ln"></span></div>\n    <div class="stack">${n.map(s=>`<div class="row card flat" style="padding:10px 14px"><span class="chip ${je[s.a.l]}">${Le[s.a.l]}</span><b class="grow">${l(s.a.t)}</b>${s.inPlan?\'<span class="chip m">In plan</span>\':`<button class="btn sm pri" data-a="add" data-x="${s.a.id}">+ Add</button>`}<button class="btn sm" data-a="quest" data-x="${s.a.id}">Details</button></div>`).join("")}</div>\n    ${o.length?`<div class="sec-title"><h3>Where to do it</h3><span class="ln"></span></div><div class="grid g2">${o.map(Tt).join("")}</div>`:""}\n    <div class="row" style="margin-top:16px"><button class="btn pri" data-a="wz-go" data-x="${e}">\\u270F\\uFE0F Re-map this territory</button>${i.sp?`<button class="btn" data-a="pi-qs" data-x="${e}">\\u{1F3A4} Interview questions</button>`:""}</div>`)}function la(){let e=G[p.step],t=p.me.profile,a=p.an,i=(o,s)=>{let r=o==="basics"?!!t.stage:o==="goals"?!!t.target:o==="time"?a.time.set:o==="review"?a.mappedN===a.total:!!(t.pillars[o]&&(t.pillars[o].self!=null||(t.pillars[o].ev||[]).length)),m=o==="basics"?"\\u{1F464}":o==="goals"?"\\u{1F3AF}":o==="time"?"\\u23F1":o==="review"?"\\u{1F3C1}":T[o];return`${s?\'<span class="wz-line"></span>\':""}<button class="wz-pin ${s===p.step?"cur":r?"done":""}" data-a="wz" data-x="${s}" title="${o==="basics"?"About you":o==="goals"?"Goals & marks":o==="time"?"Your week":o==="review"?"Review":F[o].name}">${m}</button>`},n="";return e==="basics"?n=ra():e==="goals"?n=da():e==="time"?n=Mt(!0):e==="review"?n=pa():n=ca(e),`<div class="pagehead"><div><div class="kick">Mapping expedition \\xB7 step ${p.step+1} of ${G.length}</div><h2>Chart your profile</h2></div><div class="small muted">Saves automatically as you tap.</div></div>\n    <div class="card" style="padding:10px 14px;margin-bottom:16px"><div class="wz-track">${G.map(i).join("")}</div><div class="bar thin"><i style="width:${Math.round(p.step/(G.length-1)*100)}%"></i></div></div>\n    ${n}\n    <div class="row between" style="margin-top:18px"><button class="btn" data-a="wz" data-x="${p.step-1}" ${p.step===0?"disabled":""}>\\u2190 Back</button>\n    ${p.step<G.length-1?`<div class="row">${G[p.step].startsWith("P-")||G[p.step]==="time"?`<button class="btn ghost" data-a="wz" data-x="${p.step+1}">Skip for now</button>`:""}<button class="btn pri lg" data-a="wz" data-x="${p.step+1}">Next \\u2192</button></div>`:\'<a class="btn pri lg" href="#/map">See my map \\u2192</a>\'}</div>`}var se=(e,t,a,i={})=>`<div class="opt-grid">${Object.entries(t).map(([n,o])=>`<button class="opt ${a===n?"on":""}" data-a="setp" data-k="${e}" data-x="${n}">${l(typeof o=="string"?o:o.label)}${i[n]?`<small>${l(i[n])}</small>`:""}</button>`).join("")}</div>`;function ra(){let e=p.me.profile;return`<div class="card stack"><h2>\\u{1F464} First, who\'s on this expedition?</h2>\n    <div class="grid g2"><div class="field"><label class="f">Your name</label><input class="inp" data-bind="name" value="${l(p.me.name)}"></div><div class="field"><label class="f">Phone (optional, for your mentor)</label><input class="inp" data-bind="phone" value="${l(p.me.phone||"")}" placeholder="+91\\u2026"></div></div>\n    <div><label class="f">Where are you right now?</label>${se("stage",oe,e.stage)}</div>\n    <div><label class="f">Your degree</label>${se("degree",We,e.degree)}</div>\n    <div><label class="f">Gender <span class="faint">(optional \\u2014 only used for a diversity insight)</span></label>${se("gender",{f:"Female",m:"Male",o:"Non-binary / other",n:"Prefer not to say"},e.gender)}</div>\n    ${e.stage==="working"?`<div><label class="f">Full-time work experience</label>${se("worky",ct,e.worky)}</div>`:""}\n    <div class="grid g2"><div class="field"><label class="f">College / company</label><input class="inp" data-bind="profile.org" value="${l(e.org||"")}" placeholder="e.g. NIT Trichy / Deloitte"></div><div class="field"><label class="f">City</label><input class="inp" data-bind="profile.city" value="${l(e.city||"")}"></div></div></div>`}function da(){let e=p.me.profile;return`<div class="card stack"><h2>\\u{1F3AF} Where are you headed?</h2>\n    <div><label class="f">Target schools</label>${se("target",ye,e.target)}</div>\n    <div><label class="f">Which CAT are you preparing for?</label>${se("catYear",Object.fromEntries(kt().map(t=>[t,P(t)])),String(e.catYear||""),Object.fromEntries(kt().map(t=>[t,K(H(t),{day:"numeric",month:"short",year:"numeric"})])))}</div>\n    <div><label class="f">Budget for courses & certifications</label>${se("budget",{free:"Free resources only",paid:"Open to paid"},e.budget||"free")}</div></div>\n    <h3 style="margin-top:6px">\\u{1F393} Your marks</h3><p class="small muted" style="margin:0">IIM shortlists weigh these. Percent, or CGPA out of 10.</p>\n    <div class="grid g3"><div class="field"><label class="f">Class 10</label><input class="inp" inputmode="decimal" data-bind="profile.x10" value="${l(e.x10||"")}" placeholder="e.g. 92"></div>\n    <div class="field"><label class="f">Class 12</label><input class="inp" inputmode="decimal" data-bind="profile.x12" value="${l(e.x12||"")}" placeholder="e.g. 88"></div>\n    <div class="field"><label class="f">Graduation (so far)</label><input class="inp" inputmode="decimal" data-bind="profile.ug" value="${l(e.ug||"")}" placeholder="e.g. 7.8 or 74"></div></div>\n    <div id="ins-live">${Q(p.me).length?`<h4 style="margin-bottom:8px">\\u{1F50D} What we picked up</h4><div class="grid g2">${Q(p.me).map(Ze).join("")}</div>`:""}</div>\n    <div class="field"><label class="f">In one line \\u2014 why an MBA? (rough is fine, we\'ll sharpen it)</label><textarea class="inp" data-bind="profile.why" placeholder="e.g. I want to move from writing code to deciding what gets built.">${l(e.why||"")}</textarea></div></div>`}function ca(e){let t=F[e],a=p.me.profile.pillars[e]||{},i=p.an.pillars.find(n=>n.id===e);return`<div class="card stack"><div class="row" style="gap:14px;align-items:flex-start"><div style="font-size:46px;line-height:1">${T[e]}</div><div class="grow"><div class="kick mono tiny" style="color:var(--violet)">PROFILE TERRITORY \\xB7 ${C.indexOf(t)+1} of ${C.length}</div><h2>${l(t.name)}</h2><p class="muted" style="margin:4px 0 0">${l(t.tests)}</p></div><div class="scorepill" id="livescore">${Ae(i.score,40)}<span>${i.level.name}</span></div></div>\n    <div><h4 style="margin-bottom:8px">1 \\xB7 ${l(t.self)}</h4><div class="faces">${yt.map(([n,o,s])=>`<button class="face ${a.self===n?"on":""}" data-a="self" data-k="${e}" data-x="${n}"><span class="em">${o}</span><span class="lb">${s}</span></button>`).join("")}</div></div>\n    <div><h4 style="margin-bottom:8px">2 \\xB7 Tap everything that\'s true today <span class="faint small">(${(a.ev||[]).length}/${t.ev.length})</span></h4><div class="evs">${t.ev.map(n=>(i.auto||[]).includes(n.id)?`<div class="ev on" style="cursor:default;background:var(--sky-l)" title="Filled in from your details"><span class="ck" style="background:var(--sky);color:#fff">A</span><span>${l(n.t)} <span class="chip s" style="font-size:10.5px;padding:1px 7px">auto</span></span></div>`:`<div class="ev ${(a.ev||[]).includes(n.id)?"on":""}" data-a="ev" data-k="${e}" data-x="${n.id}"><span class="ck">${(a.ev||[]).includes(n.id)?"\\u2713":""}</span><span>${l(n.t)}</span></div>`).join("")}</div></div>\n    <div class="field"><h4 style="margin-bottom:8px">3 \\xB7 ${l(t.claim)}</h4><textarea class="inp" data-bind="pill.${e}.claim" placeholder="${l(t.claimEg)}">${l(a.claim||"")}</textarea></div>\n    <details ${a.probe&&Object.values(a.probe).some(Boolean)?"open":""}><summary style="cursor:pointer;font-weight:700">\\u{1F50D} Go deeper (optional \\u2014 your mentor will read this)</summary><div class="stack" style="margin-top:10px">${t.probe.map(n=>`<div class="field"><label class="f">${l(n.q)}</label><textarea class="inp" data-bind="probe.${e}.${n.id}" placeholder="${l(n.ph)}">${l(a.probe?.[n.id]||"")}</textarea></div>`).join("")}</div></details>\n</div>`}function pa(){let e=p.an;return`<div class="grid g2"><div class="card"><h2>\\u{1F3C1} Your map, charted</h2><p class="muted">${e.mappedN}/${e.total} territories mapped. ${e.fog.length?"Tap a fogged one to map it.":"Every territory has a reading. \\u{1F389}"}</p>\n    ${e.pillars.map(t=>`<div class="pbar" data-a="wz-go" data-x="${t.id}"><span>${T[t.id]}</span><span>${l(t.short)}</span>${t.score==null?\'<span class="small faint">unmapped \\u2014 tap to map</span><span></span>\':`<div class="bar"><i style="width:${t.score}%;background:${t.level.color}"></i></div><span class="mono">${t.score}</span>`}</div>`).join("")}</div>\n    <div class="card">${Se(e,340)}<div class="row" style="justify-content:center;margin-top:10px"><a class="btn pri lg" href="#/map">Open my atlas \\u2192</a></div></div></div>`}function ha(){let e=p.me.plan,t=p.an,a=e.filter(c=>c.status==="done").length,i=`<div class="pagehead"><div><div class="kick">Action plan</div><h2>Quests</h2><p class="muted" style="margin:0">Each quest is a step-by-step guide with links to where you can do it. Update it as you go \\u2014 your mentor sees it.</p></div>\n    <div class="kpis" style="min-width:min(100%,520px)"><div class="kpi stat"><span class="n">${e.filter(c=>c.status!=="done").length}</span><span class="l">Active</span></div><div class="kpi stat" style="background:${t.time.left!=null&&t.time.left<0?"var(--coral-l)":"var(--sky-l)"}"><span class="n">${t.time.capacity!=null?t.time.load+"/"+t.time.capacity:"\\u2014"}</span><span class="l">h/wk committed</span></div><div class="kpi stat"><span class="n">${a}</span><span class="l">Completed</span></div><div class="kpi stat"><span class="n">${Me(p.me)}</span><span class="l">XP</span></div></div></div>\n    <div class="tabs" style="margin-bottom:16px">${[["mine",`My quests (${e.length})`],["sugg","Suggested for me"],["all",`Browse all ${we.length}`]].map(([c,h])=>`<button class="${p.qtab===c?"on":""}" data-a="qtab" data-x="${c}">${h}</button>`).join("")}</div>`;if(p.qtab==="mine")return e.length?i+`<div class="kan">${[["todo","\\u{1F4CB} To do"],["doing","\\u26A1 Doing"],["blocked","\\u{1F9F1} Blocked"],["done","\\u2705 Done"]].map(([h,d])=>{let u=e.filter(v=>(v.status||"todo")===h);return`<div class="col"><h4>${d}<span class="chip soft">${u.length}</span></h4>${u.map(v=>{let w=E[v.aid],y=ke(v);return`<div class="qmini" data-a="quest" data-x="${v.aid}"><div class="row between"><span class="chip soft">${T[w.p]} ${l(N[w.p])}</span>${v.by?`<span class="chip v" title="Assigned by ${l(v.by)}">mentor</span>`:""}</div><div style="font-weight:800;margin:6px 0;font-family:var(--fd);font-size:16px;line-height:1.2">${l(w.t)}</div><div class="bar thin"><i style="width:${y}%;background:${h==="done"?"var(--mint)":h==="blocked"?"var(--coral)":"var(--violet)"}"></i></div><div class="row between tiny muted" style="margin-top:4px"><span>${y}% \\xB7 ${(v.log||[]).length} update${(v.log||[]).length===1?"":"s"}</span>${v.due?`<span>due ${K(v.due)}</span>`:""}</div></div>`}).join("")||\'<div class="tiny faint" style="padding:8px">\\u2014</div>\'}</div>`}).join("")}</div>`:i+\'<div class="card empty"><div class="big">\\u{1F3AF}</div><h3>No quests yet</h3><p>Pick 3 from your suggestions \\u2014 the ones with the biggest gap-to-effort payoff are at the top.</p><button class="btn pri" data-a="qtab" data-x="sugg">See suggestions</button></div>\';let n=ne(p.me,t),o=p.qf,s=`<div class="row gap8" style="margin-bottom:14px"><button class="chip ${o==="all"?"v":""}" data-a="qf" data-x="all">All territories</button>${C.map(c=>`<button class="chip ${o===c.id?"v":""}" data-a="qf" data-x="${c.id}">${T[c.id]} ${l(N[c.id])}</button>`).join("")}</div>`;if(p.qtab==="sugg"){let c=n.filter(h=>o==="all"||h.a.p===o).slice(0,o==="all"?12:10);return i+s+`<p class="small muted">Ranked by what moves your profile most for the effort \\u2014 given your gaps, your stage, the ${t.phase?t.phase.name.toLowerCase():"time to CAT"} and the hours you have free.</p><div class="grid g3">${c.map((h,d)=>It(h,d===0&&o==="all")).join("")}</div>`}let r=we.filter(c=>o==="all"||c.p===o),m=new Set(e.map(c=>c.aid));return i+s+`<div class="card" style="padding:6px 14px">${r.map(c=>`<div class="row" style="padding:10px 0;border-bottom:1.5px dashed #DDD8EE"><span style="width:26px">${T[c.p]}</span><span class="chip ${je[c.l]}">${Le[c.l]}</span><b class="grow" style="min-width:200px">${l(c.t)}</b><span class="tiny mono faint">${c.wh}h/wk\\xB7${c.mw}w</span>${m.has(c.id)?\'<span class="chip m">In plan</span>\':`<button class="btn sm pri" data-a="add" data-x="${c.id}">+ Add</button>`}<button class="btn sm" data-a="quest" data-x="${c.id}">Details</button></div>`).join("")}</div>`}function Pt({p:e,aid:t}){let a=p.d.resources||[],i=t?a.filter(o=>(o.actions||[]).includes(t)):[],n=a.filter(o=>(o.pillars||[]).includes(e)&&!i.includes(o));return[...i,...n]}var Tt=e=>`<a class="reslink" href="${l(e.url)}" target="_blank" rel="noopener"><span>${e.free?"\\u{1F193}":"\\u{1F4B3}"}</span><span><span style="display:block">${l(e.name)}</span><span class="tiny muted" style="font-weight:500">${l(e.desc||re(e.url))}</span></span><span class="arr">\\u2197</span></a>`;function Ie(e){let t=E[e],a=p.me.plan.find(r=>r.aid===e),i=$e(t),n=Pt({p:t.p,aid:e}).slice(0,6),o=a?ke(a):0,s=B(`<div class="ql"><span class="chip soft">${T[t.p]} ${l(F[t.p].name)}</span><span class="chip ${je[t.l]}">${Le[t.l]}</span>${t.cost==="paid"?\'<span class="chip y">\\u20B9 paid</span>\':\'<span class="chip m">free</span>\'}${a?.by?`<span class="chip v">Assigned by ${l(a.by)}</span>`:""}</div>\n    <h2 style="margin:10px 0 6px;font-size:30px">${l(t.t)}</h2><p class="muted" style="margin:0">${l(t.why)}</p>\n    ${a?.mentorNote?`<div class="card flat tint-v small" style="margin-top:10px;padding:10px 14px"><b>Mentor\'s note:</b> ${l(a.mentorNote)}</div>`:""}\n    <div class="row small mono faint" style="margin:10px 0">\\u23F1 ${t.wh} h/wk \\xB7 ${t.mw} weeks \\xB7 \\u{1F4E6} proof: ${l(t.art)}</div>\n    ${a?`<div class="card flat" style="padding:12px 14px;margin-bottom:14px"><div class="row between"><div class="qstatus">${[["todo","To do"],["doing","Doing"],["blocked","Blocked"],["done","Done \\u2713"]].map(([r,m])=>`<button class="${r} ${(a.status||"todo")===r?"on":""}" data-q="status" data-x="${r}">${m}</button>`).join("")}</div><div class="row small"><label class="f" style="margin:0">Target date</label><input type="date" class="inp" style="width:auto;padding:5px 8px" data-q="due" value="${l(a.due||"")}"></div></div>\n      ${a.status==="blocked"?`<textarea class="inp" style="margin-top:10px;min-height:60px" data-q="blockNote" placeholder="What\'s blocking you? Your mentor gets an alert.">${l(a.blockNote||"")}</textarea>`:""}\n      <div class="row" style="margin-top:10px"><div class="bar grow"><i style="width:${o}%"></i></div><b class="mono">${o}%</b></div></div>`:""}\n    <h3>Step-by-step</h3><div class="steps" style="margin-top:10px">${i.map((r,m)=>`<div class="step ${a?.steps?.[r.k]?"on":""}"><button class="num" ${a?`data-q="step" data-x="${r.k}"`:"disabled"} title="Mark done">${a?.steps?.[r.k]?"\\u2713":m+1}</button><div class="grow"><b>${l(r.t)}</b><div class="small muted">${l(r.d)}</div>\n      ${r.k==="pi"?`<div class="stack" style="margin-top:8px">${t.pq.map((c,h)=>`<div><label class="f">\\u{1F3A4} ${l(c)}</label>${a?`<textarea class="inp" style="min-height:56px" data-q="ans" data-x="${h}" placeholder="Your answer, in your words">${l(a.answers?.[h]||"")}</textarea>`:""}</div>`).join("")}</div>`:""}</div></div>`).join("")}</div>\n    ${n.length?`<h3 style="margin-top:18px">\\u{1F517} Where to do it</h3><div class="grid g2" style="margin-top:10px">${n.map(Tt).join("")}</div>`:""}\n    ${a?`<h3 style="margin-top:18px">\\u{1F4D3} Progress log</h3><p class="small muted" style="margin:2px 0 8px">What did you do? Paste a link as proof (certificate, Drive, LinkedIn post, GitHub, Unstop result\\u2026).</p>\n      <div class="card flat" style="padding:12px"><textarea class="inp" id="lg-t" style="min-height:60px" placeholder="e.g. Did 3 timed RC sets, accuracy 62% \\u2192 70%."></textarea><div class="row" style="margin-top:8px"><input class="inp grow" id="lg-l" placeholder="https://\\u2026 (optional)"><button class="btn pri" data-q="log">Post update</button></div></div>\n      <div class="log" style="margin-top:14px">${[...a.log||[]].reverse().map(r=>`<div class="it"><div class="tiny faint mono">${q(r.t)}</div><div>${l(r.text)}</div>${r.link?`<a class="small" href="${l(r.link)}" target="_blank" rel="noopener">\\u{1F517} ${l(re(r.link))}</a>`:""}</div>`).join("")||\'<div class="small faint">No updates yet.</div>\'}</div>\n      <div class="row between" style="margin-top:16px"><button class="btn ghost small" data-q="remove">Remove quest</button><button class="btn" data-close>Close</button></div>`:`<div class="row" style="margin-top:18px"><button class="btn pri lg" data-a2="add" data-x="${t.id}">+ Add to my quests</button></div>`}`);s.dataset.quest=e}function Wt(e){if(p.me.plan.find(n=>n.aid===e))return;let t=E[e],a=new Date(Date.now()+t.mw*7*864e5).toISOString().slice(0,10);p.me.plan.push({aid:e,status:"todo",steps:{},log:[],answers:{},addedAt:Date.now(),due:a}),D();let i=Ke(p.me);k(i.capacity!=null&&i.load>i.capacity?`Added \\u2014 but you\'re now at ${i.load}/${i.capacity} h/wk \\u2696\\uFE0F`:"Quest added \\u{1F3AF} +XP when you tick steps")}function ua(){let e=p.d.mentor,t=p.d.alerts||[],a=p.d.open||[],i=p.d.mine||[],n=Date.now(),o=i.filter(c=>c.status==="booked"&&Date.parse(c.start)+c.dur*6e4>n),s=i.filter(c=>!o.includes(c)),r={};for(let c of a){let h=new Date(c.start).toDateString();(r[h]=r[h]||[]).push(c)}let m=[...p.me.notes||[]].reverse();return`<div class="pagehead"><div><div class="kick">Mentor intervention</div><h2>Your mentor</h2><p class="muted" style="margin:0">The app tells you when a session is worth having \\u2014 and you book it in two taps.</p></div></div>\n  <div class="grid g3">\n    <div class="card stack">${e?`<div class="row"><div class="ava" style="width:58px;height:58px;font-size:22px;background:var(--mint)">${l(z(e.name))}</div><div><h3>${l(e.name)}</h3><a class="small" href="mailto:${l(e.email)}">${l(e.email)}</a></div></div>${e.bio?`<p class="small muted">${l(e.bio)}</p>`:""}`:`<div><h3>Mentor pool</h3><p class="small muted">You haven\'t been assigned a mentor yet \\u2014 you can book any available mentor below.</p></div>`}\n      <div class="card flat tint-y" style="padding:12px"><h4>\\u{1F64B} Need help between sessions?</h4><textarea class="inp" id="help-t" style="min-height:64px;margin-top:6px" placeholder="e.g. I can\'t find a case competition for non-tech students."></textarea><button class="btn sm sun" style="margin-top:8px" data-a="help">Send to my mentor</button>\n      ${(p.me.help||[]).filter(c=>!c.closed).length?`<div class="tiny muted" style="margin-top:6px">${(p.me.help||[]).filter(c=>!c.closed).length} request(s) waiting for your mentor.</div>`:""}</div></div>\n    <div class="card span2"><h3>\\u{1F9ED} Why a session is recommended</h3>${t.length?`<div class="stack" style="margin-top:10px">${t.map(c=>`<div class="alert u${c.urgency}"><span class="ic">${he(c.kind)}</span><div class="grow"><b>${l(c.title)}</b><div class="small muted">${l(ma(c))}</div></div>${a.length?`<button class="btn sm pri" data-a="book-for" data-x="${l(c.key)}">Book for this</button>`:""}</div>`).join("")}</div>`:\'<div class="empty" style="padding:16px"><div class="big">\\u{1F324}</div>No triggers right now. You can still book a session any time.</div>\'}</div>\n  </div>\n  ${o.length?`<div class="sec-title"><h3>\\u{1F4C5} Upcoming</h3><span class="ln"></span></div><div class="grid g2">${o.map(c=>`<div class="card tint-m"><div class="row between"><div><div class="mono small">${q(c.start)} \\xB7 ${c.dur} min</div><h3>with ${l(c.mentorName||"mentor")}</h3>${c.topic?`<div class="small muted">Topic: ${l(c.topic)}</div>`:""}</div>${c.link?`<a class="btn go" href="${l(c.link)}" target="_blank" rel="noopener">Join \\u2197</a>`:\'<span class="chip">link soon</span>\'}</div>\n     <div class="row" style="margin-top:10px"><a class="btn sm" href="${Ee(c,c.mentorName||"mentor")}" target="_blank" rel="noopener">\\u{1F4C6} Google Calendar</a><button class="btn sm" data-a="ics" data-x="${c.id}">\\u2B07 .ics (Outlook/Apple)</button><button class="btn sm ghost" data-a="cancel" data-x="${c.id}">Cancel</button></div></div>`).join("")}</div>`:""}\n  <div class="sec-title"><h3>\\u{1F5D3} Book a slot</h3><span class="ln"></span></div>\n  ${Object.keys(r).length?`<div class="grid g3">${Object.entries(r).slice(0,12).map(([c,h])=>`<div class="card"><h4>${K(c,{weekday:"long",day:"numeric",month:"short"})}</h4><div class="row gap8" style="margin-top:10px">${h.map(d=>`<button class="slot" data-a="book" data-x="${d.id}">${gt(d.start)}<span class="tiny faint"> \\xB7 ${d.dur}m${e?"":" \\xB7 "+l((d.mentorName||"").split(" ")[0])}</span></button>`).join("")}</div></div>`).join("")}</div>`:`<div class="card empty"><div class="big">\\u{1F570}</div>No open slots right now. Your mentor publishes slots weekly \\u2014 or send a help request above and they\'ll open one.</div>`}\n  ${m.length?`<div class="sec-title"><h3>\\u{1F5D2} Notes from your mentor</h3><span class="ln"></span></div><div class="stack">${m.map(c=>`<div class="card flat"><div class="tiny faint mono">${q(c.t)} \\xB7 ${l(c.by)}</div><div style="white-space:pre-wrap">${l(c.text)}</div></div>`).join("")}</div>`:""}\n  ${s.length?`<div class="sec-title"><h3>Past sessions</h3><span class="ln"></span></div><div class="card" style="padding:4px 14px">${s.map(c=>`<div class="row" style="padding:9px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${q(c.start)}</span><span class="grow small">${l(c.topic||"")}</span><span class="chip ${c.status==="done"?"m":c.status==="cancelled"?"c":"g"}">${c.status}</span></div>`).join("")}</div>`:""}`}var he=e=>({review:"\\u{1F5FA}",mock:"\\u{1F4C9}",exam:"\\u23F3",stall:"\\u{1F4A4}",blocked:"\\u{1F9F1}",mood:"\\u{1F49B}",narrative:"\\u{1F3A4}",critical:"\\u{1F6A8}",help:"\\u{1F64B}",phase:"\\u{1F5D3}",overload:"\\u2696\\uFE0F",time:"\\u23F1"})[e]||"\\u{1F514}";function ma(e){return{review:"Your map is ready. A 30-minute walkthrough turns it into an agreed plan.",mock:"A sharp drop is usually fixable \\u2014 strategy, fatigue or one section. Worth talking through.",exam:"Close to the exam, a clear strategy and school list matter more than more practice.",stall:"Nothing logged in a while. A quick call often gets things moving again.",blocked:"You flagged a blocker. Let your mentor help you get past it.",mood:"Your last check-ins were tough. Talking helps \\u2014 this is not a progress review.",narrative:\'Your "Why MBA" story needs work before interviews. Start early.\',critical:"Several territories are critical \\u2014 get help choosing what to fix first.",help:"You asked for help.",phase:"A new phase on your road to CAT \\u2014 a quick re-plan keeps your quests matched to the time left.",overload:"You have taken on more than your weekly hours allow. Decide together what to pause.",time:"Your routine leaves very little room. A mentor can help you find small, high-value habits."}[e.kind]||e.detail}function $t(e,t){let a=(p.d.open||[]).find(o=>o.id===e)||(p.d.open||[])[0];if(!a)return k("No open slots right now");let i=p.d.alerts||[],n=i.find(o=>o.key===t);B(`<h2>Book a session</h2><p class="muted">${q(a.start)} \\xB7 ${a.dur} min \\xB7 with ${l(a.mentorName||"mentor")}</p>\n    ${t?"":`<div class="field"><label class="f">Pick a slot</label><select class="inp" id="bk-slot">${(p.d.open||[]).map(o=>`<option value="${o.id}" ${o.id===a.id?"selected":""}>${q(o.start)} \\xB7 ${o.dur}m \\xB7 ${l(o.mentorName||"")}</option>`).join("")}</select></div>`}\n    ${t?`<input type="hidden" id="bk-slot" value="${a.id}"><div class="field"><label class="f">Pick a slot</label><select class="inp" id="bk-slot2">${(p.d.open||[]).map(o=>`<option value="${o.id}">${q(o.start)} \\xB7 ${o.dur}m \\xB7 ${l(o.mentorName||"")}</option>`).join("")}</select></div>`:""}\n    <div class="field"><label class="f">What\'s it about?</label><select class="inp" id="bk-alert"><option value="">General check-in</option>${i.map(o=>`<option value="${l(o.key)}" ${o.key===t?"selected":""}>${l(o.title)}</option>`).join("")}</select></div>\n    <div class="field"><label class="f">Anything you want to cover? (optional)</label><textarea class="inp" id="bk-topic" placeholder="e.g. Which 2 quests to drop, and my DILR set selection.">${n?l(n.title):""}</textarea></div>\n    <div id="bk-err"></div><button class="btn pri lg" data-a2="book-go">Confirm booking</button>`,"sm")}function kt(){let e=[...p.d.cfg.years||[]],t=+p.me.profile.catYear;return t&&!e.includes(t)&&e.push(t),e.sort()}var va={build:[6,10],prove:[5,8],package:[3,5],focus:[1,2],interview:[4,8],after:[0,3]};function ga(){return`<div class="pagehead"><div><div class="kick">Your week</div><h2>Time budget</h2><p class="muted" style="margin:0">CAT syllabus prep happens separately. Tell us your routine \\u2014 including the hours you give to CAT study \\u2014 and we\'ll size your profile plan to what\'s really left.</p></div></div>${Mt(!1)}`}function Mt(e){let t=p.an,a=t.time,i=a,n=p.me.profile,o=t.phase,s=o?va[o.k]:null,r=([h,d,u])=>`<tr><td><span class="dot" style="background:${u}"></span> <b class="small">${d}</b></td>${["wd","we"].map(v=>`<td><input class="inp" style="width:84px;padding:6px 8px" type="number" min="0" max="24" step="0.5" data-rt="${v}.${h}" value="${+i[v].v[h]||0}"></td>`).join("")}</tr>`,m=(p.me.plan||[]).filter(h=>h.status!=="done"),c=a.capacity!=null?a.capacity:a.suggested;return`<div class="grid g2">\n    <div class="card"><h3>${e?"\\u23F1 Your typical day":"\\u{1F5D3} Your typical day"}</h3><p class="small muted">Hours per day. Rough is fine \\u2014 you can change it any time.</p>\n      <table class="tbl" style="margin-top:6px"><thead><tr><th></th><th>Weekday</th><th>Weekend day</th></tr></thead><tbody>${be.map(r).join("")}\n      <tr><td><b class="small">\\u2728 Free</b></td><td class="mono"><b>${i.wd.free.toFixed(1)} h</b></td><td class="mono"><b>${i.we.free.toFixed(1)} h</b></td></tr></tbody></table>\n      <div class="stack" style="margin-top:12px"><div><div class="tiny mono faint">WEEKDAY</div>${de(i.wd)}</div><div><div class="tiny mono faint">WEEKEND</div>${de(i.we)}</div></div>\n      ${n.routine?\'<button class="btn sm ghost" data-a="rt-reset">Reset</button>\':\'<p class="tiny muted" style="margin-top:8px">Showing a typical student day \\u2014 edit any number to make it yours.</p>\'}</div>\n    <div class="card stack"><h3>Your week at a glance</h3>\n      <div class="kpis"><div class="kpi stat" style="background:var(--coral-l)"><span class="n">${a.catWeek}</span><span class="l">h/wk CAT study</span></div><div class="kpi stat" style="background:var(--mint-l)"><span class="n">${a.freeWeek}</span><span class="l">h/wk free</span></div></div>\n      ${St(!0)}\n      <div class="card flat tint-y" style="padding:14px"><label class="f">Hours a week I\'ll give to profile building</label>\n        <div class="row"><input type="range" id="hrs" min="0" max="${Math.max(25,Math.ceil(a.freeWeek))}" step="0.5" value="${c}" class="grow"><b class="mono" id="hrs-v" style="min-width:76px;text-align:right">${c} h/wk</b></div>\n        <div class="tiny muted">${a.freeWeek>0?`That\'s ${Math.round(c/a.freeWeek*100)}% of your free time. We suggest ~${a.suggested} h (about a third) so rest and CAT study stay protected.`:"Your routine leaves no free time \\u2014 consider trimming something."}${n.profHrs==null?" <b>Move the slider to confirm.</b>":""}</div>\n        ${s&&t.days!=null?`<div class="small" style="margin-top:8px">${o.icon} In the <b>${o.name.toLowerCase()}</b> most students give <b>${s[0]}\\u2013${s[1]} h/wk</b> to their profile.${c<s[0]&&a.freeWeek>=s[0]?` <button class="btn sm" data-a="hrs-use" data-x="${s[0]}">Use ${s[0]} h</button>`:""}</div>`:""}</div>\n      <div><div class="row between"><b>Committed to quests</b><b class="mono">${a.load} / ${c} h</b></div><div class="bar" style="margin-top:6px"><i style="width:${Math.min(100,a.load/Math.max(.5,c)*100)}%;background:${a.load>c?"var(--coral)":"var(--mint)"}"></i></div>\n        <div class="small ${a.load>c?"":"muted"}" style="margin-top:6px;${a.load>c?"color:var(--coral);font-weight:700":""}">${a.load>c?`Over by ${Math.round((a.load-c)*10)/10} h/wk \\u2014 pause a quest or raise your hours.`:`${Math.round((c-a.load)*10)/10} h/wk free for new quests.`}</div>\n        ${m.map(h=>`<div class="row small" style="padding:4px 0"><span>${T[E[h.aid].p]}</span><span class="grow">${l(E[h.aid].t)}</span><span class="mono">${E[h.aid].wh} h</span></div>`).join("")}</div>\n    </div></div>`}function fa(){let e=p.d.resources||[],t=p.rf,a=new Set(p.an.pillars.filter(s=>s.score==null||s.score<55).map(s=>s.id)),i=[...new Set(e.map(s=>s.cat))],n=t.q.toLowerCase(),o=e.filter(s=>(t.cat==="all"||s.cat===t.cat)&&(!t.mine||(s.pillars||[]).some(r=>a.has(r)))&&(!n||(s.name+s.desc+s.cat+s.url).toLowerCase().includes(n)));return`<div class="pagehead"><div><div class="kick">Where to do it</div><h2>Resource hub</h2><p class="muted" style="margin:0">Certifications, case competitions, internships, reading, volunteering \\u2014 curated and linked to your quests.</p></div></div>\n  <div style="margin-bottom:16px">${St()}</div>\n  <div class="card" style="margin-bottom:16px"><div class="row"><input class="inp grow" id="rs-q" placeholder="\\u{1F50D} Search \\u2014 e.g. hackathon, finance, reading, internship" value="${l(t.q)}"><button class="btn ${t.mine?"hot":""}" data-a="rs-mine">${t.mine?"\\u2713 ":""}Matched to my gaps</button></div>\n  <div class="row gap8" style="margin-top:10px"><button class="chip ${t.cat==="all"?"v":""}" data-a="rs-cat" data-x="all">All (${e.length})</button>${i.map(s=>`<button class="chip ${t.cat===s?"v":""}" data-a="rs-cat" data-x="${l(s)}">${l(s)}</button>`).join("")}</div></div>\n  <div class="grid g3" id="rs-list">${Ct(o,a)}</div>`}function Ct(e,t){return e.map(a=>`<a class="card res" href="${l(a.url)}" target="_blank" rel="noopener"><div class="row between"><span class="dom">${l(re(a.url))}</span><span class="chip ${a.free?"m":"y"}">${a.free?"Free":"Paid"}</span></div><h3>${l(a.name)} \\u2197</h3><div class="small muted">${l(a.desc)}</div><div class="row gap8" style="margin-top:auto">${(a.pillars||[]).map(i=>`<span class="chip soft ${t.has(i)?"c":""}">${T[i]||""} ${l(N[i]||i)}</span>`).join("")}</div></a>`).join("")||\'<div class="card empty span2">Nothing matches \\u2014 try another search.</div>\'}function ya(){B(`<h2>\\u{1F4DD} Weekly check-in</h2><p class="muted">Two minutes. Honest beats impressive.</p>\n    <label class="f">How are you feeling this week?</label><div class="mood" id="ck-mood">${ae.map(([e,t,a])=>`<button data-mood="${e}" title="${a}">${t}</button>`).join("")}</div>\n    <div class="grid g2" style="margin-top:12px"><div class="field"><label class="f">Hours on profile work this week</label><input class="inp" id="ck-h" inputmode="decimal" placeholder="e.g. 5"></div><div class="field"><label class="f">Quests moved forward</label><input class="inp" id="ck-m" inputmode="numeric" placeholder="e.g. 2"></div></div>\n    <div class="field"><label class="f">\\u{1F3C1} One win this week</label><input class="inp" id="ck-w" placeholder="e.g. Got shortlisted in a case competition"></div>\n    <div class="field"><label class="f">\\u{1F9F1} What\'s in the way?</label><input class="inp" id="ck-b" placeholder="e.g. Semester exams, no time after CAT classes"></div>\n    <div id="ck-err"></div><button class="btn pri lg" data-a2="ck-go">Save check-in (+20 XP)</button>`,"sm")}function wa(){B(`<h2>Account</h2><p class="muted">${l(p.me.name)} \\xB7 ${l(p.me.email)}</p>\n    <div class="field"><label class="f">Change PIN</label><div class="row"><input class="inp grow" id="ac-pin" type="password" placeholder="New PIN (4+ characters)"><button class="btn" data-a2="pin">Update</button></div></div>\n    <div class="row" style="margin-top:14px"><button class="btn" data-a2="export">\\u2B07 Download my data</button><button class="btn hot" data-a2="logout">Log out</button></div>`,"sm")}function ba(e){let t=e.target.closest("[data-hex]");if(t&&!e.target.closest("[data-a]"))return na(t.dataset.hex);let a=e.target.closest("[data-a]");a&&qt(a.dataset.a,a.dataset.x,a.dataset.k,a,e)}function qt(e,t,a,i,n){let o=p.me.profile;switch(e){case"wz":{let s=+t;if(s<0||s>=G.length)return;p.step=s,S(),window.scrollTo(0,0);return}case"wz-go":{j(),p.step=G.indexOf(t),location.hash="#/profile",p.view==="profile"&&S();return}case"wz-fog":{let s=p.an.fog[0];s&&(p.step=G.indexOf(s.id));return}case"setp":{o[a]=a==="catYear"?+t:t,D(),S();return}case"self":{let s=o.pillars[a]=o.pillars[a]||{};s.self=+t,D(),S();return}case"ev":{let s=o.pillars[a]=o.pillars[a]||{};s.ev=s.ev||[],s.ev=s.ev.includes(t)?s.ev.filter(r=>r!==t):[...s.ev,t],D(),S();return}case"qtab":p.qtab=t,p.view==="quests"&&S();return;case"qf":p.qf=t,S();return;case"add":Wt(t),j(),S();return;case"quest":return Ie(t);case"checkin":return ya();case"account":return wa();case"nudge-seen":return Re("/me/nudge-seen").then(S);case"rt-reset":{delete o.routine,delete o.profHrs,D(),S();return}case"hrs-use":{o.profHrs=+t,D(),S();return}case"help":{let s=f("#help-t").value.trim();return s?Re("/me/help",{text:s}).then(()=>{k("Sent \\u2014 your mentor has been alerted"),S()}).catch(r=>k(r.message)):k("Write a line first")}case"book":return $t(t);case"book-for":return $t(null,t);case"cancel":return Dt(i)?Re("/me/cancel/"+t).then(()=>{k("Session cancelled"),S()}).catch(s=>k(s.message)):void 0;case"ics":{let s=p.d.mine.find(r=>r.id===t);return Ne(s,s.mentorName||"mentor")}case"rs-mine":p.rf.mine=!p.rf.mine,S();return;case"rs-cat":p.rf.cat=t,S();return;case"pi-qs":{let s=F[t];B(`<h2>\\u{1F3A4} ${l(s.name)} \\u2014 what a panel may ask</h2><div class="stack" style="margin-top:12px">${s.sp.map(r=>`<div class="card flat">${l(r)}</div>`).join("")}</div><p class="small muted" style="margin-top:12px">Practise these out loud. Record yourself once \\u2014 it\'s uncomfortable and it works.</p>`);return}}}function Dt(e){if(e.dataset.sure)return!0;e.dataset.sure=1;let t=e.textContent;return e.textContent="Sure?",setTimeout(()=>{e.isConnected&&(e.textContent=t,delete e.dataset.sure)},2500),!1}function $a(e){let t=e.target;if(t.id==="rs-q"){p.rf.q=t.value;let o=new Set(p.an.pillars.filter(c=>c.score==null||c.score<55).map(c=>c.id)),s=p.d.resources||[],r=p.rf,m=r.q.toLowerCase();f("#rs-list").innerHTML=Ct(s.filter(c=>(r.cat==="all"||c.cat===r.cat)&&(!r.mine||(c.pillars||[]).some(h=>o.has(h)))&&(!m||(c.name+c.desc+c.cat+c.url).toLowerCase().includes(m))),o);return}if(t.id==="hrs"){let o=f("#hrs-v");o&&(o.textContent=t.value+" h/wk");return}let a=t.dataset.bind;if(!a)return;let i=p.me.profile,n=a.split(".");if(a==="name")p.me.name=t.value;else if(a==="phone")p.me.phone=t.value;else if(n[0]==="profile")i[n[1]]=t.value;else if(n[0]==="pill"){let o=i.pillars[n[1]]=i.pillars[n[1]]||{};o[n[2]]=t.value}else if(n[0]==="probe"){let o=i.pillars[n[1]]=i.pillars[n[1]]||{};o.probe=o.probe||{},o.probe[n[2]]=t.value}if(D(),["profile.x10","profile.x12","profile.ug"].includes(a)){p.an=V(p.me,p.d.cfg);let o=f("#ins-live");if(o){let s=Q(p.me);o.innerHTML=s.length?`<h4 style="margin-bottom:8px">\\u{1F50D} What we picked up</h4><div class="grid g2">${s.map(Ze).join("")}</div>`:""}}}function ka(e){let t=e.target,a=p.me.profile;if(t.dataset.rt){let[i,n]=t.dataset.rt.split(".");a.routine=a.routine||JSON.parse(JSON.stringify(He)),a.routine[i]=a.routine[i]||{},a.routine[i][n]=Math.max(0,Math.min(24,+t.value||0)),D(),S()}t.id==="hrs"&&(a.profHrs=+t.value,D(),S())}function xa(e){let t=e.target.closest("#scrim");if(!t||!p)return;let a=e.target.closest("[data-a]");if(a&&pe.contains(a)===!1){let c=a.dataset.a;if(["add","quest","wz-go","pi-qs"].includes(c))return e.stopPropagation(),qt(c,a.dataset.x,a.dataset.k,a,e)}let i=e.target.closest("button[data-mood]");if(i){t.querySelectorAll("[data-mood]").forEach(c=>c.classList.toggle("on",c===i)),t.dataset.pick=i.dataset.mood;return}let n=e.target.closest("[data-a2]");if(n){let c=n.dataset.a2;if(c==="add"){Wt(n.dataset.x),Ie(n.dataset.x),S();return}if(c==="book-go"){let h=(f("#bk-slot2")||f("#bk-slot")).value,d=f("#bk-alert").value;return Re("/me/book/"+h,{topic:f("#bk-topic").value,alertKey:d}).then(()=>{j(),k("Booked \\u{1F389} Add it to your calendar"),location.hash="#/mentor",S()}).catch(u=>{f("#bk-err").innerHTML=`<div class="err">${l(u.message)}</div>`})}if(c==="ck-go"){let h=+t.dataset.pick;if(!h){f("#ck-err").innerHTML=\'<div class="err">Pick a mood first.</div>\';return}let d=f("#ck-w").value.trim(),u=f("#ck-b").value.trim();p.me.checkins.push({t:Date.now(),mood:h,hours:+f("#ck-h").value||0,quests:+f("#ck-m").value||0,win:d,blocker:u,note:u||d}),D(!0),j(),k(h<=2?"Thanks for being honest \\u{1F49B} your mentor will see this":"Checked in \\xB7 +20 XP"),S();return}if(c==="pin"){let h=f("#ac-pin").value;return x("/me/pin","POST",{pin:h}).then(()=>k("PIN updated")).catch(d=>k(d.message))}if(c==="logout"){x("/logout","POST").catch(()=>{}),localStorage.removeItem("atlas.tok"),localStorage.removeItem("atlas.role"),location.hash="",location.reload();return}if(c==="export"){let h=new Blob([JSON.stringify(p.me,null,2)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(h),d.download="my-profile-atlas.json",d.click();return}}let o=e.target.closest("[data-q]");if(!o)return;let s=t.querySelector(".modal").dataset.quest,r=p.me.plan.find(c=>c.aid===s);if(!r)return;let m=o.dataset.q;if(m==="status"){if(r.status=o.dataset.x,r.updatedAt=Date.now(),r.status==="done"){let c=E[s];$e(c).forEach(h=>{r.steps=r.steps||{},r.steps[h.k]=!0}),k("Quest complete! +60 XP \\u{1F3C6}")}r.status==="doing"&&!r.started&&(r.started=Date.now()),D(),Ie(s),S()}else if(m==="step"){r.steps=r.steps||{},r.steps[o.dataset.x]=!r.steps[o.dataset.x],r.updatedAt=Date.now(),r.steps[o.dataset.x]&&r.status==="todo"&&(r.status="doing");let c=E[s];$e(c).every(h=>r.steps[h.k])&&(r.status="done",k("All steps done \\u2014 quest complete! \\u{1F3C6}")),D(),Ie(s),S()}else if(m==="log"){let c=f("#lg-t").value.trim(),h=f("#lg-l").value.trim();if(!c)return k("Write what you did");if(h&&!/^https?:\\/\\//.test(h))return k("Links should start with https://");r.log=r.log||[],r.log.push({t:Date.now(),text:c,link:h}),r.updatedAt=Date.now(),r.status==="todo"&&(r.status="doing"),D(),Ie(s),S(),k("Update posted \\xB7 +5 XP")}else if(m==="remove"){if(!Dt(o))return;p.me.plan=p.me.plan.filter(c=>c.aid!==s),D(),j(),S()}}function xt(e){let t=e.target,a=t.closest("#scrim");if(!a||!p)return;let i=t.dataset.q;if(!i)return;let n=a.querySelector(".modal").dataset.quest,o=p.me.plan.find(s=>s.aid===n);o&&(i==="ans"&&(o.answers=o.answers||{},o.answers[t.dataset.x]=t.value,D()),i==="due"&&e.type==="change"&&(o.due=t.value,D(),S()),i==="blockNote"&&(o.blockNote=t.value,o.updatedAt=o.updatedAt||Date.now(),D()))}var $=null,Be=null,Et=null;async function Lt(e){Be=e,$={view:"alerts",mineOnly:!1,batch:"all",q:"",sid:null,det:null},await et(),Be.addEventListener("click",Ca),Be.addEventListener("input",qa),document.addEventListener("click",Na),window.addEventListener("hashchange",Nt),Nt(),clearInterval(Et),Et=setInterval(async()=>{document.hidden||f("#scrim")||(await et(),$.view==="student"&&await tt(),(!document.activeElement||!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))&&ue())},4e4)}async function et(){$.d=await x("/mentor")}async function tt(){$.det=await x("/mentor/student/"+$.sid)}async function Nt(){let[e,t]=location.hash.replace(/^#\\/?/,"").split("/");if($.view=["alerts","students","student","slots","me"].includes(e)?e:"alerts",$.view==="student"){$.sid=t;try{await tt()}catch(a){k(a.message),location.hash="#/students";return}}ue(),window.scrollTo(0,0)}function Aa(e){let t=$.d.students,a=t.flatMap(n=>n.alerts).length,i=[["alerts",`\\u{1F6A8} Alerts${a?`<span class="b">${a}</span>`:""}`],["students",`\\u{1F465} Students (${t.length})`],["slots","\\u{1F4C5} Sessions & slots"],["me","\\u2699\\uFE0F My profile"]];return`<header class="top"><div class="wrap"><a class="logo" href="#/alerts"><span class="mk">${ie()}</span><span class="t">Profile Atlas</span><span class="chip y" style="margin-left:4px">Mentor</span></a>\n    <nav class="nav">${i.map(([n,o])=>`<a href="#/${n}" class="${$.view===n||n==="students"&&$.view==="student"?"on":""}">${o}</a>`).join("")}</nav>\n    <div class="me"><span class="small" style="font-weight:700">${l($.d.me.name)}</span><button class="ava" data-a="logout" title="Log out" style="background:var(--mint)">${l(z($.d.me.name))}</button></div></div></header>\n    <main><div class="wrap">${e}</div></main>`}function ue(){let e={alerts:Sa,students:Ia,student:Pa,slots:Ta,me:Ma}[$.view];Be.innerHTML=Aa(e())}var jt=()=>$.d.students.filter(e=>(!$.mineOnly||e.mine)&&($.batch==="all"||String(e.catYear)===$.batch)),Bt=()=>{let e=[...new Set($.d.students.map(t=>t.catYear).filter(Boolean))].sort();return e.length>1?`<div class="row gap8" style="margin-bottom:14px"><button class="chip ${$.batch==="all"?"v":""}" data-a="batch" data-x="all">All batches</button>${e.map(t=>`<button class="chip ${$.batch===String(t)?"v":""}" data-a="batch" data-x="${t}">${P(t)} \\xB7 ${$.d.students.filter(a=>a.catYear===t).length}</button>`).join("")}</div>`:""},Ot=()=>`<div class="tabs"><button class="${$.mineOnly?"":"on"}" data-a="mine" data-x="0">All visible</button><button class="${$.mineOnly?"on":""}" data-a="mine" data-x="1">My students</button></div>`;function Sa(){let e=jt(),t=e.flatMap(o=>o.alerts.map(s=>({s:o,a:s}))).sort((o,s)=>s.a.urgency-o.a.urgency||o.s.lastActive-s.s.lastActive),a=Date.now(),i=$.d.sessions.filter(o=>o.status==="booked"&&Date.parse(o.start)+o.dur*6e4>a),n=$.d.sessions.filter(o=>o.status==="booked"&&Date.parse(o.start)+o.dur*6e4<=a);return`<div class="pagehead"><div><div class="kick">Intervention queue</div><h2>Who needs you now</h2><p class="muted" style="margin:0">Triggers fire automatically from each student\'s map, mocks, quests and check-ins.</p></div>${Ot()}</div>\n  <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${e.length}</span><span class="l">Students</span></div><div class="kpi stat" style="background:var(--coral-l)"><span class="n">${t.filter(o=>o.a.urgency===3).length}</span><span class="l">Urgent</span></div><div class="kpi stat" style="background:var(--yellow-l)"><span class="n">${t.length}</span><span class="l">Open alerts</span></div><div class="kpi stat" style="background:var(--mint-l)"><span class="n">${i.length}</span><span class="l">Upcoming sessions</span></div><div class="kpi stat"><span class="n">${e.filter(o=>o.mappedN<6).length}</span><span class="l">Not mapped yet</span></div></div>${Bt()}\n  ${n.length?`<div class="card tint-y banner" style="margin-bottom:14px"><span style="font-size:28px">\\u{1F5D2}</span><div class="grow"><b>${n.length} session${n.length>1?"s":""} need an outcome logged.</b> <span class="muted small">Notes are shared with the student.</span></div><a class="btn sun" href="#/slots">Log outcomes</a></div>`:""}\n  ${i.length?`<div class="card tint-m" style="margin-bottom:14px"><h4>Next up</h4>${i.slice(0,3).map(o=>`<div class="row" style="padding:6px 0"><span class="mono small">${q(o.start)}</span><b class="grow"><a href="#/student/${o.bookedBy}">${l(o.studentName)}</a></b><span class="small muted">${l(o.topic||"")}</span>${o.link?`<a class="btn sm go" href="${l(o.link)}" target="_blank">Join</a>`:""}</div>`).join("")}</div>`:""}\n  <div class="stack">${t.map(({s:o,a:s})=>`<div class="alert u${s.urgency}"><span class="ic">${he(s.kind)}</span><div class="grow"><div class="row"><b>${l(o.name)}</b><span class="chip soft">${s.urgency===3?"urgent":s.urgency===2?"soon":"when you can"}</span>${o.mine?"":o.mentorName?`<span class="tiny faint">mentor: ${l(o.mentorName)}</span>`:\'<span class="tiny faint">unassigned</span>\'}</div><div style="font-weight:700">${l(s.title)}</div><div class="small muted">${l(s.detail)}</div></div>\n     <div class="row gap8" style="flex-direction:column;align-items:stretch"><a class="btn sm" href="#/student/${o.id}">Open profile</a><button class="btn sm pri" data-a="nudge" data-x="${o.id}" data-k="${l(s.key)}">Ask to book</button><button class="btn sm ghost" data-a="ack" data-x="${o.id}" data-k="${l(s.key)}">Mark handled</button></div></div>`).join("")||\'<div class="card empty"><div class="big">\\u{1F324}</div><h3>All clear</h3>No triggers right now. Publish some slots so students can book proactively.</div>\'}</div>`}var at=e=>{let t=Z.find(a=>a.k===e);return t?`<span class="chip soft" style="background:${t.color}">${t.icon} ${t.name.split(" ")[0]}</span>`:"\\u2014"};function Rt(e){return`<span class="heat lv-${Y(e).k}">${e??"\\xB7"}</span>`}function Ia(){let e=$.q.toLowerCase(),t=jt().filter(a=>!e||(a.name+a.email).toLowerCase().includes(e)).sort((a,i)=>i.alerts.length-a.alerts.length||a.name.localeCompare(i.name));return`<div class="pagehead"><div><div class="kick">Roster</div><h2>Students</h2></div><div class="row"><input class="inp" id="m-q" placeholder="\\u{1F50D} Search name or email" value="${l($.q)}" style="width:240px">${Ot()}</div></div>${Bt()}\n  <div class="tscroll"><table class="tbl"><thead><tr><th>Student</th><th>Batch</th><th>Phase</th><th>Ready</th>${C.map(a=>`<th title="${l(a.name)}">${T[a.id]}</th>`).join("")}<th>h/wk</th><th>Quests</th><th>Mood</th><th>Alerts</th><th>Active</th></tr></thead><tbody>\n  ${t.map(a=>`<tr class="click" data-a="open" data-x="${a.id}"><td><b>${l(a.name)}</b><div class="tiny faint">${l(a.email)}${a.mine?"":a.mentorName?" \\xB7 "+l(a.mentorName):" \\xB7 unassigned"}</div></td><td class="small"><b>${a.catYear?P(a.catYear):"\\u2014"}</b><div class="tiny faint">${a.days!=null&&a.days>=0?a.days+"d to go":""}</div></td><td>${at(a.phase)}</td><td>${Rt(a.overall)}</td>${C.map(i=>`<td>${Rt(a.pillars[i.id])}</td>`).join("")}<td class="mono small" style="${a.capacity!=null&&a.load>a.capacity?"color:#e33;font-weight:700":""}">${a.capacity!=null?a.load+"/"+a.capacity:"\\u2014"}</td><td class="mono small">${a.doneN}/${a.planN}${a.blockedN?\' <span class="chip c">\'+a.blockedN+" blocked</span>":""}</td><td>${a.mood?ae[a.mood-1][1]:"\\u2014"}</td><td>${a.alerts.length?`<span class="chip ${a.alerts.some(i=>i.urgency===3)?"c":"y"}">${a.alerts.length}</span>`:"\\u2014"}</td><td class="small muted">${ee(a.lastActive)}</td></tr>`).join("")||\'<tr><td colspan="20" class="empty">No students yet. Share the app link and cohort code.</td></tr>\'}</tbody></table></div>`}function st(e,t,a,i,{edit:n=!0,mine:o=!0}={}){let s=V(e,i),r=e.profile||{},m=ne(e,s).filter(d=>!d.inPlan).slice(0,12),c=[...e.checkins||[]].sort((d,u)=>u.t-d.t),h=[...e.notes||[]].reverse();return`<div class="pagehead"><div><a class="small" href="#/students">\\u2190 All students</a><h2 style="font-size:34px;margin-top:4px">${l(e.name)}</h2>\n    <div class="row small muted"><span>${l(oe[r.stage]||"stage not set")}</span>\\xB7<span>${l(We[r.degree]||"")}</span>${r.org?`\\xB7<span>${l(r.org)}</span>`:""}\\xB7<a href="mailto:${l(e.email)}">${l(e.email)}</a>${e.phone?`\\xB7<a href="tel:${l(e.phone)}">${l(e.phone)}</a>`:""}</div></div>\n    ${n?`<div class="row">${o?"":\'<button class="btn" data-a="claim">Make my student</button>\'}<button class="btn pri" data-a="nudge" data-x="${e.id}">\\u{1F4AC} Message / ask to book</button></div>`:""}</div>\n  <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${s.overall??"\\u2014"}</span><span class="l">Readiness</span></div><div class="kpi stat"><span class="n">${s.strengths.length}/${s.total}</span><span class="l">Strong \\xB7 goal ${l(s.tier.label.split(",")[0])}</span></div><div class="kpi stat"><span class="n">${s.catYear?P(s.catYear):"\\u2014"}</span><span class="l">${s.phase?s.phase.icon+" "+s.phase.name:"Batch"}</span></div><div class="kpi stat"><span class="n">${s.mappedN}/${s.total}</span><span class="l">Mapped</span></div><div class="kpi stat"><span class="n">${(e.plan||[]).filter(d=>d.status==="done").length}/${(e.plan||[]).length}</span><span class="l">Quests done</span></div><div class="kpi stat"><span class="n">${s.days??"\\u2014"}</span><span class="l">Days to CAT</span></div><div class="kpi stat" style="${s.time.left!=null&&s.time.left<0?"background:var(--coral-l)":""}"><span class="n">${s.time.capacity!=null?s.time.load+"/"+s.time.capacity:"\\u2014"}</span><span class="l">h/wk committed</span></div></div>\n  ${s.catYear?`<div class="card" style="margin-bottom:16px"><h3>\\u{1F5D3} Road to ${P(s.catYear)}</h3>${De(s,e.plan||[],{start:e.createdAt})}</div>`:""}\n  ${t.length?`<div class="stack" style="margin-bottom:16px">${t.map(d=>`<div class="alert u${d.urgency}"><span class="ic">${he(d.kind)}</span><div class="grow"><b>${l(d.title)}</b><div class="small muted">${l(d.detail)}</div></div>${n?`<button class="btn sm pri" data-a="nudge" data-x="${e.id}" data-k="${l(d.key)}">Ask to book</button><button class="btn sm ghost" data-a="ack" data-x="${e.id}" data-k="${l(d.key)}">Handled</button>`:""}</div>`).join("")}</div>`:""}\n  <div class="grid g3"><div class="card span2"><div class="row between"><h3>Atlas</h3>${qe()}</div>${te(s,{compact:!0})}</div><div class="card"><h3>Balance</h3>${Se(s,280)}</div></div>\n  <div class="sec-title"><h3>\\u{1F5FA} Territory by territory</h3><span class="ln"></span></div>\n  <div class="grid g2">${s.pillars.map(d=>{let u=r.pillars?.[d.id]||{},v=F[d.id];return`<div class="card" style="padding:14px"><div class="row between"><b>${T[d.id]} ${l(v.name)}</b><span class="scorepill" style="box-shadow:none;padding:2px 10px 2px 3px">${Ae(d.score,30)}${d.level.name}</span></div>\n     ${u.self?`<div class="tiny muted mono" style="margin-top:4px">Self-rating ${u.self}/5 \\xB7 ${d.sources.join(" + ")||""}</div>`:""}\n     ${u.claim?`<div class="small" style="margin-top:6px"><b>Best proof:</b> ${l(u.claim)}</div>`:""}\n     ${v.probe.map(w=>u.probe?.[w.id]?`<div class="small" style="margin-top:6px"><span class="muted">${l(w.q)}</span><br>${l(u.probe[w.id])}</div>`:"").join("")}\n     ${d.missing.length&&d.score!=null?`<div class="tiny" style="margin-top:6px;color:var(--coral);font-weight:700">Missing: ${d.missing.slice(0,3).map(l).join(" \\xB7 ")}</div>`:""}</div>`}).join("")}</div>\n  ${Q(e).length?`<div class="sec-title"><h3>\\u{1F50D} Auto insights</h3><span class="ln"></span></div><div class="grid g3">${Q(e).map(d=>`<div class="card flat" style="padding:12px"><b>${d.icon} ${d.title}</b><div class="small muted">${d.text}</div></div>`).join("")}</div>`:""}\n  ${r.why?`<div class="card tint-v" style="margin-top:16px"><b>Why MBA (their words):</b> ${l(r.why)}</div>`:""}\n  <div class="grid g2" style="margin-top:16px"><div class="card"><h3>\\u23F1 Their week</h3>${s.time.set?`<div class="stack" style="margin-top:8px"><div><div class="tiny mono faint">WEEKDAY</div>${de(s.time.wd)}</div><div><div class="tiny mono faint">WEEKEND</div>${de(s.time.we)}</div></div><div class="row small" style="margin-top:10px"><span class="chip c">${s.time.catWeek} h/wk CAT study</span><span class="chip m">${s.time.freeWeek} h/wk free</span><span class="chip v">${s.time.capacity} h/wk for profile</span><span class="chip ${s.time.left<0?"c":"soft"}">${s.time.load} h/wk committed</span></div>`:\'<p class="muted">Routine not set yet.</p>\'}</div>\n  <div class="card"><h3>\\u{1F4DD} Check-ins</h3>${c.length?`<div class="row small muted" style="margin-bottom:6px">Mood ${ce([...c].reverse().map(d=>d.mood),120,28,"#FF5A5F")} Hours ${ce([...c].reverse().map(d=>+d.hours||.1),120,28,"#1FD1A5")}</div>`+c.slice(0,6).map(d=>`<div style="padding:7px 0;border-bottom:1.5px dashed #DDD8EE"><div class="row"><span style="font-size:20px">${ae[d.mood-1][1]}</span><span class="mono small">${K(d.t)}</span><span class="small">${d.hours||0} hrs on profile \\xB7 ${d.quests||0} quests moved</span></div>${d.win?`<div class="small">\\u{1F3C1} ${l(d.win)}</div>`:""}${d.blocker?`<div class="small">\\u{1F9F1} ${l(d.blocker)}</div>`:""}</div>`).join(""):\'<p class="muted">No check-ins yet.</p>\'}</div></div>\n  <div class="sec-title"><h3>\\u{1F3AF} Quests</h3><span class="ln"></span></div>\n  <div class="grid g2">${(e.plan||[]).map(d=>{let u=E[d.aid],v=ke(d);return`<div class="card" style="padding:14px"><div class="row between"><span class="chip soft">${T[u.p]} ${l(N[u.p])}</span><span class="chip ${d.status==="done"?"m":d.status==="blocked"?"c":d.status==="doing"?"s":"g"}">${d.status||"todo"}</span></div><h4 style="margin:6px 0">${l(u.t)}</h4><div class="row"><div class="bar thin grow"><i style="width:${v}%"></i></div><span class="mono small">${v}%</span></div>\n    ${d.blockNote&&d.status==="blocked"?`<div class="small" style="color:var(--coral);font-weight:700;margin-top:6px">Blocked: ${l(d.blockNote)}</div>`:""}\n    ${(d.log||[]).slice(-3).reverse().map(w=>`<div class="small" style="margin-top:6px"><span class="tiny faint mono">${K(w.t)}</span> ${l(w.text)} ${w.link?`<a href="${l(w.link)}" target="_blank">\\u{1F517}${l(re(w.link))}</a>`:""}</div>`).join("")}\n    ${Object.values(d.answers||{}).some(Boolean)?`<details style="margin-top:6px"><summary class="small" style="cursor:pointer;font-weight:700">Interview answers</summary>${u.pq.map((w,y)=>d.answers?.[y]?`<div class="small" style="margin-top:4px"><span class="muted">${l(w)}</span><br>${l(d.answers[y])}</div>`:"").join("")}</details>`:""}\n    <div class="tiny faint" style="margin-top:6px">${d.by?"Assigned by "+l(d.by)+" \\xB7 ":""}${d.due?"due "+K(d.due):""}</div></div>`}).join("")||\'<div class="card empty span2">No quests yet.</div>\'}</div>\n  ${n?`<div class="card tint-y" style="margin-top:16px"><h3>\\u2795 Assign a quest</h3><div class="grid g4" style="margin-top:10px;align-items:end"><div class="span2"><label class="f">Quest (ranked for this student)</label><select class="inp" id="as-aid">${m.map(d=>`<option value="${d.a.id}">${T[d.a.p]} ${l(d.a.t)} \\u2014 ${l(N[d.a.p])}</option>`).join("")}</select></div><div><label class="f">Due</label><input class="inp" type="date" id="as-due"></div><div><button class="btn pri" data-a="assign">Assign</button></div></div><input class="inp" id="as-note" style="margin-top:10px" placeholder="Note for the student (why this, what good looks like)"></div>`:""}\n  <div class="grid g2" style="margin-top:16px"><div class="card"><h3>\\u{1F5D2} Notes</h3>${n?\'<textarea class="inp" id="nt-t" placeholder="Session notes, observations, agreed next steps\\u2026"></textarea><div class="row" style="margin-top:8px"><label class="row small" style="font-weight:700"><input type="checkbox" id="nt-sh" checked style="width:18px;height:18px"> Share with student</label><button class="btn pri sm" data-a="note">Save note</button></div>\':""}\n    <div class="stack" style="margin-top:12px">${h.map(d=>`<div class="card flat" style="padding:10px 12px"><div class="tiny faint mono">${q(d.t)} \\xB7 ${l(d.by)} \\xB7 ${d.shared?"shared":"\\u{1F512} private"}</div><div class="small" style="white-space:pre-wrap">${l(d.text)}</div></div>`).join("")||\'<div class="small muted">No notes yet.</div>\'}</div></div>\n  <div class="card"><h3>\\u{1F4C5} Sessions</h3>${a.map(d=>`<div class="row" style="padding:8px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${q(d.start)}</span><span class="grow small">${l(d.topic||"")}</span><span class="chip ${d.status==="done"?"m":d.status==="booked"?"s":"g"}">${d.status}</span></div>`).join("")||\'<p class="muted">No sessions yet.</p>\'}</div></div>`}function Pa(){let e=$.det,t=$.d.students.find(a=>a.id===$.sid);return st(e.st,e.alerts,e.sessions,e.cfg,{edit:!0,mine:e.st.mentorId===$.d.me.id})}function Ta(){let e=Date.now(),t=$.d.sessions,a=t.filter(r=>r.status==="booked"&&Date.parse(r.start)+r.dur*6e4>e),i=t.filter(r=>r.status==="booked"&&Date.parse(r.start)+r.dur*6e4<=e),n=t.filter(r=>r.status==="open"&&Date.parse(r.start)>e),o=t.filter(r=>["done","noshow","cancelled"].includes(r.status)).reverse().slice(0,20);return`<div class="pagehead"><div><div class="kick">Your calendar</div><h2>Sessions & slots</h2><p class="muted" style="margin:0">Publish slots; students book them when an alert says it\'s time. Times are in your local timezone.</p></div></div>\n  <div class="grid g3"><div class="card tint-y"><h3>\\u2795 Publish slots</h3><div class="stack" style="margin-top:10px">\n    <div class="grid g2"><div><label class="f">Date</label><input class="inp" type="date" id="sl-d" value="${new Date(Date.now()+864e5).toISOString().slice(0,10)}"></div><div><label class="f">First slot at</label><input class="inp" type="time" id="sl-t" value="18:00"></div></div>\n    <div class="grid g3"><div><label class="f">Minutes</label><select class="inp" id="sl-dur">${[20,30,45,60].map(r=>`<option ${r===30?"selected":""}>${r}</option>`).join("")}</select></div><div><label class="f">Back-to-back</label><select class="inp" id="sl-n">${[1,2,3,4,5,6,8].map(r=>`<option ${r===3?"selected":""}>${r}</option>`).join("")}</select></div><div><label class="f">Break (min)</label><select class="inp" id="sl-br">${[0,5,10,15].map(r=>`<option ${r===5?"selected":""}>${r}</option>`).join("")}</select></div></div>\n    <div class="grid g2"><div><label class="f">Repeat weekly</label><select class="inp" id="sl-w">${[1,2,3,4,6,8].map(r=>`<option value="${r}">${r===1?"Just this week":r+" weeks"}</option>`).join("")}</select></div><div><label class="f">Mode</label><select class="inp" id="sl-m"><option value="video">Video call</option><option value="phone">Phone</option><option value="in-person">In person</option></select></div></div>\n    <div><label class="f">Meeting link / location</label><input class="inp" id="sl-l" value="${l($.d.me.meet||"")}" placeholder="https://meet.google.com/\\u2026"></div>\n    <div id="sl-err"></div><button class="btn pri" data-a="slots">Publish</button></div></div>\n  <div class="card span2"><h3>\\u{1F4CC} Booked (${a.length})</h3>${a.map(r=>Wa(r,!0)).join("")||\'<p class="muted">Nothing booked yet.</p>\'}\n    ${i.length?`<h3 style="margin-top:14px">\\u{1F5D2} Log outcome (${i.length})</h3>${i.map(r=>`<div class="row" style="padding:8px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${q(r.start)}</span><b class="grow"><a href="#/student/${r.bookedBy}">${l(r.studentName)}</a></b><button class="btn sm sun" data-a="done" data-x="${r.id}">Log outcome</button></div>`).join("")}`:""}\n    <h3 style="margin-top:14px">\\u{1F7E2} Open (${n.length})</h3><div class="row gap8" style="margin-top:8px">${n.map(r=>`<span class="slot" style="cursor:default">${q(r.start)} <button class="btn sm ghost" data-a="del" data-x="${r.id}" title="Remove">\\u2715</button></span>`).join("")||`<span class="muted">No open slots \\u2014 students can\'t book until you publish some.</span>`}</div></div></div>\n  ${o.length?`<div class="sec-title"><h3>History</h3><span class="ln"></span></div><div class="card" style="padding:4px 14px">${o.map(r=>`<div class="row" style="padding:8px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${q(r.start)}</span><b>${l(r.studentName||"\\u2014")}</b><span class="grow small muted">${l(r.summary||r.topic||"")}</span><span class="chip ${r.status==="done"?"m":"c"}">${r.status}</span></div>`).join("")}</div>`:""}`}function Wa(e){return`<div class="row" style="padding:9px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${q(e.start)} \\xB7 ${e.dur}m</span><b><a href="#/student/${e.bookedBy}">${l(e.studentName)}</a></b><span class="grow small muted">${l(e.topic||"")}</span>${e.link?`<a class="btn sm go" href="${l(e.link)}" target="_blank">Join</a>`:`<button class="btn sm" data-a="link" data-x="${e.id}">Add link</button>`}<a class="btn sm" href="${Ee(e,e.studentName)}" target="_blank">\\u{1F4C6}</a><button class="btn sm" data-a="ics" data-x="${e.id}">.ics</button><button class="btn sm ghost" data-a="del" data-x="${e.id}">Cancel</button></div>`}function Ma(){let e=$.d.me;return`<div class="pagehead"><div><div class="kick">Settings</div><h2>My mentor profile</h2></div></div><div class="card" style="max-width:640px"><div class="stack">\n    <div><label class="f">Short bio (students see this)</label><textarea class="inp" id="me-bio" placeholder="IIM-A \'19, ex-consultant. Ask me about DILR and interviews.">${l(e.bio)}</textarea></div>\n    <div><label class="f">Default meeting link</label><input class="inp" id="me-meet" value="${l(e.meet)}" placeholder="https://meet.google.com/abc-defg-hij"></div>\n    <div><label class="f">New PIN (leave blank to keep)</label><input class="inp" id="me-pin" type="password"></div>\n    <button class="btn pri" data-a="me-save">Save</button></div></div>`}async function Ca(e){let t=e.target.closest("[data-a]");if(!t)return;let a=t.dataset.a,i=t.dataset.x,n=t.dataset.k;try{if(a==="mine")$.mineOnly=i==="1",ue();else if(a==="batch")$.batch=i,ue();else if(a==="open")location.hash="#/student/"+i;else if(a==="ack")await x(`/mentor/student/${i}/ack`,"POST",{key:n}),k("Marked handled"),await _();else if(a==="nudge")Da(i,n);else if(a==="claim")await x(`/mentor/student/${$.sid}/claim`,"POST"),k("Assigned to you"),await _();else if(a==="assign")await x(`/mentor/student/${$.sid}/assign`,"POST",{aid:f("#as-aid").value,due:f("#as-due").value,note:f("#as-note").value}),k("Quest assigned \\u2014 it appears in their plan"),await _();else if(a==="note")await x(`/mentor/student/${$.sid}/note`,"POST",{text:f("#nt-t").value,shared:f("#nt-sh").checked}),k("Note saved"),await _();else if(a==="slots"){let o=f("#sl-d").value,s=f("#sl-t").value;if(!o||!s)throw new Error("Pick a date and time");let r=new Date(`${o}T${s}`);if(r<new Date)throw new Error("That time is in the past");await x("/mentor/slots","POST",{start:r.toISOString(),dur:+f("#sl-dur").value,count:+f("#sl-n").value,breakMin:+f("#sl-br").value,weeks:+f("#sl-w").value,mode:f("#sl-m").value,link:f("#sl-l").value}),k("Slots published"),await _()}else if(a==="del"){if(!t.dataset.sure){t.dataset.sure=1,t.textContent="Sure?";return}await x("/mentor/slots/"+i,"DELETE"),k("Done"),await _()}else if(a==="done")Ea(i);else if(a==="link"){let o=$.d.sessions.find(s=>s.id===i);B(`<h2>Meeting link</h2><input class="inp" id="lk" value="${l($.d.me.meet||"")}" placeholder="https://\\u2026"><button class="btn pri" style="margin-top:10px" data-m="link" data-x="${i}">Save</button>`,"sm")}else if(a==="ics"){let o=$.d.sessions.find(s=>s.id===i);Ne(o,o.studentName)}else a==="me-save"?(await x("/mentor/profile","POST",{bio:f("#me-bio").value,meet:f("#me-meet").value,pin:f("#me-pin").value}),k("Saved"),await _()):a==="logout"&&(x("/logout","POST").catch(()=>{}),localStorage.removeItem("atlas.tok"),localStorage.removeItem("atlas.role"),location.hash="",location.reload())}catch(o){k(o.message);let s=f("#sl-err");s&&a==="slots"&&(s.innerHTML=`<div class="err">${l(o.message)}</div>`)}}async function _(){await et(),$.view==="student"&&await tt(),ue()}function qa(e){if(e.target.id==="m-q"){$.q=e.target.value;let t=e.target.selectionStart;ue();let a=f("#m-q");a.focus(),a.setSelectionRange(t,t)}}function Da(e,t){let a=$.d.students.find(s=>s.id===e),i=a?.alerts.find(s=>s.key===t),n=(a?.name||"").split(" ")[0],o=i?`Hi ${n}, I noticed: ${i.title.toLowerCase()}. Let\'s talk \\u2014 pick any slot that works for you this week.`:`Hi ${n}, let\'s catch up on your plan \\u2014 pick a slot that works for you.`;B(`<h2>\\u{1F4AC} Message ${l(a?.name||"")}</h2><p class="muted small">Shows as a banner on their map. ${i?"The alert is marked handled when they book.":""}</p><textarea class="inp" id="ng-t">${l(o)}</textarea><label class="row small" style="font-weight:700;margin-top:8px"><input type="checkbox" id="ng-b" checked style="width:18px;height:18px"> Include a "Pick a slot" button</label>\n    ${$.d.sessions.filter(s=>s.status==="open"&&Date.parse(s.start)>Date.now()).length?"":\'<div class="err small">You have no open slots \\u2014 publish some so they can book.</div>\'}\n    <button class="btn pri" style="margin-top:12px" data-m="nudge" data-x="${e}" data-k="${l(t||"")}">Send</button>`,"sm")}function Ea(e){let t=$.d.sessions.find(a=>a.id===e);B(`<h2>\\u{1F5D2} Session outcome</h2><p class="muted small">${l(t.studentName)} \\xB7 ${q(t.start)}</p><textarea class="inp" id="dn-t" style="min-height:120px" placeholder="What we discussed, what was agreed, next steps. Shared with the student."></textarea>\n    <div class="row" style="margin-top:12px"><button class="btn pri" data-m="done" data-x="${e}">Save & mark done</button><button class="btn" data-m="noshow" data-x="${e}">No-show</button></div>`,"sm")}async function Na(e){let t=e.target.closest("[data-m]");if(!t||!$)return;let a=t.dataset.m,i=t.dataset.x;try{a==="nudge"&&(await x(`/mentor/student/${i}/nudge`,"POST",{text:f("#ng-t").value,book:f("#ng-b").checked}),t.dataset.k&&t.dataset.k.startsWith("help:"),t.dataset.k&&t.dataset.k.startsWith("help:")&&await x(`/mentor/student/${i}/ack`,"POST",{key:t.dataset.k}),k("Message sent")),(a==="done"||a==="noshow")&&await x(`/mentor/slots/${i}/done`,"POST",{summary:f("#dn-t").value,noshow:a==="noshow"}),a==="link"&&await x(`/mentor/slots/${i}/link`,"POST",{link:f("#lk").value}),j(),await _()}catch(n){k(n.message)}}var Gt=e=>b.batch==="all"||String(e.catYear)===b.batch;function Yt(){let e=[...new Set([...b.d.cfg.years,...b.d.students.map(t=>t.catYear).filter(Boolean)])].sort();return`<div class="row gap8" style="margin-bottom:14px"><button class="chip ${b.batch==="all"?"v":""}" data-a="batch" data-x="all">All batches \\xB7 ${b.d.students.length}</button>${e.map(t=>`<button class="chip ${b.batch===String(t)?"v":""}" data-a="batch" data-x="${t}">${P(t)} \\xB7 ${b.d.students.filter(a=>a.catYear===t).length}</button>`).join("")}</div>`}var b=null,Pe=null;async function Ht(e){Pe=e,b={view:"overview",q:"",sel:new Set,batch:"all"},await X(),Pe.addEventListener("click",Fa),Pe.addEventListener("change",Ga),Pe.addEventListener("input",Ya),document.addEventListener("click",Ha),window.addEventListener("hashchange",Ft),Ft()}async function X(){b.d=await x("/admin")}async function Ft(){let[e,t]=location.hash.replace(/^#\\/?/,"").split("/");if(b.view=["overview","students","student","mentors","resources","settings"].includes(e)?e:"overview",b.view==="student")try{b.det=(await x("/admin/students/"+t)).st}catch(a){k(a.message),location.hash="#/students";return}L(),window.scrollTo(0,0)}function L(){let e=[["overview","\\u{1F4CA} Cohort"],["students",`\\u{1F465} Students (${b.d.students.length})`],["mentors",`\\u{1F9D1}\\u200D\\u{1F3EB} Mentors (${b.d.mentors.length})`],["resources",`\\u{1F517} Resources (${b.d.resources.length})`],["settings","\\u2699\\uFE0F Settings"]],t={overview:Ra,students:La,student:()=>st(b.det,ut(b.det,b.d.cfg),[],b.d.cfg,{edit:!1}),mentors:ja,resources:Ba,settings:Oa}[b.view];Pe.innerHTML=`<header class="top"><div class="wrap"><a class="logo" href="#/overview"><span class="mk">${ie()}</span><span class="t">Profile Atlas</span><span class="chip c" style="margin-left:4px">Admin</span></a>\n    <nav class="nav">${e.map(([a,i])=>`<a href="#/${a}" class="${b.view===a||a==="students"&&b.view==="student"?"on":""}">${i}</a>`).join("")}</nav>\n    <button class="btn sm" data-a="logout">Log out</button></div></header><main><div class="wrap">${b.d.defaultPw?`<div class="err" style="margin-bottom:14px">\\u26A0 You\'re using the default admin password. Set an <b>ADMIN_PASSWORD</b> secret in Cloudflare (Worker \\u2192 Settings \\u2192 Variables and Secrets).</div>`:""}${t()}</div></main>`}function Ra(){let e=b.d.students.filter(Gt),t=e.length||1,a=e.filter(r=>r.mappedN>=C.length-1).length,i=r=>{let m=e.map(c=>c[r]).filter(c=>c!=null);return m.length?Math.round(m.reduce((c,h)=>c+h,0)/m.length):null},n=e.flatMap(r=>r.alerts.map(m=>({s:r,a:m}))),o=C.map(r=>{let m=e.map(d=>d.pillars[r.id]),c=m.filter(d=>d!=null),h=U.map(d=>m.filter(u=>u!=null&&Y(u).k===d.k).length);return{p:r,avg:c.length?Math.round(c.reduce((d,u)=>d+u,0)/c.length):null,dist:h,fog:m.filter(d=>d==null).length}}),s=e.filter(r=>Date.now()-r.lastActive<7*864e5).length;return`<div class="pagehead"><div><div class="kick">${l(b.d.cfg.program)}</div><h2>Cohort atlas</h2><p class="muted" style="margin:0">Cohort code <span class="kbd">${l(b.d.cfg.cohortCode)}</span> \\xB7 students pick their CAT year at sign-up.</p></div><button class="btn" data-a="csv">\\u2B07 Export CSV</button></div>${Yt()}\n  <div class="grid g4" style="margin-bottom:16px">${[...new Set([...b.d.cfg.years,...b.d.students.map(r=>r.catYear).filter(Boolean)])].sort().map(r=>{let m=b.d.students.filter(h=>h.catYear===r),c=m.map(h=>h.overall).filter(h=>h!=null);return`<div class="card" style="padding:14px;cursor:pointer" data-a="batch" data-x="${r}"><div class="row between"><b style="font:800 22px var(--fd)">${P(r)}</b>${m[0]?at(m[0].phase):""}</div><div class="small muted">${H(r)} \\xB7 ${m.length} students</div><div class="small">Avg readiness <b>${c.length?Math.round(c.reduce((h,d)=>h+d,0)/c.length):"\\u2014"}</b> \\xB7 ${m.reduce((h,d)=>h+d.alerts.length,0)} alerts</div></div>`}).join("")}</div>\n  <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${e.length}</span><span class="l">Students</span></div><div class="kpi stat"><span class="n">${Math.round(a/t*100)}%</span><span class="l">Fully mapped</span></div><div class="kpi stat"><span class="n">${i("overall")??"\\u2014"}</span><span class="l">Avg readiness</span></div><div class="kpi stat"><span class="n">${Math.round(s/t*100)}%</span><span class="l">Active this week</span></div><div class="kpi stat" style="background:var(--coral-l)"><span class="n">${n.length}</span><span class="l">Open alerts</span></div><div class="kpi stat"><span class="n">${b.d.mentors.reduce((r,m)=>r+m.sessions,0)}</span><span class="l">Sessions held</span></div></div>\n  <div class="grid g3"><div class="card span2"><h3>Where the cohort is lacking</h3><p class="small muted">Share of students at each level, per territory. Fog = not mapped.</p>\n    ${o.map(({p:r,avg:m,dist:c,fog:h})=>`<div class="row" style="padding:7px 0"><span style="width:24px">${T[r.id]}</span><b style="width:110px" class="small">${l(N[r.id])}</b><div class="grow" style="display:flex;height:22px;border:2px solid var(--ink);border-radius:8px;overflow:hidden">${c.map((d,u)=>d?`<div title="${U[u].name}: ${d}" style="width:${d/t*100}%;background:${U[u].color};border-right:1.5px solid var(--ink)"></div>`:"").join("")}${h?`<div title="Unmapped: ${h}" style="width:${h/t*100}%;background:repeating-linear-gradient(45deg,#EAE7F2 0 4px,#C9C4DC 4px 8px)"></div>`:""}</div><span class="mono small" style="width:34px;text-align:right">${m??"\\u2014"}</span></div>`).join("")}\n    <div class="legend" style="margin-top:8px">${U.map(r=>`<span><i style="background:${r.color}"></i>${r.name}</span>`).join("")}</div></div>\n  <div class="card"><h3>\\u{1F6A8} Needs attention</h3>${n.sort((r,m)=>m.a.urgency-r.a.urgency).slice(0,8).map(({s:r,a:m})=>`<div class="row" style="padding:6px 0;border-bottom:1.5px dashed #DDD8EE"><span>${he(m.kind)}</span><div class="grow small"><a href="#/student/${r.id}"><b>${l(r.name)}</b></a><div class="muted tiny">${l(m.title)}</div></div></div>`).join("")||\'<p class="muted">All clear.</p>\'}\n    <h3 style="margin-top:16px">Mentor load</h3>${b.d.mentors.map(r=>`<div class="row small" style="padding:5px 0"><b class="grow">${l(r.name)}</b><span>${r.n} students</span><span class="chip soft">${r.upcoming} upcoming</span></div>`).join("")||\'<p class="muted small">No mentors yet \\u2014 <a href="#/mentors">add one</a>.</p>\'}</div></div>`}function La(){let e=b.q.toLowerCase(),t=b.d.students.filter(Gt).filter(i=>!e||(i.name+i.email).toLowerCase().includes(e)).sort((i,n)=>i.name.localeCompare(n.name)),a=i=>\'<option value="">\\u2014 unassigned \\u2014</option>\'+b.d.mentors.map(n=>`<option value="${n.id}" ${i===n.id?"selected":""}>${l(n.name)}</option>`).join("");return`<div class="pagehead"><div><div class="kick">Roster</div><h2>Students</h2><p class="muted small" style="margin:0">Students self-register with the cohort code. New students are auto-assigned to the mentor with the fewest students.</p></div><div class="row"><input class="inp" id="a-q" placeholder="\\u{1F50D} Search" value="${l(b.q)}" style="width:220px"></div></div>\n  ${Yt()}<div class="card tint-v row" style="margin-bottom:12px;padding:10px 14px"><b class="small">${b.sel.size} selected</b><select class="inp" id="bulk-m" style="width:auto">${a("")}</select><button class="btn sm pri" data-a="bulk" ${b.sel.size?"":"disabled"}>Assign selected</button></div>\n  <div class="tscroll"><table class="tbl"><thead><tr><th><input type="checkbox" data-a="selall"></th><th>Student</th><th>Batch</th><th>Stage</th><th>Ready</th><th>Mapped</th><th>Quests</th><th>Alerts</th><th>Mentor</th><th>Active</th><th></th></tr></thead><tbody>\n  ${t.map(i=>`<tr><td><input type="checkbox" data-sel="${i.id}" ${b.sel.has(i.id)?"checked":""}></td><td><a href="#/student/${i.id}"><b>${l(i.name)}</b></a><div class="tiny faint">${l(i.email)}</div></td><td class="small"><b>${i.catYear?P(i.catYear):"\\u2014"}</b></td><td class="small">${l(oe[i.stage]||"\\u2014")}</td><td><span class="heat lv-${Y(i.overall).k}">${i.overall??"\\xB7"}</span></td><td class="mono small">${i.mappedN}/${C.length}</td><td class="mono small">${i.doneN}/${i.planN}</td><td>${i.alerts.length||"\\u2014"}</td><td><select class="inp" style="padding:5px 8px;width:auto" data-assign="${i.id}">${a(i.mentorId)}</select></td><td class="small muted">${ee(i.lastActive)}</td><td><button class="btn sm" data-a="spin" data-x="${i.id}">Reset PIN</button> <button class="btn sm ghost" data-a="sdel" data-x="${i.id}">Delete</button></td></tr>`).join("")||\'<tr><td colspan="10" class="empty">No students yet.</td></tr>\'}</tbody></table></div>`}function ja(){return`<div class="pagehead"><div><div class="kick">Team</div><h2>Mentors</h2></div></div>\n  <div class="grid g3"><div class="card tint-y"><h3>\\u2795 Add a mentor</h3><div class="stack" style="margin-top:10px"><input class="inp" id="mn-name" placeholder="Full name"><input class="inp" id="mn-email" placeholder="Email (login)"><input class="inp" id="mn-pin" placeholder="PIN (4+ characters)"><input class="inp" id="mn-meet" placeholder="Default meeting link (optional)"><textarea class="inp" id="mn-bio" placeholder="Short bio (optional)"></textarea><div id="mn-err"></div><button class="btn pri" data-a="madd">Add mentor</button><p class="tiny muted">Share the email + PIN with them; they log in under \\u201CMentor\\u201D.</p></div></div>\n  <div class="span2 stack">${b.d.mentors.map(e=>`<div class="card row"><div class="ava" style="width:50px;height:50px;background:var(--mint)">${l(z(e.name))}</div><div class="grow"><h3>${l(e.name)}</h3><div class="small muted">${l(e.email)}${e.meet?" \\xB7 "+l(e.meet):""}</div></div><span class="chip soft">${e.n} students</span><span class="chip soft">${e.sessions} held</span><span class="chip soft">${e.upcoming} upcoming</span><button class="btn sm" data-a="mpin" data-x="${e.id}">Reset PIN</button><button class="btn sm ghost" data-a="mdel" data-x="${e.id}">Remove</button></div>`).join("")||\'<div class="card empty"><div class="big">\\u{1F9D1}\\u200D\\u{1F3EB}</div>No mentors yet.</div>\'}</div></div>`}function Ba(){return`<div class="pagehead"><div><div class="kick">Library</div><h2>Resources</h2><p class="muted small" style="margin:0">Links students see in quests and the resource hub. Tag territories so the right links appear against the right gaps.</p></div><div class="row"><button class="btn" data-a="radd">+ Add link</button><button class="btn pri" data-a="rsave">Save changes</button><button class="btn ghost" data-a="rreset">Reset to defaults</button></div></div>\n  <div class="tscroll"><table class="tbl"><thead><tr><th>Category</th><th>Name</th><th>URL</th><th>Description</th><th>Free</th><th>Territories</th><th></th></tr></thead><tbody id="rs-body">\n  ${b.d.resources.map((e,t)=>`<tr data-i="${t}"><td><input class="inp" style="padding:6px 8px" data-r="cat" value="${l(e.cat)}"></td><td><input class="inp" style="padding:6px 8px" data-r="name" value="${l(e.name)}"></td><td><input class="inp" style="padding:6px 8px;min-width:200px" data-r="url" value="${l(e.url)}"></td><td><input class="inp" style="padding:6px 8px;min-width:220px" data-r="desc" value="${l(e.desc)}"></td><td><input type="checkbox" data-r="free" ${e.free?"checked":""}></td><td><input class="inp" style="padding:6px 8px;min-width:160px" data-r="pillars" value="${l((e.pillars||[]).join(", "))}" title="Codes: ${C.map(a=>a.id).join(", ")}"></td><td><button class="btn sm ghost" data-a="rdel" data-x="${t}">\\u2715</button></td></tr>`).join("")}</tbody></table></div>\n  <p class="tiny muted" style="margin-top:8px">Territory codes: ${C.map(e=>`<span class="kbd">${e.id}</span> ${l(N[e.id])}`).join(" \\xB7 ")}</p>`}function Oa(){let e=b.d.cfg;return`<div class="pagehead"><div><div class="kick">Programme</div><h2>Settings</h2></div></div>\n  <div class="grid g2"><div class="card stack"><div><label class="f">Programme name</label><input class="inp" id="cf-program" value="${l(e.program)}"></div>\n    <div><label class="f">Cohort code (students need this to sign up)</label><input class="inp" id="cf-code" value="${l(e.cohortCode)}"></div>\n    <div><label class="f">CAT years open for sign-up (batches)</label><input class="inp" id="cf-years" value="${l(e.years.join(", "))}" placeholder="2027, 2028, 2029, 2030"><div class="tiny muted">${e.years.map(t=>`${P(t)} \\u2192 ${H(t)}`).join(" \\xB7 ")} (last Sunday of November)</div></div>\n    <div><label class="f">Welcome line on the login page</label><input class="inp" id="cf-welcome" value="${l(e.welcome)}"></div>\n    <div class="card flat" style="background:#d9f1f7;padding:12px"><b class="small">\\u{1F4DA} CAT practice platform (linked for syllabus prep)</b><div class="grid g3" style="margin-top:8px"><input class="inp" id="cf-pn" value="${l(e.prepName||"")}" placeholder="Name"><input class="inp" id="cf-pu" value="${l(e.prepUrl||"")}" placeholder="https://\\u2026"><input class="inp" id="cf-ps" value="${l(e.prepSignin||"")}" placeholder="Sign-in link"></div><div class="tiny muted">Leave the link empty to hide it.</div></div>\n    <label class="row small" style="font-weight:700"><input type="checkbox" id="cf-all" ${e.mentorsSeeAll?"checked":""} style="width:18px;height:18px"> Mentors can see all students (not just their own)</label>\n    <button class="btn pri" data-a="cfg">Save settings</button></div>\n  <div class="card tint-m"><h3>How to roll this out</h3><ol class="small" style="padding-left:18px;line-height:1.8"><li>Add your mentors (Mentors tab) and share their email + PIN.</li><li>Mentors publish weekly slots (Sessions & slots).</li><li>Share this link with students: <span class="kbd">${l(location.origin)}</span> and the cohort code <span class="kbd">${l(e.cohortCode)}</span>.</li><li>Students map their profile, pick quests and check in weekly.</li><li>Alerts route students to mentors automatically; watch the Cohort tab for gaps.</li></ol></div></div>`}function it(){return[...document.querySelectorAll("#rs-body tr")].map(e=>{let t=i=>e.querySelector(`[data-r="${i}"]`);return{...b.d.resources[+e.dataset.i]||{},cat:t("cat").value,name:t("name").value,url:t("url").value,desc:t("desc").value,free:t("free").checked,pillars:t("pillars").value.split(/[,\\s]+/).map(i=>i.trim().toUpperCase()).filter(i=>C.some(n=>n.id===i))}})}async function Fa(e){let t=e.target.closest("[data-a]");if(!t)return;let a=t.dataset.a,i=t.dataset.x,n=()=>t.dataset.sure?!0:(t.dataset.sure=1,t.textContent="Sure?",!1);try{if(a==="logout")x("/logout","POST").catch(()=>{}),R.set("atlas.tok",null),R.set("atlas.role",null),location.hash="",location.reload();else if(a==="csv"){let s=await(await fetch("/api/admin/export",{headers:{authorization:"Bearer "+R.get("atlas.tok")}})).blob(),r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="profile-atlas.csv",r.click()}else if(a==="batch")b.batch=i,L();else if(a==="selall"){let o=t.checked;b.d.students.forEach(s=>o?b.sel.add(s.id):b.sel.delete(s.id)),L()}else if(a==="bulk")await x("/admin/assign","POST",{ids:[...b.sel],mentorId:f("#bulk-m").value}),b.sel.clear(),k("Assigned"),await X(),L();else if(a==="spin"||a==="mpin")B(`<h2>Reset PIN</h2><input class="inp" id="np" placeholder="New PIN (4+ characters)"><button class="btn pri" style="margin-top:10px" data-m="${a}" data-x="${i}">Set PIN</button>`,"sm");else if(a==="sdel"){if(!n())return;await x("/admin/students/"+i,"DELETE"),k("Deleted"),await X(),L()}else if(a==="madd")await x("/admin/mentors","POST",{name:f("#mn-name").value,email:f("#mn-email").value,pin:f("#mn-pin").value,meet:f("#mn-meet").value,bio:f("#mn-bio").value}),k("Mentor added"),await X(),L();else if(a==="mdel"){if(!n())return;await x("/admin/mentors/"+i,"DELETE"),k("Removed"),await X(),L()}else if(a==="radd")b.d.resources=it(),b.d.resources.unshift({cat:"Other",name:"",url:"https://",desc:"",free:!0,pillars:[]}),L();else if(a==="rdel")b.d.resources=it(),b.d.resources.splice(+i,1),L();else if(a==="rsave"){let o=await x("/admin/resources","PUT",{resources:it()});k(`Saved ${o.n} links`),await X(),L()}else if(a==="rreset"){if(!n())return;await x("/admin/resources/reset","POST"),k("Defaults restored"),await X(),L()}else a==="cfg"&&(await x("/admin/config","PUT",{program:f("#cf-program").value,cohortCode:f("#cf-code").value,years:f("#cf-years").value,prepName:f("#cf-pn").value,prepUrl:f("#cf-pu").value,prepSignin:f("#cf-ps").value,welcome:f("#cf-welcome").value,mentorsSeeAll:f("#cf-all").checked}),k("Saved"),await X(),L())}catch(o){k(o.message);let s=f("#mn-err");s&&a==="madd"&&(s.innerHTML=`<div class="err">${l(o.message)}</div>`)}}async function Ga(e){let t=e.target;t.dataset.sel&&(t.checked?b.sel.add(t.dataset.sel):b.sel.delete(t.dataset.sel),L()),t.dataset.assign&&(await x("/admin/assign","POST",{id:t.dataset.assign,mentorId:t.value}).catch(a=>k(a.message)),k("Mentor updated"),await X())}function Ya(e){if(e.target.id==="a-q"){b.q=e.target.value;let t=e.target.selectionStart;L();let a=f("#a-q");a.focus(),a.setSelectionRange(t,t)}}async function Ha(e){let t=e.target.closest("[data-m]");if(!(!t||!b))try{t.dataset.m==="spin"&&await x(`/admin/students/${t.dataset.x}/pin`,"POST",{pin:f("#np").value}),t.dataset.m==="mpin"&&await x(`/admin/mentors/${t.dataset.x}`,"POST",{pin:f("#np").value}),j(),k("PIN updated")}catch(a){k(a.message)}}var me=document.getElementById("app");async function Ka(){let e=R.get("atlas.tok"),t=R.get("atlas.role");if(e&&t)try{if(t==="student")return await At(me);if(t==="mentor")return await Lt(me);if(t==="admin")return await Ht(me)}catch{R.set("atlas.tok",null),R.set("atlas.role",null)}Kt()}var Xa={profile:{stage:"prefinal",target:"iim1",catYear:2028,pillars:{"P-AC":{self:4,ev:["a","b","c","d","e","f"]},"P-WK":{self:2,ev:["a"]},"P-LD":{self:3,ev:["a","b","c","d"]},"P-AW":{self:3,ev:["a","b","c"]},"P-SK":{self:4,ev:["a","b","c","d","g"]}}}};async function Kt(){let e={program:"CAT Profile Atlas",welcome:"",years:[]};try{e=await x("/public")}catch{}let t=V(Xa,{}),a=location.hash.replace("#","")||"start";me.innerHTML=`<header class="top"><div class="wrap"><a class="logo" href="#"><span class="mk">${ie()}</span><span class="t">Profile Atlas</span></a><span class="grow"></span><span class="small muted">${l(e.program)}</span></div></header>\n  <main><div class="wrap"><section class="hero grid g2" style="align-items:center">\n    <div><div class="chip y mono" style="margin-bottom:14px">MBA PROFILE BUILDING${e.years?.length?` \\xB7 CAT${String(e.years[0]).slice(-2)} \\u2192 CAT${String(e.years[e.years.length-1]).slice(-2)}`:""}</div>\n      <h1>Chart your path to the <span class="hl">IIMs</span>.</h1>\n      <p class="lead">${l(e.welcome||"Map where you stand, see what is missing, and work through it with your mentor.")}</p>\n      <div class="row" style="margin-top:14px"><span class="chip soft">\\u{1F5FA} Live profile map</span><span class="chip soft">\\u{1F3AF} Step-by-step quests</span><span class="chip soft">\\u{1F517} Where to do it</span><span class="chip soft">\\u{1F91D} Mentor on cue</span></div></div>\n    <div class="card" style="transform:rotate(1.2deg)"><div class="row between"><b class="mono small">SAMPLE MAP</b><span class="chip c">2 territories in fog</span></div>${te(t,{pin:"P-WK"})}</div></section>\n    <section class="roles">\n      <div class="card role tint-v"><div class="big">\\u{1F9ED}</div><h2>I\'m a student</h2><p class="muted small">Map your profile, get your plan, book your mentor.</p>\n        <div class="tabs" style="margin:10px 0"><button class="${a!=="login"?"on":""}" data-mode="start">New here</button><button class="${a==="login"?"on":""}" data-mode="login">Log in</button></div>\n        ${a==="login"?\'<form id="f-sl" class="stack"><input class="inp" name="email" type="email" placeholder="Email" required autocomplete="email"><input class="inp" name="pin" type="password" placeholder="PIN" required autocomplete="current-password"><div class="msg"></div><button class="btn pri lg">Open my atlas \\u2192</button></form>\':`<form id="f-reg" class="stack"><input class="inp" name="code" placeholder="Cohort code (from your programme)" required style="text-transform:uppercase"><select class="inp" name="catYear" required><option value="">Which CAT are you preparing for?</option>${(e.years||[]).map(n=>`<option value="${n}">CAT ${n} \\u2014 ${H(n)}</option>`).join("")}</select><input class="inp" name="name" placeholder="Full name" required autocomplete="name"><input class="inp" name="email" type="email" placeholder="Email" required autocomplete="email"><input class="inp" name="pin" type="password" placeholder="Choose a PIN (4+ characters)" required minlength="4" autocomplete="new-password"><div class="msg"></div><button class="btn pri lg">Start mapping \\u2192</button></form>`}</div>\n      <div class="card role tint-y"><div class="big">\\u{1F91D}</div><h2>I\'m a mentor</h2><p class="muted small">Your alert queue, students\' maps and your session calendar.</p>\n        <form id="f-ml" class="stack" style="margin-top:12px"><input class="inp" name="email" type="email" placeholder="Mentor email" required><input class="inp" name="pin" type="password" placeholder="PIN" required><div class="msg"></div><button class="btn sun lg">Open console \\u2192</button></form></div>\n      <div class="card role tint-m"><div class="big">\\u{1F6E0}</div><h2>Programme admin</h2><p class="muted small">Cohort heatmap, mentors, resource library, settings.</p>\n        <form id="f-al" class="stack" style="margin-top:12px"><input class="inp" name="password" type="password" placeholder="Admin password" required><div class="msg"></div><button class="btn go lg">Admin \\u2192</button></form></div>\n    </section>\n    <section class="grid g4" style="margin-top:34px">${[["1","\\u{1F5FA}","Map","Seven territories plus your weekly routine \\u2014 tap what is true, rate yourself, add proof."],["2","\\u{1F50D}","See the gaps","A live atlas shows strong ground, gaps and fog \\u2014 and a countdown road to your CAT."],["3","\\u{1F3AF}","Do the quests","Ranked actions with step-by-step guides and links to courses, case comps and internships."],["4","\\u{1F91D}","Mentor on cue","Phase changes, blockers, overload or low mood trigger a nudge to book a slot."]].map(([n,o,s,r])=>`<div class="card"><div class="row between"><span style="font-size:30px">${o}</span><span class="mono faint">0${n}</span></div><h3 style="margin-top:6px">${s}</h3><p class="small muted">${r}</p></div>`).join("")}</section>\n  </div></main><div class="footer">${l(e.program)} \\xB7 Profile Atlas${e.prep?` \\xB7 CAT sectionals & analysis on <a href="${l(e.prep.url)}" target="_blank" rel="noopener">${l(e.prep.name)}</a>`:""}</div>`,me.querySelectorAll("[data-mode]").forEach(n=>n.onclick=()=>{location.hash=n.dataset.mode==="login"?"login":"",Kt()});let i=(n,o)=>{let s=f("#"+n);s&&(s.onsubmit=async r=>{r.preventDefault();let m=Object.fromEntries(new FormData(s)),c=s.querySelector(".msg"),h=s.querySelector("button");h.disabled=!0;try{let d=await o(m);R.set("atlas.tok",d.token),R.set("atlas.role",d.role),location.hash="",location.reload()}catch(d){c.innerHTML=`<div class="err">${l(d.message)}</div>`,h.disabled=!1}})};i("f-reg",n=>x("/register","POST",n)),i("f-sl",n=>x("/login","POST",{...n,role:"student"})),i("f-ml",n=>x("/login","POST",{...n,role:"mentor"})),i("f-al",n=>x("/login","POST",{...n,role:"admin"}))}Ka().catch(e=>{me.innerHTML=`<div class="wrap"><div class="err" style="margin-top:40px">Could not load: ${l(e.message)}</div></div>`});})();\n<\/script>\n</body>\n</html>\n';

// src/worker.js
var worker_default = {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/")) {
      const stub = env.ATLAS.get(env.ATLAS.idFromName("main"));
      return stub.fetch(req);
    }
    if (url.pathname === "/favicon.ico") return new Response(null, { status: 204 });
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" } });
  }
};
var J = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { "content-type": "application/json" } });
var E = (m, s = 400) => J({ error: m }, s);
var rid = (n = 10) => {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return [...a].map((b) => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");
};
async function hash(s) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("atlas:" + s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
var prepOf = (c) => c.prepUrl ? { name: c.prepName || "CAT practice", url: c.prepUrl, signin: c.prepSignin || "" } : null;
var clean = (s, n = 200) => String(s ?? "").trim().slice(0, n);
var emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
var DEFAULT_CFG = { program: "CAT Profile Atlas", cohortCode: "ATLAS", mentorsSeeAll: true, prepName: "sectionaltest", prepUrl: "https://sectionaltest.com/cat", prepSignin: "https://app.sectionaltest.com/signin", welcome: "Map where you stand, see what is missing, and work through it with your mentor." };
var AtlasDB = class extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.env = env;
    this.s = ctx.storage;
  }
  async cfg() {
    const c = { ...DEFAULT_CFG, ...await this.s.get("config") || {} };
    if (!Array.isArray(c.years) || !c.years.length) c.years = defaultYears();
    delete c.catDate;
    return c;
  }
  async resources() {
    return await this.s.get("resources") || resources_default;
  }
  async students() {
    return [...(await this.s.list({ prefix: "student:" })).values()];
  }
  async mentors() {
    return [...(await this.s.list({ prefix: "mentor:" })).values()];
  }
  async sessions() {
    return await this.s.get("sessions") || [];
  }
  async putSessions(x) {
    await this.s.put("sessions", x);
  }
  pub(m) {
    return m && { id: m.id, name: m.name, email: m.email, bio: m.bio || "", meet: m.meet || "" };
  }
  async auth(req) {
    const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!t) return null;
    const sess = await this.s.get("tok:" + t);
    return sess || null;
  }
  async fetch(req) {
    try {
      return await this.route(req);
    } catch (e) {
      return E("Server error: " + e.message, 500);
    }
  }
  async route(req) {
    const url = new URL(req.url), p = url.pathname.replace(/^\/api/, ""), m = req.method;
    const body = m === "GET" || m === "DELETE" ? {} : await req.json().catch(() => ({}));
    const now = Date.now();
    if (p === "/public" && m === "GET") {
      const c = await this.cfg();
      return J({ program: c.program, welcome: c.welcome, years: c.years, prep: prepOf(c) });
    }
    if (p === "/register" && m === "POST") {
      const c = await this.cfg();
      if (clean(body.code).toUpperCase() !== String(c.cohortCode).toUpperCase()) return E("That cohort code is not valid. Ask your programme team for it.");
      const email = clean(body.email, 120).toLowerCase(), name = clean(body.name, 80), pin = clean(body.pin, 20);
      if (!name) return E("Please enter your name.");
      if (!emailOk(email)) return E("Please enter a valid email.");
      if (pin.length < 4) return E("PIN must be at least 4 characters.");
      const catYear = +body.catYear;
      if (!c.years.includes(catYear)) return E("Pick the CAT year you are preparing for.");
      if (await this.s.get("email:s:" + email)) return E("An account with this email exists \u2014 log in instead.");
      const id = "s_" + rid(8);
      const st = { id, name, email, phone: clean(body.phone, 20), pinH: await hash(pin), createdAt: now, profile: { catYear }, plan: [], checkins: [], help: [], notes: [], ack: {}, nudges: [] };
      const ms = await this.mentors();
      if (ms.length) {
        const all = await this.students();
        const load = Object.fromEntries(ms.map((x) => [x.id, 0]));
        all.forEach((x) => {
          if (load[x.mentorId] != null) load[x.mentorId]++;
        });
        st.mentorId = ms.sort((a, b) => load[a.id] - load[b.id])[0].id;
      }
      await this.s.put("student:" + id, st);
      await this.s.put("email:s:" + email, id);
      return J({ token: await this.issue("student", id), role: "student" });
    }
    if (p === "/login" && m === "POST") {
      const role = body.role;
      if (role === "admin") {
        const pw = this.env.ADMIN_PASSWORD || "atlas-admin";
        if (clean(body.password, 100) !== pw) return E("Wrong admin password.", 401);
        return J({ token: await this.issue("admin", "admin"), role });
      }
      if (role !== "student" && role !== "mentor") return E("Bad role");
      const email = clean(body.email, 120).toLowerCase();
      const id = await this.s.get(`email:${role[0]}:` + email);
      const rec = id && await this.s.get(`${role}:` + id);
      if (!rec || rec.pinH !== await hash(clean(body.pin, 20))) return E("Email or PIN is incorrect.", 401);
      return J({ token: await this.issue(role, id), role });
    }
    const who = await this.auth(req);
    if (!who) return E("Please log in again.", 401);
    if (p === "/logout") {
      await this.s.delete("tok:" + (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, ""));
      return J({ ok: 1 });
    }
    if (who.role === "student" && p.startsWith("/me")) return this.studentApi(who.id, p, m, body, now);
    if (who.role === "mentor" && p.startsWith("/mentor")) return this.mentorApi(who.id, p, m, body, now);
    if (who.role === "admin" && p.startsWith("/admin")) return this.adminApi(p, m, body, now, url);
    return E("Not found", 404);
  }
  async issue(role, id) {
    const t = rid(24);
    await this.s.put("tok:" + t, { role, id, t: Date.now() });
    return t;
  }
  // ======================================================== STUDENT
  async studentApi(id, p, m, b, now) {
    const key = "student:" + id;
    const st = await this.s.get(key);
    if (!st) return E("Account not found", 401);
    const save = () => this.s.put(key, st);
    const view = async () => {
      const c = await this.cfg();
      const ses = await this.sessions();
      const mentors = await this.mentors();
      const mentor = this.pub(mentors.find((x) => x.id === st.mentorId));
      const pool = st.mentorId ? [st.mentorId] : mentors.map((x) => x.id);
      const open = ses.filter((s) => pool.includes(s.mentorId) && !s.bookedBy && s.status === "open" && Date.parse(s.start) > now).sort((a, b2) => a.start.localeCompare(b2.start));
      const mine = ses.filter((s) => s.bookedBy === id).sort((a, b2) => b2.start.localeCompare(a.start));
      const mName = Object.fromEntries(mentors.map((x) => [x.id, x.name]));
      const { pinH, ...safe } = st;
      safe.notes = (st.notes || []).filter((n) => n.shared);
      return J({ now, me: safe, cfg: { program: c.program, welcome: c.welcome, years: c.years, prep: prepOf(c) }, mentor, resources: await this.resources(), open: open.map((s) => ({ ...s, mentorName: mName[s.mentorId] })), mine: mine.map((s) => ({ ...s, mentorName: mName[s.mentorId] })), alerts: computeAlerts(st, c, now, ses) });
    };
    if (p === "/me" && m === "GET") return view();
    if (p === "/me/data" && m === "PUT") {
      if (b.profile) {
        st.profile = { ...b.profile, updatedAt: now };
      }
      if (Array.isArray(b.plan)) {
        const incoming = b.plan.slice(0, 60).filter((x) => AMAP[x.aid]);
        const base = +b.base || 0;
        for (const x of st.plan || []) if (x.addedAt > base && !incoming.find((y) => y.aid === x.aid)) incoming.push(x);
        st.plan = incoming;
      }
      if (Array.isArray(b.checkins)) st.checkins = b.checkins.slice(-60);
      if (b.name) st.name = clean(b.name, 80);
      if (b.phone != null) st.phone = clean(b.phone, 20);
      if (JSON.stringify(st).length > 9e5) return E("Profile too large");
      await save();
      return view();
    }
    if (p === "/me/help" && m === "POST") {
      const text = clean(b.text, 600);
      if (!text) return E("Write a line about what you need.");
      st.help = st.help || [];
      st.help.push({ id: rid(6), t: now, text });
      await save();
      return view();
    }
    if (p === "/me/nudge-seen" && m === "POST") {
      (st.nudges || []).forEach((n) => n.seen = true);
      await save();
      return view();
    }
    const bk = p.match(/^\/me\/book\/([\w-]+)$/);
    if (bk && m === "POST") {
      const ses = await this.sessions();
      const s = ses.find((x) => x.id === bk[1]);
      if (!s || s.bookedBy || s.status !== "open") return E("That slot was just taken \u2014 pick another.");
      if (st.mentorId && s.mentorId !== st.mentorId) return E("That slot belongs to another mentor.");
      if (ses.filter((x) => x.bookedBy === id && x.status === "booked" && Date.parse(x.start) > now).length >= 3) return E("You already have 3 upcoming sessions.");
      s.bookedBy = id;
      s.studentName = st.name;
      s.status = "booked";
      s.topic = clean(b.topic, 300);
      s.alertKey = clean(b.alertKey, 120);
      s.bookedAt = now;
      if (s.alertKey) {
        st.ack = st.ack || {};
        st.ack[s.alertKey] = now;
      }
      await this.putSessions(ses);
      await save();
      return view();
    }
    const cx = p.match(/^\/me\/cancel\/([\w-]+)$/);
    if (cx && m === "POST") {
      const ses = await this.sessions();
      const s = ses.find((x) => x.id === cx[1] && x.bookedBy === id);
      if (!s || s.status !== "booked") return E("Cannot cancel that session.");
      if (s.alertKey && st.ack) delete st.ack[s.alertKey];
      Object.assign(s, { bookedBy: null, studentName: null, status: "open", topic: "", alertKey: "" });
      await this.putSessions(ses);
      await save();
      return view();
    }
    if (p === "/me/pin" && m === "POST") {
      if (clean(b.pin).length < 4) return E("PIN must be at least 4 characters.");
      st.pinH = await hash(clean(b.pin, 20));
      await save();
      return J({ ok: 1 });
    }
    return E("Not found", 404);
  }
  // ======================================================== MENTOR
  async mentorApi(mid, p, m, b, now) {
    const me = await this.s.get("mentor:" + mid);
    if (!me) return E("Account not found", 401);
    const c = await this.cfg();
    const mine = (st) => st.mentorId === mid || c.mentorsSeeAll && !st.mentorId;
    const canSee = (st) => mine(st) || c.mentorsSeeAll;
    if (p === "/mentor" && m === "GET") {
      const ses = await this.sessions();
      const all = (await this.students()).filter(canSee);
      const mentors = await this.mentors();
      const mName = Object.fromEntries(mentors.map((x) => [x.id, x.name]));
      return J({
        me: this.pub(me),
        cfg: { program: c.program, years: c.years, mentorsSeeAll: c.mentorsSeeAll },
        students: all.map((st) => ({ ...summary(st, c, now, ses), mine: st.mentorId === mid, mentorName: mName[st.mentorId] || null })),
        sessions: ses.filter((s) => s.mentorId === mid).sort((a, b2) => a.start.localeCompare(b2.start))
      });
    }
    const sm = p.match(/^\/mentor\/student\/(s_\w+)(\/[\w-]+)?$/);
    if (sm) {
      const key = "student:" + sm[1];
      const st = await this.s.get(key);
      if (!st || !canSee(st)) return E("Student not visible to you", 404);
      const act = sm[2] || "";
      const ses = await this.sessions();
      const out = async () => {
        const { pinH, ...safe } = st;
        return J({ st: safe, alerts: computeAlerts(st, c, now, ses), sessions: ses.filter((s) => s.bookedBy === st.id).sort((a, b2) => b2.start.localeCompare(a.start)), cfg: { years: c.years } });
      };
      if (!act && m === "GET") return out();
      if (act === "/note" && m === "POST") {
        const text = clean(b.text, 2e3);
        if (!text) return E("Empty note");
        st.notes = st.notes || [];
        st.notes.push({ id: rid(6), t: now, by: me.name, text, shared: !!b.shared });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/ack" && m === "POST") {
        st.ack = st.ack || {};
        st.ack[clean(b.key, 160)] = now;
        if (String(b.key).startsWith("help:")) (st.help || []).forEach((h) => {
          if ("help:" + h.id === b.key) h.closed = now;
        });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/nudge" && m === "POST") {
        const text = clean(b.text, 500);
        if (!text) return E("Write the message");
        st.nudges = st.nudges || [];
        st.nudges.push({ id: rid(6), t: now, by: me.name, text, book: !!b.book });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/assign" && m === "POST") {
        const a = AMAP[b.aid];
        if (!a) return E("Unknown action");
        st.plan = st.plan || [];
        if (!st.plan.find((x) => x.aid === a.id)) st.plan.push({ aid: a.id, status: "todo", steps: {}, log: [], answers: {}, addedAt: now, by: me.name, due: clean(b.due, 10), mentorNote: clean(b.note, 400) });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/claim" && m === "POST") {
        st.mentorId = mid;
        await this.s.put(key, st);
        return out();
      }
      return E("Not found", 404);
    }
    if (p === "/mentor/slots" && m === "POST") {
      const ses = await this.sessions();
      const start = Date.parse(b.start);
      if (isNaN(start)) return E("Pick a valid date & time");
      const n = Math.max(1, Math.min(12, +b.count || 1)), gap = Math.max(15, +b.dur || 30) + Math.max(0, +b.breakMin || 0);
      const weeks = Math.max(1, Math.min(8, +b.weeks || 1));
      for (let w = 0; w < weeks; w++) for (let i = 0; i < n; i++) {
        const t = start + w * 7 * 864e5 + i * gap * 6e4;
        ses.push({ id: "x" + rid(8), mentorId: mid, mentorName: me.name, start: new Date(t).toISOString(), dur: Math.max(15, +b.dur || 30), mode: clean(b.mode, 20) || "video", link: clean(b.link || me.meet, 300), status: "open", bookedBy: null, createdAt: now });
      }
      await this.putSessions(ses);
      return J({ ok: 1 });
    }
    const sl = p.match(/^\/mentor\/slots\/([\w-]+)(\/\w+)?$/);
    if (sl) {
      const ses = await this.sessions();
      const s = ses.find((x) => x.id === sl[1] && x.mentorId === mid);
      if (!s) return E("Slot not found", 404);
      if (m === "DELETE") {
        if (s.bookedBy) {
          s.status = "cancelled";
          s.cancelNote = "Cancelled by mentor";
          const st = await this.s.get("student:" + s.bookedBy);
          if (st) {
            st.nudges = st.nudges || [];
            st.nudges.push({ id: rid(6), t: now, by: me.name, text: `Your session on ${new Date(s.start).toUTCString().slice(0, 22)} UTC was cancelled \u2014 please pick another slot.`, book: true });
            if (s.alertKey && st.ack) delete st.ack[s.alertKey];
            await this.s.put("student:" + st.id, st);
          }
        } else ses.splice(ses.indexOf(s), 1);
        await this.putSessions(ses);
        return J({ ok: 1 });
      }
      if (sl[2] === "/done" && m === "POST") {
        s.status = b.noshow ? "noshow" : "done";
        s.summary = clean(b.summary, 2e3);
        s.doneAt = now;
        if (s.bookedBy && s.summary) {
          const st = await this.s.get("student:" + s.bookedBy);
          if (st) {
            st.notes = st.notes || [];
            st.notes.push({ id: rid(6), t: now, by: me.name, text: "Session notes: " + s.summary, shared: true });
            await this.s.put("student:" + st.id, st);
          }
        }
        await this.putSessions(ses);
        return J({ ok: 1 });
      }
      if (sl[2] === "/link" && m === "POST") {
        s.link = clean(b.link, 300);
        await this.putSessions(ses);
        return J({ ok: 1 });
      }
    }
    if (p === "/mentor/profile" && m === "POST") {
      me.bio = clean(b.bio, 400);
      me.meet = clean(b.meet, 300);
      if (b.pin) {
        if (clean(b.pin).length < 4) return E("PIN too short");
        me.pinH = await hash(clean(b.pin, 20));
      }
      await this.s.put("mentor:" + mid, me);
      return J({ ok: 1 });
    }
    return E("Not found", 404);
  }
  // ======================================================== ADMIN
  async adminApi(p, m, b, now, url) {
    const c = await this.cfg();
    if (p === "/admin" && m === "GET") {
      const ses = await this.sessions();
      const mentors = await this.mentors();
      const students = (await this.students()).map((st) => summary(st, c, now, ses));
      return J({ cfg: c, mentors: mentors.map((x) => ({ ...this.pub(x), n: students.filter((s) => s.mentorId === x.id).length, sessions: ses.filter((s) => s.mentorId === x.id && s.status === "done").length, upcoming: ses.filter((s) => s.mentorId === x.id && s.status === "booked" && Date.parse(s.start) > now).length })), students, resources: await this.resources(), sessions: ses.length, defaultPw: !this.env.ADMIN_PASSWORD });
    }
    if (p === "/admin/config" && m === "PUT") {
      const n = { ...c };
      if (b.program != null) n.program = clean(b.program, 80) || c.program;
      if (b.cohortCode != null) n.cohortCode = clean(b.cohortCode, 30).toUpperCase() || c.cohortCode;
      if (b.years != null) {
        const ys = String(b.years).split(/[,\s]+/).map(Number).filter((y) => y >= 2020 && y < 2100);
        if (ys.length) n.years = [...new Set(ys)].sort();
      }
      if (b.welcome != null) n.welcome = clean(b.welcome, 300);
      if (b.mentorsSeeAll != null) n.mentorsSeeAll = !!b.mentorsSeeAll;
      for (const k of ["prepName", "prepUrl", "prepSignin"]) if (b[k] != null) {
        const v = clean(b[k], 200);
        n[k] = k === "prepName" || !v || /^https?:\/\//.test(v) ? v : c[k];
      }
      await this.s.put("config", n);
      return J({ ok: 1 });
    }
    if (p === "/admin/mentors" && m === "POST") {
      const email = clean(b.email, 120).toLowerCase(), name = clean(b.name, 80), pin = clean(b.pin, 20);
      if (!name || !emailOk(email) || pin.length < 4) return E("Name, valid email and a PIN of 4+ characters are needed.");
      if (await this.s.get("email:m:" + email)) return E("A mentor with this email exists.");
      const id = "m_" + rid(8);
      await this.s.put("mentor:" + id, { id, name, email, pinH: await hash(pin), bio: clean(b.bio, 400), meet: clean(b.meet, 300), createdAt: now });
      await this.s.put("email:m:" + email, id);
      return J({ ok: 1 });
    }
    const md = p.match(/^\/admin\/mentors\/(m_\w+)$/);
    if (md && m === "DELETE") {
      const x = await this.s.get("mentor:" + md[1]);
      if (!x) return E("Not found", 404);
      await this.s.delete("mentor:" + x.id);
      await this.s.delete("email:m:" + x.email);
      for (const st of await this.students()) if (st.mentorId === x.id) {
        st.mentorId = null;
        await this.s.put("student:" + st.id, st);
      }
      return J({ ok: 1 });
    }
    if (md && m === "POST") {
      const x = await this.s.get("mentor:" + md[1]);
      if (!x) return E("Not found", 404);
      if (b.pin) x.pinH = await hash(clean(b.pin, 20));
      await this.s.put("mentor:" + x.id, x);
      return J({ ok: 1 });
    }
    if (p === "/admin/assign" && m === "POST") {
      const ids = Array.isArray(b.ids) ? b.ids : [b.id];
      for (const id of ids) {
        const st = await this.s.get("student:" + id);
        if (st) {
          st.mentorId = b.mentorId || null;
          await this.s.put("student:" + id, st);
        }
      }
      return J({ ok: 1 });
    }
    const sd = p.match(/^\/admin\/students\/(s_\w+)(\/pin)?$/);
    if (sd) {
      const st = await this.s.get("student:" + sd[1]);
      if (!st) return E("Not found", 404);
      if (m === "DELETE") {
        await this.s.delete("student:" + st.id);
        await this.s.delete("email:s:" + st.email);
        return J({ ok: 1 });
      }
      if (sd[2] && m === "POST") {
        if (clean(b.pin).length < 4) return E("PIN too short");
        st.pinH = await hash(clean(b.pin, 20));
        await this.s.put("student:" + st.id, st);
        return J({ ok: 1 });
      }
      if (m === "GET") {
        const { pinH, ...safe } = st;
        return J({ st: safe });
      }
    }
    if (p === "/admin/resources" && m === "PUT") {
      if (!Array.isArray(b.resources)) return E("Bad list");
      const list = b.resources.slice(0, 400).map((r) => ({ id: clean(r.id, 40) || "r-" + rid(5), cat: clean(r.cat, 40) || "Other", name: clean(r.name, 100), url: clean(r.url, 400), desc: clean(r.desc, 300), free: !!r.free, pillars: (r.pillars || []).slice(0, 10), actions: (r.actions || []).slice(0, 30) })).filter((r) => r.name && /^https?:\/\//.test(r.url));
      await this.s.put("resources", list);
      return J({ ok: 1, n: list.length });
    }
    if (p === "/admin/resources/reset" && m === "POST") {
      await this.s.delete("resources");
      return J({ ok: 1 });
    }
    if (p === "/admin/export" && m === "GET") {
      const ses = await this.sessions();
      const mentors = await this.mentors();
      const mName = Object.fromEntries(mentors.map((x) => [x.id, x.name]));
      const rows = (await this.students()).map((st) => summary(st, c, now, ses));
      const pids = PILLARS.map((p2) => p2.id);
      const head = ["name", "email", "phone", "batch", "days_to_cat", "phase", "mentor", "stage", "target", "readiness", ...pids, "profile_hrs_wk", "committed_hrs_wk", "cat_study_hrs_wk", "quests", "quests_done", "open_alerts", "last_active"];
      const q = (v) => {
        const s = v == null ? "" : String(v);
        return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      };
      const lines = [head.join(",")].concat(rows.map((r) => [r.name, r.email, r.phone, r.catYear ? catLabel(r.catYear) : "", r.days, r.phase, mName[r.mentorId] || "", r.stage, r.target, r.overall, ...pids.map((k) => r.pillars[k]), r.capacity, r.load, r.catWeek, r.planN, r.doneN, r.alerts.length, new Date(r.lastActive).toISOString().slice(0, 10)].map(q).join(",")));
      return new Response(lines.join("\n"), { headers: { "content-type": "text/csv", "content-disposition": 'attachment; filename="profile-atlas.csv"' } });
    }
    return E("Not found", 404);
  }
};
export {
  AtlasDB,
  worker_default as default
};
