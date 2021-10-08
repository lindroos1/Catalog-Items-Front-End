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
    console.log("ItemComponent created");
   }

  ngOnInit() {
    console.log("ItemComponent onInit called");
    
    this.itemService.get().subscribe(data =>{
      console.log(data);
      this.items = data;
     });
  }

  public  getItems(): Item[]{
    return this.items;
  }

}
