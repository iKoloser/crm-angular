import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDataComponentComponent } from './customer/customer-data-component/customer-data-component.component';

export const routes: Routes = [
    {path: 'Dashboard', component:DashboardComponent},
    {path: 'Customers', component:CustomerDataComponentComponent},
];
