const initialState = {
  careerId: -1,
  speciesId: -1,
  speciesOptName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHEET_BASIC_SET':
      return {
        ...state,
        [action.key]: action.payload
      }
    default:
      return state
  }
}
