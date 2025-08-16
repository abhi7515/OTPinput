import "./styles.css";
import OTPinput from "./OTPinput.jsx";

export default function App() {
  const OTP_LENGTH = 6;
  return (
    <div className="App">
      <h3>Enter otp to log in</h3>
      <OTPinput size={OTP_LENGTH} />
    </div>
  );
}
