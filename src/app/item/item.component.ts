import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Item } from '../model/Item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html', 
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public items: Item[] = []; 
  

  constructor(private itemService:ItemService) {
   }

  ngOnInit() {
    this.itemService.get().subscribe(data =>{
      this.items = data;
     });
  } 

  
}
