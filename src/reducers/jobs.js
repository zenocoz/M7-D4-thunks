import { initialState } from "../store"

export const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return (state = action.payload)
    default:
      return state
  }
}
