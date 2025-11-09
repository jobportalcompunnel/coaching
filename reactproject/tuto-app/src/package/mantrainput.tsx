import React, { forwardRef, InputHTMLAttributes } from 'react';

// Define a proper TypeScript interface for the component's props.
// This is crucial for type safety and developer experience.
interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const MantraInput = forwardRef<HTMLInputElement, MyInputProps>(({ label, ...otherProps }, ref) => {
  const uniqueId = useId();

  return (
    <label htmlFor={uniqueId}>
      {label}
      <input
        id={uniqueId}
        {...otherProps} // This spreads all props, including onChange, onBlur, etc.
        ref={ref}
      />
    </label>
  );
});

export default MantraInput;

function useId(): string {
  return "654654";
}
