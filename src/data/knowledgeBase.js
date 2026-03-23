const entries = [
  {
    keywords: ["who", "name", "zinal", "introduce", "yourself", "about you"],
    response:
      "Hi! I'm Zinal Desai, a Project Manager and Technical Consultant based in Dallas, TX. I bring structure, clarity, and momentum to complex work by aligning people, processes, and technology.",
  },
  {
    keywords: ["role", "job", "title", "position", "what do you do", "pm", "project manager"],
    response:
      "Zinal is a Project Manager with a technical background in Software Engineering and Business Analytics. She specializes in ServiceNow platform implementations and Agile delivery.",
  },
  {
    keywords: ["location", "where", "based", "live", "city", "dallas"],
    response: "Zinal is based in Dallas, TX.",
  },
  {
    keywords: ["experience", "work", "career", "history", "past roles"],
    response:
      "Zinal has worked at SB Events Co. as a Project Manager (delivering 100+ events), at Capital One through their Developer Academy supporting Agile delivery, and as a volunteer instructor at Code2College teaching Python and SQL.",
  },
  {
    keywords: ["sb events", "events", "event management"],
    response:
      "At SB Events Co., Zinal managed 100+ concurrent large-scale, multicultural events. She coordinated 20+ vendors per event, built milestone tracking systems, and reduced operational conflicts by 25%.",
  },
  {
    keywords: ["capital one", "developer academy", "agile delivery"],
    response:
      "At Capital One's Developer Academy, Zinal supported Agile delivery for enterprise applications — handling sprint planning, backlog refinement, and cross-team coordination within engineering teams.",
  },
  {
    keywords: ["code2college", "teaching", "volunteer", "mentor", "instructor"],
    response:
      "At Code2College, Zinal volunteered as an instructor teaching Python and SQL through project-based learning, helping students break down projects into manageable tasks and reinforcing milestone planning.",
  },
  {
    keywords: ["skill", "skills", "strengths", "good at", "capabilities"],
    response:
      "Zinal's core skills include Agile/Scrum methodologies, end-to-end project lifecycle management, stakeholder & vendor management, risk mitigation, SDLC coordination, and change management.",
  },
  {
    keywords: ["tool", "tools", "software", "platform", "tech stack", "technologies"],
    response:
      "Zinal works with Jira, Asana, ServiceNow (ITSM/IRM/Flow Designer), Microsoft Office, Git, SQL, Python, and JavaScript.",
  },
  {
    keywords: ["servicenow", "itsm", "irm", "flow designer", "csa", "cad"],
    response:
      "Zinal specializes in ServiceNow platform implementations with hands-on experience in ITSM, IRM, and Flow Designer. She holds both the Certified System Administrator (CSA) and Certified Application Developer (CAD) certifications.",
  },
  {
    keywords: ["jira", "asana", "project tracking"],
    response:
      "Zinal uses Jira for sprint tracking, backlog management, and reporting, and Asana for project planning, milestones, and task coordination. She's also a certified Asana Workflow Specialist.",
  },
  {
    keywords: ["education", "degree", "school", "university", "college", "study"],
    response:
      "Zinal holds a BS in Cognitive Science (Psychology/HCI) from UT Dallas (2018-2022), completed the Path2Tech Full Stack Developer Program at NPower, the RiseUp program at ServiceNow, and is currently pursuing an MBA with a Business Analytics concentration at Texas A&M - Corpus Christi (2026-2027).",
  },
  {
    keywords: ["mba", "masters", "texas a&m", "business analytics"],
    response:
      "Zinal is pursuing an MBA with a concentration in Business Analytics at Texas A&M - Corpus Christi (Jan 2026 – May 2027).",
  },
  {
    keywords: ["cognitive science", "hci", "human-computer", "psychology", "utd", "ut dallas"],
    response:
      "Zinal earned a BS in Cognitive Science with a concentration in Psychology/Human-Computer Interactions from The University of Texas at Dallas (2018–2022).",
  },
  {
    keywords: ["certification", "certifications", "certified", "credential"],
    response:
      "Zinal holds: ServiceNow CSA, ServiceNow CAD, ServiceNow Flow Designer, Asana Workflow Specialist, and freeCodeCamp Responsive Web Design certifications.",
  },
  {
    keywords: ["path2tech", "npower", "full stack", "bootcamp", "program"],
    response:
      "Zinal completed the Path2Tech Full Stack Developer Program at NPower (Oct 2024 – Apr 2025), focusing on team-based app development using Agile planning and collaboration.",
  },
  {
    keywords: ["riseup", "servicenow training", "workflow implementation"],
    response:
      "Zinal completed ServiceNow's RiseUp program (Sept–Dec 2025), focusing on Agile project delivery and workflow implementation.",
  },
  {
    keywords: ["contact", "email", "reach", "connect", "linkedin", "github"],
    response:
      "You can reach Zinal via email at desaizinal15@gmail.com, connect on LinkedIn at linkedin.com/in/zinaldesai, or check out her GitHub at github.com/zinaldesai.",
  },
  {
    keywords: ["hobby", "hobbies", "fun", "free time", "outside work", "interests", "personal"],
    response:
      "Outside of work, Zinal enjoys baking, cooking new recipes, playing pickleball, and spending time with friends and family.",
  },
  {
    keywords: ["agile", "scrum", "sprint", "retrospective", "ceremony"],
    response:
      "Zinal is experienced in Agile & Scrum methodologies including sprint planning, backlog refinement, retrospectives, and all Agile ceremonies. She applies these across both software delivery and operational projects.",
  },
  {
    keywords: ["resume", "cv", "download"],
    response:
      "You can view or download Zinal's resume by clicking the 'View Resume' button on the home page, or the Resume link in the navigation.",
  },
  {
    keywords: ["stakeholder", "vendor", "management", "communication"],
    response:
      "Zinal excels at cross-functional collaboration, stakeholder alignment, vendor coordination, executive-level reporting, and issue escalation & resolution. At SB Events, she coordinated 20+ vendors per event.",
  },
  {
    keywords: ["impact", "achievement", "accomplish", "result"],
    response:
      "Key achievements: delivered 100+ projects on time at SB Events, reduced operational conflicts by 25%, improved delivery visibility at Capital One, and mentored students in structured project delivery at Code2College.",
  },
  {
    keywords: ["approach", "methodology", "how", "process", "deliver"],
    response:
      "Zinal's delivery process: 1) Define scope & success metrics, 2) Align stakeholders & vendors, 3) Plan milestones & dependencies, 4) Track progress & risks, 5) Communicate & adapt, 6) Deliver outcomes & improve processes.",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "sup", "what's up"],
    response:
      "Hey there! I'm Zinal's AI assistant. Ask me anything about her experience, skills, education, or how to get in touch!",
  },
]

const FALLBACK =
  "I don't have specific info on that, but you can reach Zinal directly at desaizinal15@gmail.com or connect on LinkedIn at linkedin.com/in/zinaldesai."

export function getResponse(userMessage) {
  const input = userMessage.toLowerCase().trim()
  if (!input) return FALLBACK

  let bestMatch = null
  let bestScore = 0

  for (const entry of entries) {
    let score = 0
    for (const keyword of entry.keywords) {
      if (input.includes(keyword)) {
        score += keyword.length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = entry
    }
  }

  return bestScore > 0 ? bestMatch.response : FALLBACK
}
