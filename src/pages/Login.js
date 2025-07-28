import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>
        <Link>
        to="/register"
         </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
