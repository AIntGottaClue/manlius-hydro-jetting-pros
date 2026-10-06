export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "manlius-village",
    "name": "Manlius Village",
    "h1": "Hydro Jetting in Manlius Village, Manlius NY",
    "title": "Hydro Jetting in Manlius Village, Manlius | Manlius Hydro Jetting Pros",
    "description": "Hydro jetting in Manlius Village, NY: how an 1813 village with a historic district shapes drain line questions and how cleaning gets planned. Call (877) 761-0283.",
    "intro": "Manlius Village was incorporated in 1813 and has a historic district on the National Register. Drain condition matters more than the age or setting of the area.",
    "heroPs": [
      "Homes and buildings in Manlius Village can develop slow drains from kitchen grease, scale or roots, and older properties often have a mix of original and replacement pipe. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Describe the affected fixtures and what happened after the last cleaning."
    ],
    "bodyH2": "Hydro Jetting for Manlius Village Properties",
    "bodyPs": [
      "The village historian records incorporation in 1813 and a historic district entered on the National Register in 1973. After World War Two, water service expanded, and a developer-built sewage treatment system was later taken over for public operation. That history means the village has a core of older buildings and areas that grew in stages.",
      "Buildings from different periods carry different plumbing. A line may have started as clay, been patched with newer material and rerouted when the building changed use. Each of those details matters when deciding how to clean it.",
      "Hydro jetting clears a line with a high-pressure water stream and can remove grease, scale and roots a snake only punches through. On older lines the inspection decides whether it is safe and where the stream should stop."
    ],
    "considerations": [
      "What the line is made of and whether it is original, patched or replaced",
      "Past repairs, remodels or changes of use",
      "Mature trees near the path of the lateral",
      "Where the cleanout is and whether it is easy to reach",
      "Whether the building is a home, a shop or both",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in Manlius Village",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Older kitchens and village eateries can build a hardened grease layer over many years.",
      "tree-root-intrusions": "Mature village trees are common near older laterals.",
      "recurring-clogs-and-slow-drains": "A patchwork line can hold residue at the points where materials change.",
      "mineral-and-scale-deposits": "Scale can build gradually in older pipe and narrow it at joints.",
      "preventative-maintenance": "A camera look before trouble starts helps decide what the line needs."
    },
    "appsH2": "Hydro Jetting Situations in a Historic Village",
    "apps": [
      {
        "h": "Buildings with a patchwork of pipe",
        "ps": [
          "Older buildings often have several materials in one line. Tell the crew where the changes are so high pressure is used with care."
        ]
      },
      {
        "h": "Historic-district properties",
        "ps": [
          "If a property is in the historic district, exterior work may be reviewed. Ask whether a cleaning or repair touches anything the district covers."
        ]
      },
      {
        "h": "Roots near older joints",
        "ps": [
          "Older joints give roots an opening. Jetting can clear roots from a sound line, though the opening may still need attention."
        ]
      },
      {
        "h": "Planned cleaning before a repeat",
        "ps": [
          "Where a line has backed up before, a cleaning after inspection beats waiting for the next one."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Manlius Village",
    "implPs": [
      "A village with a long history rewards a careful first look. The record of what has been done to a line is seldom complete.",
      "These are the points that shape the work in Manlius Village."
    ],
    "impl": [
      {
        "h": "Material is a camera question",
        "ps": [
          "Clay, cast iron and plastic can all appear in one lateral. Condition, not age, decides the method."
        ],
        "bullets": [
          "Share any repair records",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Historic-district considerations",
        "ps": [
          "Work that affects the exterior of a protected property may be reviewed locally."
        ],
        "bullets": [
          "Ask the village before planning exterior work",
          "Tell the crew if the property is in the district"
        ]
      },
      {
        "h": "Private line, public main",
        "ps": [
          "The public sewer is separate from your lateral. The location of the blockage decides who handles it."
        ],
        "bullets": [
          "Note whether neighbors are affected",
          "Ask the village about the public side"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Manlius Village",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Find the cleanout",
        "d": "Locate the access point and note any remodel work or exterior changes that could have moved or covered it."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Manlius Village, Manlius NY",
    "mapIntro": "Manlius Hydro Jetting Pros takes requests in Manlius Village and across Manlius. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Village of Manlius, NY",
    "mapTitle": "Map of Manlius Village, Manlius, NY",
    "nearbyH2": "Serving Manlius Village and Nearby Manlius Neighborhoods",
    "nearbyP": "Manlius Hydro Jetting Pros serves Manlius Village and the rest of Manlius, including Minoa. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Manlius Village",
    "faqs": [
      {
        "q": "Is my property in the historic district?",
        "a": "The village can tell you. If it is, ask whether any planned exterior work needs review before it starts."
      },
      {
        "q": "Does a historic village mean old pipe?",
        "a": "Not necessarily. Local history does not identify a private pipe's age, material or condition. Records and an inspection do."
      },
      {
        "q": "Why does my drain keep slowing?",
        "a": "Residue may be building in the line, or roots may be growing back. An inspection can tell which."
      },
      {
        "q": "Is high pressure safe for older lines?",
        "a": "It depends on condition. A sound line can take it, and a cracked one may need repair first."
      },
      {
        "q": "How do I know who handles a backup?",
        "a": "If one property is affected, look at the private lateral first. If several are, report it to the village as well."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Manlius Village Hydro Jetting Project With Manlius Hydro Jetting Pros",
    "ctaPs": [
      "A village that dates to 1813 gives every property a layered plumbing history. A clear description of the symptoms and past work points the inspection in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what you are seeing."
    ]
  },
  {
    "slug": "minoa",
    "name": "Minoa",
    "h1": "Hydro Jetting in Minoa, Manlius NY",
    "title": "Hydro Jetting in Minoa, Manlius | Manlius Hydro Jetting Pros",
    "description": "Hydro jetting in Minoa, Manlius NY: how a village with its own wastewater system affects drain line questions and cleaning plans. Call (877) 761-0283.",
    "intro": "Minoa runs its own wastewater treatment facility and sewer collection system. A village system says nothing about the condition of an individual private lateral.",
    "heroPs": [
      "Homes in Minoa can develop slow drains from grease, scale or roots, and a village sewer system does not tell you what your own line looks like. Hydro jetting can clear buildup from a sound lateral when an inspection shows it fits. Describe the affected fixtures and any backup so the crew can tell a private problem from a public one."
    ],
    "bodyH2": "Hydro Jetting for Minoa Properties",
    "bodyPs": [
      "Minoa operates its own wastewater treatment facility, and the village describes a collection system with 28.5 miles of sewer and one main pump station. That is a sizable system for a village, and it handles the public side of every connection in town.",
      "The public system stops at the connection. From there to the house, the lateral is the property owner's, and its condition varies from home to home. A well-run village system does not make a private line sound, and a clogged private line does not mean the village system has a problem.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. The inspection tells you whether the lateral can take it, and whether the blockage is yours or belongs to the public side."
    ],
    "considerations": [
      "Which fixtures are slow and whether any backup reaches the lowest drains",
      "Whether neighbors are seeing the same symptoms",
      "Where the cleanout is and whether it is easy to reach",
      "Trees near the path of the lateral",
      "Any past cleanings, repairs or replaced sections",
      "Whether the home connects to the village sewer"
    ],
    "svcH2": "Hydro Jetting Services in Minoa",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "A busy kitchen can load a lateral with grease regardless of the village system behind it.",
      "tree-root-intrusions": "Roots enter laterals at joints, on private property.",
      "recurring-clogs-and-slow-drains": "A repeat clog on a private line needs a diagnosis, not another quick clear.",
      "mineral-and-scale-deposits": "Scale builds on the wall of a private line and narrows it over time.",
      "preventative-maintenance": "A planned cleaning can keep a private lateral clear between inspections."
    },
    "appsH2": "Hydro Jetting Situations in a Village With Its Own Sewer System",
    "apps": [
      {
        "h": "Sorting private from public",
        "ps": [
          "If a backup affects one home, the lateral is the usual place to look. If several homes back up together, report it to the village as well."
        ]
      },
      {
        "h": "Kitchen lines that keep slowing",
        "ps": [
          "Grease is the usual cause. Jetting strips the layer from the pipe wall when the pipe can take the pressure."
        ]
      },
      {
        "h": "Roots at the property line",
        "ps": [
          "Roots can enter a lateral where it passes trees on the lot. An inspection shows whether they are present and how far they have gone."
        ]
      },
      {
        "h": "Planned upkeep for a known history",
        "ps": [
          "A line that has clogged more than once will often clog again. A planned cleaning after an inspection beats an emergency call."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Minoa",
    "implPs": [
      "A village-run sewer system makes the public and private split clear. It also puts the private side squarely on the property owner.",
      "These are the points that shape the work in Minoa."
    ],
    "impl": [
      {
        "h": "Where the public system ends",
        "ps": [
          "The village handles the public sewer. The lateral from the house to the connection is private."
        ],
        "bullets": [
          "Locate your cleanout and connection point",
          "Ask the village where its responsibility begins"
        ]
      },
      {
        "h": "A sound system does not mean a sound lateral",
        "ps": [
          "The village's capacity says nothing about your line's condition."
        ],
        "bullets": [
          "Request an inspection before assuming",
          "Share any past repair records"
        ]
      },
      {
        "h": "Cleaning versus repair",
        "ps": [
          "Jetting clears an obstruction and does not mend a crack."
        ],
        "bullets": [
          "Ask what the camera shows",
          "Plan for a repair assessment if one is advised"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Minoa",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Locate the cleanout",
        "d": "Find the access point and note where the lateral runs toward the village connection."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Minoa, Manlius NY",
    "mapIntro": "Manlius Hydro Jetting Pros takes requests in Minoa and across Manlius. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Village of Minoa, NY",
    "mapTitle": "Map of Minoa, Manlius, NY",
    "nearbyH2": "Serving Minoa and Nearby Manlius Neighborhoods",
    "nearbyP": "Manlius Hydro Jetting Pros serves Minoa and the rest of Manlius, including Manlius Village. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Minoa",
    "faqs": [
      {
        "q": "Does the village's wastewater system affect my private line?",
        "a": "The village handles the public side. Your lateral is a separate question, and only an inspection can tell you its condition."
      },
      {
        "q": "Who is responsible for a backup in my home?",
        "a": "If the blockage sits in the private lateral, it is the property owner's to resolve. A public-main blockage is for the village."
      },
      {
        "q": "Why does my line clog even though the village system is sound?",
        "a": "The cause is usually inside the private line, such as grease, scale or roots. A camera inspection can tell which."
      },
      {
        "q": "Can hydro jetting clear roots?",
        "a": "On a sound pipe, yes. The opening where roots entered may still need repair."
      },
      {
        "q": "What should I tell the crew when I call?",
        "a": "List the affected fixtures, when it started, and whether neighbors have similar problems."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Minoa Hydro Jetting Project With Manlius Hydro Jetting Pros",
    "ctaPs": [
      "A village system handles the public side and leaves the private side to you, so knowing where each begins is a good first step. A clear description of the symptoms makes the inspection faster.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
