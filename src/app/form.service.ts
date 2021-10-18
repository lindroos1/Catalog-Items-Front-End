import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private url: string = 'http://localhost:8080/deploySimpleCatalog';

  constructor(private httpClient: HttpClient) { }

  public submitForm(Project: string, DeploymentName: string, Version: string, id:string): Observable<AjaxResponse> {
    return this.httpClient.post<AjaxResponse>(this.url, {
      //left side has to match 1:1 the spring defined model
      projectId: Project,
      deploymentName: DeploymentName,
      version: Version, 
      id:id
    });
  }
}
