import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './model/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  url: string = 'http://localhost:8080/getAllItems';
  

  item:any;

  constructor(private htpp: HttpClient){
  }

 
  public get():Observable<Item[]>{
      return this.htpp.get<Item[]>(this.url);
      }

}
