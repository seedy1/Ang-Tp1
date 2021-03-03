import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { MeService } from "./me.service";

// import {  } from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: {me: MeService} },
  { path: 'login', component: LoginComponent, resolve: {me: MeService} },
  { path: 'profile', component: ProfileComponent, resolve: {me: MeService} },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
