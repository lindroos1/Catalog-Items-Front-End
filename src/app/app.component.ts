import { Component, Input } from '@angular/core';
import { Item } from './model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 public requestID:string  = "string from app componenet";
  title = 'Catalog-Items-Front-End';
}
