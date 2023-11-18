import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, of, tap} from "rxjs";

/** NgRx Imports */
import {Actions, createEffect, ofType} from "@ngrx/effects";

/** Store imports */
import * as authActions from './auth.actions';

/** Core Imports */
import {AuthService} from "../../core";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()

export class AuthEffects {

  /**-----------------------------Login effect----------------------------------------------------------*/

  authLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.login),
      mergeMap(({email, password}) => this.authService.login(email, password)
        .pipe(
          map((user) => authActions.authSuccess({user})),
          catchError((error: HttpErrorResponse) => of(authActions.authFail({error: error.error.message})))
        )
      ),
    )
  )

  /**-----------------------------Register effect-------------------------------------------------------*/

  authRegister$ = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.register),
      mergeMap(({fullName, email, password}) => this.authService.register(fullName, email, password)
        .pipe(
          map((user) => authActions.authSuccess({user})),
          catchError((error: HttpErrorResponse) => of(authActions.authFail({error: error.error.message})))
        )
      ),
    )
  )

  /**-----------------------------Logout effect---------------------------------------------------------*/

  authLogout$ = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.logout),
      tap(() => {
        this.router.navigate(['auth']);
      })
    ), {dispatch: false},
  )

  /**-----------------------------Redirect effect-------------------------------------------------------*/
  authRedirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.authSuccess),
      map(() => this.router.navigate(['/']))
    ), {dispatch: false}
  )

  /**-------------------------------------------------------------------------------------------------------*/

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router,
  ) {
  }
}
