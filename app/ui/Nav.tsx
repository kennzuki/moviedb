import React from 'react'

export const Nav = () => {
  return (
    <div>
      <h1 className="text-3xl uppercase font-bold ">Kenki</h1>
      <ul className="flex justify-between">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="">
      <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign In</div>
          </button>
      </div>
    </div>
  )
}
