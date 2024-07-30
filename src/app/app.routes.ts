import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';

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
    }
];
