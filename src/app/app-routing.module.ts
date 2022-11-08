import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'',
    component:CollegeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
