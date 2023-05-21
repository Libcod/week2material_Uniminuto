import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "src/app/components/login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, // No encuentra direcciona al login
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', loadChildren: () => import('src/app/components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}//ruta no existente direcciona al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
