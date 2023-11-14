import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, of} from "rxjs";

/** NgRx Imports */
import {Actions, createEffect, ofType} from "@ngrx/effects";

/** Store imports */
import * as authActions from './auth.actions';

/** Core Imports */
import {AuthService} from "../../core";

@Injectable()

export class AuthEffects {

  /**-----------------------------Login effect----------------------------------------------------------*/

  authLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.login),
      mergeMap(({email, password}) => this.authService.login(email, password)),
      map((user) => authActions.authSuccess({user})),
      catchError((error) => of(authActions.authFail({error})))
    )
  )

  /**-------------------------------------------------------------------------------------------------------*/

  constructor(private actions$: Actions,
              private authService: AuthService
  ) {
  }
}
