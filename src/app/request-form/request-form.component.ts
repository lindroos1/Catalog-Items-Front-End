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

  public RequestForm: FormGroup = this.formBuilder.group({});
  //this.RequestForm =

  //takes parameters from container
  public constructor(private route: ActivatedRoute, private itemService: SingleItemService,
    private formBuilder: FormBuilder) {
    this.route.queryParams.subscribe(params => {
      this.requestedItem = params["id"];
      this.itemService.setIDs(this.requestedItem);

      this.itemService.getSingleItemRequest()
        .subscribe(_ => {
          this.item = this.itemService.getName().schema,
          this.createFormControls()
          console.log("this is requestForm object", this.RequestForm.value);
        }

        );
    });
  }

  createFormControls() {
    for (let i of this.item.required) {
      this.RequestForm.addControl(i, new FormControl('', Validators.required));
    }
  }

  submited() {
      console.log(this.RequestForm.getRawValue());
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
