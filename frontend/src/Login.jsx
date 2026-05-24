import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields required");
      return;
    }

    try {
      const res = await axios.post("https://netflix-login-r9lw.onrender.com/login", { email, password });

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        setError("Incorrect email or password. Try it out using... email: abc@gmail.com | password: 123");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <div className="absolute inset-0 bg-black bg-opacity-50 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      <header className="relative z-10 w-full p-6">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      </header>
      <div className="relative z-10 flex-grow flex justify-center items-center pb-20">
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-75 p-12 rounded-md w-[400px] text-white">
          <h1 className="text-3xl mb-8 font-bold">Log In</h1>
          {error && <p className="bg-orange-500 text-white p-3 rounded mb-4 text-sm">{error}</p>}
          <input type="email" placeholder="Email id" className="w-full p-4 mb-4 bg-[#333] border border-gray-600 rounded focus:outline-none focus:border-white transition" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full p-4 mb-8 bg-[#333] border border-gray-600 rounded focus:outline-none focus:border-white transition" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="w-full bg-red-600 py-3 font-bold rounded hover:bg-red-700 transition duration-200 text-lg">
            Log In
          </button>

          <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline">Need help?</a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;