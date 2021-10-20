import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Status } from './model/Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url: string = 'http://localhost:8080/getStatus';
  private subject: BehaviorSubject<Status[]> = new BehaviorSubject<Status[]>([]);
  public Obs: Observable<Status[]> = this.subject.asObservable();
  Id!:string;


  constructor(private httpClient: HttpClient) { }

  public SubscribeStatus():any{
   return 
  }

  public Status(id: string): any {
  return this.httpClient.post<any>(this.url, {id});
  }
}
