
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const explorerPath = [
  [//0
    skills[1],
    nameAddOn(skills[8], ' (Geography)'),
    nameAddOn(skills[8], ' (Creatures)'),
    nameAddOn(skills[17], ' (Surface)'),
    nameAddOn(skills[17], ' (Sea)'),
    nameAddOn(talents[5], ' (Exposure)'),
    skills[19],
    skills[26],
    nameAddOn(talents[8], ' (Infantry)')
  ],
  [//1
    skills[2],
    talents[44],
    prereqAddOn(skills[17], 2, ' (Surface)'),
    nameAddOn(skills[17], ' (Subterranean)'),
    talents[19],
    talents[23],
    nameAddOn(talents[5], ' (Toxic)'),
    nameAddOn(talents[5], ' (Radiation)'),
    prereqAddOn(skills[19]),
    nameAddOn(skills[20], ' (Geology)'),
    talents[29],
    prereqAddOn(skills[26]),
    nameAddOn(talents[8], ' (Pistol)'),
    nameAddOn(talents[8], ' (Melee)')
  ],
  [//2
    prereqAddOn(skills[1]),
    talents[9],
    skills[5],
    prereqAddOn(skills[8], 2, ' (Creatures)'),
    talents[18],
    prereqAddOn(skills[17], 2, ' (Sea)'),
    talents[24],
    talents[28],
    nameAddOn(skills[20], ' (Ecology)'),
    skills[25]
  ],
  [//3
    prereqAddOn(skills[2]),
    skills[16],
    prereqAddOn(skills[17], 4, ' (Surface)'),
    talents[4],
    talents[26],
    skills[22],
    prereqAddOn(skills[26], 4)
  ],
  [//4
    prereqAddOn(skills[8], 2, ' (Geography)'),
    talents[10],
    prereqAddOn(skills[17], 2, ' (Subterranean)'),
    talents[55],
    prereqAddOn(skills[19], 4),
    talents[56],
    talents[32],
  ],
  [//5
    prereqAddOn(skills[1], 4),
    talents[22],
    prereqAddOn(skills[17], 2, ' (Sea)'),
    talents[52],
    prereqAddOn(skills[20], 2, ' (Geology)')
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
    talents[72],
    talents[76],
    talents[57]
  ],
  [//8
    talents[64],
    prereqAddOn(skills[20], 4, ' (Geology)'),
    prereqAddOn(skills[20], 4, ' (Ecology)'),
    prereqAddOn(skills[25], 4)
  ]
]