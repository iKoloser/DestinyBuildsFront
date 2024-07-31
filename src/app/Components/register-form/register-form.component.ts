import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { LoginRegisterServiceService } from '../../services/login-register-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import e from 'express';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule, 
    MatInputModule,MatButtonModule,MatIconModule, RouterLinkActive,HttpClientModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  router = inject(Router);

  loginRegister = inject(LoginRegisterServiceService);

  authService = inject(AuthService);

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      samePassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid && this.loginForm.value.password === this.loginForm.value.samePassword) {
      this.loginRegister.register(this.loginForm.value).subscribe(
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
