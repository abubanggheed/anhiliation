
const initialState = {
  assetType: '',
  asset: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ASSET_DESC':
      return {
        ...state,
        assetType: action.assetType,
        asset: action.payload
      }
    default:
      return state
  }
}
