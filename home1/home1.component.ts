import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { HomeService } from './home.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css',
})
export class Home1Component {
  loginForm: FormGroup;

  constructor(private homeService: HomeService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  markAllFieldsTouched() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  onLogin() {
    this.markAllFieldsTouched(); // Mark all fields as touched when the form is submitted

    if (this.loginForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    const { usernameOrEmail, password } = this.loginForm.value;

    this.homeService.login(usernameOrEmail, password).subscribe(
      (response: string) => {
        if (response === 'Logged in successfully') {
          alert(response);
          this.router.navigate(['/admin']);
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