import { ActionDate } from './actiondate.model';

export class Action {
    public ID: number;
    public ActionName: string;
    public MappingID: string;
    public ActionDateModel: ActionDate = new ActionDate();
}