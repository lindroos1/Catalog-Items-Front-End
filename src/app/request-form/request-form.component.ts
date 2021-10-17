import { Component, Input, OnInit } from '@angular/core';
import { SingleItemService } from '../single-item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  public item: any;
 
  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private Service: SingleItemService,
    private router: Router) { 
       this.item = router.getCurrentNavigation()?.extras.queryParams?.ItemToSend;
    }

  submited() {
   
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      Project: ['', Validators.required],
      DeploymentName: ['', Validators.required],
    });
  }

  
}
