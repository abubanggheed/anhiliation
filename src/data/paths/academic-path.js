
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const academicPath = [
  [//0
    nameAddOn(skills[8], ' (History)'),
    nameAddOn(skills[8], ' (Geography)'),
    nameAddOn(skills[8], ' (Folklore)'),
    nameAddOn(skills[8], ' (Religion)'),
    skills[13],
    skills[14],
    nameAddOn(skills[20], ' (Chemistry)'),
    nameAddOn(skills[20], ' (Ecology)'),
    nameAddOn(skills[20], ' (Magic Theory)'),
    nameAddOn(skills[20], ' (Humanities)'),
    talents[6],
    skills[24]
  ],
  [//1
    prereqAddOn(skills[8], 2, ' (History)'),
    prereqAddOn(skills[8], 2, ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (Religion)'),
    prereqAddOn(skills[14]),
    skills[15],
    skills[16],
    nameAddOn(talents[5], ' (Mind Control)'),
    prereqAddOn(skills[20], 2, ' (Humanities)'),
    nameAddOn(skills[20], ' (Geology)'),
    nameAddOn(talents[6], ' x2'),
    prereqAddOn(skills[24]),
    skills[27],
    nameAddOn(skills[28], ' (any)'),
  ],
  [//2
    skills[4],
    prereqAddOn(skills[20], 2, ' (Magic Theory)'),
    prereqAddOn(skills[20], 2, ' (Geology)'),
    skills[22],
    nameAddOn(talents[6], ' x2'),
    talents[31],
    prereqAddOn(skills[28], 2, ' (any)'),
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//3
    skills[5],
    prereqAddOn(skills[8], 4, ' (History)'),
    talents[62],
    prereqAddOn(skills[15]),
    nameAddOn(talents[5], ' (Feedback)'),
    prereqAddOn(skills[20], 4, ' (Magic Theory)'),
    prereqAddOn(skills[20], 2, ' (Chemistry)'),
    nameAddOn(skills[20], ' (Markets)'),
    talents[6],
    nameAddOn(talents[31], ' x3')
  ],
  [//4
    prereqAddOn(skills[8], 4, ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (Folklore)'),
    prereqAddOn(skills[13]),
    prereqAddOn(skills[14], 4),
    prereqAddOn(skills[16]),
    prereqAddOn(skills[20], 2, ' (Ecology)'),
    talents[6],
    prereqAddOn(skills[24], 4)
  ],
  [//5
    prereqAddOn(skills[8], 4, ' (Religion)'),
    talents[28],
    talents[29],
    prereqAddOn(skills[27]),
    nameAddOn(talents[31], ' x2'),
    prereqAddOn(skills[28], 4, ' (any)')
  ],
  [//6
    prereqAddOn(skills[8], 4, ' (Folklore)'),
    prereqAddOn(skills[15], 4),
    talents[39],
    prereqAddOn(skills[20], 4, ' (Humanities)'),
    prereqAddOn(skills[22])
  ],
  [//7
    prereqAddOn(skills[13], 4),
    talents[49],
    prereqAddOn(skills[16], 4),
    talents[33],
    talents[77],
    prereqAddOn(skills[20], 4, ' (Ecology)'),
    prereqAddOn(skills[22], 4)
  ],
  [//8
    talents[45],
    talents[74],
    talents[56],
    prereqAddOn(skills[27], 4)
  ]
]
