import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { TimerComponent } from './timer/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    TimerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
