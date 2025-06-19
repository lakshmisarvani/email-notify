import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BACKEND_APP_API_URL="http://localhost:5000";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_APP_API_URL}/users/register`,
        { email, password }
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

