import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'explore',
        component: ExploreComponent
    },
    {
        path: 'loginRegister',
        component: LoginRegisterComponent   
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
