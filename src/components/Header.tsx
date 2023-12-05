import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#F2EFE9] flex p-4 space-x-4 text-black font-black text-3xl justify-between'>
      <div className='flex'>
        <Link to={'/'}>
          <img src='/coffee.svg' alt='logo' className='w-8 h-auto' />
        </Link>
      </div>
      <div className='space-x-4 flex items-center text-[#201713]'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'underline-offset-8 underline' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/history'}
          className={({ isActive }) =>
            isActive ? 'underline-offset-8 underline' : ''
          }
        >
          History
        </NavLink>
      </div>
    </header>
  )
}

export default Header
