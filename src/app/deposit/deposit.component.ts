import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  amount: number = 0;
  accountOptions: any[] = [];
  selectedAccount: any;
  description: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAccountOptions();
  }

  fetchAccountOptions(): void {
    const apiUrl = 'your_api_endpoint_here';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.accountOptions = response.accountOptions;
      },
      (error: any) => {
        console.error('Failed to fetch account options:', error);
      }
    );
  }

  submitDeposit(): void {
    const depositData = {
      amount: this.amount,
      account: this.selectedAccount,
      description: this.description
    };

    const apiUrl = 'your_api_endpoint_here';

    this.http.post(apiUrl, depositData).subscribe(
      (response: any) => {
        console.log('Deposit successful:', response);
      },
      (error: any) => {
        console.error('Deposit failed:', error);
      }
    );
  }
}
