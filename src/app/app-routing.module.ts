import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TimerComponent } from './timer/timer/timer.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timer/:id', component: TimerComponent },
  { path: 'overview/:id', component: OverviewComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
