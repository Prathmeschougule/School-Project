import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreePrimarySchoolComponent } from './pree-primary-school/pree-primary-school.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"pree",component:PreePrimarySchoolComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
