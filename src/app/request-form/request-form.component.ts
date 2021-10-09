import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../model/Item';
import { SingleItemService } from '../single-item.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  public requestedItem: string = "value hasnt been passed yet";
  public item:any;

  

  //takes parameters from container
  public constructor(private route: ActivatedRoute, private itemService: SingleItemService) {
    this.route.queryParams.subscribe(params => {
        this.requestedItem = params["id"];
        this.itemService.setIDs(this.requestedItem);
        this.itemService.getSingleItemRequest()
        .subscribe(_ => this.item = this.itemService.getName());
    });
    
}

  ngOnInit(): void {
  }



}
