import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="w-full p-5 bg-gradient-to-b from-black to-transparent">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-gray-400 mb-8">You have successfully logged in.</p>
        
        <button 
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
        >
          Log Out
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;