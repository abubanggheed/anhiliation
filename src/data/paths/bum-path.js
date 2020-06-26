
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const bumPath = [
  [//0
    skills[3],
    prereqAddOn(skills[3]),
    skills[4],
    talents[15],
    skills[10],
    talents[45],
    nameAddOn(talents[5], ' (Toxin)'),
    nameAddOn(talents[5], ' (Exposure)'),
    skills[26],
    nameAddOn(talents[8], ' (Improvised)')
  ],
  [//1
    prereqAddOn(skills[3], 4),
    talents[1],
    prereqAddOn(skills[4]),
    nameAddOn(skills[17], ' (Any)'),
    nameAddOn(talents[5], ' (Starvation)'),
    talents[35],
    nameAddOn(talents[8], ' (Melee)'),
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//2
    prereqAddOn(skills[4], 4),
    skills[5],
    talents[60],
    talents[64],
    talents[20],
    skills[19],
    prereqAddOn(skills[26]),
    nameAddOn(skills[28], ' (Any)')
  ],
  [//3
    skills[2],
    skills[9],
    talents[14],
    prereqAddOn(skills[10]),
    skills[12],
    talents[4],
    talents[51],
    skills[23]
  ],
  [//4
    talents[36],
    talents[12],
    prereqAddOn(skills[17], 2, ' (Any)'),
    talents[81],
    talents[29],
    talents[32]
  ],
  [//5
    talents[65],
    talents[19],
    talents[39],
    talents[28],
    prereqAddOn(skills[26], 4)
  ],
  [//6
    prereqAddOn(skills[5]),
    talents[44],
    talents[54],
    prereqAddOn(skills[28], 2, ' (Any)')
  ],
  [//7
    talents[37],
    talents[61],
    prereqAddOn(skills[10], 4)
  ],
  [//8
    prereqAddOn(skills[5], 4),
    talents[62],
    talents[52],
    prereqAddOn(skills[17], 4, ' (Any)'),
  ]
]