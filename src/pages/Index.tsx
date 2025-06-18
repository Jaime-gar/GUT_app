import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FigmaLogo from "../components/FigmaLogo";
import GoogleIcon from "../components/GoogleIcon";

const Index = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Simulate successful authentication
    console.log("Google sign-in clicked");
    navigate("/dashboard");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful authentication
    console.log("Email submitted:", email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-primary-background font-primary relative">
      {/* Figma Logo */}
      <FigmaLogo />

      {/* Link to Landing Page */}
      <div className="absolute top-design-xxl right-design-xxl">
        <Link
          to="/landing"
          className="text-accent-blue hover:opacity-80 transition-opacity font-medium"
        >
          View Landing Page
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-auth-form">
          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="px-design-md py-design-xl">
            {/* Main Heading */}
            <h1 className="text-auth-heading font-medium text-primary-text mb-design-xxl text-left">
              Want to check out this file? Sign up or Log in
            </h1>

            {/* Google Sign-in Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full h-auth-button bg-button-secondary-bg border border-button-border rounded-design-md 
                         flex items-center justify-center gap-design-sm
                         text-auth-button text-primary-text font-figma
                         hover:bg-gray-50 transition-colors duration-200"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            {/* "or" Divider */}
            <div className="text-center my-design-lg">
              <span className="text-auth-divider text-primary-text">or</span>
            </div>

            {/* Email Input Container */}
            <div className="relative mb-design-lg">
              {/* Email Label */}
              <label
                htmlFor="email"
                className="absolute top-design-xs left-design-sm 
                           text-auth-label font-mono uppercase text-primary-text"
              >
                EMAIL
              </label>

              {/* Email Input Field */}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-auth-input bg-input-bg border border-input-border rounded-design-sm
                           pt-design-lg pb-design-sm px-design-sm
                           text-auth-input text-primary-text font-figma
                           focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent
                           placeholder-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-auth-button bg-button-primary-bg text-button-primary-text 
                         rounded-design-md text-auth-button font-figma
                         hover:bg-gray-800 transition-colors duration-200
                         relative overflow-hidden"
            >
              Continue with email
              {/* Hidden icon span as per design */}
              <span className="absolute inset-0 opacity-0"></span>
            </button>

            {/* Additional Navigation */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Looking for more information?
              </p>
              <Link
                to="/landing"
                className="text-accent-blue hover:underline text-sm font-medium"
              >
                Visit our homepage →
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
