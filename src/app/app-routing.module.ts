import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('src/components/landing/landing.module').then(m=>m.LandingModule)
  },
  {
    path:"login",
    loadChildren:()=>import('src/components/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"signup",
    loadChildren:()=>import('src/components/register/register.module').then(m=>m.RegisterModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
