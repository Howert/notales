import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { BuyproductComponent } from '../views/buyproduct/buyproduct.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { FourofourComponent } from '../views/fourofour/fourofour.component';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';


const appRoutes : Routes = [
  {path : '', redirectTo : '/login', pathMatch: 'full'},
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'dashboard', component : DashboardComponent,
    children : [
      {path : '', redirectTo: 'home', pathMatch: 'full'},
      {path : 'home', component: HomeComponent},
      {path : 'getproduct', component : BuyproductComponent}
    ],
    canActivate: [AuthGuard]
    
  },
  {path : 'fourofour', component : FourofourComponent},
  {
    path : '**', redirectTo : '/fourofour'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutesModule { }
