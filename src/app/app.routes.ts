import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c=> c.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c=> c.HomeComponent),
        children: [
            {
                path: 'info', 
                loadComponent: () => import('./pages/home/pages/info/info.component').then(c => c.InfoComponent)
            },
            {
                path: 'activity', 
                loadComponent: () => import('./pages/home/pages/activity/activity.component').then(c => c.ActivityComponent)
            },
            {
                path: 'shift', 
                loadComponent: () => import('./pages/home/pages/shift/shift.component').then(c => c.ShiftComponent)
            },
            {
                path: 'staff', 
                loadComponent: () => import('./pages/home/pages/staff/staff.component').then(c => c.StaffComponent)
            },
            {
                path: 'booking', 
                loadComponent: () => import('./pages/home/pages/booking/booking.component').then(c => c.BookingComponent)
            },
            {
                path: 'notifications', 
                loadComponent: () => import('./pages/home/pages/notifications/notifications.component').then(c => c.NotificationsComponent)
            },
            {
                path: 'setting', 
                loadComponent: () => import('./pages/home/pages/setting/setting.component').then(c => c.SettingComponent)
            },
            {
                path: '', 
                redirectTo: 'info',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
