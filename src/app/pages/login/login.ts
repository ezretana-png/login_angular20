import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loginResponse: LoginResponse = {
    accessToken: '',
    refreshToken: '',
  };

  http = inject(HttpClient);
  router = inject(Router);
  vUrl: string = 'http://localhost:5212/api/Auth/login';
  //vUrl: string = 'http://localhost:5212/api/Users/GetUsers';
  vUrl2 = 'https://freeapi.miniprojectideas.com/api/User/Login';
  onLogin() {
    const formValue = this.loginForm.value;

    this.http.post(this.vUrl, formValue).subscribe({
      next: (response: any) => {
        if (response.refreshToken != '') {
          this.loginResponse = {
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          };

          localStorage.setItem('angular20Token', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);

          this.router.navigateByUrl('/layout/dashboard');
        } else {
          alert('There was a problem');
        }
      },
      error: (error) => {
        alert('error :' + error.error);
      },
    });
  }
}
