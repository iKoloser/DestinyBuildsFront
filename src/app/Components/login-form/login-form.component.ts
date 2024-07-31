import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LoginRegisterServiceService } from '../../services/login-register-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule, 
    MatInputModule,MatButtonModule,MatIconModule, RouterLink,HttpClientModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  router = inject(Router);

  loginRegister = inject(LoginRegisterServiceService);

  loginForm!: FormGroup;

  authService = inject(AuthService);


  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginRegister.login(this.loginForm.value).subscribe(
        response => {
          if (response.token) {
            console.log('Token recibido:', response.token);

            this.authService.login(response.token);
            //localStorage.setItem('authToken', response.token);

            this.router.navigate(['/explore']);
            
            
          } else {
            console.error('Token no recibido en la respuesta');
          }
        },
        error => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }
}
