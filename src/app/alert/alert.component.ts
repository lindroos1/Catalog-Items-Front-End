import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from '../alert.service';
import { Alert } from '../model/Alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  public alerts!: Observable<Alert[]>;
  constructor(public alertService: AlertService) { }

  ngOnInit() {
    this.alerts = this.alertService.alertsObs;
  }
}
