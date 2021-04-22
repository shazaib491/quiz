import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { StartupComponent } from './startup/startup.component';
import { SignupComponent } from './signup/signup.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ResultComponent } from './result/result.component';
import { FinalResultComponent } from './final-result/final-result.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartupComponent,
    SignupComponent,
    ScheduleComponent,
    ResultComponent,
    FinalResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
