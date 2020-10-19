
import { characteristics } from '../../data/characteristic'
import { aptitudes } from '../../data/aptitude'
const initialState = {
  stats: {
    physFatigue: '0',
    menFatigue: '0'
  },
  aptitudes: {
  },
  numberc: 0,
  numbernc: 0
}
characteristics.forEach(char => {
  initialState.stats[char.name] = '0'
  initialState.aptitudes[char.name] = false
})
aptitudes.forEach(apt => {
  initialState.aptitudes[apt.name] = false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STAT':
      return {
        ...state,
        stats: {
          ...state.stats,
          [action.stat]: action.payload
        }
      }
    case 'CHANGE_APT':
        return {
          ...state,
          aptitudes: {
            ...state.aptitudes,
            [action.apt]: !state.aptitudes[action.apt]
          },
          [`number${action.charType}`]: state[`number${action.charType}`] +
            (!state.aptitudes[action.apt] ? 1 : -1)
        }
    default:
      return state;
  }
}
