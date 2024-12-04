import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confrimation',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './confrimation.component.html',
  styleUrl: './confrimation.component.css'
})
export class ConfirmationComponent {
  startDate: string = '';
  endDate: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { startDate: string; endDate: string };

    this.startDate = state?.startDate || 'Not provided';
    this.endDate = state?.endDate || 'Not provided';
  }

  goToFeedback() {
    this.router.navigate(['/feedback']);
  }
}