import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  public RequestForm: FormGroup = this.formBuilder.group({
    "description": '',
    "deploymentName":''
  });
  //this.RequestForm =

  //takes parameters from container
  public constructor(private route: ActivatedRoute, private itemService: SingleItemService,
    private formBuilder: FormBuilder) {
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
      .subscribe(data =>{data = this.item});
      console.log("this is the the JSON file",this.item);
      //spring will need:
      //1. item Id.
      // catalog item id, aka projectID
      //
  }

  ngOnInit(): void {
  }

  /*
  createForm(){
    for(const required of this.item.required){
        this.RequestForm.addControl(required, this.formBuilder.control(required));
    }
  }
  */
}
