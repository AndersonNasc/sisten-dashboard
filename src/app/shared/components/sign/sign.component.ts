import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//Service
import { AuthenticationService } from 'src/app/core/service/authentication.service';
//Model
import { Login } from '../../models/login';
//Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  loginForm!: FormGroup;
  authLogin!: Login;
  durationInSeconds = 5;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['',Validators.compose([Validators.required, Validators.minLength(2)])]
    });
  }

  login() {
    this.authLogin = Object.assign('', this.authLogin, this.loginForm.value);
    this.authLogin.usuario = this.authLogin.usuario;
    console.log(this.authLogin);

    this.authenticationService.login({usuario: this.authLogin.usuario, senha: this.authLogin.senha}).subscribe(
      (valid) => {
        if (valid) {
          this.router.navigateByUrl('home');
        }
      },
      (error) => {
        this._snackBar.open('Usuário ou senha incorretos');
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 3000);
      }
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['auth', 'login']);
  }
}
