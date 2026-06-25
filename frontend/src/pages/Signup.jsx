import { Link } from "react-router-dom";
import { register } from "../services/authService";

const Signup = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await register({
        name,
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>

        <p className="text-gray-500 text-center mb-6">Register to start chatting</p>

        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>
            <input type="text" placeholder="Enter you name" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input type="email" placeholder="Enter you email" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-2" />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password 
            </label>
            <input type="password" placeholder="Enter you password" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-2" />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-5">Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup