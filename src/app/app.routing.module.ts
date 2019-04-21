import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'home', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
export const RoutingComponent =  [CoursesComponent];
