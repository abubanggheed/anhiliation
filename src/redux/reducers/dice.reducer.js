const initialState = {
  characteristic: {
    diffInd: '5',
    variance: 's',
    charInd: '0',
    advantages: '0',
    disadvantages: '0',
    centerings: '0',
    charMultiplier: '1',
    fatMultiplier: '1',
    basic: '0',
    numberOfRolls: '1'
  },
  damage: {},
  rng: {},
  history: {
    saved: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITEM':
      return {
        ...state,
        [action.source]: {
          ...state[action.source],
          [action.key]: action.payload
        }
      }
    case 'SET_RESULT':
      return {
        ...state,
        history: {
          ...state.history,
          [action.source]: action.payload
        }
      }
    default:
      return state
  }
}
