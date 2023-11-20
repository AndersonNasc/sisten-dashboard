import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Pages Components
import { HomeComponent } from './home/home.component';
import { ScreenPanelsComponent } from './screen-panels/screen-panels.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { ParameterizationComponent } from './parameterization/parameterization.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'screen-panels',
    component: ScreenPanelsComponent,
    title: 'Tela de Paineis',
  },
  {
    path: 'new-dashboard',
    component: NewDashboardComponent,
    title: 'Cadastro de Paineis',
  },
  {
    path: 'edit-dashboard/:id',
    component: NewDashboardComponent,
    title: 'Editor de Paineis',
  },
  {
    path: 'parametrization',
    component: ParameterizationComponent,
    title: 'Parametrização',
  },
  {
    path: 'eventos',
    component: LogComponent,
    title: 'Eventos',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
