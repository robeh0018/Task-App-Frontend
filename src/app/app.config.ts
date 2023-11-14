import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from "@angular/common/http";


/** NgrxStore imports */
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from "@ngrx/store-devtools";

/** Routes import */
import {routes} from './app.routes';

/** App Reducer import */
import * as appStore from "./app.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appStore.appReducer),
    provideEffects(appStore.appEffects),
    provideStoreDevtools({logOnly: true})
  ],
};
