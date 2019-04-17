import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  console.log(action.type);
  switch (action.type) {
    case EUserActions.GetUsers: {
      return (Object.assign({}, state, {usersLoading: true}));
    }
    case EUserActions.GetUsersSuccess: {
      return (Object.assign({}, state, {usersLoading: false}));
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    default:
      return state;
  }
};
