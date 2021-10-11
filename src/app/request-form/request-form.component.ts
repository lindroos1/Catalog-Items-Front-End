import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../model/Item';
import { SingleItemService } from '../single-item.service';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  public requestedItem: string = "value hasnt been passed yet";
  public item: any;
  customObj:any
  m_status!:number;
 
  public RequestForm: FormGroup = this.formBuilder.group({
    "description": '',
    "deploymentName":''
  });
  //this.RequestForm =

  //takes parameters from container
  public constructor(private route: ActivatedRoute, private itemService: SingleItemService,
    private formBuilder: FormBuilder, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.requestedItem = params["id"];
      this.itemService.setIDs(this.requestedItem);

      this.itemService.getSingleItemRequest()
        .subscribe(_ => {
          this.item = this.itemService.getName(),
          this.createFormControls()
          console.log("this is requestForm object", this.RequestForm.value);
        }

        );
    });
  }

  createFormControls() {
    for (let i of this.item.schema.required) {
      this.RequestForm.addControl(i, new FormControl('', Validators.required));
    }
  }


  submited() {
      Object.keys(this.RequestForm.controls).forEach((key:string) =>{
        console.log(key);
        console.log(this.RequestForm.get(key)?.value)
      })
      this.item.input = this.RequestForm.getRawValue();
      this.itemService.PostDeplyment(JSON.stringify(this.item))
      .subscribe(data =>{this.m_status = data.status; console.log(this.m_status)});
  }

  ngOnInit(): void {
    
  }

  passed():boolean{
    if(this.m_status == 200){
      alert("success");
      this.m_status = 0;
      return true;
    }
    else if(this.m_status == 400 || this.m_status == 405){
      alert("did not succeed");
    }
    return false;
  }


  back() {
    this.router.navigate(["main"]);
  }
}
