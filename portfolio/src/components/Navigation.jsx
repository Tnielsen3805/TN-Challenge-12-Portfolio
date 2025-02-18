import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className='flex space-x-4 md:space-x-8'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline underline-offset-4'
                : 'hover:text-blue-400'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/portfolio'
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline underline-offset-4'
                : 'hover:text-blue-400'
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline underline-offset-4'
                : 'hover:text-blue-400'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/resume'
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline underline-offset-4'
                : 'hover:text-blue-400'
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
