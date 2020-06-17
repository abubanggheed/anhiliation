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
  damage: {
    dice: [{
      max: '10',
      number: '1'
    }],
    atts: [],
    basic: '0',
    pen: '0',
    numberOfRolls: '1'
  },
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
    case 'SET_KEY_IN_LIST':
      return {
        ...state,
        [action.source]: {
          ...state[action.source],
          [action.list]: state[action.source][action.list].map((obj, i) => (
            i === action.index ?
              { ...obj, [action.key]: action.payload }
              : obj
          ))
        }
      }
    case 'ADD_TO_LIST':
      return {
        ...state,
        [action.source]: {
          ...state[action.source],
          [action.list]: [...state[action.source][action.list], action.payload].slice(0, 100)
        }
      }
    case 'REMOVE_FROM_LIST':
      return {
        ...state,
        [action.source]: {
          ...state[action.source],
          [action.list]: [
            ...state[action.source][action.list].slice(0, action.index),
            ...state[action.source][action.list].slice(action.index + 1)
          ]
        }
      }
    default:
      return state
  }
}
