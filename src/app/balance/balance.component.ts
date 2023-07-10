import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  userBalance: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make API call to fetch balance
    const apiUrl = 'api_endpoint_here';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Assuming you receive the balance value from the API
        this.userBalance = response.balance;
      },
      (error: any) => {
        // Handle error cases
        console.error('Error fetching balance:', error);
      }
    );
  }
}
