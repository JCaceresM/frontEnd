import { all } from "redux-saga/effects"

import { watchLocalState } from "./local/localState.sagas"

import {
  watchAuthenticateUser,
  watchGetUserMenuOptions,
} from "./user/user.sagas"

export default function* rootSaga(): Generator {
  yield all([
    watchGetUserMenuOptions(),
    watchAuthenticateUser(),
    watchLocalState(),
  
  ])
}
