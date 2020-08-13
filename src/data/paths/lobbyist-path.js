
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
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
    nameAddOn(tier1[22], ' x3')
  ],
  [//2
    prereqAddOn(skills[3]),
    prereqAddOn(skills[9], 4),
    prereqAddOn(skills[20], 2, ' (Law)'),
    nameAddOn(skills[20], ' (Humanities)'),
    prereqAddOn(skills[21]),
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//3
    prereqAddOn(skills[4]),
    prereqAddOn(skills[5], 4),
    tier3[15],
    prereqAddOn(skills[20], 2, ' (Markets)'),
    nameAddOn(tier1[22], ' x3')
  ],
  [//4
    prereqAddOn(skills[4], 4),
    skills[6],
    prereqAddOn(skills[20], 2, ' (Crime)'),
    prereqAddOn(skills[21], 4),
    tier1[20]
  ],
  [//5
    prereqAddOn(skills[3], 4),
    prereqAddOn(skills[7]),
    prereqAddOn(skills[8], 2, ' (History)'),
    tier3[4],
    prereqAddOn(skills[20], 4, ' (Law)')
  ],
  [//6
    prereqAddOn(skills[12]),
    tier1[2],
    tier1[4],
    tier1[19],
    tier1[26]
  ],
  [//7
    prereqAddOn(skills[7], 4),
    prereqAddOn(skills[20], 4, ' (Markets)'),
    tier1[23]
  ],
  [//8
    tier3[1],
    prereqAddOn(skills[12], 4),
    tier2[15],
    prereqAddOn(skills[20], 4, ' (Crime)')
  ]
]

export const lobbyistRanks = [
  'Reschedualed Appointment',
  'Grocery Sales Representative',
  'Opinionated Blogger',
  'News Columnist',
  'Private Attourney',
  'Local Official',
  'Mercenary Orator',
  'Royal Counsoler',
  'Supreme Sophist'
]
