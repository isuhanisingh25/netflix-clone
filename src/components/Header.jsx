import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header({ login }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-2">
      <div className="logo cursor-pointer" onClick={() => navigate("/")}>
        <img className="h-16" src={logo} alt="Streamix Logo" />
      </div>

      <button
        onClick={() => navigate(login ? "/login" : "/signup")}
        className={`px-4 py-2 bg-red-600 rounded text-white font-bold ${
          login ? "text-lg" : "text-xl"
        }`}
      >
        {login ? "Log In" : "Sign Up"}
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          header {
            padding: 1rem;
          }

          .logo img {
            height: 4rem;
          }

          button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          header {
            padding: 0.5rem;
          }

          .logo img {
            height: 3rem;
          }

          button {
            padding: 0.5rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}