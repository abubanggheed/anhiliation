
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { charMap } from '../characteristic'

export const zealotPath = [
  [//0
    skills[6],
    skills[12],
    tier2[10],
    tier1[6],
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Fear)'),
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Mind Control)'),
    tier1[19],
    nameAddOn(tier0[8], ' (Improvised)'),
    nameAddOn(tier0[8], ' (Melee)'),
    nameAddOn(tier0[8], ' (Infantry)')
  ],
  [//1
    nameAddOn(skills[8], ' (Religion)'),
    tier1[27],
    skills[11],
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Starvation)'),
    skills[21],
    skills[24],
    tier1[26],
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//2
    prereqAddOn(skills[6]),
    tier2[2],
    nameAddOn(skills[8], ' (Creatures)'),
    nameAddOn(skills[8], ' (History)'),
    tier1[2],
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Radiation)'),
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Exposure)'),
    tier1[20],
    nameAddOn(tier0[8], ' (Artillery)')
  ],
  [//3
    tier2[1],
    prereqAddOn(skills[8], 2, ' (Religion)'),
    tier2[4],
    tier2[5],
    tier3[6],
    prereqAddOn(skills[12]),
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Force)'),
    skills[19]
  ],
  [//4
    tier2[0],
    tier2[3],
    tier2[24],
    prereqAddOn(skills[11]),
    tier1[11],
    tier2[11],
    prereqAddOn(skills[24]),
    tier2[21]
  ],
  [//5
    prereqAddOn(skills[6], 4),
    prereqAddOn(skills[8], 4, ' (Religion)'),
    tier2[7],
    tier3[11],
    tier2[16],
    tier1[15],
    prereqAddOn(skills[21])
  ],
  [//6
    tier3[2],
    prereqAddOn(skills[12], 4),
    tier2[14],
    tier3[16],
    prereqAddOn(skills[24], 4),
    tier1[25]
  ],
  [//7
    tier3[8],
    prereqAddOn(skills[11], 4),
    tier3[22],
    tier3[24]
  ],
  [//8
    tier3[25],
    tier3[13],
    tier3[17],
    tier3[21]
  ]
]

export const zealotRanks = [
  'Sacrifice',
  'Homeless Doomsayer',
  'Neonate',
  'Brochure Dispenser',
  'Public Ranter',
  'Inquisitor',
  'Mob General',
  'Cult Leader',
  'Prophet'
]
