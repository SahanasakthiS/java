import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
}