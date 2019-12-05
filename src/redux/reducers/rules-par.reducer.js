
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
    reln: false,
    uven: false,
    gyl: false,
    kavren: false,
    mech: false,
    careers: false,
    aptitudes: false,
    nonCharApts: false,
    finally: false
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
    default:
      return state
  }
}
