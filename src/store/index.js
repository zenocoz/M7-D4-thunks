import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { favoritesReducer } from "../reducers/favorites"
import { jobsReducer } from "../reducers/jobs"
import thunk from "redux-thunk"

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favorites: [],
  jobsFound: [],
}

const mainReducer = combineReducers({
  favorites: favoritesReducer,
  jobsFound: jobsReducer,
})

export default function configureStore() {
  return createStore(
    mainReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  )
}
