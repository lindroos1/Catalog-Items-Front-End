import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container-component/container-component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { ItemComponent } from './item/item.component';
import { RequestFormComponent } from './request-form/request-form.component';


const routes: Routes = [  { path: '', redirectTo: '/main', pathMatch: 'full' },
{path: '82f17a7c-556f-3071-8f24-6eb177e56bfc', component: RequestFormComponent},
{path: '646f2da7-d345-3106-96f1-74deb7223105', component: RequestFormComponent},
{path: 'main', component: ItemComponent},
{path:'deployments', component:DeploymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
