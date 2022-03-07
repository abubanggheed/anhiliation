
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { charMap } from '../characteristic'

export const prospectorPath = [
  [//0
    skills[7],
    nameAddOn(skills[8], ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (Geography)'),
    nameAddOn(skills[17], ' (Surface)'),
    nameAddOn(skills[17], ' (Sea)'),
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Radiation)'),
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Toxic)'),
    nameAddOn(skills[20], ' (Geology)'),
    nameAddOn(skills[20], ' (Ecology)'),
    nameAddOn(skills[28], ' (Mining)'),
    nameAddOn(skills[28], ' (Wrangling)'),
    nameAddOn(tier0[8], ' (Infantry)')
  ],
  [//1
    skills[2],
    tier1[0],
    prereqAddOn(skills[7]),
    nameAddOn(skills[8], ' (Creatures)'),
    tier1[14],
    nameAddOn(aptAddOn(tier0[5], charMap.M), ' (Exposure)'),
    skills[19],
    prereqAddOn(skills[20], 2, ' (Geology)'),
    prereqAddOn(skills[20], 2, ' (Ecology)'),
    nameAddOn(skills[20], ' (Chemistry)'),
    tier1[20],
    skills[26],
    nameAddOn(tier0[8], ' (Melee)'),
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//2
    skills[1],
    tier0[1],
    prereqAddOn(skills[8], 2, ' (Creatures)'),
    tier1[1],
    tier1[9],
    skills[15],
    prereqAddOn(skills[17], 2, ' (Surface)'),
    prereqAddOn(skills[17], 2, ' (Sea)'),
    skills[21],
    tier1[19],
    prereqAddOn(skills[28], 2, ' (Mining)'),
    nameAddOn(tier0[8], ' (Turret)')
  ],
  [//3
    skills[5],
    tier1[2],
    skills[9],
    tier1[4],
    skills[16],
    nameAddOn(skills[17], ' (Subterranean)'),
    tier1[10],
    prereqAddOn(skills[20], 2, ' (Chemistry)'),
    skills[22],
    skills[24],
    prereqAddOn(skills[28], 2, ' (Wrangling)')
  ],
  [//4
    prereqAddOn(skills[2]),
    prereqAddOn(skills[7], 4),
    tier2[24],
    tier2[8],
    tier3[27],
    prereqAddOn(skills[19]),
    prereqAddOn(skills[20], 4, ' (Geology)'),
    prereqAddOn(skills[20], 4, ' (Ecology)')
  ],
  [//5
    prereqAddOn(skills[1]),
    prereqAddOn(skills[8], 4, ' (Geography)'),
    tier2[11],
    prereqAddOn(skills[15]),
    tier2[16],
    tier1[15],
    prereqAddOn(skills[26]),
    prereqAddOn(skills[28], 4, ' (Wrangling)')
  ],
  [//6
    prereqAddOn(skills[8], 4, ' (Creatures)'),
    tier3[1],
    tier2[13],
    prereqAddOn(skills[16]),
    tier2[21],
    prereqAddOn(skills[28], 4, ' (Mining)')
  ],
  [//7
    tier2[15],
    tier2[19],
    prereqAddOn(skills[19], 4),
    prereqAddOn(skills[20], 4, ' (Chemistry)'),
    tier2[25],
    tier2[20]
  ],
  [//8
    prereqAddOn(skills[1], 4),
    tier3[4],
    tier3[12],
    prereqAddOn(skills[15], 4),
    tier3[18]
  ]
]

export const prospectorRanks = [
  'Crypto Currency Enthusiast',
  'Pioneer',
  'Snake Oil Dealer',
  'Entrepreneur',
  'Poacher',
  'Franchise Owner',
  'Tax Evader',
  'Business Mogal',
  'Captain of Industry'
]
