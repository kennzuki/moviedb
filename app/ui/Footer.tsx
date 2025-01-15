import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-[#201F31] flex justify-center place-items-center px-12 py-12'>
      <p className='text-xl font-medium text-gray-100'> {`Welcome to © Kenki media All rights reserved ${currentYear}.`}</p>
      
    </div>
  );
};
