// config/questionBank.js — Static Question Bank for All Modes
const QUESTION_BANK = {
  canada: [
    {
      "id": "ETHICS_01",
      "category": "Ethics & Integrity",
      "difficulty": "easy",
      "text": "You are working on a group academic project. A close friend on your team shares that they copied parts of their section from an online source without citation. The project is due in two hours, and reporting this may delay submission for the entire group. What would you do?",
      "followUpHints": [
        "Would your decision change if your own grade was at risk?",
        "How do you balance loyalty to a friend with academic integrity?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge competing values such as loyalty, fairness, and integrity.",
          "Recognize that there is no easy or perfect answer."
        ],
        "corePoints": [
          "Gather facts before acting.",
          "Encourage the friend to correct the issue independently.",
          "Consider impact on other students and institutional trust.",
          "Escalate appropriately if the issue cannot be resolved."
        ],
        "conclusion": [
          "Integrity should remain central even under pressure.",
          "Difficult conversations can preserve both accountability and relationships."
        ]
      }
    },
    {
      "id": "ETHICS_02",
      "category": "Ethics & Integrity",
      "difficulty": "medium",
      "text": "A patient privately tells you that they are not following their prescribed treatment plan, but asks you not to tell the healthcare team. They appear competent and understand the risks. How would you approach this situation?",
      "followUpHints": [
        "Does patient autonomy outweigh your duty to the care team?",
        "Would your response change if others might be affected by their decision?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the tension between autonomy, confidentiality, and safety.",
          "Acknowledge the complexity of respecting patient choice."
        ],
        "corePoints": [
          "Explore the patient's reasons and concerns.",
          "Assess understanding and decision-making capacity.",
          "Clarify limits of confidentiality where safety may be affected.",
          "Seek guidance if risk extends beyond the individual."
        ],
        "conclusion": [
          "Trust and safety must both be respected.",
          "Ethical decisions require dialogue rather than assumptions."
        ]
      }
    },
    {
      "id": "ETHICS_03",
      "category": "Ethics & Integrity",
      "difficulty": "hard",
      "text": "You discover that a senior colleague has altered a research dataset to make results appear more statistically significant. Reporting them could damage your future career opportunities. What would you do?",
      "followUpHints": [
        "How would power dynamics influence your decision?",
        "What if you had only indirect evidence?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the seriousness of scientific misconduct.",
          "Acknowledge the personal and professional risks involved."
        ],
        "corePoints": [
          "Verify facts and avoid assumptions.",
          "Document concerns objectively.",
          "Consider institutional reporting pathways.",
          "Protect scientific integrity and public trust."
        ],
        "conclusion": [
          "Integrity in research affects patient care and public confidence.",
          "Difficult ethical action may still be necessary."
        ]
      }
    },
    {
      "id": "PROF_01",
      "category": "Professionalism",
      "difficulty": "easy",
      "text": "You overhear another student making disrespectful comments about a patient after a clinical placement. How would you respond?",
      "followUpHints": [
        "Would your response change if they were a close friend?",
        "What if they said it was just a joke?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Identify respect and professionalism as core expectations.",
          "Recognize the importance of preserving patient dignity."
        ],
        "corePoints": [
          "Address the comment respectfully.",
          "Promote reflection rather than confrontation.",
          "Consider escalation if behavior continues.",
          "Support a respectful learning environment."
        ],
        "conclusion": [
          "Professional culture is shaped by everyday actions.",
          "Respect should extend beyond direct patient interactions."
        ]
      }
    },
    {
      "id": "PROF_02",
      "category": "Professionalism",
      "difficulty": "medium",
      "text": "A resident asks you to document findings in a patient chart that you did not personally observe, saying they are too busy to do it themselves. What would you do?",
      "followUpHints": [
        "How would you respond without damaging the working relationship?",
        "What if refusing creates tension in the team?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize patient documentation as a professional responsibility.",
          "Acknowledge the pressure of clinical environments."
        ],
        "corePoints": [
          "Avoid falsifying information.",
          "Communicate respectfully and clarify limitations.",
          "Offer alternative ways to help.",
          "Seek senior guidance if necessary."
        ],
        "conclusion": [
          "Accuracy and honesty are essential in healthcare.",
          "Professionalism may require uncomfortable conversations."
        ]
      }
    },
    {
      "id": "PROF_03",
      "category": "Professionalism",
      "difficulty": "hard",
      "text": "You are asked to continue working beyond your safe level of fatigue during a demanding shift because the unit is understaffed. How would you approach this situation?",
      "followUpHints": [
        "Do healthcare professionals ever have a duty to work beyond their limits?",
        "How would you balance patient needs with your own safety?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge duty to patients and responsibility to personal fitness to practise.",
          "Recognize the complexity of staffing shortages."
        ],
        "corePoints": [
          "Assess immediate patient risk.",
          "Communicate honestly about limitations.",
          "Explore alternative support or coverage.",
          "Consider long-term implications of unsafe practice."
        ],
        "conclusion": [
          "Patient safety includes provider wellbeing.",
          "Sustainable professionalism requires honest self-awareness."
        ]
      }
    },
    {
      "id": "RESOURCE_01",
      "category": "Resource Allocation",
      "difficulty": "easy",
      "text": "A rural hospital has funding for either a new dialysis machine or expanded mental health counselling services, but not both. How should this decision be made?",
      "followUpHints": [
        "Should urgency or number of patients matter more?",
        "How would community voices influence your decision?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize competing health priorities.",
          "Acknowledge that different stakeholders may value outcomes differently."
        ],
        "corePoints": [
          "Consider population needs and equity.",
          "Use evidence and community consultation.",
          "Evaluate short- and long-term outcomes.",
          "Ensure transparent decision-making."
        ],
        "conclusion": [
          "Fair allocation requires both evidence and values.",
          "Healthcare decisions often involve trade-offs."
        ]
      }
    },
    {
      "id": "RESOURCE_02",
      "category": "Resource Allocation",
      "difficulty": "medium",
      "text": "Two patients need an organ transplant, but only one donor organ is available. One patient is younger with fewer comorbidities, while the other has dependents and is the primary caregiver for their family. How would you approach this decision?",
      "followUpHints": [
        "Should social circumstances influence medical decisions?",
        "What ethical framework would guide you here?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the emotional and ethical complexity.",
          "Acknowledge that no choice is entirely satisfying."
        ],
        "corePoints": [
          "Avoid personal bias.",
          "Use established clinical criteria and policies.",
          "Consider fairness, justice, and transparency.",
          "Respect multidisciplinary decision-making."
        ],
        "conclusion": [
          "Allocation decisions should be principled and consistent.",
          "Trust depends on fairness and transparency."
        ]
      }
    },
    {
      "id": "RESOURCE_03",
      "category": "Resource Allocation",
      "difficulty": "hard",
      "text": "A province can either invest in an expensive treatment that benefits a small number of patients with rare diseases or in preventive programs that may benefit thousands. How should policymakers decide?",
      "followUpHints": [
        "Should rarity increase moral priority?",
        "Can cost-effectiveness alone justify healthcare decisions?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize tension between individual and population health.",
          "Acknowledge the role of public accountability."
        ],
        "corePoints": [
          "Evaluate equity and utility.",
          "Consider societal values and evidence.",
          "Engage diverse stakeholders.",
          "Balance immediate benefit with long-term prevention."
        ],
        "conclusion": [
          "Healthcare policy requires balancing compassion and sustainability.",
          "Fairness extends beyond numbers alone."
        ]
      }
    },
    {
      "id": "SJ_01",
      "category": "Social Justice & Equity",
      "difficulty": "easy",
      "text": "A patient repeatedly misses appointments because they cannot afford transportation. Some staff members say resources should not be wasted on them. How would you respond?",
      "followUpHints": [
        "Is equal treatment always equitable treatment?",
        "How would you challenge assumptions without alienating colleagues?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize structural barriers to healthcare access.",
          "Acknowledge the difference between equality and equity."
        ],
        "corePoints": [
          "Explore underlying barriers.",
          "Advocate for support services where possible.",
          "Challenge stigma respectfully.",
          "Promote patient-centered care."
        ],
        "conclusion": [
          "Equity often requires understanding context.",
          "Healthcare should address barriers, not just symptoms."
        ]
      }
    },
    {
      "id": "SJ_02",
      "category": "Social Justice & Equity",
      "difficulty": "medium",
      "text": "A clinic serving Indigenous communities has significantly worse health outcomes than urban centres. What factors might contribute, and what responsibilities do healthcare professionals have?",
      "followUpHints": [
        "How do history and trust affect healthcare relationships?",
        "How can professionals avoid imposing external solutions?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize historical and systemic influences on health.",
          "Acknowledge the importance of cultural humility."
        ],
        "corePoints": [
          "Consider access, trust, and social determinants.",
          "Recognize historical harms.",
          "Engage communities collaboratively.",
          "Promote culturally safe care."
        ],
        "conclusion": [
          "Health equity requires partnership and reflection.",
          "Listening is as important as acting."
        ]
      }
    },
    {
      "id": "SJ_03",
      "category": "Social Justice & Equity",
      "difficulty": "hard",
      "text": "A hospital introduces a policy prioritizing appointments for patients who are employed because missed work affects economic productivity. How would you evaluate this policy?",
      "followUpHints": [
        "Can economic efficiency ever justify reduced access for vulnerable groups?",
        "Who may be unintentionally harmed by this policy?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize policy goals while questioning equity implications.",
          "Acknowledge unintended consequences."
        ],
        "corePoints": [
          "Identify potentially disadvantaged groups.",
          "Assess fairness and distributive justice.",
          "Consider broader societal impact.",
          "Explore alternative policy designs."
        ],
        "conclusion": [
          "Efficiency should not undermine equity.",
          "Policies must be evaluated through multiple ethical lenses."
        ]
      }
    },
    {
      "id": "LEAD_01",
      "category": "Leadership & Conflict",
      "difficulty": "easy",
      "text": "As team lead in a student health initiative, two members strongly disagree on priorities and progress has stalled. What would you do?",
      "followUpHints": [
        "Would your approach change if one person was consistently more experienced?",
        "How do you prevent conflict from harming the group?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize leadership includes managing relationships.",
          "Acknowledge that conflict can be productive."
        ],
        "corePoints": [
          "Listen to both perspectives.",
          "Clarify shared goals.",
          "Use evidence and collaboration.",
          "Promote respectful communication."
        ],
        "conclusion": [
          "Strong leadership balances people and outcomes.",
          "Conflict can lead to stronger decisions if managed well."
        ]
      }
    },
    {
      "id": "LEAD_02",
      "category": "Leadership & Conflict",
      "difficulty": "medium",
      "text": "During a volunteer healthcare project, a team member is highly effective but frequently dismisses others' ideas. How would you handle this?",
      "followUpHints": [
        "Should results ever excuse poor behavior?",
        "How do you preserve team morale while maintaining standards?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the tension between performance and culture.",
          "Acknowledge the importance of psychological safety."
        ],
        "corePoints": [
          "Address behavior directly but respectfully.",
          "Focus on impact rather than blame.",
          "Encourage reflection and growth.",
          "Support team inclusion."
        ],
        "conclusion": [
          "Effective teams need both competence and respect.",
          "Leadership includes shaping culture."
        ]
      }
    },
    {
      "id": "LEAD_03",
      "category": "Leadership & Conflict",
      "difficulty": "hard",
      "text": "You are leading a public health campaign, and your team is split between sharing simplified messages for greater reach or sharing nuanced information that may confuse the public. How would you decide?",
      "followUpHints": [
        "Does clarity justify oversimplification?",
        "How do you balance accuracy with public engagement?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize communication as both ethical and strategic.",
          "Acknowledge competing values."
        ],
        "corePoints": [
          "Identify audience needs.",
          "Balance truthfulness with accessibility.",
          "Consult evidence and experts.",
          "Consider unintended consequences."
        ],
        "conclusion": [
          "Leadership often requires balancing imperfect options.",
          "Trust depends on both honesty and clarity."
        ]
      }
    },
    {
      "id": "POLICY_01",
      "category": "Healthcare Policy",
      "difficulty": "easy",
      "text": "A province is considering charging a small fee for non-urgent emergency department visits to reduce overcrowding. What are the potential benefits and risks?",
      "followUpHints": [
        "Who may be disproportionately affected by this policy?",
        "Could this improve or worsen system efficiency?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the policy goal of reducing strain.",
          "Acknowledge concerns about access."
        ],
        "corePoints": [
          "Assess financial barriers.",
          "Consider unintended effects on vulnerable populations.",
          "Evaluate evidence of effectiveness.",
          "Explore alternative solutions."
        ],
        "conclusion": [
          "Policy decisions should balance efficiency and equity.",
          "Healthcare access should remain a core priority."
        ]
      }
    },
    {
      "id": "POLICY_02",
      "category": "Healthcare Policy",
      "difficulty": "medium",
      "text": "Should Canada expand private healthcare options to reduce wait times in the public system? Discuss.",
      "followUpHints": [
        "Could private options strengthen or weaken public care?",
        "What values should guide this debate?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the complexity and political sensitivity.",
          "Recognize multiple stakeholder perspectives."
        ],
        "corePoints": [
          "Consider access, equity, and sustainability.",
          "Review evidence from other systems.",
          "Examine unintended consequences.",
          "Reflect on Canadian healthcare values."
        ],
        "conclusion": [
          "Healthcare reform requires evidence and societal dialogue.",
          "No single model is without trade-offs."
        ]
      }
    },
    {
      "id": "POLICY_03",
      "category": "Healthcare Policy",
      "difficulty": "hard",
      "text": "A government proposes using patient genomic data to improve public health planning, but privacy advocates raise concerns. How should policymakers proceed?",
      "followUpHints": [
        "Can collective benefit justify reduced privacy?",
        "Who should control access to sensitive health data?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize potential health benefits and privacy risks.",
          "Acknowledge public trust as essential."
        ],
        "corePoints": [
          "Discuss consent and transparency.",
          "Consider governance and accountability.",
          "Assess long-term societal implications.",
          "Include diverse public perspectives."
        ],
        "conclusion": [
          "Innovation must be matched by ethical safeguards.",
          "Public trust is critical for sustainable policy."
        ]
      }
    },
    {
      "id": "BIAS_01",
      "category": "Bias & Diversity",
      "difficulty": "easy",
      "text": "A patient asks to see a doctor of a specific ethnicity because they believe others will not understand them. How would you respond?",
      "followUpHints": [
        "How do you balance cultural comfort with fairness to staff?",
        "Could accommodating this request reinforce stereotypes?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the importance of cultural comfort and patient trust.",
          "Acknowledge potential ethical tension."
        ],
        "corePoints": [
          "Explore the patient's concerns respectfully.",
          "Avoid assumptions.",
          "Consider reasonable accommodations.",
          "Maintain respect for staff and inclusivity."
        ],
        "conclusion": [
          "Diversity should strengthen care without reinforcing bias.",
          "Understanding context is essential."
        ]
      }
    },
    {
      "id": "BIAS_02",
      "category": "Bias & Diversity",
      "difficulty": "medium",
      "text": "You notice that certain patients consistently receive less eye contact and shorter explanations from a healthcare provider. What would you do?",
      "followUpHints": [
        "How can bias exist even without harmful intent?",
        "How would you address this without accusing someone unfairly?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the possibility of implicit bias.",
          "Acknowledge the need for humility and evidence."
        ],
        "corePoints": [
          "Observe patterns carefully.",
          "Approach the conversation respectfully.",
          "Focus on behaviors and patient impact.",
          "Promote reflective practice."
        ],
        "conclusion": [
          "Bias awareness is essential for equitable care.",
          "Constructive feedback can improve patient experiences."
        ]
      }
    },
    {
      "id": "BIAS_03",
      "category": "Bias & Diversity",
      "difficulty": "hard",
      "text": "A healthcare algorithm appears to prioritize follow-up care for patients from higher-income postal codes because of historical utilization data. How should this be addressed?",
      "followUpHints": [
        "Can data-driven systems unintentionally amplify inequity?",
        "Who is accountable when technology produces biased outcomes?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the promise and risks of algorithmic decision-making.",
          "Acknowledge systemic bias in historical data."
        ],
        "corePoints": [
          "Investigate data sources and methodology.",
          "Assess patient impact.",
          "Involve interdisciplinary experts.",
          "Promote transparency and corrective action."
        ],
        "conclusion": [
          "Technology should improve equity, not worsen disparities.",
          "Accountability must remain human."
        ]
      }
    },
    {
      "id": "RESEARCH_01",
      "category": "Research Ethics / Public Health",
      "difficulty": "easy",
      "text": "A participant in a clinical study wants to withdraw after contributing data for six months. The study may lose statistical power if they leave. What should happen?",
      "followUpHints": [
        "Does scientific benefit ever outweigh participant autonomy?",
        "What information should participants receive before enrolling?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize participant autonomy as fundamental.",
          "Acknowledge the impact on research quality."
        ],
        "corePoints": [
          "Respect informed withdrawal rights.",
          "Ensure participants understand implications.",
          "Maintain transparency and trust.",
          "Protect research integrity ethically."
        ],
        "conclusion": [
          "Ethical research depends on voluntary participation.",
          "Trust matters as much as outcomes."
        ]
      }
    },
    {
      "id": "RESEARCH_02",
      "category": "Research Ethics / Public Health",
      "difficulty": "medium",
      "text": "During an infectious disease outbreak, public health officials consider mandatory digital contact tracing using personal location data. What are the ethical considerations?",
      "followUpHints": [
        "When can public health override individual privacy?",
        "How would public trust influence effectiveness?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize tension between individual rights and collective safety.",
          "Acknowledge urgency during outbreaks."
        ],
        "corePoints": [
          "Assess proportionality and necessity.",
          "Consider transparency and consent.",
          "Evaluate data security.",
          "Examine trust and compliance."
        ],
        "conclusion": [
          "Public health interventions require legitimacy and trust.",
          "Rights and safety must both be considered."
        ]
      }
    },
    {
      "id": "RESEARCH_03",
      "category": "Research Ethics / Public Health",
      "difficulty": "hard",
      "text": "A vaccine trial shows early promising results, and there is pressure from government officials to release it before full long-term safety data is available. How would you approach this dilemma?",
      "followUpHints": [
        "Can urgency justify scientific uncertainty?",
        "How should public communication be handled if evidence is incomplete?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the urgency of public health emergencies.",
          "Acknowledge uncertainty and potential consequences."
        ],
        "corePoints": [
          "Assess risk-benefit evidence.",
          "Maintain scientific transparency.",
          "Involve regulatory and ethical oversight.",
          "Consider public trust and long-term impact."
        ],
        "conclusion": [
          "Urgency should not eliminate ethical standards.",
          "Responsible communication is critical in uncertainty."
        ]
      }
    }
  ],

// ]
//   canada: [
//     {
//       id: "ca_001",
//       text: "A close friend confides that they have been falsifying their medical school application, including fabricating volunteer hours. They ask for your advice. What do you do?",
//       category: "Ethics & Integrity",
//       difficulty: "hard",
//       followUpHints: ["What if they are your best friend?", "How would this affect the medical profession?"],
//     },
//     {
//       id: "ca_002",
//       text: "You are a first-year medical resident. You notice a senior surgeon making what appears to be a critical error during a procedure. The surgeon is well-respected and has 20 years of experience. What do you do?",
//       category: "Professionalism",
//       difficulty: "hard",
//       followUpHints: ["What if the surgeon dismisses your concern?", "How do you handle the aftermath?"],
//     },
//     {
//       id: "ca_003",
//       text: "Healthcare resources are limited. You must decide between treating a 25-year-old with a substance abuse history or a 65-year-old retired teacher for the last available ICU bed. How do you approach this decision?",
//       category: "Resource Allocation",
//       difficulty: "hard",
//       followUpHints: ["What ethical frameworks guide you?", "Who else should be involved?"],
//     },
//     {
//       id: "ca_004",
//       text: "You discover that a pharmaceutical company has been funding your hospital's research, and preliminary data suggests their drug causes serious side effects. The research is not yet published. What is your responsibility?",
//       category: "Research Ethics",
//       difficulty: "hard",
//       followUpHints: ["What are the conflicts of interest?", "Who do you report to?"],
//     },
//     {
//       id: "ca_005",
//       text: "A terminally ill patient, fully competent, requests assisted dying which is legal in your jurisdiction. Their family is strongly opposed. How do you navigate this situation?",
//       category: "End of Life",
//       difficulty: "hard",
//       followUpHints: ["How do you balance autonomy vs. family wishes?", "What support systems do you involve?"],
//     },
//   ],

  uk: [
    {
      "id": "NHS_ETHICS_01",
      "category": "NHS Ethics",
      "difficulty": "easy",
      "text": "You are a medical student shadowing on an NHS ward. You notice a junior doctor discussing a patient's diagnosis loudly in a public corridor where visitors can hear. What would you do?",
      "followUpHints": [
        "What if the doctor is clearly under pressure and busy?",
        "How would you balance patient confidentiality with professional hierarchy?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge patient confidentiality as a core GMC and NHS value.",
          "Recognise the importance of acting professionally while maintaining team relationships."
        ],
        "corePoints": [
          "Assess immediate risk to patient privacy.",
          "Address the concern discreetly and respectfully with the doctor if appropriate.",
          "Escalate through appropriate channels if the behaviour continues.",
          "Maintain professionalism and avoid public confrontation."
        ],
        "conclusion": [
          "Protecting patient dignity and confidentiality would remain the priority.",
          "I would aim to resolve the issue constructively while supporting a safe clinical environment."
        ]
      }
    },
    {
      "id": "NHS_ETHICS_02",
      "category": "NHS Ethics",
      "difficulty": "medium",
      "text": "During an NHS placement, a patient asks you not to tell the consultant that they have stopped taking their prescribed medication. How would you respond?",
      "followUpHints": [
        "What if the medication is critical for the patient's condition?",
        "How would you maintain trust while ensuring patient safety?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise patient autonomy and the importance of trust.",
          "Identify patient safety as a key professional responsibility."
        ],
        "corePoints": [
          "Explore why the patient stopped the medication.",
          "Encourage open communication with the clinical team.",
          "Explain limitations of confidentiality where safety is involved.",
          "Seek senior support if risk is significant."
        ],
        "conclusion": [
          "I would aim to preserve trust while prioritising safe care.",
          "Supporting informed decision-making would be central."
        ]
      }
    },
    {
      "id": "NHS_ETHICS_03",
      "category": "NHS Ethics",
      "difficulty": "hard",
      "text": "An NHS department has only one ICU bed available, but two critically ill patients need it urgently. How would you approach this ethical dilemma?",
      "followUpHints": [
        "What ethical principles would guide your thinking?",
        "How would you ensure fairness in decision-making?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the complexity and emotional difficulty of resource allocation.",
          "Identify fairness, beneficence, and justice as relevant principles."
        ],
        "corePoints": [
          "Ensure decisions are based on clinical criteria and senior multidisciplinary input.",
          "Avoid personal bias or discrimination.",
          "Respect NHS guidelines and local protocols.",
          "Support patients and families through transparent communication."
        ],
        "conclusion": [
          "Fair, evidence-based, patient-centred decision-making would be essential.",
          "The process should remain ethical, consistent, and compassionate."
        ]
      }
    },
    {
      "id": "CONSENT_01",
      "category": "Consent",
      "difficulty": "easy",
      "text": "A patient is about to undergo a minor procedure but seems confused about what it involves. How would you approach this situation?",
      "followUpHints": [
        "How would you assess whether the patient understands?",
        "What if the procedure is urgent?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise informed consent requires understanding, capacity, and voluntary agreement.",
          "Acknowledge the need for clear communication."
        ],
        "corePoints": [
          "Clarify the procedure in simple language.",
          "Check understanding using open questions.",
          "Ensure the patient has opportunity to ask questions.",
          "Escalate concerns to senior staff if capacity is unclear."
        ],
        "conclusion": [
          "Consent must be informed and valid.",
          "Patient understanding would remain central."
        ]
      }
    },
    {
      "id": "CONSENT_02",
      "category": "Consent",
      "difficulty": "medium",
      "text": "A 16-year-old patient wants treatment but their parent disagrees. How would you approach the situation within the UK healthcare system?",
      "followUpHints": [
        "How does capacity influence your approach?",
        "What role does Gillick competence play?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise legal and ethical aspects of consent in young people.",
          "Mention assessing decision-making capacity."
        ],
        "corePoints": [
          "Assess maturity and understanding.",
          "Consider Gillick competence.",
          "Involve senior clinicians and safeguarding if needed.",
          "Respect confidentiality while acting in best interests."
        ],
        "conclusion": [
          "The patient's best interests and legal framework would guide action.",
          "Decisions should remain safe, lawful, and patient-centred."
        ]
      }
    },
    {
      "id": "CONSENT_03",
      "category": "Consent",
      "difficulty": "hard",
      "text": "An unconscious patient arrives in A&E without family present and urgently requires surgery. How would consent be managed?",
      "followUpHints": [
        "Who decides what is in the patient's best interests?",
        "What documentation would be important?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise this as an emergency consent situation.",
          "Identify patient welfare as the priority."
        ],
        "corePoints": [
          "Act under best-interest principles.",
          "Follow legal and hospital guidance.",
          "Consult senior clinicians and multidisciplinary team.",
          "Document rationale clearly."
        ],
        "conclusion": [
          "Emergency treatment may proceed when necessary.",
          "Transparency and documentation remain essential."
        ]
      }
    },
    {
      "id": "COMM_ROLEPLAY_01",
      "category": "Communication Roleplay",
      "difficulty": "easy",
      "text": "Roleplay: You are speaking to an anxious NHS patient who is worried because their clinic appointment has been delayed by two hours.",
      "followUpHints": [
        "How would you de-escalate frustration?",
        "What if the patient starts raising their voice?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Introduce yourself and remain calm.",
          "Acknowledge the patient's frustration."
        ],
        "corePoints": [
          "Listen actively without interrupting.",
          "Use empathy and validate feelings.",
          "Provide honest information about delays.",
          "Offer practical support where possible."
        ],
        "conclusion": [
          "Ensure the patient feels heard and respected.",
          "Maintain professionalism throughout."
        ]
      }
    },
    {
      "id": "COMM_ROLEPLAY_02",
      "category": "Communication Roleplay",
      "difficulty": "medium",
      "text": "Roleplay: A patient's relative is upset because they feel updates about their loved one have been inadequate. How would you handle the conversation?",
      "followUpHints": [
        "How would you protect confidentiality?",
        "What if the relative becomes emotional?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Introduce yourself and create a calm environment.",
          "Acknowledge their concern."
        ],
        "corePoints": [
          "Listen actively.",
          "Clarify what information can be shared.",
          "Maintain confidentiality boundaries.",
          "Escalate to appropriate staff if needed."
        ],
        "conclusion": [
          "Clear, compassionate communication builds trust.",
          "Patient confidentiality remains protected."
        ]
      }
    },
    {
      "id": "COMM_ROLEPLAY_03",
      "category": "Communication Roleplay",
      "difficulty": "hard",
      "text": "Roleplay: You need to explain to a patient that their elective surgery has been cancelled due to emergency NHS pressures.",
      "followUpHints": [
        "How would you show empathy without overpromising?",
        "How would you respond if they say the system is failing them?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Introduce yourself respectfully.",
          "Acknowledge disappointment and inconvenience."
        ],
        "corePoints": [
          "Explain the situation honestly and clearly.",
          "Show empathy without assigning blame.",
          "Discuss next steps or support options.",
          "Maintain calm if challenged."
        ],
        "conclusion": [
          "Patients deserve honesty and respect.",
          "Compassionate communication can preserve trust."
        ]
      }
    },
    {
      "id": "TEAMWORK_01",
      "category": "Teamwork",
      "difficulty": "easy",
      "text": "Tell us about a time when you worked in a team and someone was not contributing effectively. How did you handle it?",
      "followUpHints": [
        "What did you learn from that experience?",
        "How did you avoid conflict?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Choose a relevant example.",
          "Briefly explain the team goal."
        ],
        "corePoints": [
          "Identify the issue objectively.",
          "Communicate respectfully.",
          "Support the team member if appropriate.",
          "Focus on shared goals."
        ],
        "conclusion": [
          "Effective teamwork requires communication and empathy.",
          "Reflect on personal growth."
        ]
      }
    },
    {
      "id": "TEAMWORK_02",
      "category": "Teamwork",
      "difficulty": "medium",
      "text": "During a ward placement, two members of the healthcare team disagree about a patient's management plan. How would you respond as a medical student?",
      "followUpHints": [
        "Would you intervene directly?",
        "How do you maintain professionalism?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise patient safety as priority.",
          "Acknowledge team dynamics."
        ],
        "corePoints": [
          "Observe and avoid overstepping competence.",
          "Raise concerns appropriately if safety is affected.",
          "Respect hierarchy while advocating for patients.",
          "Learn from multidisciplinary discussion."
        ],
        "conclusion": [
          "Collaboration improves patient outcomes.",
          "Professional communication is essential."
        ]
      }
    },
    {
      "id": "TEAMWORK_03",
      "category": "Teamwork",
      "difficulty": "hard",
      "text": "You are leading a student healthcare project, but two team members strongly disagree on priorities, affecting progress. What would you do?",
      "followUpHints": [
        "How would you maintain team morale?",
        "What if the disagreement continues?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise leadership responsibility.",
          "Acknowledge differing perspectives."
        ],
        "corePoints": [
          "Listen to both sides fairly.",
          "Refocus on shared objectives.",
          "Use evidence-based decision-making.",
          "Escalate or seek guidance if unresolved."
        ],
        "conclusion": [
          "Leadership involves balancing people and outcomes.",
          "Constructive conflict can strengthen teams."
        ]
      }
    },
    {
      "id": "NHS_ISSUES_01",
      "category": "Current NHS Issues",
      "difficulty": "easy",
      "text": "What do you think is one major challenge currently facing the NHS, and why?",
      "followUpHints": [
        "How might this affect patients?",
        "What solutions could help?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Identify a relevant NHS challenge.",
          "Provide context."
        ],
        "corePoints": [
          "Discuss impact on patients and staff.",
          "Use balanced perspective.",
          "Suggest practical improvements.",
          "Show awareness of system complexity."
        ],
        "conclusion": [
          "Healthcare challenges require collaboration.",
          "Doctors contribute beyond clinical care."
        ]
      }
    },
    {
      "id": "NHS_ISSUES_02",
      "category": "Current NHS Issues",
      "difficulty": "medium",
      "text": "How do increasing waiting lists affect healthcare delivery in the NHS?",
      "followUpHints": [
        "How might clinicians manage patient expectations?",
        "What wider system factors contribute?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge service pressure.",
          "Recognise patient impact."
        ],
        "corePoints": [
          "Discuss delayed diagnoses or treatment.",
          "Mention staff workload.",
          "Consider resource constraints.",
          "Suggest system improvements."
        ],
        "conclusion": [
          "Balancing demand and quality is challenging.",
          "Sustainable planning is essential."
        ]
      }
    },
    {
      "id": "NHS_ISSUES_03",
      "category": "Current NHS Issues",
      "difficulty": "hard",
      "text": "What are the ethical and practical challenges of using artificial intelligence in the NHS?",
      "followUpHints": [
        "How might patient trust be affected?",
        "What safeguards should be in place?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise innovation potential.",
          "Acknowledge ethical concerns."
        ],
        "corePoints": [
          "Discuss efficiency and diagnostic support.",
          "Address bias, privacy, and accountability.",
          "Highlight human oversight.",
          "Consider patient communication."
        ],
        "conclusion": [
          "Technology should support, not replace, clinicians.",
          "Patient safety and trust remain central."
        ]
      }
    },
    {
      "id": "PRIORITIZATION_01",
      "category": "Prioritization",
      "difficulty": "easy",
      "text": "You are on placement and have been asked to complete paperwork, attend teaching, and assist with a patient task at the same time. How would you prioritise?",
      "followUpHints": [
        "How do you decide what is urgent?",
        "Who might you ask for guidance?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise competing responsibilities.",
          "Prioritise patient safety first."
        ],
        "corePoints": [
          "Assess urgency and impact.",
          "Communicate with supervisors.",
          "Be flexible and organised.",
          "Know personal limitations."
        ],
        "conclusion": [
          "Safe prioritisation supports effective care.",
          "Clear communication is key."
        ]
      }
    },
    {
      "id": "PRIORITIZATION_02",
      "category": "Prioritization",
      "difficulty": "medium",
      "text": "As a foundation doctor, you receive multiple bleeps at once: a patient in pain, abnormal blood results, and a discharge summary due urgently. How would you prioritise?",
      "followUpHints": [
        "What information would you gather first?",
        "How would you use your team?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge time pressure.",
          "Focus on clinical urgency."
        ],
        "corePoints": [
          "Rapidly assess risk level.",
          "Delegate where appropriate.",
          "Address potentially life-threatening issues first.",
          "Communicate with nursing staff."
        ],
        "conclusion": [
          "Prioritisation should be systematic and safe.",
          "Team communication supports effective decisions."
        ]
      }
    },
    {
      "id": "PRIORITIZATION_03",
      "category": "Prioritization",
      "difficulty": "hard",
      "text": "You are working in A&E during winter pressures. Three patients arrive simultaneously with different levels of urgency. How would you approach prioritisation?",
      "followUpHints": [
        "How does triage influence your decision?",
        "What if family members challenge your priorities?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognise the pressure of emergency medicine.",
          "Patient safety and triage are central."
        ],
        "corePoints": [
          "Use ABC assessment or triage systems.",
          "Prioritise life-threatening cases.",
          "Communicate clearly with team and families.",
          "Document key decisions."
        ],
        "conclusion": [
          "Structured prioritisation ensures fairness and safety.",
          "Clinical judgement must remain evidence-based."
        ]
      }
    },
    {
      "id": "MOTIVATION_01",
      "category": "Motivation for Medicine",
      "difficulty": "easy",
      "text": "Why do you want to study medicine in the UK?",
      "followUpHints": [
        "What experiences shaped your decision?",
        "Why not another healthcare profession?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Give genuine motivation.",
          "Link to personal experiences."
        ],
        "corePoints": [
          "Discuss service, science, and communication.",
          "Show understanding of medical realities.",
          "Reflect on relevant experiences.",
          "Demonstrate long-term commitment."
        ],
        "conclusion": [
          "Medicine aligns with my values and strengths.",
          "I understand the responsibility involved."
        ]
      }
    },
    {
      "id": "MOTIVATION_02",
      "category": "Motivation for Medicine",
      "difficulty": "medium",
      "text": "What qualities do you think make a good doctor, and how have you demonstrated them?",
      "followUpHints": [
        "Can you give a specific example?",
        "Which quality do you still need to develop?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Identify core professional qualities.",
          "Link qualities to medicine."
        ],
        "corePoints": [
          "Use real examples.",
          "Show reflection and growth.",
          "Connect skills to patient care.",
          "Acknowledge areas for improvement."
        ],
        "conclusion": [
          "Medicine requires continuous development.",
          "Self-awareness is important."
        ]
      }
    },
    {
      "id": "MOTIVATION_03",
      "category": "Motivation for Medicine",
      "difficulty": "hard",
      "text": "Medicine can be emotionally demanding and academically intense. What makes you confident you are suited to this career?",
      "followUpHints": [
        "How do you handle setbacks?",
        "How would you maintain resilience?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the realities of medicine.",
          "Show maturity."
        ],
        "corePoints": [
          "Discuss resilience strategies.",
          "Use examples of perseverance.",
          "Show self-awareness.",
          "Highlight support systems and reflection."
        ],
        "conclusion": [
          "Medicine is challenging but meaningful.",
          "Commitment and adaptability are essential."
        ]
      }
    },
    {
      "id": "DATA_INTERPRET_01",
      "category": "Data Interpretation",
      "difficulty": "easy",
      "text": "You are shown a chart of NHS outpatient waiting times increasing from 8 weeks to 14 weeks over 12 months. What observations would you make, and what factors might explain this trend?",
      "followUpHints": [
        "What impact could this have on patient outcomes?",
        "What extra data would you want to see?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Describe objective trends first.",
          "Avoid assumptions."
        ],
        "corePoints": [
          "Identify increase over time.",
          "Suggest possible causes such as staffing or demand.",
          "Discuss patient consequences.",
          "Consider missing variables."
        ],
        "conclusion": [
          "Data must be interpreted in context.",
          "Evidence should guide improvement."
        ]
      }
    },
    {
      "id": "DATA_INTERPRET_02",
      "category": "Data Interpretation",
      "difficulty": "medium",
      "text": "You are shown a graph comparing emergency department attendances across three NHS hospitals, with one hospital showing significantly higher numbers. How would you interpret this?",
      "followUpHints": [
        "Could higher attendance mean poorer performance?",
        "What other factors might influence the data?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Describe the data objectively.",
          "Avoid jumping to conclusions."
        ],
        "corePoints": [
          "Compare hospitals carefully.",
          "Consider population size and catchment area.",
          "Look for seasonal or service differences.",
          "Identify limitations of single datasets."
        ],
        "conclusion": [
          "Healthcare data requires context.",
          "Further evidence is needed before judging performance."
        ]
      }
    },
    {
      "id": "DATA_INTERPRET_03",
      "category": "Data Interpretation",
      "difficulty": "hard",
      "text": "You are shown a healthcare chart where cancer referral targets improved for six months, then suddenly declined. How would you analyse this trend and what hypotheses might you generate?",
      "followUpHints": [
        "What operational changes could explain this?",
        "How would you investigate whether the change is significant?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Describe the trend accurately.",
          "Recognise potential significance."
        ],
        "corePoints": [
          "Identify change points.",
          "Consider staffing, policy, or demand changes.",
          "Request comparative or historical data.",
          "Avoid causal assumptions without evidence."
        ],
        "conclusion": [
          "Data trends should prompt investigation, not immediate conclusions.",
          "Analytical thinking supports better healthcare decisions."
        ]
      }
    }
  ],

  australia: [
    {
      "id": "BIOETHICS_01",
      "category": "Bioethics",
      "difficulty": "easy",
      "text": "A competent elderly patient refuses a potentially life-saving surgery despite understanding the medical risks. Their family strongly insists that the doctors proceed. How would you approach this situation?",
      "followUpHints": [
        "How would you balance patient autonomy with family concerns?",
        "Would your approach differ if the patient showed mild cognitive decline?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Identify the ethical conflict between autonomy and beneficence.",
          "Acknowledge the importance of respecting competent patient decisions."
        ],
        "corePoints": [
          "Assess the patient's decision-making capacity carefully.",
          "Ensure the patient fully understands risks and alternatives.",
          "Communicate empathetically with the family.",
          "Avoid coercion while supporting informed decision-making."
        ],
        "conclusion": [
          "Patient autonomy should generally guide management if capacity is intact.",
          "Clear communication can reduce family conflict while preserving ethical care."
        ]
      }
    },
    {
      "id": "BIOETHICS_02",
      "category": "Bioethics",
      "difficulty": "medium",
      "text": "A hospital is considering implementing mandatory genetic screening for certain hereditary diseases before employment in high-risk occupations. Discuss the ethical implications.",
      "followUpHints": [
        "How would you balance public safety with privacy rights?",
        "Could such policies unintentionally lead to discrimination?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the tension between societal benefit and individual rights.",
          "Acknowledge both safety and ethical concerns."
        ],
        "corePoints": [
          "Discuss confidentiality and informed consent.",
          "Consider risk of discrimination or stigmatization.",
          "Evaluate proportionality and necessity.",
          "Explore regulatory safeguards and oversight."
        ],
        "conclusion": [
          "Policies should balance public safety with fairness and autonomy.",
          "Ethical safeguards are essential in genetic medicine."
        ]
      }
    },
    {
      "id": "BIOETHICS_03",
      "category": "Bioethics",
      "difficulty": "hard",
      "text": "A new expensive cancer treatment offers only a small increase in survival time but consumes substantial healthcare resources. Should it be publicly funded?",
      "followUpHints": [
        "How should healthcare systems define value in medicine?",
        "Should quality of life influence funding decisions?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the ethical tension between individual benefit and resource stewardship.",
          "Acknowledge complexity in healthcare funding decisions."
        ],
        "corePoints": [
          "Consider cost-effectiveness and clinical outcomes.",
          "Discuss equity and fairness in resource allocation.",
          "Evaluate patient quality of life and societal impact.",
          "Consider transparent policymaking and evidence-based assessment."
        ],
        "conclusion": [
          "Healthcare systems must balance compassion with sustainability.",
          "Funding decisions should remain evidence-based and ethically justified."
        ]
      }
    },
    {
      "id": "HEALTHSYS_01",
      "category": "Healthcare Systems",
      "difficulty": "easy",
      "text": "Singapore uses a mixed healthcare financing system involving government subsidies, insurance, and personal savings. What are the strengths and limitations of this model?",
      "followUpHints": [
        "How does this system encourage personal responsibility?",
        "Could affordability still remain an issue for vulnerable groups?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Briefly describe the mixed financing model.",
          "Recognize the balance between sustainability and accessibility."
        ],
        "corePoints": [
          "Discuss efficiency and cost-consciousness.",
          "Highlight government support mechanisms.",
          "Consider inequalities in affordability.",
          "Compare short-term affordability with long-term sustainability."
        ],
        "conclusion": [
          "The system aims to balance access and sustainability.",
          "Continuous adaptation is needed for changing healthcare demands."
        ]
      }
    },
    {
      "id": "HEALTHSYS_02",
      "category": "Healthcare Systems",
      "difficulty": "medium",
      "text": "Hospitals are increasingly overcrowded due to rising chronic disease burdens. What system-level strategies could reduce this pressure?",
      "followUpHints": [
        "What role should primary care play?",
        "How can technology support healthcare efficiency?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize chronic disease as a major healthcare systems challenge.",
          "Acknowledge need for preventive and integrated care."
        ],
        "corePoints": [
          "Strengthen primary and community care.",
          "Promote preventive medicine and early intervention.",
          "Use digital health systems for efficiency.",
          "Improve interdisciplinary coordination."
        ],
        "conclusion": [
          "Healthcare sustainability requires both prevention and system redesign.",
          "Integrated care can reduce hospital dependence."
        ]
      }
    },
    {
      "id": "HEALTHSYS_03",
      "category": "Healthcare Systems",
      "difficulty": "hard",
      "text": "A healthcare system must decide whether to invest more in advanced specialist care or preventive public health programs. How should policymakers approach this decision?",
      "followUpHints": [
        "How should long-term outcomes influence decisions?",
        "Can prevention sometimes be politically difficult to prioritize?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Identify competing priorities within healthcare systems.",
          "Recognize trade-offs between immediate and long-term impact."
        ],
        "corePoints": [
          "Compare population-level versus individual benefits.",
          "Evaluate cost-effectiveness and sustainability.",
          "Consider demographic and disease trends.",
          "Discuss evidence-based resource allocation."
        ],
        "conclusion": [
          "Balanced investment strategies are often necessary.",
          "Healthcare planning should combine prevention and treatment capacity."
        ]
      }
    },
    {
      "id": "PUBLICHEALTH_01",
      "category": "Public Health",
      "difficulty": "easy",
      "text": "A rise in vaccine hesitancy has reduced childhood immunization rates. How should public health authorities respond?",
      "followUpHints": [
        "How would you address misinformation respectfully?",
        "Should vaccination ever become mandatory?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize vaccination as both an individual and public health issue.",
          "Acknowledge concerns about trust and misinformation."
        ],
        "corePoints": [
          "Promote evidence-based education.",
          "Use transparent and respectful communication.",
          "Engage communities and healthcare professionals.",
          "Consider proportional public health measures."
        ],
        "conclusion": [
          "Public trust is essential for successful health interventions.",
          "Education and engagement are often more sustainable than coercion."
        ]
      }
    },
    {
      "id": "PUBLICHEALTH_02",
      "category": "Public Health",
      "difficulty": "medium",
      "text": "During a disease outbreak, authorities consider restricting travel and public gatherings. Discuss the ethical and practical considerations.",
      "followUpHints": [
        "How do you balance public safety with personal freedoms?",
        "What factors determine whether restrictions are justified?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize tension between collective safety and individual liberties.",
          "Acknowledge urgency during outbreaks."
        ],
        "corePoints": [
          "Assess proportionality and evidence.",
          "Consider economic and social impact.",
          "Evaluate transparency and public trust.",
          "Discuss temporary versus long-term measures."
        ],
        "conclusion": [
          "Public health interventions should remain evidence-based and proportionate.",
          "Clear communication is critical during crises."
        ]
      }
    },
    {
      "id": "PUBLICHEALTH_03",
      "category": "Public Health",
      "difficulty": "hard",
      "text": "Obesity rates are increasing despite public health campaigns. Should governments implement stronger measures such as sugar taxes or advertising restrictions?",
      "followUpHints": [
        "How do you balance personal choice with public health responsibility?",
        "Could such measures disproportionately affect lower-income groups?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize obesity as a multifactorial public health issue.",
          "Acknowledge tension between autonomy and societal responsibility."
        ],
        "corePoints": [
          "Discuss preventive public health strategies.",
          "Evaluate evidence for taxation and regulation.",
          "Consider socioeconomic implications.",
          "Assess effectiveness of education versus regulation."
        ],
        "conclusion": [
          "Policy responses should combine education, prevention, and equity considerations.",
          "Public health measures should remain proportionate and evidence-based."
        ]
      }
    },
    {
      "id": "TECHAI_01",
      "category": "Technology & AI in Medicine",
      "difficulty": "easy",
      "text": "AI systems are increasingly being used to assist medical diagnosis. What are the potential benefits and risks of relying on AI in healthcare?",
      "followUpHints": [
        "How should doctors respond if AI recommendations conflict with clinical judgment?",
        "Can AI reduce or worsen healthcare inequalities?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the growing role of AI in healthcare.",
          "Acknowledge both opportunities and limitations."
        ],
        "corePoints": [
          "Discuss efficiency and diagnostic support.",
          "Consider algorithmic bias and data quality.",
          "Emphasize need for human oversight.",
          "Evaluate patient trust and accountability."
        ],
        "conclusion": [
          "AI should support rather than replace clinicians.",
          "Ethical implementation is essential for safe adoption."
        ]
      }
    },
    {
      "id": "TECHAI_02",
      "category": "Technology & AI in Medicine",
      "difficulty": "medium",
      "text": "A hospital plans to use wearable devices to continuously monitor patient health data outside the hospital. What ethical and practical issues should be considered?",
      "followUpHints": [
        "Who should own and control the health data?",
        "How would you address concerns about privacy?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the benefits of remote monitoring.",
          "Acknowledge privacy and security concerns."
        ],
        "corePoints": [
          "Discuss informed consent and transparency.",
          "Consider data protection and cybersecurity.",
          "Evaluate accessibility and digital inequality.",
          "Assess impact on patient autonomy and trust."
        ],
        "conclusion": [
          "Technology should improve care without compromising ethics.",
          "Strong safeguards are essential for digital healthcare."
        ]
      }
    },
    {
      "id": "TECHAI_03",
      "category": "Technology & AI in Medicine",
      "difficulty": "hard",
      "text": "An AI triage system predicts that some patients are less likely to benefit from intensive treatment and deprioritizes them during resource shortages. Should such systems be used?",
      "followUpHints": [
        "Can algorithms make fair ethical decisions?",
        "Who should be accountable for AI-driven healthcare decisions?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize ethical complexity in AI-assisted triage.",
          "Acknowledge the importance of fairness and accountability."
        ],
        "corePoints": [
          "Evaluate transparency and explainability.",
          "Discuss risk of embedded bias.",
          "Emphasize role of clinician oversight.",
          "Consider public trust and ethical governance."
        ],
        "conclusion": [
          "AI may assist but should not replace ethical clinical judgment.",
          "Human accountability must remain central."
        ]
      }
    },
    {
      "id": "RESEARCH_01",
      "category": "Research Ethics",
      "difficulty": "easy",
      "text": "A participant in a clinical trial wants to withdraw after treatment has already started, potentially affecting study outcomes. How should researchers respond?",
      "followUpHints": [
        "Should scientific benefit ever outweigh participant autonomy?",
        "How can trust be maintained in clinical research?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize participant autonomy as fundamental in research ethics.",
          "Acknowledge impact on research validity."
        ],
        "corePoints": [
          "Respect voluntary withdrawal rights.",
          "Ensure informed consent processes are robust.",
          "Communicate transparently with participants.",
          "Maintain ethical research standards."
        ],
        "conclusion": [
          "Ethical research depends on participant trust and autonomy.",
          "Scientific progress should not compromise ethical principles."
        ]
      }
    },
    {
      "id": "RESEARCH_02",
      "category": "Research Ethics",
      "difficulty": "medium",
      "text": "Researchers wish to use anonymized patient data for AI training without obtaining individual consent. Discuss the ethical considerations.",
      "followUpHints": [
        "Does anonymization fully eliminate privacy concerns?",
        "How should public trust influence data usage policies?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize potential benefits of data-driven research.",
          "Acknowledge ethical concerns around consent and privacy."
        ],
        "corePoints": [
          "Discuss anonymization and re-identification risks.",
          "Evaluate societal benefits and public trust.",
          "Consider governance and transparency.",
          "Assess proportionality and safeguards."
        ],
        "conclusion": [
          "Data-driven innovation requires ethical oversight.",
          "Public confidence is essential for sustainable research."
        ]
      }
    },
    {
      "id": "RESEARCH_03",
      "category": "Research Ethics",
      "difficulty": "hard",
      "text": "A pharmaceutical company pressures researchers to publish only favorable trial outcomes while delaying negative findings. How should researchers respond?",
      "followUpHints": [
        "How does publication bias affect healthcare?",
        "What responsibilities do researchers have to the public?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize scientific integrity as essential in medicine.",
          "Acknowledge conflicts between commercial and ethical interests."
        ],
        "corePoints": [
          "Promote transparency and accurate reporting.",
          "Consider patient safety implications.",
          "Discuss professional and institutional accountability.",
          "Protect public trust in research."
        ],
        "conclusion": [
          "Research integrity is fundamental to evidence-based medicine.",
          "Selective reporting can undermine healthcare outcomes."
        ]
      }
    },
    {
      "id": "ACADEMIC_01",
      "category": "Academic Reasoning",
      "difficulty": "easy",
      "text": "A study reports that people who drink more coffee have lower rates of certain diseases. Can we conclude that coffee directly prevents disease?",
      "followUpHints": [
        "What is the difference between correlation and causation?",
        "What confounding factors might exist?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize limitations of observational findings.",
          "Differentiate correlation from causation."
        ],
        "corePoints": [
          "Consider confounding variables.",
          "Assess study design and methodology.",
          "Discuss need for stronger evidence.",
          "Avoid overgeneralization."
        ],
        "conclusion": [
          "Scientific conclusions should remain cautious and evidence-based.",
          "Critical appraisal is important in medicine."
        ]
      }
    },
    {
      "id": "ACADEMIC_02",
      "category": "Academic Reasoning",
      "difficulty": "medium",
      "text": "A hospital introduces a new screening test with high sensitivity but lower specificity. What are the advantages and disadvantages of this approach?",
      "followUpHints": [
        "How do false positives affect patients and healthcare systems?",
        "When is sensitivity more important than specificity?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Define sensitivity and specificity clearly.",
          "Recognize trade-offs in screening programs."
        ],
        "corePoints": [
          "Discuss benefits of detecting disease early.",
          "Consider harms of false positives.",
          "Evaluate healthcare resource implications.",
          "Assess appropriateness based on disease context."
        ],
        "conclusion": [
          "Screening strategies should balance benefit and harm.",
          "Clinical context determines appropriate test use."
        ]
      }
    },
    {
      "id": "ACADEMIC_03",
      "category": "Academic Reasoning",
      "difficulty": "hard",
      "text": "A new study claims a breakthrough treatment reduces mortality by 50%, but the absolute risk reduction is very small. How would you critically evaluate this claim?",
      "followUpHints": [
        "Why can relative risk sometimes be misleading?",
        "What additional information would you want before accepting the findings?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize importance of critical appraisal in medicine.",
          "Differentiate relative and absolute risk."
        ],
        "corePoints": [
          "Examine study size and methodology.",
          "Assess statistical and clinical significance.",
          "Consider confidence intervals and bias.",
          "Evaluate applicability to patient populations."
        ],
        "conclusion": [
          "Medical evidence should be interpreted carefully and contextually.",
          "Strong claims require robust evidence."
        ]
      }
    },
    {
      "id": "COMM_01",
      "category": "Doctor-Patient Communication",
      "difficulty": "easy",
      "text": "A patient insists on receiving antibiotics for a viral illness despite medical advice that they are unnecessary. How would you handle the conversation?",
      "followUpHints": [
        "How would you maintain trust while disagreeing with the patient?",
        "What role does patient education play?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize importance of respectful communication.",
          "Acknowledge patient concerns and expectations."
        ],
        "corePoints": [
          "Explain reasoning clearly and simply.",
          "Educate about antibiotic resistance.",
          "Use empathy and active listening.",
          "Offer alternative symptom management strategies."
        ],
        "conclusion": [
          "Effective communication balances evidence and empathy.",
          "Patient trust is strengthened through respectful dialogue."
        ]
      }
    },
    {
      "id": "COMM_02",
      "category": "Doctor-Patient Communication",
      "difficulty": "medium",
      "text": "A patient searches online and strongly believes they have a serious disease despite reassuring test results. How would you respond?",
      "followUpHints": [
        "How would you address misinformation without dismissing the patient?",
        "What communication strategies build trust in this situation?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize the influence of online medical information.",
          "Acknowledge patient anxiety and uncertainty."
        ],
        "corePoints": [
          "Listen actively to concerns.",
          "Clarify evidence and test interpretation.",
          "Encourage reliable information sources.",
          "Maintain empathy and professionalism."
        ],
        "conclusion": [
          "Patients should feel heard and respected.",
          "Clear communication supports informed decision-making."
        ]
      }
    },
    {
      "id": "COMM_03",
      "category": "Doctor-Patient Communication",
      "difficulty": "hard",
      "text": "A family requests that a patient not be informed about a serious diagnosis because they believe it would harm them emotionally. How would you approach this situation?",
      "followUpHints": [
        "How do cultural considerations influence communication?",
        "Should patient autonomy always take priority?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize ethical tension between autonomy and family concerns.",
          "Acknowledge cultural sensitivity in communication."
        ],
        "corePoints": [
          "Assess patient preferences regarding information disclosure.",
          "Communicate respectfully with family members.",
          "Balance honesty with compassion.",
          "Follow ethical and professional standards."
        ],
        "conclusion": [
          "Patient-centered communication requires sensitivity and respect.",
          "Ethical disclosure should remain compassionate and individualized."
        ]
      }
    },
    {
      "id": "AGEPOLICY_01",
      "category": "Healthcare Policy & Ageing Population",
      "difficulty": "easy",
      "text": "Singapore's ageing population is increasing demand for healthcare services. What challenges does this create for the healthcare system?",
      "followUpHints": [
        "How might chronic disease patterns change healthcare demand?",
        "What role can preventive care play?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize ageing as a major demographic challenge.",
          "Acknowledge healthcare and economic implications."
        ],
        "corePoints": [
          "Discuss chronic disease burden.",
          "Consider workforce and resource pressures.",
          "Highlight long-term care needs.",
          "Emphasize prevention and healthy ageing."
        ],
        "conclusion": [
          "Healthcare systems must adapt proactively to demographic change.",
          "Integrated and preventive care will become increasingly important."
        ]
      }
    },
    {
      "id": "AGEPOLICY_02",
      "category": "Healthcare Policy & Ageing Population",
      "difficulty": "medium",
      "text": "Governments are considering raising the retirement age for healthcare workers to address workforce shortages. Discuss the advantages and disadvantages.",
      "followUpHints": [
        "How might this affect patient safety and workforce sustainability?",
        "Should policies differ across medical specialties?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize workforce shortages as a healthcare challenge.",
          "Acknowledge both experience and ageing-related concerns."
        ],
        "corePoints": [
          "Discuss retention of expertise.",
          "Consider physical and cognitive demands of healthcare work.",
          "Evaluate workforce flexibility and policy adaptation.",
          "Balance sustainability with wellbeing."
        ],
        "conclusion": [
          "Policies should remain flexible and evidence-based.",
          "Healthcare workforce planning requires long-term strategy."
        ]
      }
    },
    {
      "id": "AGEPOLICY_03",
      "category": "Healthcare Policy & Ageing Population",
      "difficulty": "hard",
      "text": "As healthcare costs rise due to ageing populations, some policymakers propose limiting certain expensive treatments for very elderly patients. Discuss the ethical and policy implications.",
      "followUpHints": [
        "Should age influence healthcare prioritization?",
        "How can systems balance fairness, sustainability, and individual dignity?"
      ],
      "idealAnswerFramework": {
        "opening": [
          "Recognize ethical complexity in age-related healthcare policy.",
          "Acknowledge competing values of equity and sustainability."
        ],
        "corePoints": [
          "Avoid discriminatory assumptions about age.",
          "Discuss quality of life and clinical benefit.",
          "Evaluate resource stewardship and fairness.",
          "Promote transparent and evidence-based policymaking."
        ],
        "conclusion": [
          "Healthcare policy should balance dignity, fairness, and sustainability.",
          "Decisions should remain individualized and ethically justified."
        ]
      }
    }
  ],

  asia: [
    {
      "id": "ANGRY_01",
      "category": "Angry Patient Roleplay",
      "difficulty": "easy",
      "persona": "Frustrated middle-aged patient",
      "context": "A patient has been waiting in a busy emergency department for over six hours with severe back pain.",
      "text": "The patient raises their voice and says, 'Nobody here cares. I've been sitting here all day in pain while everyone ignores me. What kind of hospital is this?' Respond to the patient.",
      "followUpHints": [
        "The patient interrupts you repeatedly and says they want to file a complaint.",
        "The patient accuses staff of treating them unfairly compared to other patients."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Introduce yourself calmly and respectfully.",
          "Acknowledge the patient's frustration and discomfort."
        ],
        "empathyPoints": [
          "Validate their emotions without becoming defensive.",
          "Recognize the stress and uncertainty of long waiting times."
        ],
        "communicationApproach": [
          "Listen actively and avoid interrupting.",
          "Explain the situation honestly without making excuses.",
          "Offer practical next steps or updates if possible.",
          "Maintain calm and professional body language."
        ],
        "conclusion": [
          "Reassure the patient they have been heard.",
          "Commit to helping within your role and limitations."
        ]
      }
    },
    {
      "id": "ANGRY_02",
      "category": "Angry Patient Roleplay",
      "difficulty": "medium",
      "persona": "Parent of a sick child",
      "context": "A mother believes her child was discharged too early from hospital and has returned feeling unwell.",
      "text": "The parent says angrily, 'You people sent my child home too soon and now she's worse. Nobody listened to me the first time.' Respond to the parent.",
      "followUpHints": [
        "The parent becomes emotional and begins crying while still angry.",
        "The parent demands to know who is responsible."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Approach calmly and introduce yourself.",
          "Acknowledge the parent's fear and concern for their child."
        ],
        "empathyPoints": [
          "Recognize how distressing it is when a child is unwell.",
          "Avoid dismissing or minimizing concerns."
        ],
        "communicationApproach": [
          "Listen carefully before responding.",
          "Avoid blame or speculation.",
          "Focus on current care needs and patient safety.",
          "Use clear and compassionate language."
        ],
        "conclusion": [
          "Reassure the parent that their concerns are important.",
          "Emphasize collaborative care and ongoing assessment."
        ]
      }
    },
    {
      "id": "ANGRY_03",
      "category": "Angry Patient Roleplay",
      "difficulty": "hard",
      "persona": "Elderly patient",
      "context": "An elderly patient believes hospital staff are ignoring their requests because of their age.",
      "text": "The patient says, 'If I were younger, people here would care more. Everyone treats old people like a burden.' Respond to the patient.",
      "followUpHints": [
        "The patient says they no longer trust the healthcare team.",
        "The patient becomes withdrawn after expressing anger."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the patient's feelings respectfully.",
          "Create a calm and supportive environment."
        ],
        "empathyPoints": [
          "Recognize fears of loss of dignity and independence.",
          "Show respect for the patient's experiences and concerns."
        ],
        "communicationApproach": [
          "Use active listening and open-ended questions.",
          "Avoid becoming defensive.",
          "Explore why the patient feels overlooked.",
          "Reassure the patient that their care matters."
        ],
        "conclusion": [
          "Reinforce respect and commitment to their care.",
          "Encourage ongoing communication and trust."
        ]
      }
    },
    {
      "id": "ANXIOUS_01",
      "category": "Anxious Patient Roleplay",
      "difficulty": "easy",
      "persona": "Young adult awaiting test results",
      "context": "A patient is visibly anxious while waiting for biopsy results.",
      "text": "The patient says, 'I can't stop thinking that something is seriously wrong. I haven't slept properly in days.' Respond to the patient.",
      "followUpHints": [
        "The patient asks repeatedly if you think they have cancer.",
        "The patient becomes tearful during the conversation."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Introduce yourself calmly and warmly.",
          "Acknowledge the patient's anxiety."
        ],
        "empathyPoints": [
          "Validate uncertainty and fear.",
          "Recognize the emotional burden of waiting."
        ],
        "communicationApproach": [
          "Use reassuring but honest communication.",
          "Avoid giving false reassurance.",
          "Encourage the patient to express concerns.",
          "Provide clear information about next steps if appropriate."
        ],
        "conclusion": [
          "Ensure the patient feels supported and heard.",
          "Encourage them to seek support if anxiety worsens."
        ]
      }
    },
    {
      "id": "ANXIOUS_02",
      "category": "Anxious Patient Roleplay",
      "difficulty": "medium",
      "persona": "Elderly patient before surgery",
      "context": "An elderly patient is frightened about undergoing surgery for the first time.",
      "text": "The patient quietly says, 'What if I don't wake up after the operation?' Respond to the patient.",
      "followUpHints": [
        "The patient says they are afraid of dying alone.",
        "The patient asks whether they should cancel the surgery."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Respond calmly and respectfully.",
          "Acknowledge the patient's fear."
        ],
        "empathyPoints": [
          "Recognize vulnerability and uncertainty.",
          "Allow space for emotional expression."
        ],
        "communicationApproach": [
          "Use simple and compassionate language.",
          "Avoid dismissing fears.",
          "Encourage questions and discussion.",
          "Support informed decision-making."
        ],
        "conclusion": [
          "Reassure the patient that their concerns are valid.",
          "Encourage continued communication with the care team."
        ]
      }
    },
    {
      "id": "ANXIOUS_03",
      "category": "Anxious Patient Roleplay",
      "difficulty": "hard",
      "persona": "University student with panic symptoms",
      "context": "A student attending a clinic believes they are having a serious heart problem, but initial tests are reassuring.",
      "text": "The patient says, 'I know something is wrong with me. Nobody believes me because they think it's anxiety.' Respond to the patient.",
      "followUpHints": [
        "The patient becomes frustrated when anxiety is mentioned.",
        "The patient says they feel embarrassed and misunderstood."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the patient's distress seriously.",
          "Create a non-judgmental atmosphere."
        ],
        "empathyPoints": [
          "Validate that symptoms feel real and frightening.",
          "Avoid minimizing psychological distress."
        ],
        "communicationApproach": [
          "Listen actively and respectfully.",
          "Explain findings clearly and compassionately.",
          "Avoid labeling or dismissing concerns.",
          "Encourage ongoing support and follow-up."
        ],
        "conclusion": [
          "Reassure the patient that their wellbeing matters.",
          "Promote collaborative and supportive care."
        ]
      }
    },
    {
      "id": "BADNEWS_01",
      "category": "Breaking Bad News",
      "difficulty": "easy",
      "persona": "Middle-aged patient",
      "context": "A patient has received results showing a chronic illness requiring long-term management.",
      "text": "You must explain to the patient that they have been diagnosed with type 1 diabetes and will require lifelong treatment.",
      "followUpHints": [
        "The patient says they feel overwhelmed and scared.",
        "The patient asks if their life will ever feel normal again."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Ensure privacy and calm communication.",
          "Prepare the patient gently for serious information."
        ],
        "empathyPoints": [
          "Acknowledge shock and uncertainty.",
          "Allow pauses and emotional reactions."
        ],
        "communicationApproach": [
          "Use clear and simple language.",
          "Check understanding regularly.",
          "Avoid overwhelming the patient with information.",
          "Offer support and reassurance about management."
        ],
        "conclusion": [
          "Summarize key points clearly.",
          "Reassure ongoing support from the healthcare team."
        ]
      }
    },
    {
      "id": "BADNEWS_02",
      "category": "Breaking Bad News",
      "difficulty": "medium",
      "persona": "Family member of a patient",
      "context": "A patient's condition has deteriorated unexpectedly after surgery.",
      "text": "You need to speak with the patient's spouse and explain that the patient has developed serious complications and may require intensive care.",
      "followUpHints": [
        "The spouse becomes emotional and asks if this could have been prevented.",
        "The spouse repeatedly asks whether the patient will survive."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Introduce yourself calmly and ensure privacy.",
          "Prepare the family member for difficult information."
        ],
        "empathyPoints": [
          "Recognize fear and emotional distress.",
          "Allow time for emotional processing."
        ],
        "communicationApproach": [
          "Communicate honestly and compassionately.",
          "Avoid speculation or false reassurance.",
          "Use simple and clear explanations.",
          "Offer opportunities for questions."
        ],
        "conclusion": [
          "Summarize next steps clearly.",
          "Provide reassurance that support will continue."
        ]
      }
    },
    {
      "id": "BADNEWS_03",
      "category": "Breaking Bad News",
      "difficulty": "hard",
      "persona": "Adult child of an elderly patient",
      "context": "An elderly patient has advanced dementia and their condition is worsening significantly.",
      "text": "You must explain to the patient's daughter that her mother's dementia has progressed and independent living is no longer safe.",
      "followUpHints": [
        "The daughter says she promised never to place her mother in residential care.",
        "The daughter becomes guilty and defensive during the discussion."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Create a supportive and private environment.",
          "Acknowledge the emotional difficulty of the conversation."
        ],
        "empathyPoints": [
          "Recognize guilt, grief, and family stress.",
          "Show compassion for the daughter's emotional burden."
        ],
        "communicationApproach": [
          "Use sensitive and non-judgmental language.",
          "Focus on patient safety and wellbeing.",
          "Encourage shared decision-making.",
          "Discuss support services compassionately."
        ],
        "conclusion": [
          "Reassure the family they are not alone.",
          "Emphasize ongoing support and care planning."
        ]
      }
    },
    {
      "id": "FAMILY_01",
      "category": "Family Conflict",
      "difficulty": "easy",
      "persona": "Sibling of a hospitalized patient",
      "context": "Two siblings disagree about treatment decisions for their elderly father.",
      "text": "One sibling insists on aggressive treatment while the other believes comfort care is more appropriate. You are asked to speak with them together.",
      "followUpHints": [
        "The siblings begin arguing during the conversation.",
        "One sibling accuses the other of giving up too easily."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Establish a calm and respectful environment.",
          "Acknowledge emotions on both sides."
        ],
        "empathyPoints": [
          "Recognize family stress and grief.",
          "Validate differing perspectives compassionately."
        ],
        "communicationApproach": [
          "Encourage respectful dialogue.",
          "Refocus discussion on patient values and wishes.",
          "Avoid taking sides.",
          "Use clear and balanced communication."
        ],
        "conclusion": [
          "Promote collaborative decision-making.",
          "Emphasize patient-centered care."
        ]
      }
    },
    {
      "id": "FAMILY_02",
      "category": "Family Conflict",
      "difficulty": "medium",
      "persona": "Parent of a teenager",
      "context": "A teenager wants confidential mental health support, but their parent demands full access to all information.",
      "text": "The parent says, 'I'm their mother. I have the right to know everything.' Respond to the parent.",
      "followUpHints": [
        "The parent becomes upset and says the healthcare team is excluding them.",
        "The parent accuses the teenager of hiding dangerous behavior."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the parent's concern and care for their child.",
          "Maintain calm and respectful communication."
        ],
        "empathyPoints": [
          "Recognize parental fear and frustration.",
          "Show understanding of family tension."
        ],
        "communicationApproach": [
          "Explain confidentiality sensitively.",
          "Balance trust, safety, and patient autonomy.",
          "Encourage supportive family communication.",
          "Clarify limits of confidentiality if safety risks arise."
        ],
        "conclusion": [
          "Emphasize the importance of trust in healthcare relationships.",
          "Encourage collaborative support for the teenager."
        ]
      }
    },
    {
      "id": "FAMILY_03",
      "category": "Family Conflict",
      "difficulty": "hard",
      "persona": "Partner of a critically ill patient",
      "context": "A patient's partner wants information that the patient previously requested not be shared.",
      "text": "The partner says, 'I deserve to know what's happening. How can you keep this from me?' Respond to the partner.",
      "followUpHints": [
        "The partner becomes angry and emotionally distressed.",
        "The partner accuses staff of lacking compassion."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the partner's distress compassionately.",
          "Maintain a calm and respectful tone."
        ],
        "empathyPoints": [
          "Recognize fear, helplessness, and frustration.",
          "Show empathy without breaching confidentiality."
        ],
        "communicationApproach": [
          "Explain confidentiality clearly and sensitively.",
          "Avoid defensive language.",
          "Offer emotional support and general updates where appropriate.",
          "Maintain professional boundaries respectfully."
        ],
        "conclusion": [
          "Reinforce commitment to patient-centered care.",
          "Encourage ongoing communication and support."
        ]
      }
    },
    {
      "id": "CULTURE_01",
      "category": "Cultural Competence",
      "difficulty": "easy",
      "persona": "Patient from a culturally diverse background",
      "context": "A patient prefers using traditional healing practices alongside medical treatment.",
      "text": "The patient says, 'My family trusts traditional medicine more than hospitals.' Respond to the patient.",
      "followUpHints": [
        "The patient worries doctors will judge their beliefs.",
        "The patient asks if they can refuse certain treatments."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Approach respectfully and without judgment.",
          "Acknowledge the patient's cultural beliefs."
        ],
        "empathyPoints": [
          "Recognize the importance of cultural identity and trust.",
          "Show openness and curiosity respectfully."
        ],
        "communicationApproach": [
          "Explore the patient's beliefs and preferences.",
          "Discuss safety and evidence respectfully.",
          "Promote shared decision-making.",
          "Avoid dismissing cultural practices."
        ],
        "conclusion": [
          "Culturally safe care requires mutual respect.",
          "Collaboration improves trust and outcomes."
        ]
      }
    },
    {
      "id": "CULTURE_02",
      "category": "Cultural Competence",
      "difficulty": "medium",
      "persona": "Indigenous Australian patient",
      "context": "An Indigenous patient is reluctant to remain in hospital and says they do not feel comfortable there.",
      "text": "The patient says, 'Hospitals don't understand people like me. I just want to go home.' Respond to the patient.",
      "followUpHints": [
        "The patient shares past negative healthcare experiences.",
        "The patient becomes quiet and withdrawn during the discussion."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Approach respectfully and calmly.",
          "Acknowledge the patient's discomfort and concerns."
        ],
        "empathyPoints": [
          "Recognize historical mistrust and cultural safety issues.",
          "Show genuine respect and willingness to listen."
        ],
        "communicationApproach": [
          "Use culturally sensitive communication.",
          "Allow time and avoid rushing the conversation.",
          "Explore support options such as Indigenous liaison services.",
          "Focus on partnership and trust-building."
        ],
        "conclusion": [
          "Respect and cultural safety are essential in healthcare.",
          "Patient trust must be earned through listening and empathy."
        ]
      }
    },
    {
      "id": "CULTURE_03",
      "category": "Cultural Competence",
      "difficulty": "hard",
      "persona": "Family member of a patient from a migrant background",
      "context": "A family requests that serious medical information not be disclosed directly to the patient due to cultural beliefs.",
      "text": "The family says, 'In our culture, bad news should come to the family first, not the patient.' Respond to the family.",
      "followUpHints": [
        "The family says direct disclosure would emotionally harm the patient.",
        "The family becomes upset when autonomy is mentioned."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge cultural values respectfully.",
          "Maintain a compassionate and non-judgmental tone."
        ],
        "empathyPoints": [
          "Recognize the family's desire to protect the patient.",
          "Show sensitivity to cultural differences."
        ],
        "communicationApproach": [
          "Explore the patient's own preferences regarding information.",
          "Balance cultural respect with ethical obligations.",
          "Use collaborative and sensitive communication.",
          "Avoid imposing assumptions."
        ],
        "conclusion": [
          "Patient-centered care should remain respectful and individualized.",
          "Cultural understanding is essential in communication."
        ]
      }
    },
    {
      "id": "RURAL_01",
      "category": "Rural & Indigenous Healthcare",
      "difficulty": "easy",
      "persona": "Rural patient",
      "context": "A rural patient struggles to attend specialist appointments because the nearest hospital is several hours away.",
      "text": "The patient says, 'I can't keep travelling this far every month. It's exhausting and expensive.' Respond to the patient.",
      "followUpHints": [
        "The patient considers stopping treatment altogether.",
        "The patient says city doctors don't understand rural life."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Acknowledge the challenges of accessing rural healthcare.",
          "Show empathy for financial and personal strain."
        ],
        "empathyPoints": [
          "Recognize isolation and healthcare inequity.",
          "Validate the patient's frustration."
        ],
        "communicationApproach": [
          "Explore barriers openly.",
          "Discuss possible support options or telehealth.",
          "Use patient-centered communication.",
          "Avoid assumptions about the patient's circumstances."
        ],
        "conclusion": [
          "Healthcare access should be equitable regardless of location.",
          "Partnership and practical support are important."
        ]
      }
    },
    {
      "id": "RURAL_02",
      "category": "Rural & Indigenous Healthcare",
      "difficulty": "medium",
      "persona": "Indigenous community member",
      "context": "A healthcare outreach program has low participation from the local Indigenous community.",
      "text": "A community member says, 'People here don't trust outsiders coming in and telling us what to do.' Respond to the community member.",
      "followUpHints": [
        "The community member references past harmful experiences.",
        "The community member questions whether healthcare workers truly listen."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Approach respectfully and humbly.",
          "Acknowledge concerns about trust and history."
        ],
        "empathyPoints": [
          "Recognize historical trauma and mistrust.",
          "Show willingness to listen rather than impose."
        ],
        "communicationApproach": [
          "Use collaborative and culturally safe communication.",
          "Value community perspectives and leadership.",
          "Avoid defensive responses.",
          "Focus on long-term relationship building."
        ],
        "conclusion": [
          "Trust develops through respect and consistency.",
          "Healthcare partnerships should empower communities."
        ]
      }
    },
    {
      "id": "RURAL_03",
      "category": "Rural & Indigenous Healthcare",
      "difficulty": "hard",
      "persona": "Junior doctor considering rural placement",
      "context": "A colleague says working in rural Indigenous communities is too difficult and unlikely to make a difference.",
      "text": "Your colleague says, 'The system is broken out there anyway. Why would anyone choose to work there?' Respond to your colleague.",
      "followUpHints": [
        "The colleague argues resources should focus on urban hospitals instead.",
        "The colleague questions whether short-term placements help communities."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Respond calmly and professionally.",
          "Acknowledge the complexity of rural healthcare challenges."
        ],
        "empathyPoints": [
          "Recognize workforce pressures and burnout concerns.",
          "Maintain respect despite disagreement."
        ],
        "communicationApproach": [
          "Highlight healthcare equity and access issues.",
          "Discuss importance of culturally safe and sustainable care.",
          "Encourage reflective discussion rather than confrontation.",
          "Use balanced and evidence-informed reasoning."
        ],
        "conclusion": [
          "Rural and Indigenous healthcare deserves meaningful investment and commitment.",
          "Healthcare professionals play a role in reducing inequities."
        ]
      }
    },
    {
      "id": "MENTAL_01",
      "category": "Mental Health & Empathy",
      "difficulty": "easy",
      "persona": "University student",
      "context": "A student has been feeling persistently low and overwhelmed but is reluctant to seek help.",
      "text": "The student says, 'Everyone else seems to cope fine. Maybe I'm just weak.' Respond to the student.",
      "followUpHints": [
        "The student becomes embarrassed while speaking.",
        "The student says they don't want others to judge them."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Create a safe and non-judgmental environment.",
          "Acknowledge the student's feelings."
        ],
        "empathyPoints": [
          "Normalize emotional struggles compassionately.",
          "Recognize stigma around mental health."
        ],
        "communicationApproach": [
          "Use supportive and validating language.",
          "Encourage open discussion.",
          "Avoid minimizing experiences.",
          "Promote help-seeking and support options."
        ],
        "conclusion": [
          "Reassure the student they are not alone.",
          "Encourage ongoing support and communication."
        ]
      }
    },
    {
      "id": "MENTAL_02",
      "category": "Mental Health & Empathy",
      "difficulty": "medium",
      "persona": "Middle-aged man experiencing depression",
      "context": "A patient appears emotionally withdrawn and says they have lost interest in daily life.",
      "text": "The patient quietly says, 'My family would probably be better off without me.' Respond to the patient.",
      "followUpHints": [
        "The patient becomes silent after making the statement.",
        "The patient says they feel ashamed discussing emotions."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Respond calmly and seriously.",
          "Acknowledge the emotional weight of the statement."
        ],
        "empathyPoints": [
          "Show compassion without judgment.",
          "Recognize possible hopelessness and isolation."
        ],
        "communicationApproach": [
          "Use active listening and supportive language.",
          "Encourage the patient to share more.",
          "Assess safety sensitively.",
          "Promote professional support and connection."
        ],
        "conclusion": [
          "Reassure the patient that support is available.",
          "Emphasize that their wellbeing matters."
        ]
      }
    },
    {
      "id": "MENTAL_03",
      "category": "Mental Health & Empathy",
      "difficulty": "hard",
      "persona": "Teenager in emotional crisis",
      "context": "A teenager presents after self-harming and is defensive about discussing what happened.",
      "text": "The teenager says angrily, 'You don't understand anything about my life, so stop pretending you care.' Respond to the teenager.",
      "followUpHints": [
        "The teenager refuses eye contact and shuts down emotionally.",
        "The teenager says they do not trust adults anymore."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Remain calm and non-judgmental.",
          "Acknowledge the teenager's anger and distress."
        ],
        "empathyPoints": [
          "Recognize feelings of mistrust and emotional pain.",
          "Avoid forcing disclosure or confrontation."
        ],
        "communicationApproach": [
          "Use patient and supportive communication.",
          "Respect emotional boundaries while ensuring safety.",
          "Encourage trust gradually.",
          "Avoid dismissive or authoritative responses."
        ],
        "conclusion": [
          "Reassure the teenager they deserve support and safety.",
          "Maintain a compassionate and steady presence."
        ]
      }
    },
    {
      "id": "ETHCOMM_01",
      "category": "Ethical Communication",
      "difficulty": "easy",
      "persona": "Patient requesting confidential information",
      "context": "A patient asks whether another family member has shared information with the healthcare team.",
      "text": "The patient says, 'Just tell me exactly what my partner said about me.' Respond to the patient.",
      "followUpHints": [
        "The patient becomes suspicious and frustrated.",
        "The patient accuses staff of hiding information."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Respond calmly and respectfully.",
          "Acknowledge the patient's concern."
        ],
        "empathyPoints": [
          "Recognize uncertainty and frustration.",
          "Maintain trust through respectful communication."
        ],
        "communicationApproach": [
          "Explain confidentiality clearly.",
          "Avoid disclosing inappropriate information.",
          "Encourage open communication between family members.",
          "Maintain professional boundaries."
        ],
        "conclusion": [
          "Reassure the patient that confidentiality protects everyone involved.",
          "Encourage supportive dialogue where appropriate."
        ]
      }
    },
    {
      "id": "ETHCOMM_02",
      "category": "Ethical Communication",
      "difficulty": "medium",
      "persona": "Patient with low health literacy",
      "context": "A patient nods throughout a consultation but later admits they did not understand the treatment plan.",
      "text": "The patient quietly says, 'I didn't want to seem stupid by asking questions.' Respond to the patient.",
      "followUpHints": [
        "The patient says medical language feels intimidating.",
        "The patient becomes embarrassed during the discussion."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Respond warmly and without judgment.",
          "Normalize asking questions."
        ],
        "empathyPoints": [
          "Recognize embarrassment and fear of judgment.",
          "Create a supportive learning environment."
        ],
        "communicationApproach": [
          "Use simple and clear explanations.",
          "Check understanding using teach-back methods.",
          "Encourage questions openly.",
          "Avoid medical jargon."
        ],
        "conclusion": [
          "Good communication is the clinician's responsibility.",
          "Patients should feel empowered to ask questions."
        ]
      }
    },
    {
      "id": "ETHCOMM_03",
      "category": "Ethical Communication",
      "difficulty": "hard",
      "persona": "Patient receiving a medical error disclosure",
      "context": "A patient received the wrong medication dose but suffered no lasting harm.",
      "text": "You must explain to the patient that a medication error occurred during their care.",
      "followUpHints": [
        "The patient asks whether someone will be punished.",
        "The patient says they no longer trust the hospital."
      ],
      "idealAnswerFramework": {
        "opening": [
          "Ensure privacy and calm communication.",
          "Disclose the error honestly and clearly."
        ],
        "empathyPoints": [
          "Acknowledge distress and loss of trust.",
          "Offer a sincere apology where appropriate."
        ],
        "communicationApproach": [
          "Use transparent and accountable communication.",
          "Avoid defensiveness or blame-shifting.",
          "Explain corrective actions and safety measures.",
          "Allow time for questions and emotions."
        ],
        "conclusion": [
          "Patient trust depends on honesty and accountability.",
          "Ongoing support and transparency are essential."
        ]
      }
    }
  ]
};

//   asia: [
//     {
//       id: "sg_001",
//       text: "Singapore has one of the world's most efficient healthcare systems. Describe the key structural elements that contribute to its success and critically evaluate one area where improvement is needed.",
//       category: "Healthcare Systems",
//       difficulty: "medium",
//     },
//     {
//       id: "sg_002",
//       text: "Using an established ethical framework (such as the four principles of biomedical ethics), analyse the ethical implications of mandatory genetic testing for serious hereditary conditions in Singapore's population.",
//       category: "Bioethics",
//       difficulty: "hard",
//     },
//     {
//       id: "sg_003",
//       text: "Artificial intelligence is increasingly being used in diagnostic medicine. Discuss both the opportunities and the ethical challenges this presents for the doctor-patient relationship.",
//       category: "Technology & Ethics",
//       difficulty: "medium",
//     },
//     {
//       id: "sg_004",
//       text: "Singapore faces a rapidly ageing population. As a future doctor, what structural and attitudinal changes do you believe the medical community must make to prepare for this demographic shift?",
//       category: "Public Health",
//       difficulty: "medium",
//     },
//     {
//       id: "sg_005",
//       text: "A medical researcher discovers that a standard treatment protocol used for 20 years may be slightly less effective than a newer, more expensive alternative. What are the ethical and practical considerations in transitioning care guidelines?",
//       category: "Research & Evidence",
//       difficulty: "hard",
//     },
//   ],
// };

module.exports = QUESTION_BANK;
