
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const goonPath = [
  [//0
    skills[1],
    skills[4],
    talents[23],
    skills[19],
    talents[28],
    talents[30],
    nameAddOn(talents[8], ' (Infantry)'),
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//1
    talents[0],
    skills[2],
    talents[9],
    talents[10],
    skills[12],
    nameAddOn(talents[5], ' (Fear)'),
    talents[29],
    nameAddOn(talents[8], ' (Melee)'),
    nameAddOn(talents[8], ' (Turret)')
  ],
  [//2
    prereqAddOn(skills[1]),
    nameAddOn(skills[8], ' (Creatures)'),
    talents[14],
    talents[15],
    talents[7],
    skills[26],
    nameAddOn(talents[8], ' (Heavy)'),
    nameAddOn(talents[8], ' (Artillery)'),
    nameAddOn(talents[8], ' (Unarmed)')
  ],
  [//3
    prereqAddOn(skills[1], 4),
    talents[1],
    skills[6],
    nameAddOn(skills[8], ' (War)'),
    talents[11],
    talents[18],
    talents[47],
    talents[19],
    talents[56]
  ],
  [//4
    prereqAddOn(skills[4]),
    talents[64],
    talents[24],
    nameAddOn(talents[5], ' (Mind Control)'),
    prereqAddOn(skills[19]),
    talents[57],
    talents[34]
  ],
  [//5
    prereqAddOn(skills[2]),
    talents[37],
    talents[40],
    talents[13],
    prereqAddOn(skills[12]),
    talents[69],
    talents[22],
    talents[52]
  ],
  [//6
    talents[36],
    prereqAddOn(skills[6]),
    prereqAddOn(skills[8], 2, ' (War)'),
    talents[59],
    talents[41],
    talents[48],
    talents[50]
  ],
  [//7
    prereqAddOn(skills[4], 4),
    talents[66],
    prereqAddOn(skills[12], 4),
    talents[46],
    talents[71],
    talents[32],
    talents[79]
  ],
  [//8
    talents[38],
    prereqAddOn(skills[8], 4, ' (War)'),
    talents[60],
    talents[65],
    prereqAddOn(skills[19], 4),
    talents[75]
  ]
]