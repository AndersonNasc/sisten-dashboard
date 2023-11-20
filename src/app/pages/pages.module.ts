import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
//Modules
import { SharedModule } from '../shared/shared.module';
//Component
import { HomeComponent } from './home/home.component';
import { ScreenPanelsComponent } from './screen-panels/screen-panels.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { ParameterizationComponent } from './parameterization/parameterization.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    HomeComponent,
    ScreenPanelsComponent,
    NewDashboardComponent,
    ParameterizationComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
