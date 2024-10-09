import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { CircleUserRound, Eye, Link } from 'lucide-react'

export const Nav = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-50 p-4 rounded-b-lg md:rounded-lg md:m-4'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='logo' className='w-10 h-10' />
        <h1 className='text-2xl font-inter font-bold hidden md:block'>devlinks</h1>
      </div>
      <div className='flex items-center gap-1 md:gap-8'>
        <NavLink to='/' className={({isActive})=>{
          return `flex items-center gap-2 text-gray-600 px-4 py-2 rounded-md transition-colors font-inter font-medium ${isActive ? "bg-purple-100 text-purple-700" : "bg-transparent text-gray-600"}`
        }}>
          <Link className='w-5 h-5' />
          <span className='hidden md:block'>Links</span>
        </NavLink>
        <NavLink to='/profile' className={({isActive})=>{
          return  `flex items-center gap-2 px-4 py-2 rounded-md transition-colors font-inter font-medium ${isActive ? "bg-purple-100 text-purple-700" : "bg-transparent text-gray-600"}`
        }}>
          <CircleUserRound className='w-6 h-6' />
          <span className='hidden md:block'>Profile Details</span>
        </NavLink>
      </div>

      <NavLink
        to='/'
        className='bg-transparent hover:bg-purple-700 border border-purple-700 text-purple-700 hover:text-gray-100 px-4 py-2 rounded-md transition-colors font-inter font-medium'
      >
        <span className='hidden md:block'>Preview</span>
        <Eye className='w-5 h-5 block md:hidden' strokeWidth={2.5} />
      </NavLink>
    </nav>
  )
}


/**
 * 
 * <nav className='flex justify-between items-center bg-gray-50 p-4 rounded-b-lg md:rounded-lg md:m-4'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='logo' className='w-10 h-10' />
        <h1 className='text-2xl font-inter font-bold hidden md:block'>devlinks</h1>
      </div>
      <div className='flex items-center gap-1 md:gap-8'>
        <NavLink to='/' className='flex items-center gap-2 focus:bg-purple-100 text-gray-600 focus:text-purple-700 px-4 py-2 rounded-md transition-colors font-inter font-medium'>
          <Link />
          <span className='hidden md:block'>Links</span>
        </NavLink>
        <NavLink to='/' className='flex items-center gap-2 focus:bg-purple-100 text-gray-600 focus:text-purple-700 px-4 py-2 rounded-md transition-colors font-inter font-medium'>
          <CircleUserRound />
          <span className='hidden md:block'>Profile Details</span>
        </NavLink>
      </div>

      <NavLink
        to='/'
        className='bg-transparent hover:bg-purple-700 border border-purple-700 text-purple-700 hover:text-gray-100 px-4 py-2 rounded-md transition-colors font-inter font-medium'
      >
        <span className='hidden md:block'>Preview</span>
        <Eye className='w-5 h-5 block md:hidden' strokeWidth={2.5} />
      </NavLink>
    </nav>
 */