import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/Item';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  @Input() requestedItem: any = "value hasnt been passed yet";
  constructor() { }

  ngOnInit(): void {
  }

}
