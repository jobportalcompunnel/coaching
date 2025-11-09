import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabService, Driver } from '../../services/cab.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';

@Component({
  selector: 'app-cab-view-driver',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cab-view-driver.html',
  styleUrls: ['./cab-view-driver.scss'],
})
// Assuming a named export for consistency
export class CabViewDriverComponent implements OnInit { 
  private route = inject(ActivatedRoute);
  private cabService = inject(CabService);

  // Reactive state for the driver data
  driver = signal<Driver | null>(null);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    // 🔑 Use switchMap to react to route changes and fetch data
    this.route.paramMap.pipe(
      switchMap(params => {
        this.isLoading.set(true);
        const id = params.get('id');
        if (!id) {
          this.error.set('Driver ID is missing.');
          this.isLoading.set(false);
          return EMPTY;
        }
        return this.cabService.getDriver(id);
      })
    ).subscribe({
      next: (driver) => {
        this.driver.set(driver || null);
        this.isLoading.set(false);
        if (!driver) {
          this.error.set('Driver not found.');
        }
      },
      error: (err) => {
        console.error('Failed to load driver details', err);
        this.error.set('Error fetching driver details.');
        this.isLoading.set(false);
      }
    });
  }
}