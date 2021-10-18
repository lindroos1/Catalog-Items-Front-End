import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Versions } from './model/Versions';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  url:string = "";
  
  constructor(private htpp: HttpClient){
  }

  public setiD(id:string){
    this.url = "http://localhost:8080/GetVersions?id=" + id;
  }

  public getVersions():Observable<Versions>{
   return this.htpp.get<Versions>(this.url);
}
}
