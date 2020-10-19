
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { characteristics } from '../characteristic'

export const celebrityPath = [
  [//0
    tier0[0],
    tier0[2],
    skills[4],
    skills[5],
    nameAddOn(skills[8], ' (Geography)'),
    nameAddOn(skills[18], ' (1st)'),
    nameAddOn(skills[18], ' (2nd)'),
    skills[27],
    nameAddOn(tier1[22], ' x10')
  ],
  [//1
    tier0[3],
    prereqAddOn(skills[5]),
    nameAddOn(skills[8], ' (Folklore)'),
    prereqAddOn(skills[18], 2, ' (1st)'),
    nameAddOn(skills[20], ' (Humanities)'),
    nameAddOn(skills[28], ' (Any)'),
    nameAddOn(tier0[8], ' (Unarmed)')
  ],
  [//2
    skills[0],
    skills[1],
    prereqAddOn(skills[18], 2, ' (2nd)'),
    tier1[15],
    nameAddOn(aptAddOn(tier0[5], characteristics[6]), ' (Fear)'),
    skills[19],
    tier1[20],
    nameAddOn(tier0[8], ' (Pistol)')    
  ],
  [//3
    skills[2],
    prereqAddOn(skills[4]),
    tier1[2],
    prereqAddOn(skills[18], 4, ' (1st)'),
    tier1[23],
    nameAddOn(tier0[8], ' (Melee)')
  ],
  [//4
    prereqAddOn(skills[5], 4),
    tier1[4],
    prereqAddOn(skills[18], 4, ' (2nd)'),
    skills[24],
    prereqAddOn(skills[27])
  ],
  [//5
    prereqAddOn(skills[0]),
    prereqAddOn(skills[1]),
    tier2[9],
    tier2[16],
    tier1[19],
    prereqAddOn(skills[24])
  ],
  [//6
    prereqAddOn(skills[0], 4),
    prereqAddOn(skills[4], 4),
    tier1[0],
    tier1[6],
    tier3[10],
    tier1[14],
    tier1[16],
    prereqAddOn(skills[19]),
    tier2[21]
  ],
  [//7
    prereqAddOn(skills[1], 4),
    tier3[25],
    tier2[5],
    tier1[7],
    tier2[12]
  ],
  [//8
    tier1[4],
    prereqAddOn(skills[19], 4),
    tier3[7],
    tier3[18],
    prereqAddOn(skills[24], 4)
  ]
]

export const celebrityRanks = [
  'News Story',
  'Meme',
  'Nostalgic Callback',
  'Local Attraction',
  'Fan Club Idol',
  'Product Placement Opportunity',
  'Superstar',
  'Worldwide Phenomenon',
  'Living Legend'
]
