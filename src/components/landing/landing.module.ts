import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(route)
  ],
  exports:[LandingComponent]
})
export class LandingModule { }
