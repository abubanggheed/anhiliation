
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const hooliganPath = [
  [//0
    talents[0],
    talents[1],
    skills[10],
    skills[12],
    nameAddOn(skills[17], ' (Urban)'),
    skills[19],
    nameAddOn(skills[20], ' (Crime)'),
    skills[23],
    nameAddOn(skills[28], ' (Any)'),
    nameAddOn(talents[8], ' (Improvised)'),
    nameAddOn(talents[8], ' (Unarmed)')
  ],
  [//1
    skills[2],
    skills[3],
    skills[4],
    talents[3],
    talents[14],
    talents[20],
    prereqAddOn(skills[12]),
    talents[7],
    nameAddOn(talents[8], ' (Melee)'),
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//2
    skills[0],
    skills[5],
    skills[9],
    talents[12],
    prereqAddOn(skills[10]),
    prereqAddOn(skills[17], 2, ' (Urban)'),
    talents[19],
    skills[21],
    prereqAddOn(skills[23]),
    talents[29],
    talents[32],
    talents[34]
  ],
  [//3
    skills[1],
    prereqAddOn(skills[3]),
    skills[7],
    talents[11],
    talents[10],
    talents[42],
    talents[16],
    talents[4],
    talents[51],
    prereqAddOn(skills[12], 4),
    prereqAddOn(skills[20], 2, ' (Crime)'),
    skills[22],
    talents[28],
    nameAddOn(talents[8], ' (Infantry)')
  ],
  [//4
    prereqAddOn(skills[2]),
    prereqAddOn(skills[4]),
    talents[9],
    talents[61],
    talents[50],
    talents[52],
    talents[24],
    talents[54],
    prereqAddOn(skills[19]),
    talents[57],
    prereqAddOn(skills[28], 2, ' (Any)')
  ],
  [//5
    prereqAddOn(skills[0]),
    prereqAddOn(skills[9]),
    talents[13],
    prereqAddOn(skills[10], 4),
    talents[47],
    talents[48],
    talents[53],
    prereqAddOn(skills[21]),
    prereqAddOn(skills[23], 4),
    talents[78]
  ],
  [//6
    prereqAddOn(skills[2], 4),
    prereqAddOn(skills[3], 4),
    prereqAddOn(skills[5]),
    talents[44],
    talents[17],
    talents[67],
    talents[71],
    prereqAddOn(skills[22]),
    talents[76],
    talents[35]
  ],
  [//7
    prereqAddOn(skills[0], 4),
    prereqAddOn(skills[17], 4, ' (Urban)'),
    talents[45],
    talents[68],
    talents[72],
    talents[55],
    prereqAddOn(skills[19], 4)
  ],
  [//8,
    prereqAddOn(skills[4], 4),
    talents[66],
    talents[69],
    talents[70],
    prereqAddOn(skills[20], 4, ' (Crime)'),
    talents[75],
    talents[56]
  ]
]