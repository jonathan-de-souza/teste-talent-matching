//imports do angular
import { RouterModule, Routes, RouterLink } from '@angular/router';

//imports components
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from "./new-user/new-user.component";

const appRoutes: Routes = [
  { path: '', component: NewUserComponent },
  { path: 'home', component: HomeComponent },  
  { path: '**', component: NewUserComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);