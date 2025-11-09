import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // For structural directives if needed

@Component({
  selector: 'app-cab-layout',
  standalone: true,
  // 🔑 Key Imports: RouterOutlet is essential for rendering nested routes.
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './cab-layout.component.html',
  styleUrl: './cab-layout.component.css',
})
export class CabLayoutComponent {
  // Simple data for the navigation menu within the feature
  navLinks = [
    { path: '/cab/list', label: 'All Drivers' },
    { path: '/cab/new', label: 'Add New Driver' },
  ];
}