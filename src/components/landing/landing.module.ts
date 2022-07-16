import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let route : Routes = [
  {
    path:'',
    component:LandingComponent
  }
]
@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgbModule
  ],
  exports:[LandingComponent]
})
export class LandingModule { }
 