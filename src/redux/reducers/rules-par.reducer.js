
const initialState = {
  diceRules: {
    charTest: false,
    mdTest: false,
    gAdvantages: false,
    centerings: false,
    strangeNumbers: false
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
    default:
      return state
  }
}
