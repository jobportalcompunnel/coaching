import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabService, Driver } from '../../services/cab.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-cab-edit-driver',
  standalone: true,
  // 🔑 Key Imports for Forms
  imports: [CommonModule, ReactiveFormsModule, RouterLink], 
  templateUrl: './cab-edit-driver.html',
  styleUrls: ['./cab-edit-driver.scss'],
})
// Assuming a named export for consistency
export class CabEditDriverComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cabService = inject(CabService);
  private fb = inject(FormBuilder);

  driver = signal<Driver | null>(null);
  driverForm!: FormGroup;
  isLoading = signal<boolean>(true);
  isSaving = signal<boolean>(false);
  error = signal<string | null>(null);

  statusOptions = ['available', 'on-trip', 'offline'];

  ngOnInit(): void {
    this.initForm();
    this.loadDriverData();
  }

  /** Initializes the reactive form structure. */
  private initForm(): void {
    this.driverForm = this.fb.group({
      id: [{ value: '', disabled: true }], // ID is disabled but needed for update
      name: ['', Validators.required],
      cabModel: ['', Validators.required],
      licensePlate: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  /** Fetches driver data based on route ID and patches the form. */
  private loadDriverData(): void {
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
        if (driver) {
          this.driver.set(driver);
          this.driverForm.patchValue(driver); // Populate the form
        } else {
          this.error.set('Driver not found.');
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Error loading driver data.');
        this.isLoading.set(false);
      }
    });
  }

  /** Handles form submission to update the driver. */
  onSubmit(): void {
    if (this.driverForm.invalid || this.isSaving()) {
      this.driverForm.markAllAsTouched();
      return;
    }

    this.isSaving.set(true);
    // Use getRawValue() to include disabled fields like 'id'
    const updatedDriver: Driver = this.driverForm.getRawValue();

    this.cabService.updateDriver(updatedDriver).subscribe({
      next: () => {
        this.isSaving.set(false);
        alert(`Driver ${updatedDriver.id} updated successfully!`);
        // Navigate back to the view page
        this.router.navigate(['/cab/view', updatedDriver.id]);
      },
      error: (err) => {
        console.error('Update failed:', err);
        this.error.set('Failed to save changes.');
        this.isSaving.set(false);
      }
    });
  }
}