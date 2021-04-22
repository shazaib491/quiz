import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalResultComponent } from './final-result/final-result.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignupComponent } from './signup/signup.component';
import { StartupComponent } from './startup/startup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'singup', component: SignupComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'startup', component: StartupComponent },
  {path:'result',component:ResultComponent},
  {path:'fresult',component:FinalResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
