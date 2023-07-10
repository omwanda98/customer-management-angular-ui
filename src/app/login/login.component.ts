import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerId: string = '1234567';
  pin: string = '1234567';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // Perform API fetch and handle successful login
    // You can replace this with your actual API call
    // Assuming the API call is successful
    const isLoggedIn = true;

    if (isLoggedIn) {
      // Redirect to dashboard route
      this.router.navigate(['/ministatement']);
    } else {
      // Handle login failure
      console.error('Login failed');
    }
  }
}
