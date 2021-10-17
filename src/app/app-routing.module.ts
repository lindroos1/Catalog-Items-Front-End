import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container-component/container-component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { ItemComponent } from './item/item.component';
import { RequestFormComponent } from './request-form/request-form.component';


const routes: Routes = [  { path: '', redirectTo: '/main', pathMatch: 'full' },
{path: 'request', component: RequestFormComponent},
{path: 'main', component: ItemComponent},
{path:'deployments', component:DeploymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
