import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  onLogin() {
    debugger;
    const formValue = this.loginForm.value;
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', formValue).subscribe({
      next: (response: any) => {
        debugger;
        if (response.result) {
          alert('success!');
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        debugger;
        alert('error :' + error.error);
      },
    });
  }
}
