import React from 'react';
import { PowerIcon } from '@heroicons/react/24/solid';
import SearchInput from './SearchInput';
import Link from 'next/link';

export const Nav = () => {
  return (
    <div className='bg-[#201F31] flex justify-between place-items-center p-4'>
      <h1 className='text-3xl uppercase font-bold '>Kenki</h1>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <Link href={'./movies'}>Movies</Link>
        <Link href={'./about'}>About</Link>
        <SearchInput />
      </ul>
      <div className=''>
        <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 text-black'>
          <PowerIcon className='w-6' />
          <div className='hidden md:block'>Sign In</div>
        </button>
      </div>
    </div>
  );
};
