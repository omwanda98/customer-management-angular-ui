import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customer: any = {
    name: '',
    email: '',
    id: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(): void {
    // Perform registration logic
    const apiUrl = 'your_registration_endpoint_here';

    this.http.post(apiUrl, this.customer).subscribe(
      (response: any) => {
        // Handle successful registration
        console.log('Registration successful:', response);
        // You can perform additional actions on successful registration
      },
      (error: any) => {
        // Handle error cases
        console.error('Registration failed:', error);
        // You can display an error message or perform additional error handling
      }
    );
  }
}
