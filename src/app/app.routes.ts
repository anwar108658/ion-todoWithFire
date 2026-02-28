import { Routes } from '@angular/router';
import { protectDashbordGuard } from './guards/protect-dashbord-guard';
import { protectLoginGuardGuard } from './guards/protect-login-guard-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate:[protectLoginGuardGuard],
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    canActivate:[protectLoginGuardGuard],
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'dashboard',
    canActivate:[protectDashbordGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'welcome',
    canActivate:[protectLoginGuardGuard],
    loadComponent: () => import('./pages/welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.page').then( m => m.NotFoundPage)
  },
];
