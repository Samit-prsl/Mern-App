import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="phone:w-11/12 tablet:w-1/3 mx-auto bg-white rounded-md p-5 mt-5" onSubmit={handleSubmit}>
      <h3 className="font-semibold text-2xl flex justify-center text-teal-700 pb-5">Log In</h3>

      <label className="font-medium text-gray-800">Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label className="font-medium text-gray-800">Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div className="flex flex-col justify-center pt-2 py-1 lg:scale-100 phone:scale-90">
        <button disabled={isLoading} className="font-montserrat mx-auto relative px-6 py-3 font-bold text-black group">
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
          <span class="relative">Login</span>
        </button>
      {error && <div className="error">{error}</div>}
      </div>

    </form>
  )
}

export default Login
