import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '..'

/* const temporalAasync = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
} */
const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' }
]
export const Navbar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/' className='flex item-center '>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      <div className='flex flex-1' />
      {navItems.map(navItem => (
        <ActiveLink {...navItem} key={navItem.path} />
      ))}
    </nav>
  )
}
