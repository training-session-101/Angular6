import { createSelector } from '@ngrx/store';

export const selectAuthState = state=> state.auth;

export const loggedIn = createSelector(selectAuthState, auth=> auth.loggedIn);

