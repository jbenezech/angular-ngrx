import { IUser } from '../../models/user.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
  usersLoading: boolean
  usersLoaded: boolean
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  usersLoading: false,
  usersLoaded: false
};
