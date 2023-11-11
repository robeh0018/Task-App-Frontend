/** NgRx Imports */
import {createReducer, on} from "@ngrx/store";

/** Core Imports */
import {IUser} from "../../core";

/** Actions imports */
import * as actions from './auth.actions'

export interface AuthState {
  isLoading: boolean;
  user: IUser | null;
  error: any;
}

export const initialAuthState: AuthState = {
  isLoading: false,
  user: null,
  error: null
}

export const authReducer = createReducer(
  initialAuthState,

  /** ------------------------------Login ------------------------------------------------------------------*/

  on(actions.login, actions.register, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }),

  /** ------------------------------Auth Success----------------------------------------------------------*/

  on(actions.authSuccess, (state: AuthState, {user}) => {
    return {
      ...state,
      user,
      isLoading: false,
      error: null,
    }
  }),

  /** ------------------------------Auth Fail----------------------------------------------------------*/

  on(actions.authFail, (state: AuthState, {error}) => {
    return {
      ...state,
      user: null,
      isLoading: false,
      error,
    }
  })
)
