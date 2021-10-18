import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';



@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  public item: any;
 
  public formGroup!: FormGroup;
  public projectId:string = "567bf576-3f4f-4f1b-8fde-a234fc78fe74"

  constructor(private formBuilder: FormBuilder,
    private router: Router, private formService:FormService) { 
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
      this.formGroup.value.Version, this.item.id).subscribe();
    
  }

  
}
