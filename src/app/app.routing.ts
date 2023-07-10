import { Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { SignupComponent } from './signup/signup.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'balance', component: BalanceComponent },
      { path: 'transfer', component: TransferfundsComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'ministatement', component: MinistatementComponent },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];
