import { forwardRef } from "react";
import "./styles.css";

const OTPunit = forwardRef(({ value, onChange, onKeyDown }, ref) => {
  return (
    <input
      ref={ref}
      className="otp-input"
      maxLength={1}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
});

export default OTPunit;
