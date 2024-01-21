import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { TimerComponent } from './timer/timer/timer.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { ShowTimesComponent } from './overview/show-times/show-times.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    TimerComponent,
    OverviewComponent,
    ShowTimesComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
