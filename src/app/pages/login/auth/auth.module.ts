import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
//Module
import { SharedModule } from 'src/app/shared/shared.module';
//Component
import { LoginComponent } from '../login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@NgModule({
  declarations: [
  LoginComponent,
  ForgotPasswordComponent
],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule {}
