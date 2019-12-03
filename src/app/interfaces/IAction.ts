import { ActionType } from "../enums";

export interface IAction {
  type: ActionType;
  data: any;
}
