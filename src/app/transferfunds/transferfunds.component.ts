import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {
  accountOptions: any[] = []; // Assuming you populate this array with account options
  selectedDebitAccount: any;
  selectedCreditAccount: any;
  transferAmount: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Perform API call to fetch account options
    this.fetchAccountOptions();
  }

  fetchAccountOptions(): void {
    // Make the API call to fetch account options
    const apiUrl = '_endpoint_here';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.accountOptions = response.accountOptions;
      },
      (error: any) => {
        console.error('Failed to fetch account options:', error);
      }
    );
  }

  transferFunds(): void {
    // Prepare the transfer data
    const transferData = {
      debitAccount: this.selectedDebitAccount,
      creditAccount: this.selectedCreditAccount,
      transferAmount: this.transferAmount
    };

    // Make the API call to initiate the funds transfer
    const apiUrl = '_endpoint_here';

    this.http.post(apiUrl, transferData).subscribe(
      (response: any) => {
        console.log('Funds transfer successful:', response);
        // Perform additional actions upon successful funds transfer
      },
      (error: any) => {
        console.error('Funds transfer failed:', error);
        // Handle error cases
      }
    );
  }
}
