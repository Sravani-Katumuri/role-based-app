import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { adminGuard } from './admin.guard';
import { userGuard } from './user.guard';

export const routes: Routes = [
      { path: '', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [adminGuard] },
  { path: 'user', component: UserHomeComponent, canActivate: [userGuard] }

];
