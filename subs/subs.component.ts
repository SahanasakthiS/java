import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subs',
  standalone: true,
  imports: [ NavbarComponent, FormsModule],
  templateUrl: './subs.component.html',
  styleUrl: './subs.component.css'
})
export class SubsComponent {
  constructor(private route: ActivatedRoute){}
  subscribe(plan: string){
    alert('You selected the ${plan} plan!');
  }

}
