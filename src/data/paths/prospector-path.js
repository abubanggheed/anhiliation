
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const prospectorPath = [
  [//0
    skills[7],
    nameAddOn(skills[8], ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (Geography)'),
    nameAddOn(skills[17], ' (Surface)'),
    nameAddOn(skills[17], ' (Sea)'),
    nameAddOn(talents[5], ' (Radiation)'),
    nameAddOn(talents[5], ' (Toxic)'),
    nameAddOn(skills[20], ' (Geology)'),
    nameAddOn(skills[20], ' (Ecology)'),
    nameAddOn(skills[28], ' (Mining)'),
    nameAddOn(skills[28], ' (Wrangling)'),
    nameAddOn(talents[8], ' (Infantry)')
  ],
  [//1
    skills[2],
    talents[9],
    prereqAddOn(skills[7]),
    nameAddOn(skills[8], ' (Creatures)'),
    talents[23],
    nameAddOn(talents[5], ' (Exposure)'),
    skills[19],
    prereqAddOn(skills[20], 2, ' (Geology)'),
    prereqAddOn(skills[20], 2, ' (Ecology)'),
    nameAddOn(skills[20], ' (Chemistry)'),
    talents[29],
    skills[26],
    nameAddOn(talents[8], ' (Melee)'),
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//2
    skills[1],
    talents[1],
    prereqAddOn(skills[8], 2, ' (Creatures)'),
    talents[10],
    talents[18],
    skills[15],
    prereqAddOn(skills[17], 2, ' (Surface)'),
    prereqAddOn(skills[17], 2, ' (Sea)'),
    skills[21],
    talents[28],
    prereqAddOn(skills[28], 2, ' (Mining)'),
    nameAddOn(talents[8], ' (Turret)')
  ],
  [//3
    skills[5],
    talents[11],
    skills[9],
    talents[13],
    skills[16],
    nameAddOn(skills[17], ' (Subterranean)'),
    talents[19],
    prereqAddOn(skills[20], 2, ' (Chemistry)'),
    skills[22],
    skills[24],
    prereqAddOn(skills[28], 2, ' (Wrangling)')
  ],
  [//4
    prereqAddOn(skills[2]),
    prereqAddOn(skills[7], 4),
    talents[44],
    prereqAddOn(skills[19]),
    prereqAddOn(skills[20], 4, ' (Geology)'),
    prereqAddOn(skills[20], 4, ' (Ecology)')
  ],
  [//5
    prereqAddOn(skills[1]),
    prereqAddOn(skills[8], 4, ' (Geography)'),
    talents[47],
    prereqAddOn(skills[15]),
    talents[52],
    talents[24],
    prereqAddOn(skills[26]),
    prereqAddOn(skills[28], 4, ' (Wrangling)')
  ],
  [//6
    prereqAddOn(skills[8], 4, ' (Creatures)'),
    talents[58],
    talents[49],
    prereqAddOn(skills[16]),
    talents[57],
    prereqAddOn(skills[28], 4, ' (Mining)')
  ],
  [//7
    talents[51],
    talents[55],
    prereqAddOn(skills[19], 4),
    prereqAddOn(skills[20], 4, ' (Chemistry)'),
    talents[56]
  ],
  [//8
    prereqAddOn(skills[1], 4),
    talents[61],
    talents[69],
    prereqAddOn(skills[15], 4),
    talents[75]
  ]
]