import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardIsLogedService } from './services/auth-guard-is-loged.service';
import { CreateComponent } from './pages/create/create.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardIsLogedService]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardIsLogedService]
    },
    {
        path: 'explore',
        component: ExploreComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'loginRegister',
        component: LoginRegisterComponent,
        canActivate: [AuthGuardIsLogedService]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuardIsLogedService]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuardIsLogedService]
    },
    {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuardService]
    }

];
