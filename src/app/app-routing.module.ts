import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardGrocerComponent} from './dashboard-grocer/dashboard-grocer.component';
import {VisualClientsComponent} from './visual-clients/visual-clients.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardGrocerComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'visualClients', component: VisualClientsComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }

