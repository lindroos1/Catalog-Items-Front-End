import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxResponse } from 'rxjs/ajax';
import { AlertService } from '../alert.service';
import { FormService } from '../form.service';
import { AlertType } from '../model/Alert';



@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  public item: any;
 
  public formGroup!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private router: Router, private formService:FormService, 
    private alertService:AlertService) { 
       this.item = router.getCurrentNavigation()?.extras.queryParams?.ItemToSend;
    }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ProjectName: ['', Validators.required],
      DeploymentName: ['', Validators.required],
      Version:['',  Validators.required]  
    });
  }

  submit() {
    this.formService.submitForm(this.formGroup.value.ProjectName, this.formGroup.value.DeploymentName,
      this.formGroup.value.Version, this.item.id).subscribe((result: any)=>this.alertService.addAlert(
        result,
         AlertType.SUCCESS),
      ((error: Error) => { 
        this.alertService.addAlert(error.message, AlertType.ERROR);
      }));
    
  }

  
}
