
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const zealotPath = [
  [//0
    skills[6],
    skills[12],
    talents[46],
    talents[15],
    nameAddOn(talents[5], ' (Fear)'),
    nameAddOn(talents[5], ' (Mind Control)'),
    talents[28],
    nameAddOn(talents[8], ' (Improvised)'),
    nameAddOn(talents[8], ' (Melee)'),
    nameAddOn(talents[8], ' (Infantry)')
  ],
  [//1
    nameAddOn(skills[8], ' (Religion)'),
    skills[11],
    nameAddOn(talents[5], ' (Starvation)'),
    skills[21],
    skills[24],
    talents[35],
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//2
    prereqAddOn(skills[6]),
    talents[38],
    nameAddOn(skills[8], ' (Creatures)'),
    nameAddOn(skills[8], ' (History)'),
    talents[11],
    nameAddOn(talents[5], ' (Radiation)'),
    nameAddOn(talents[5], ' (Exposure)'),
    talents[29],
    nameAddOn(talents[8], ' (Artillery)')
  ],
  [//3
    talents[37],
    prereqAddOn(skills[8], 2, ' (Religion)'),
    talents[40],
    talents[41],
    talents[64],
    prereqAddOn(skills[12]),
    skills[19]
  ],
  [//4
    talents[36],
    talents[39],
    prereqAddOn(skills[11]),
    talents[20],
    talents[47],
    prereqAddOn(skills[24]),
    talents[57]
  ],
  [//5
    prereqAddOn(skills[6], 4),
    prereqAddOn(skills[8], 4, ' (Religion)'),
    talents[43],
    talents[69],
    talents[52],
    talents[24],
    prereqAddOn(skills[21])
  ],
  [//6
    talents[60],
    prereqAddOn(skills[12], 4),
    talents[50],
    talents[74],
    prereqAddOn(skills[24], 4),
    talents[34]
  ],
  [//7
    talents[66],
    prereqAddOn(skills[11], 4),
    talents[80]
  ],
  [//8
    talents[71],
    talents[75],
    talents[79]
  ]
]
