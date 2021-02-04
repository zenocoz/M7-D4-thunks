import { initialState } from "../store"

export const jobsReducer = (state = initialState.jobsFound, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return (state = action.payload)
    default:
      return state
  }
}
