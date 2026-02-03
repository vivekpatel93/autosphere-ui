import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    // 🔥 Call a PROTECTED endpoint to validate credentials
    await axios.get("http://localhost:8080/admin/users", {
      auth: {
        username: email,
        password: password,
      },
    });

    // If success → ADMIN
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("role", "ADMIN");

    navigate("/admin");
  } catch (err) {
    alert("Invalid Credentials or Not Admin");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
