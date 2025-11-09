
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import './EditDriverPage.css'; // The CSS file from the previous answer

// 1. Define the Zod Schema for validation
const UpdateDriverSchema = z.object({
  id: z.number(), // ID is required but not editable in the form
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name cannot exceed 50 characters' })
    .nonempty({ message: 'Driver Name is required' }),
});

// Infer the TypeScript type from the schema for strong typing
type DriverFormValues = z.infer<typeof UpdateDriverSchema>;

const CabEditHook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Access the data passed via state
  const driverToEdit = location.state?.driverData;
  
  // Initialize useForm with Zod resolver
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<DriverFormValues>({
    resolver: zodResolver(UpdateDriverSchema),
    // 2. Set default values here (equivalent to initialValues in Formik)
    defaultValues: {
      id: driverToEdit?.id,
      name: driverToEdit?.name || '',
    },
  });

  // Use useEffect to reset the form if driverToEdit changes (good practice)
  // Although in this setup, it's primarily used for initial setup after mount
  useEffect(() => {
    if (driverToEdit) {
      reset({
        id: driverToEdit.id,
        name: driverToEdit.name,
      });
    }
  }, [driverToEdit, reset]);


  // Handle case where data is missing
  if (!driverToEdit) {
    return (
      <div className="container error-message">
        <h1>Driver Data Not Found! 😟</h1>
        <p>Please go back and select a driver to edit.</p>
        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      </div>
    );
  }


  // 3. Define the submit handler
  const onSubmit = (values: DriverFormValues) => {
    // ⚠️ In a real application, you would make an API call here
    console.log('Form submitted with new values:', values);

    // Simulate an API update delay
    setTimeout(() => {
      alert(`Driver ID ${values.id} updated successfully to Name: ${values.name}!`);
      // Optionally, redirect after update
      // navigate('/drivers');
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="header">Edit Driver: {driverToEdit.name} (ID: {driverToEdit.id})</h1>
      <p className="sub-header">Update the driver's details below.</p>

      {/* 4. Use handleSubmit and onSubmit in the form */}
      <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Driver Name</label>
          <input 
            id="name"
            type="text" 
            className="form-field"
            placeholder="Enter new driver name"
            // 5. Register the input field
            {...register('name')}
          />
          {/* 6. Display errors */}
          {errors.name && (
            <div className="error-text">{errors.name.message}</div>
          )}
        </div>
        
        {/* Hidden input for ID (using register for data inclusion) */}
        <input 
            type="hidden" 
            {...register('id', { valueAsNumber: true })} 
        />

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Updating...' : 'Update Driver'}
        </button>
        <button type="button" onClick={() => navigate(-1)} className="cancel-button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CabEditHook;