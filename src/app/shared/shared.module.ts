import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from '../pages/pages-routing.module';
//Components
import { SignComponent } from './components/sign/sign.component';
import { FormForgotPasswordComponent } from './components/form-forgot-password/form-forgot-password.component';
import { HeaderComponent } from './components/header/header.component';
import { AppIconsComponent } from './icons/icons.component';
import { GridPanelsComponent } from './components/grid-panels/grid-panels.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewCDashboardComponent } from './components/new-c-dashboard/new-c-dashboard.component';
import { NewCParameterizationComponent } from './components/new-c-parameterization/new-c-parameterization.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    SignComponent,
    FormForgotPasswordComponent,
    HeaderComponent,
    AppIconsComponent,
    GridPanelsComponent,
    MenuComponent,
    NewCDashboardComponent,
    NewCParameterizationComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    SignComponent,
    FormForgotPasswordComponent,
    HeaderComponent,
    AppIconsComponent,
    GridPanelsComponent,
    MenuComponent,
    NewCDashboardComponent,
    NewCParameterizationComponent,
  ],
})
export class SharedModule {}
