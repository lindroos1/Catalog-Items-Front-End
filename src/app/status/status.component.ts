import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../model/Status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public status!:Observable<Status[]>;

  constructor(public statusService:StatusService) { }

  ngOnInit(): void {
    //when init subscribe for service status. 
    //since it is empty nothing will be returned untill the form is submitted
   this.status = this.statusService.Obs;
  }

}
