
import { skills } from '../skill'
import { charMap } from '../characteristic'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'

export const bumPath = [
  [//0
    skills[3],
    prereqAddOn(skills[3]),
    skills[4],
    tier1[6],
    skills[10],
    tier2[9],
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Toxin)'),
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Exposure)'),
    skills[26],
    nameAddOn(tier0[8], ' (Improvised)')
  ],
  [//1
    prereqAddOn(skills[3], 4),
    tier0[1],
    prereqAddOn(skills[4]),
    nameAddOn(skills[17], ' (Any)'),
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Starvation)'),
    tier1[26],
    nameAddOn(tier0[8], ' (Melee)'),
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//2
    prereqAddOn(skills[4], 4),
    skills[5],
    tier3[2],
    tier1[27],
    tier3[6],
    tier1[11],
    skills[19],
    prereqAddOn(skills[26]),
    nameAddOn(skills[28], ' (Any)')
  ],
  [//3
    skills[2],
    skills[9],
    tier1[5],
    prereqAddOn(skills[10]),
    skills[12],
    tier0[4],
    tier2[15],
    skills[23]
  ],
  [//4
    tier2[0],
    tier1[3],
    tier2[24],
    prereqAddOn(skills[17], 2, ' (Any)'),
    tier3[23],
    tier1[20],
    tier1[23]
  ],
  [//5
    tier3[7],
    tier1[10],
    tier2[3],
    tier1[19],
    prereqAddOn(skills[26], 4)
  ],
  [//6
    prereqAddOn(skills[5]),
    tier2[8],
    tier2[18],
    tier2[25],
    prereqAddOn(skills[28], 2, ' (Any)'),
    tier3[24]
  ],
  [//7
    tier3[25],
    tier2[1],
    tier3[3],
    prereqAddOn(skills[10], 4)
  ],
  [//8
    prereqAddOn(skills[5], 4),
    tier3[4],
    tier2[16],
    prereqAddOn(skills[17], 4, ' (Any)'),
  ]
]

export const bumRanks = [
  'Dead End Employee',
  'Pre-Successful Entrepreneur',
  'Failure',
  'Tourist Deterent',
  'Societal Embarasment',
  'Cautionary Tale for Children',
  'Enlightened',
  'Philosophical Icon',
  'Messiah'
]
