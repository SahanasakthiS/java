import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [NavbarComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component implements AfterViewInit {
  userName: string = '';
  email: string = '';
  password: string = '';
  

  constructor(private authService: AuthService, private router: Router) {}

  @ViewChild('submitBtn') submitBtn?: ElementRef;

  ngAfterViewInit() {
    if (this.submitBtn) {
      this.submitBtn.nativeElement.addEventListener('click', () => {
        console.log('Submit button clicked!');
        this.onSubmit();
      });
    } else {
      console.error('Submit button not found!');
    }
  }

  public onSubmit(): void {
    if (!this.userName || !this.email || !this.password ) {
      alert('Please fill in all fields.');
      return;
    }

    const userData = {
      userName: this.userName,
      email: this.email,
      password: this.password
      
    };

    this.authService.processInfo(userData).subscribe({
      next: (response: any) => {
        alert("Registration Successfull!!");
        this.router.navigate(['/dashboard']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}