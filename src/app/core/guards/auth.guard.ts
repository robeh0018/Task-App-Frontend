import {inject} from "@angular/core";
import {CanActivateFn, Router} from '@angular/router';
import {map, take} from "rxjs";

/** NgRx Imports */
import {Store} from "@ngrx/store";

/** Store imports */
import {AppState} from "../../app.reducer";
import * as authSelectors from "../../store/auth/auth.selectors";


export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(authSelectors.selectUser)
    .pipe(
      take(1),
      map(user => {
        if (!user) {
          return router.createUrlTree(['/auth']);
        }

        return true;
      }),
    )
};
