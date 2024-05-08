import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Router, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./welcome/welcome.module").then(m => m.WelcomeModule)
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports:[RouterModule]
})
export class AppRoutingModule { }
