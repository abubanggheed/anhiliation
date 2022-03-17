
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { charMap } from '../characteristic'

export const goonPath = [
  [//0
    skills[1],
    skills[4],
    tier1[14],
    skills[19],
    tier1[19],
    tier1[21],
    nameAddOn(tier0[8], ' (Infantry)'),
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//1
    tier0[0],
    skills[2],
    tier1[0],
    tier1[1],
    skills[12],
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Fear)'),
    tier1[20],
    nameAddOn(tier0[8], ' (Melee)'),
    nameAddOn(tier0[8], ' (Turret)')
  ],
  [//2
    prereqAddOn(skills[1]),
    nameAddOn(skills[8], ' (Creatures)'),
    tier1[5],
    tier1[6],
    tier0[7],
    tier1[17],
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Force)'),
    skills[26],
    nameAddOn(tier0[8], ' (Heavy)'),
    nameAddOn(tier0[8], ' (Artillery)'),
    nameAddOn(tier0[8], ' (Unarmed)')
  ],
  [//3
    prereqAddOn(skills[1], 4),
    tier0[1],
    skills[6],
    nameAddOn(skills[8], ' (War)'),
    tier1[2],
    tier1[27],
    tier2[11],
    tier1[10],
    tier2[20]
  ],
  [//4
    prereqAddOn(skills[4]),
    tier2[24],
    tier3[6],
    tier1[15],
    nameAddOn(aptAddOn(tier0[5], charMap.W), ' (Mind Control)'),
    prereqAddOn(skills[19]),
    tier2[21],
    tier1[25]
  ],
  [//5
    prereqAddOn(skills[2]),
    tier2[1],
    tier2[4],
    tier1[4],
    tier2[22],
    prereqAddOn(skills[12]),
    tier3[11],
    tier1[13],
    tier2[16],
    tier2[25],
  ],
  [//6
    tier2[0],
    prereqAddOn(skills[6]),
    prereqAddOn(skills[8], 2, ' (War)'),
    tier3[1],
    tier2[5],
    tier2[12],
    tier2[14]
  ],
  [//7
    prereqAddOn(skills[4], 4),
    tier3[8],
    prereqAddOn(skills[12], 4),
    tier2[10],
    tier3[13],
    tier3[28],
    tier1[23],
    tier3[21]
  ],
  [//8
    tier2[2],
    prereqAddOn(skills[8], 4, ' (War)'),
    tier3[31],
    tier3[2],
    tier3[7],
    prereqAddOn(skills[19], 4),
    tier3[17]
  ]
]

export const goonRanks = [
  'Harmonica Player',
  'Parking Lot Security Officer',
  'Bouncer',
  'Bargain Muscle',
  'Career Soldier',
  'Enforcer',
  'VIP Bodyguard',
  'Exterminator',
  'Real Live Action Hero'
]
