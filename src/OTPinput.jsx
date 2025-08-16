import { useState, useRef } from "react";
import "./styles.css";
import OTPunit from "./OTPunit.jsx";

const OTPinput = ({ size }) => {
  const [otp, setOtp] = useState(new Array(size).fill("")); // store digits
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (value && value <= 9) {
      // allow only one digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (value && index < size - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-container">
      {otp.map((val, index) => (
        <OTPunit
          key={index}
          ref={(element) => (inputRefs.current[index] = element)}
          value={val}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPinput;
