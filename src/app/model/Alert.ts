export class Alert {
    constructor(public msg: string, public type: AlertType) {}
}

export enum AlertType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'danger',
    INFORMATION = 'information'
}
