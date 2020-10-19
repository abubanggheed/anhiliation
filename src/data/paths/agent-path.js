
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { characteristics } from '../characteristic'

export const agentPath = [
  [//0
    skills[0],
    tier0[0],
    skills[2],
    nameAddOn(skills[8], ' (Geography)'),
    skills[9],
    skills[10],
    skills[22],
    skills[27],
    nameAddOn(tier0[8], ' (Pistol)'),
    nameAddOn(tier0[8], ' (Unarmed)')
  ],
  [//1
    skills[11],
    nameAddOn(skills[17], ' (Urban)'),
    tier2[15],
    nameAddOn(skills[20], ' (Crime)'),
    skills[21],
    prereqAddOn(skills[22]),
    tier0[6],
    skills[24],
    tier1[20]
  ],
  [//2
    skills[1],
    prereqAddOn(skills[2]),
    tier0[2],
    skills[4],
    prereqAddOn(skills[9]),
    tier1[15],
    tier1[10],
    nameAddOn(aptAddOn(tier0[5], characteristics[6]), ' (Feedback)'),
    nameAddOn(aptAddOn(tier0[5], characteristics[6]), ' (Mind Control)'),
    tier1[19],
    skills[23],
    tier0[6],
    tier0[7],
    skills[25],
    prereqAddOn(skills[27]),
    nameAddOn(tier0[8], ' (Infantry)'),
    nameAddOn(tier0[8], ' (Melee)')
  ],
  [//3
    prereqAddOn(skills[0]),
    tier0[3],
    nameAddOn(skills[8], ' (War)'),
    tier1[9],
    prereqAddOn(skills[10]),
    skills[12],
    prereqAddOn(skills[21]),
    prereqAddOn(skills[22], 4),
    tier0[6],
    tier1[16],
    nameAddOn(tier0[8], ' (Improvised)')
  ],
  [//4
    prereqAddOn(skills[0], 4),
    prereqAddOn(skills[1]),
    prereqAddOn(skills[8], 2, ' (Geography)'),
    tier1[2],
    tier1[4],
    tier2[6],
    prereqAddOn(skills[11]),
    tier3[12],
    tier2[16],
    tier2[20],
    tier1[25]
  ],
  [//5
    prereqAddOn(skills[2], 4),
    prereqAddOn(skills[4]),
    prereqAddOn(skills[9], 4),
    tier2[8],
    tier2[9],
    prereqAddOn(skills[12]),
    tier3[10],
    tier2[19],
    prereqAddOn(skills[20], 2, ' (Crime)'),
    prereqAddOn(skills[24]),
    nameAddOn(tier1[22], ' x2')
  ],
  [//6
    prereqAddOn(skills[3]),
    prereqAddOn(skills[8], 4, ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (War)'),
    tier3[1],
    tier1[13],
    tier3[14],
    prereqAddOn(skills[15]),
    tier1[14],
    tier3[23],
    prereqAddOn(skills[23]),
    prereqAddOn(skills[25]),
    tier2[21]
  ],
  [//7
    prereqAddOn(skills[1], 4),
    prereqAddOn(skills[4], 4),
    tier2[3],
    tier1[7],
    prereqAddOn(skills[10], 4),
    tier2[11],
    tier3[18],
    prereqAddOn(skills[24], 4),
    prereqAddOn(skills[27], 4)
  ],
  [//8
    prereqAddOn(skills[11], 4),
    tier3[9],
    tier3[16],
    prereqAddOn(skills[21], 4),
    prereqAddOn(skills[23], 4),
    tier2[22],
    prereqAddOn(skills[25], 4),
    tier3[20]
  ]
]

export const agentRanks = [
  'Unsuspecting Decoy',
  'Spare Asset',
  'Hostage Negotiator',
  'Long Term Infiltrator',
  'Sabetour',
  'Assassin',
  'Coup Coordinator',
  'Special Agent',
  '<Redacted>'
]
