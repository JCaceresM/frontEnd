import { combineReducers } from "redux"
import dynamicLocalState from "./local/localState.reducers"
import InitialState from "./state/index.state"
import user from "./user/user.reducer"

const state = {
  user: user,
  dynamicLocalState,

  InitialState,
}
const appReducer = combineReducers(state)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: any, action: any) => {
// eslint-disable-next-line no-console
console.log(state,"lls");

  if (action.type === "STATE_SET_STATE_STATE") {
    state = {user:state.user}
  }

  return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
