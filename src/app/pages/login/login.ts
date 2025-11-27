import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl(''),
  });

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    const formValue = this.loginForm.value;
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', formValue).subscribe({
      next: (response: any) => {
        if (response.result) {
          //alert('success!');
          localStorage.setItem('angular20Token', response.data.token);
          this.router.navigateByUrl('/layout/dashboard');
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        alert('error :' + error.statusText);
      },
    });
  }
}
