import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeModule } from './welcome/welcome.module';


const routes: Routes = [
  {
    path: "",
    component: WelcomeModule
  }
  /*
  {
    path: "",
    loadChildren: () => import("./welcome/welcome.module").then(m => m.WelcomeModule)
  },
  {
    path: "",
    loadChildren: () => import("./courses/courses.module").then(m => m.CoursesModule)
  }
  */
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
