
import { tier0Costs, tier0Talents } from './tier0-talents'
import { tier1Costs, tier1Talents } from './tier1-talents'
import { tier2Costs, tier2Talents } from './tier2-talents'
import { tier3Costs, tier3Talents } from './tier3-talents'

export const talentCosts = {
  tier0: tier0Costs,
  tier1: tier1Costs,
  tier2: tier2Costs,
  tier3: tier3Costs
}

export const talents = [
  ...tier0Talents,
  ...tier1Talents,
  ...tier2Talents,
  ...tier3Talents
]

export const tier0 = tier0Talents
export const tier1 = tier1Talents
export const tier2 = tier2Talents
export const tier3 = tier3Talents
