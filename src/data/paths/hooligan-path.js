
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const hooliganPath = [
  [//0
    tier0[0],
    tier0[1],
    skills[10],
    skills[12],
    nameAddOn(skills[17], ' (Urban)'),
    skills[19],
    nameAddOn(skills[20], ' (Crime)'),
    skills[23],
    nameAddOn(skills[28], ' (Any)'),
    nameAddOn(tier0[8], ' (Improvised)'),
    nameAddOn(tier0[8], ' (Unarmed)')
  ],
  [//1
    skills[2],
    skills[3],
    skills[4],
    tier0[3],
    tier1[5],
    tier1[11],
    prereqAddOn(skills[12]),
    tier0[7],
    nameAddOn(tier0[8], ' (Melee)'),
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//2
    skills[0],
    skills[5],
    skills[9],
    tier1[3],
    prereqAddOn(skills[10]),
    prereqAddOn(skills[17], 2, ' (Urban)'),
    tier1[10],
    skills[21],
    prereqAddOn(skills[23]),
    tier1[20],
    tier1[23],
    tier1[25]
  ],
  [//3
    skills[1],
    prereqAddOn(skills[3]),
    skills[7],
    tier1[2],
    tier1[1],
    tier2[6],
    tier1[7],
    tier0[4],
    tier2[15],
    prereqAddOn(skills[12], 4),
    prereqAddOn(skills[20], 2, ' (Crime)'),
    skills[22],
    tier1[19],
    nameAddOn(tier0[8], ' (Infantry)')
  ],
  [//4
    prereqAddOn(skills[2]),
    prereqAddOn(skills[4]),
    tier1[0],
    tier3[3],
    tier2[24],
    tier2[14],
    tier2[16],
    tier1[15],
    tier2[18],
    prereqAddOn(skills[19]),
    tier2[25],
    tier2[21],
    prereqAddOn(skills[28], 2, ' (Any)')
  ],
  [//5
    prereqAddOn(skills[0]),
    prereqAddOn(skills[9]),
    tier1[4],
    prereqAddOn(skills[10], 4),
    tier2[11],
    tier2[12],
    tier2[17],
    prereqAddOn(skills[21]),
    prereqAddOn(skills[23], 4),
    tier3[20]
  ],
  [//6
    prereqAddOn(skills[2], 4),
    prereqAddOn(skills[3], 4),
    prereqAddOn(skills[5]),
    tier2[8],
    tier1[8],
    tier3[9],
    tier3[13],
    prereqAddOn(skills[22]),
    tier3[18],
    tier1[26]
  ],
  [//7
    prereqAddOn(skills[0], 4),
    prereqAddOn(skills[17], 4, ' (Urban)'),
    tier2[9],
    tier3[10],
    tier3[14],
    tier2[19],
    prereqAddOn(skills[19], 4)
  ],
  [//8,
    prereqAddOn(skills[4], 4),
    tier3[8],
    tier3[11],
    tier3[12],
    prereqAddOn(skills[20], 4, ' (Crime)'),
    tier3[17],
    tier2[20]
  ]
]

export const hooliganRanks = [
  'Giver of Shady Looks',
  'Petty Thief',
  'Alleyway Mugger',
  'Procedurally Generated Bandit',
  'Bounty',
  'Disorder Conductor',
  'Heist Leader',
  'Crime Pariah',
  'Public Enemy'
]
