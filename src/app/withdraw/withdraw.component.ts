import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawalAmount: number = 0;
  accountOptions: any[] = []; // Assuming you populate this array with account options
  selectedDebitAccount: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Perform API call to fetch account options
    this.fetchAccountOptions();
  }

  fetchAccountOptions(): void {
    // Make the API call to fetch account options
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

  withdraw(): void {
    // Prepare the withdrawal data
    const withdrawalData = {
      withdrawalAmount: this.withdrawalAmount,
      debitAccount: this.selectedDebitAccount
    };

    // Make the API call to initiate the withdrawal
    const apiUrl = 'your_api_endpoint_here';

    this.http.post(apiUrl, withdrawalData).subscribe(
      (response: any) => {
        console.log('Withdrawal successful:', response);
        // Perform additional actions upon successful withdrawal
      },
      (error: any) => {
        console.error('Withdrawal failed:', error);
        // Handle error cases
      }
    );
  }
}
