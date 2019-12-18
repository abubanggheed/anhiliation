
import { skills } from '../skill'
import { talents } from '../all-talents'
import { nameAddOn, prereqAddOn } from '../../util/skillmaker'

export const lobbyistPath = [
  [//0
    skills[3],
    skills[4],
    skills[5],
    nameAddOn(skills[8], ' (Geography)'),
    skills[9],
    prereqAddOn(skills[9]),
    nameAddOn(skills[20], ' (Law)'),
    skills[21]
  ],
  [//1
    prereqAddOn(skills[5]),
    skills[7],
    nameAddOn(skills[8], ' (History)'),
    skills[12],
    nameAddOn(skills[20], ' (Crime)'),
    nameAddOn(skills[20], ' (Markets)'),
    nameAddOn(talents[31], ' x3')
  ],
  [//2
    prereqAddOn(skills[3]),
    prereqAddOn(skills[9], 4),
    prereqAddOn(skills[20], 2, ' (Law)'),
    nameAddOn(skills[20], ' (Humanities)'),
    prereqAddOn(skills[21]),
    nameAddOn(talents[8], ' (Pistol)')
  ],
  [//3
    prereqAddOn(skills[4]),
    prereqAddOn(skills[5], 4),
    talents[73],
    prereqAddOn(skills[20], 2, ' (Markets)'),
    nameAddOn(talents[31], ' x3')
  ],
  [//4
    prereqAddOn(skills[4], 4),
    skills[6],
    prereqAddOn(skills[20], 2, ' (Crime)'),
    prereqAddOn(skills[21], 4),
    talents[29]
  ],
  [//5
    prereqAddOn(skills[3], 4),
    prereqAddOn(skills[7]),
    prereqAddOn(skills[8], 2, ' (History)'),
    talents[62],
    prereqAddOn(skills[20], 4, ' (Law)')
  ],
  [//6
    prereqAddOn(skills[12]),
    talents[11],
    talents[13],
    talents[28],
    talents[35]
  ],
  [//7
    prereqAddOn(skills[7], 4),
    prereqAddOn(skills[20], 4, ' (Markets)'),
    talents[32]
  ],
  [//8
    talents[59],
    prereqAddOn(skills[12], 4),
    talents[51],
    prereqAddOn(skills[20], 4, ' (Crime)')
  ]
]