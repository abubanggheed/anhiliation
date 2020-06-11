
import { characteristics } from '../../data/characteristic'
const initialState = {
  physFatigue: '0',
  menFatigue: '0'
}
characteristics.forEach(char => {
  initialState[char.name] = '0'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STAT':
      return {
        ...state,
        [action.stat]: action.payload
      }
    default:
      return state;
  }
}
