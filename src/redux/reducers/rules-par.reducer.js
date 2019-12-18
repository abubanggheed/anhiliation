
const initialState = {
  diceRules: {
    charTest: false,
    mdTest: false,
    gAdvantages: false,
    centerings: false,
    strangeNumbers: false,
    hthTest: false,
    nfTest: false,
    opposingATest: false,
    theCharTest: false,
    opposedTests: false,
    rulesOnCharacterstics: false,
    zeroEffects: false
  },
  charCreation: {
    characteristics: false,
    categories: false,
    testingChars: false,
    testsExtended: false,
    species: false,
    Reln: false,
    Uven: false,
    Gyl: false,
    Kavren: false,
    "Sentient Mechaniform": false,
    careers: false,
    aptitudes: false,
    nonCharApts: false,
    finally: false
  },
  selfImprovement: {
    eBazaar: false,
    chpCosts: false,
    expCosts: false,
    skills: false,
    tier0: false,
    tier1: false,
    tier2: false,
    tier3: false
  },
  careerPaths: {
    Academic: false,
    Agent: false,
    Bum: false,
    Celebrity: false,
    Explorer: false,
    Goon: false,
    Hooligan: false,
    Lobbyist: false,
    Prospector: false,
    Zealot: false,
    Universal: false
  },
  possessions: {
    armor: false,
    melee: false,
    ranged: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RULES_DICE':
      return {
        ...state,
        diceRules: {
          ...state.diceRules,
          [action.payload]: !state.diceRules[action.payload]
        }
      }
    case 'RULES_CHAR_REACTION':
      return {
        ...state,
        charCreation: {
          ...state.charCreation,
          [action.payload]: !state.charCreation[action.payload]
        }
      }
    case 'RULES_IMPROVEMENT':
      return {
        ...state,
        selfImprovement: {
          ...state.selfImprovement,
          [action.payload]: !state.selfImprovement[action.payload]
        }
      }
    case 'RULES_PATHS':
      return {
        ...state,
        careerPaths: {
          ...state.careerPaths,
          [action.payload]: !state.careerPaths[action.payload]
        }
      }
    case 'RULES_POSSESSIONS':
      return {
        ...state,
        possessions: {
          ...state.possessions,
          [action.payload]: !state.possessions[action.payload]
        }
      }
    default:
      return state
  }
}
