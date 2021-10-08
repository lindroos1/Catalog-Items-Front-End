import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../model/Item';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  public requestedItem: string = "value hasnt been passed yet";
  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.requestedItem = params["id"];
    });
}

  ngOnInit(): void {
  }



}
