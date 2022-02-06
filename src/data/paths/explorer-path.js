
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { characteristics } from '../characteristic'

export const explorerPath = [
  [//0
    skills[1],
    nameAddOn(skills[8], ' (Geography)'),
    nameAddOn(skills[8], ' (Creatures)'),
    nameAddOn(skills[17], ' (Surface)'),
    nameAddOn(skills[17], ' (Sea)'),
    nameAddOn(aptAddOn(tier0[5], characteristics[2]), ' (Exposure)'),
    skills[19],
    skills[26],
    nameAddOn(tier0[8], ' (Infantry)')
  ],
  [//1
    skills[2],
    tier2[8],
    prereqAddOn(skills[17], 2, ' (Surface)'),
    nameAddOn(skills[17], ' (Subterranean)'),
    tier1[10],
    tier1[14],
    nameAddOn(aptAddOn(tier0[5], characteristics[2]), ' (Toxic)'),
    nameAddOn(aptAddOn(tier0[5], characteristics[2]), ' (Radiation)'),
    prereqAddOn(skills[19]),
    nameAddOn(skills[20], ' (Geology)'),
    tier1[20],
    prereqAddOn(skills[26]),
    nameAddOn(tier0[8], ' (Pistol)'),
    nameAddOn(tier0[8], ' (Melee)')
  ],
  [//2
    prereqAddOn(skills[1]),
    tier1[0],
    skills[5],
    prereqAddOn(skills[8], 2, ' (Creatures)'),
    tier1[9],
    prereqAddOn(skills[17], 2, ' (Sea)'),
    tier1[15],
    tier1[19],
    nameAddOn(skills[20], ' (Ecology)'),
    skills[25]
  ],
  [//3
    prereqAddOn(skills[2]),
    skills[16],
    prereqAddOn(skills[17], 4, ' (Surface)'),
    tier0[4],
    tier1[17],
    tier3[23],
    skills[22],
    prereqAddOn(skills[26], 4)
  ],
  [//4
    prereqAddOn(skills[8], 2, ' (Geography)'),
    tier1[1],
    tier2[24],
    tier2[22],
    prereqAddOn(skills[17], 2, ' (Subterranean)'),
    tier2[19],
    prereqAddOn(skills[19], 4),
    tier2[20],
    tier1[23],
  ],
  [//5
    prereqAddOn(skills[1], 4),
    tier3[1],
    tier1[13],
    prereqAddOn(skills[17], 2, ' (Sea)'),
    tier2[16],
    prereqAddOn(skills[20], 2, ' (Geology)'),
    tier2[25],
    tier1[24]
  ],
  [//6
    prereqAddOn(skills[2], 4),
    prereqAddOn(skills[8], 4, ' (Geography)'),
    prereqAddOn(skills[16]),
    prereqAddOn(skills[17], 4, ' (Subterranean)'),
    prereqAddOn(skills[20], 2, ' (Ecology)'),
    prereqAddOn(skills[25])
  ],
  [//7
    prereqAddOn(skills[8], 4, ' (Creatures)'),
    tier3[14],
    tier3[18],
    tier2[21]
  ],
  [//8
    tier3[6],
    prereqAddOn(skills[20], 4, ' (Geology)'),
    prereqAddOn(skills[20], 4, ' (Ecology)'),
    tier3[28],
    prereqAddOn(skills[25], 4)
  ]
]

export const explorerRanks = [
  'Trap Decoy',
  'Tour Guide',
  'Hitchhiker',
  'Park Ranger',
  'Field Cartographer',
  'Wilderness Rescuer',
  'Pathfinder',
  'Tomb Raider',
  'Grand Adventurer'
]
