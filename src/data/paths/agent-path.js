
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const agentPath = [
  [//0
    skills[0],
    talents[0],
    skills[2],
    nameAddOn(skills[8], ' (Geography)'),
    skills[9],
    skills[10],
    skills[22],
    skills[27],
    nameAddOn(talents[8], ' (Pistol)'),
    nameAddOn(talents[8], ' (Unarmed)')
  ],
  [//1
    skills[11],
    nameAddOn(skills[17], ' (Urban)'),
    talents[51],
    nameAddOn(skills[20], ' (Crime)'),
    skills[21],
    prereqAddOn(skills[22]),
    talents[6],
    skills[24],
    talents[29]
  ],
  [//2
    skills[1],
    prereqAddOn(skills[2]),
    talents[2],
    skills[4],
    prereqAddOn(skills[9]),
    talents[24],
    talents[19],
    nameAddOn(talents[5], ' (Feedback)'),
    nameAddOn(talents[5], ' (Mind Control)'),
    talents[28],
    skills[23],
    talents[6],
    talents[7],
    skills[25],
    prereqAddOn(skills[27]),
    nameAddOn(talents[8], ' (Infantry)'),
    nameAddOn(talents[8], ' (Melee)')
  ],
  [//3
    prereqAddOn(skills[0]),
    talents[3],
    nameAddOn(skills[8], ' (War)'),
    talents[18],
    prereqAddOn(skills[10]),
    skills[12],
    prereqAddOn(skills[21]),
    prereqAddOn(skills[22], 4),
    talents[6],
    talents[25],
    nameAddOn(talents[8], ' (Improvised)')
  ],
  [//4
    prereqAddOn(skills[0], 4),
    prereqAddOn(skills[1]),
    prereqAddOn(skills[8], 2, ' (Geography)'),
    talents[11],
    talents[13],
    talents[42],
    prereqAddOn(skills[11]),
    talents[70],
    talents[52],
    talents[56],
    talents[34]
  ],
  [//5
    prereqAddOn(skills[2], 4),
    prereqAddOn(skills[4]),
    prereqAddOn(skills[9], 4),
    talents[44],
    talents[45],
    prereqAddOn(skills[12]),
    talents[68],
    talents[55],
    prereqAddOn(skills[20], 2, ' (Crime)'),
    prereqAddOn(skills[24]),
    nameAddOn(talents[31], ' x2')
  ],
  [//6
    prereqAddOn(skills[3]),
    prereqAddOn(skills[8], 4, ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (War)'),
    talents[59],
    talents[22],
    talents[72],
    prereqAddOn(skills[15]),
    talents[23],
    talents[81],
    prereqAddOn(skills[23]),
    prereqAddOn(skills[25]),
    talents[57]
  ],
  [//7
    prereqAddOn(skills[1], 4),
    prereqAddOn(skills[4], 4),
    talents[39],
    talents[16],
    prereqAddOn(skills[10], 4),
    talents[47],
    talents[76],
    prereqAddOn(skills[24], 4),
    prereqAddOn(skills[27], 4)
  ],
  [//8
    prereqAddOn(skills[11], 4),
    talents[67],
    talents[74],
    prereqAddOn(skills[21], 4),
    prereqAddOn(skills[23], 4),
    prereqAddOn(skills[25], 4),
    talents[78]
  ]
]
