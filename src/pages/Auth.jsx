import {Link} from 'react-router-dom'
const Auth = ({register}) => {
  console.log(register)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        {
          register?
                <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 md:p-10 shadow-md">
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">Register</h2>
        <input
          className="w-full mb-3 px-4 py-2 border border-white rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-white rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Password"
        />
        <button className="w-full bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition">
          Register
        </button>
        <p className='text-center mt-2 text-gray-500'>or</p>
        <Link to={'/'}><p className='text-center text-white'>sign in</p></Link>
      </div>
      :
            <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 md:p-10 shadow-md">
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">Login</h2>
        <input
          className="w-full mb-3 px-4 py-2 border border-white rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-white rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Password"
        />
        <button className="w-full bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition">
          Login
        </button>
        <p className='text-center mt-2 text-gray-500'>or</p>
        <Link to={'/register'}><p className='text-center text-white'>sign up</p></Link>
      </div>
        }
    </div>
  );
};

export default Auth;
