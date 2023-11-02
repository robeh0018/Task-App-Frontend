export interface ITask {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
