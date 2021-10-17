import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container-component/container-component';
import { ItemComponent } from './item/item.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import '@cds/core/select/register.js';
import '@cds/core/button/register.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeploymentsComponent } from './deployments/deployments.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ItemComponent,
    RequestFormComponent,
    DeploymentsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
