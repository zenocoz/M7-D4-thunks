import { initialState } from "../store"

export const jobsReducer = (
  state = { jobsFound: initialState.jobsFound },
  action
) => {
  action.type = "GET_JOBS"
  return "TODO"
  //   state.jobs.push(action.payload)
  //   switch (action.type) {
  //     case "GET_JOBS":
  //       return state.jobs.concat(action.payload)

  //     default:
  //       return state
  //   }
}
