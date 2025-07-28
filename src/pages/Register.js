import React from 'react';
import '../index.css';

const SignupPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
