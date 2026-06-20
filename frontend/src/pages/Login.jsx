import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-2'>
          Welcome Back
        </h1>

        <p className='text-gray-500 text-center mb-6'>
          Login to your account
        </p>

        <form className='space-y-4'>
          <div>
            <label className='block mb-2 font-medium'>
              Email
            </label>
            <input type="email" placeholder='Enter email' className='w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' />
          </div>

          <div>
            <label className='block mb-2 font-medium'>
              Password
            </label>
            <input type="password" placeholder='Enter password' className='w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' />
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition'>
            Login
          </button>
        </form>

        <p className='text-center mt-5'>Don't have an account?{" "}
          <Link to='/signup' className='text-blue-600 font-semibold'>Sing Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login