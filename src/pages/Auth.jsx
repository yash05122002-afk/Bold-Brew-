import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Signed in to Bold Brew!' : 'Welcome to Bold Brew Club!');
    navigate('/');
  };

  return (
    <div className="bb-page auth-wrapper">
      <div className="bb-auth-box">
        <span className="hero-top-tag">{isLogin ? 'Welcome Back' : 'Join The Hustle'}</span>
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
        <p className="auth-desc">
          {isLogin
            ? 'Access your cold brew subscriptions and saved orders.'
            : 'Sign up for 15% off your first cold brew drop.'}
        </p>

        <form onSubmit={handleSubmit} className="bb-auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn-black full">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account? " : 'Already a member? '}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create Account' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;