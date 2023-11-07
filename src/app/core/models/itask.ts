export interface ITask {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  startDate: Date;
  // If has end date set allDay to false.
  endDate?: Date;
  userId: number;
}
