
import { skills } from '../skill'
import { tier0, tier1, tier2, tier3 } from '../all-talents'
import { nameAddOn, prereqAddOn, aptAddOn } from '../../util/skillmaker'
import { characteristics } from '../characteristic'

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
    tier0[6],
    skills[24]
  ],
  [//1
    prereqAddOn(skills[8], 2, ' (History)'),
    prereqAddOn(skills[8], 2, ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (Religion)'),
    prereqAddOn(skills[14]),
    skills[15],
    skills[16],
    nameAddOn(aptAddOn(tier0[5], characteristics[6]), ' (Mind Control)'),
    prereqAddOn(skills[20], 2, ' (Humanities)'),
    nameAddOn(skills[20], ' (Geology)'),
    nameAddOn(tier0[6], ' x2'),
    prereqAddOn(skills[24]),
    skills[27],
    nameAddOn(skills[28], ' (any)'),
  ],
  [//2
    skills[4],
    prereqAddOn(skills[20], 2, ' (Magic Theory)'),
    prereqAddOn(skills[20], 2, ' (Geology)'),
    skills[22],
    nameAddOn(tier0[6], ' x2'),
    tier1[22],
    prereqAddOn(skills[28], 2, ' (any)'),
    nameAddOn(tier0[8], ' (Pistol)')
  ],
  [//3
    skills[5],
    prereqAddOn(skills[8], 4, ' (History)'),
    tier3[4],
    prereqAddOn(skills[15]),
    nameAddOn(aptAddOn(tier0[5], characteristics[6]), ' (Feedback)'),
    prereqAddOn(skills[20], 4, ' (Magic Theory)'),
    prereqAddOn(skills[20], 2, ' (Chemistry)'),
    nameAddOn(skills[20], ' (Markets)'),
    tier0[6],
    nameAddOn(tier1[22], ' x3')
  ],
  [//4
    prereqAddOn(skills[8], 4, ' (Geography)'),
    prereqAddOn(skills[8], 2, ' (Folklore)'),
    prereqAddOn(skills[13]),
    prereqAddOn(skills[14], 4),
    prereqAddOn(skills[16]),
    prereqAddOn(skills[20], 2, ' (Ecology)'),
    tier0[6],
    prereqAddOn(skills[24], 4)
  ],
  [//5
    prereqAddOn(skills[8], 4, ' (Religion)'),
    tier1[19],
    tier1[20],
    prereqAddOn(skills[27]),
    nameAddOn(tier1[22], ' x2'),
    prereqAddOn(skills[28], 4, ' (any)')
  ],
  [//6
    prereqAddOn(skills[8], 4, ' (Folklore)'),
    prereqAddOn(skills[15], 4),
    tier2[3],
    prereqAddOn(skills[20], 4, ' (Humanities)'),
    prereqAddOn(skills[22])
  ],
  [//7
    prereqAddOn(skills[13], 4),
    tier2[13],
    prereqAddOn(skills[16], 4),
    tier1[24],
    tier3[19],
    prereqAddOn(skills[20], 4, ' (Ecology)'),
    prereqAddOn(skills[22], 4)
  ],
  [//8
    tier2[9],
    tier3[16],
    tier2[20],
    prereqAddOn(skills[27], 4)
  ]
]

export const academicRanks = [
  'Data Entry Associate',
  'Intern',
  'Unrecognized Lab Employee',
  'Junior Article Editor',
  'Published Author',
  'Community College Professor',
  'Research Lead',
  'Thesis Advisor',
  'Giant of Knowledge'
]
