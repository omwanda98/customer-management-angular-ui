import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  userBalance: number = 0; // Assuming you have a variable to hold the user balance

  ngAfterViewInit() { }
}
