import { initialState } from "../store"

export const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return state.concat(action.payload)
    case "REMOVE_FROM_FAVORITES":
      return state.filter((jobid) => jobid !== action.payload)
    default:
      return state
  }
}
