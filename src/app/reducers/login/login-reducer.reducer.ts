import { User } from '../../model/User';
import { AuthAction } from '../../actions/auth.actions';


export interface AuthState {
  loggedIn: boolean,
  user: User
}


export function reducer (initialState: AuthState , action): AuthState {

  switch (action.type) {
    case AuthAction.LoggedIn:
      return {
        loggedIn :true ,
        user :action.payload.user
      };
    case AuthAction.LoggedOut:
      return {
        loggedIn :false ,
        user :null
      };
    default:
      return initialState;
  }
}
