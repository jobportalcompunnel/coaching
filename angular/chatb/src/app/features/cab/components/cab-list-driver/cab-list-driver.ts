import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabService, Driver } from '../../services/cab.service';
import { Router, RouterLink } from '@angular/router'; // Import Router and RouterLink
import { Chatbot } from '../../../chatbot/chatbot';
import {CookieManager} from "../../../../core/helper/getUniqueId"



@Component({
  selector: 'app-cab-list-driver',
  standalone: true,
  imports: [CommonModule, RouterLink, Chatbot], // Use RouterLink for navigation links
  templateUrl: './cab-list-driver.html',
  styleUrl: './cab-list-driver.scss'
})
export default class CabListDriverComponent implements OnInit {
  
  // Services injected using the modern 'inject' function
  private cabService = inject(CabService);
  private router = inject(Router);
 
  // Reactive state using Signals
  drivers = signal<Driver[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
     const myUniqueId: any = CookieManager.getOrCreateUniqueId();
     alert(myUniqueId)
     this.loadDrivers();
  }

  /**
   * Fetches the list of drivers from the service.
   */
  loadDrivers(): void {
    this.isLoading.set(true);
    this.cabService.getDrivers().subscribe({
      next: (data) => {
        this.drivers.set(data);
        this.isLoading.set(false);
        this.error.set(null);
      },
      error: (err) => {
        console.error('Failed to load drivers', err);
        this.error.set('Error fetching driver list. Please try again.');
        this.isLoading.set(false);
      }
    });
  }

  /**
   * Navigates programmatically to the edit page.
   * @param id The ID of the driver to edit.
   */
  goToEdit(id: string): void {
    // Navigate to the full path: /cab/edit/101
    this.router.navigate(['/cab/edit', id]);
  }
}