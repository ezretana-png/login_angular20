import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  userList: any[] = [];

  http = inject(HttpClient);

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/User/GetUserByUserId?userId=6422')
      .subscribe({
        next: (response: any) => {
          const result = response.data;
          this.userList = result;
        },
        error: (error) => {
          alert(error.error);
        },
      });
  }
}
