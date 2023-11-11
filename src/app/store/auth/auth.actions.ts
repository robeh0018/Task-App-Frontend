/** NgRx Imports */
import {createAction, props} from "@ngrx/store";

/** Core Imports */
import {IUser} from "../../core";

/** ------------------------------Login Action------------------------------------------------------------*/

export const login = createAction(
  '[Auth] Login',
  props<{
    email: string,
    password: string
  }>()
);

/** ------------------------------Register Action----------------------------------------------------------*/

export const register = createAction(
  '[Auth] Register',
  props<{
    fullName: string,
    email: string,
    password: string
  }>()
);

/** ------------------------------Auth Success----------------------------------------------------------*/

export const authSuccess = createAction(
  '[Auth] Auth Success',
  props<{
    user: IUser,
  }>()
);

/** ------------------------------Auth Fail----------------------------------------------------------*/

export const authFail = createAction(
  '[Auth] Auth Fail',
  props<{
    error: any,
  }>()
);
