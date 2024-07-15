import React from 'react';

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  const buttonClasses = `
    flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? backgroundColor : 'bg-fuchsia-900'} 
    ${textColor ? textColor : 'text-white'} 
    ${borderColor ? borderColor : 'border-fuchsia-900'} 
    rounded-full 
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <button className={buttonClasses.trim()} >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' />}
    </button>
  );
}

export default Button;
