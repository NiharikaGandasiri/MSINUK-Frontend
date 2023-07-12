import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path:'university/:id/:university', component:UniversityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
