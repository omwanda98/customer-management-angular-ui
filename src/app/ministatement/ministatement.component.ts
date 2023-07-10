import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {
  transactionList: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTransactionData();
  }

  fetchTransactionData(): void {
    this.loading = true;
    const apiUrl = 'endpoint_here';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.transactionList = response.transactions;
        this.loading = false;
      },
      (error: any) => {
        console.error('Failed to fetch transaction data:', error);
        this.loading = false;
      }
    );
  }
}
