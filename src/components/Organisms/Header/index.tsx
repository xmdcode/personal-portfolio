import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='h-[120px] max-w-[1536px] w-full mx-auto flex items-center justify-between text-white'>
      <div className='text-white lg:text-4xl'>XmdCode</div>
      <div className='flex items-center space-x-4'>
        <Link className="transition-all ease-in-out delay-150 hover:opacity-55" href="/">Home</Link>
        <Link className="transition-all ease-in-out delay-150 hover:opacity-55" href="/aboutme">About Me</Link>
        <Link className="transition-all ease-in-out delay-150 hover:opacity-55" href="/services">Services</Link>
        <Link className="transition-all ease-in-out delay-150 hover:opacity-55" href="/articles">Articles</Link>
        <Link className="transition-all ease-in-out delay-150 hover:opacity-55" href="/contact">Contact</Link>
      </div>
      <button className='max-w-[250px] w-full text-center py-4 border-white border-2 rounded-full font-semibold hover:bg-white hover:text-[#202020] transition ease-in-out delay-150'>Connect With Me</button>
    </header>
  )
}

export default Header