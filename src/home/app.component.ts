import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Import CommonModule if needed for template features
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fix: Correct property is `styleUrls`
})
export class HomeComponent {

  constructor(private router: Router) {} // Inject Router

  // Method to navigate to EmployeeList
  navigateToEmployeeList() {
    this.router.navigate(['/employee-list']);
  }
}
