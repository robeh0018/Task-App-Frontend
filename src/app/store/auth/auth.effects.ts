import {Injectable} from "@angular/core";
import {map} from "rxjs";

/** NgRx Imports */
import {Actions, createEffect, ofType} from "@ngrx/effects";

/** Store imports */
import * as authActions from './auth.actions';

/** Core Imports */
import {IUser} from "../../core";

@Injectable()

export class AuthEffects {

  /**-----------------------------Login effect----------------------------------------------------------*/

  authLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.login),
      map((action) => {

        const user: IUser = {
          email: action.email,
          password: action.password,
          fullName: '',
          role: '',
          tasks: [],
          isActive: true,
          id: new Date().getTime(),
        }

        return authActions.authSuccess({user});
      })
    )
  )

  /**-------------------------------------------------------------------------------------------------------*/

  constructor(private actions$: Actions) {
  }
}
