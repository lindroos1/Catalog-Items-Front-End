import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alert, AlertType } from './model/Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertsInternal: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
  public alertsObs: Observable<Alert[]> = this.alertsInternal.asObservable();

  public get alerts(): Alert[] {
    return this.alertsInternal.getValue();
  }

  public set alerts(alerts: Alert[]) {
    this.alertsInternal.next(alerts);
  }

  public addAlert(message: string,  type: AlertType ): void {
    this.alerts.push(new Alert(message, type));
  }
}
