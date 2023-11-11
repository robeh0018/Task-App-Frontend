import {ITask} from "./itask";

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  tasks: ITask[];
}
