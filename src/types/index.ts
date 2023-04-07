export interface ITask {
  uuid: string;
  content: string;
  time?: Time;
  isCompleted: boolean;
}

export type Time = {
  hour: string
  minutes: string
}
