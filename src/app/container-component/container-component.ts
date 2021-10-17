import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Items } from '@clr/angular/data/datagrid/providers/items';
import { ItemService } from '../item.service';
import { Item } from '../model/Item';
import { RequestFormComponent } from '../request-form/request-form.component';


@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.html',
  styleUrls: ['./container-component.css']
})
export class ContainerComponent implements OnInit {


  
  @Input() public id:string ="";
  @Input() public item?:Item;
 
  public constructor(private router: Router) { }

  public takeInpit(Id:string): void{

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id":Id
      }
  };
  this.router.navigate(["request"], navigationExtras);
  }

 

  public clicked:boolean = false;

  ngOnInit(): void {
  }

}
