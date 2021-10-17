import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deployent } from './model/Deployment';

@Injectable({
  providedIn: 'root'
})
export class DeploymentService {

  url:string = "http://localhost:8080/getDeployments";
  deployments:any;

  constructor(private htpp: HttpClient) { }

  public getDeployment(): Observable<Deployent[]>{
   return  this.htpp.get<Deployent[]>(this.url);
  }
}
