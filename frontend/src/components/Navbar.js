import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className='text-teal-600 font-semibold phone:text-3xl lg:text-5xl py-5 font-marcellus my-auto'>Excersize</h1>
        </Link>
        <nav>
          {user && (
            <div className='flex phone:gap-1 lg:gap-3'>
              <span className='font-semibold text-jet phone:text-xs tablet:text-base my-auto'>{user.email}</span>
              <button onClick={handleClick} className="rounded-full bg-gray-200 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </button>
            </div>
          )}

          {!user && (
            <div className='flex lg:gap-5'>
              <Link to="/login" className='font-semibold tablet:text-base phone:text-sm inline-block py-3 text-xl text-white bg-basicgreen px-3 hover:bg-teal-600 transition duration-300 rounded-md lg:scale-100 phone:scale-90'>
                  Log In
              </Link>
              <Link to="/signup" className='font-semibold tablet:text-base phone:text-sm inline-block py-3 text-xl text-white bg-gray-900 px-3 hover:bg-gray-800 transition duration-300 rounded-md lg:scale-100 phone:scale-90'>
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
