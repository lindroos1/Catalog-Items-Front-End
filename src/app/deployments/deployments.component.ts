import { Component, OnInit } from '@angular/core';
import { DeploymentService } from '../deployment.service';
import { Deployent } from '../model/Deployment';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {

  public deployments:Deployent[] = [];

  constructor(private deploymentService:DeploymentService) { }

  ngOnInit(): void {
    //subscribe to the service and get deployments
    this.deploymentService.getDeployment().subscribe(deployment =>{
      this.deployments = deployment;
    })
  }

}


