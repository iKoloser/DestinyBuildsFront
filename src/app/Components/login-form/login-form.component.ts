import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { LoginRegisterServiceService } from '../../services/login-register-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule, 
    MatInputModule,MatButtonModule,MatIconModule, RouterLink,HttpClientModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginRegister = inject(LoginRegisterServiceService);

  loginForm!: FormGroup;

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
            localStorage.setItem('authToken', response.token);
            
            
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
