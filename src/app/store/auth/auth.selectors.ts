/** App Reducer imports */
import {AppState} from "../../app.reducer";

export const selectAuth = (state: AppState) => state.auth;

/** -------------------------------------------------------------------------------------------- */

export const selectUser = (state: AppState) => state.auth.user;
