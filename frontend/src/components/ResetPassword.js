import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BACKEND_APP_API_URL="http://localhost:5000";
export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Request OTP, 2: Enter OTP and new password
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_APP_API_URL}/users/request-reset`,
        { email }
      );
      setMessage(res.data.message);
      setError('');
      setStep(2);
    } catch (err) {
      setError(err.response?.data.message || 'Server error');
      setMessage('');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_APP_API_URL}/users/reset-password`,
        { email, otp, newPassword }
      );
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data.message || 'Server error');
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {step === 1 ? (
        <form onSubmit={handleRequestOTP}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

