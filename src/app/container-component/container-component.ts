import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Item } from '../model/Item';


@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.html',
  styleUrls: ['./container-component.css']
})
export class ContainerComponent implements OnInit {


  
  @Input() public id:string ="";
  @Input() public item?:Item;
 
  public constructor(private router: Router) { }

//will redirect us to the correspondig view associated with that item.id(aka card.id)
  public RedirectToForm(Id:any): void{

    //navigationExtras is used to share info between componenets when redirecting
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ItemToSend: this.item
      }
  };
  console.log("this is what we send from container", this.item?.name);
  this.router.navigate([Id], navigationExtras);
  }

 

  public clicked:boolean = false;

  ngOnInit(): void {
  }

}
