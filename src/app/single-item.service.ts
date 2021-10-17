import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from './model/Item';
import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class SingleItemService {

  urlSingle:string = 'http://localhost:8080/getSpecificItem?itemId=';
  item:any;
  postUrl:string = "http://localhost:8080/postItem";
  
  constructor(private htpp: HttpClient){
  }

  public setIDs(id:string){
    this.urlSingle += id;
}


   public getSingleItemRequest():Observable<any>{
    return this.htpp.get<Item>(this.urlSingle).pipe(
       tap(data => this.item = data)
   );
}

   public getName(): Item{
     this.urlSingle = 'http://localhost:8080/getSpecificItem?itemId=';
      return this.item;
    
   }

   public PostDeplyment(JsonObj:any):Observable<any>{ 
     
      const headers = {'content-type': 'application/json', 'charset': 'utf-8'};
      const options = {  headers: headers,   observe: "response" as 'body'};
      return this.htpp.post<any>(this.postUrl, JsonObj, options);
   }

  
}
