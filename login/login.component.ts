import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const { usernameOrEmail, password } = this.loginForm.value;

    this.loginService.login(usernameOrEmail, password).subscribe(
      (response: string) => {
        if (response === 'Logged in successfully') {
          alert(response);
          this.router.navigate(['/dashboard']);
        } else {
          alert(response);
        }
      },
      (error: any) => {
        console.error('Login failed', error);
        alert('Invalid username or password');
      }
    );
  }
}