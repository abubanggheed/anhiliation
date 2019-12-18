
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const celebrityPath = [
  [//0
    talents[0],
    talents[2],
    skills[4],
    skills[5],
    nameAddOn(skills[8], ' (Geography)'),
    nameAddOn(skills[18], ' (1st)'),
    nameAddOn(skills[18], ' (2nd)'),
    skills[27],
    nameAddOn(talents[31], ' x10')
  ],
  [//1
    talents[3],
    prereqAddOn(skills[5]),
    nameAddOn(skills[8], ' (Folklore)'),
    prereqAddOn(skills[18], 2, ' (1st)'),
    nameAddOn(skills[20], ' (Humanities)'),
    nameAddOn(skills[28], ' (Any)'),
    nameAddOn(talents[8], ' (Unarmed)')
  ],
  [//2
    skills[0],
    skills[1],
    prereqAddOn(skills[18], 2, ' (2nd)'),
    talents[24],
    nameAddOn(talents[5], ' (Fear)'),
    skills[19],
    talents[29],
    nameAddOn(talents[8], ' (Pistol)')    
  ],
  [//3
    skills[2],
    prereqAddOn(skills[4]),
    talents[11],
    prereqAddOn(skills[18], 4, ' (1st)'),
    talents[32],
    nameAddOn(talents[8], ' (Melee)')
  ],
  [//4
    prereqAddOn(skills[5], 4),
    talents[13],
    prereqAddOn(skills[18], 4, ' (2nd)'),
    skills[24],
    prereqAddOn(skills[27])
  ],
  [//5
    prereqAddOn(skills[0]),
    prereqAddOn(skills[1]),
    talents[45],
    talents[52],
    talents[28],
    prereqAddOn(skills[24])
  ],
  [//6
    prereqAddOn(skills[0], 4),
    prereqAddOn(skills[4], 4),
    talents[9],
    talents[42],
    talents[68],
    talents[23],
    talents[25],
    prereqAddOn(skills[19]),
    talents[57]
  ],
  [//7
    prereqAddOn(skills[1], 4),
    talents[41],
    talents[16],
    talents[48]
  ],
  [//8
    talents[40],
    prereqAddOn(skills[19], 4),
    talents[65],
    talents[76],
    prereqAddOn(skills[24], 4)
  ]
]