import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EditDriverPage.css'; // Import the CSS file

// Define the validation schema using Yup
const UpdateDriverSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Driver Name is required'),
});

const CabEditFormik = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the data passed via state from the previous page
  // The 'driverData' key was used in the navigate call: navigate('/edit-driver/1', { state: { driverData: ... } });
  const driverToEdit = location.state?.driverData;

  // Handle case where data is missing (e.g., direct access via URL)
  if (!driverToEdit) {
    return (
      <div className="container error-message">
        <h1>Driver Data Not Found! 😟</h1>
        <p>Please go back and select a driver to edit.</p>
        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      </div>
    );
  }

  // Define the initial form values
  const initialValues = {
    id: driverToEdit.id,
    name: driverToEdit.name,
    // Add other fields you might have, e.g., 'status: driverToEdit.status'
  };

  // Handle form submission
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // ⚠️ In a real application, you would make an API call here
    console.log('Form submitted with new values:', values);

    // Simulate an API update delay
    setTimeout(() => {
      alert(`Driver ID ${values.id} updated successfully to Name: ${values.name}!`);
      setSubmitting(false);

      // Redirect back to the drivers list or detail page after successful update
      // navigate('/drivers');
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="header">Edit Driver: {driverToEdit.name} (ID: {driverToEdit.id})</h1>
      <p className="sub-header">Update the driver's details below.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={UpdateDriverSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="edit-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Driver Name</label>
              <Field 
                name="name" 
                type="text" 
                className="form-field"
                placeholder="Enter new driver name"
              />
              <ErrorMessage 
                name="name" 
                component="div" 
                className="error-text" 
              />
            </div>
            
            {/* Hidden field for ID, as it's needed for the update call but not editable */}
            <Field name="id" type="hidden" />

            <button type="submit" disabled={isSubmitting} className="submit-button">
              {isSubmitting ? 'Updating...' : 'Update Driver'}
            </button>
            <button type="button" onClick={() => navigate(-1)} className="cancel-button">
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CabEditFormik;