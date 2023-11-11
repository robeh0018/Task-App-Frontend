/** NgRx Imports */
import {ActionReducerMap} from "@ngrx/store";

/** Reducers imports */
import * as auth from './store/auth';

/** -------------------------------------------------------------------------------------------*/

/** App State */
export interface AppState {
  auth: auth.AuthState;
}

/** -------------------------------------------------------------------------------------------*/

/** Root Reducer */
export const appReducer: ActionReducerMap<AppState> = {
  auth: auth.authReducer,
}

/** -------------------------------------------------------------------------------------------*/

export const appEffects = [
  auth.AuthEffects,
]
