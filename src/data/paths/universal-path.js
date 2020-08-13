import { academicPath, academicRanks } from './academic-path'
import { agentPath, agentRanks } from './agent-path'
import { bumPath, bumRanks } from './bum-path'
import { celebrityPath, celebrityRanks } from './celebrity-path'
import { explorerPath, explorerRanks } from './explorer-path'
import { goonPath, goonRanks } from './goon-path'
import { hooliganPath, hooliganRanks } from './hooligan-path'
import { lobbyistPath, lobbyistRanks } from './lobbyist-path'
import { prospectorPath, prospectorRanks } from './prospector-path'
import { zealotPath, zealotRanks } from './zealot-path'

export const universalPath = [
  '',
  '',
  '',
  '',
  'All skills at trained level',
  'All tier 0 talents',
  '',
  'All skills at professional level',
  'All tier 1 talents',
  'All skills at expert level',
  'All tier 2 talents',
  '',
  'All tier 3 talents'
]

export const careerPaths = [
  academicPath,
  agentPath,
  bumPath,
  celebrityPath,
  explorerPath,
  goonPath,
  hooliganPath,
  lobbyistPath,
  prospectorPath,
  zealotPath
]

export const careerRanks = [
  academicRanks,
  agentRanks,
  bumRanks,
  celebrityRanks,
  explorerRanks,
  goonRanks,
  hooliganRanks,
  lobbyistRanks,
  prospectorRanks,
  zealotRanks
]
