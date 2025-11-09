import { forwardRef } from "react";

const MyInput = forwardRef(({ label, ...otherProps }: any, ref) => {
  
  // otherProps.customFunction 

  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} onClick={otherProps.customFunction} />
    </label>
  );
});

export default MyInput;
