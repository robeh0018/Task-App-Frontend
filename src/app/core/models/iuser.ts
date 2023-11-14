import {UserRoles} from "../enums";

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  roles: UserRoles[];
  isActive: boolean;
}
