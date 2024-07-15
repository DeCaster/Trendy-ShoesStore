import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger, closeIcon } from '../assets/icons'; // Ensure you have icons for toggling
import { navLinks } from '../constants';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='relative z-10 w-full'>
            <nav className='flex justify-between items-center max-container px-4 py-8'>
                <a href="/" className='flex items-center'>
                    <img src={headerLogo} alt='Logo' width={38} height={29}/>
                    <h1 className='font-montserrat uppercase ml-2'>Rendy</h1>
                </a>
                
                <div className={`fixed inset-y-0 right-0 bg-white w-64 p-8 space-y-6 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out flex flex-col z-20 shadow-lg lg:static lg:translate-x-0 lg:flex lg:flex-row lg:space-y-0 lg:space-x-8 lg:p-0 lg:bg-transparent lg:w-auto lg:shadow-none list-none`}>
                    
                <li className='lg:hidden '>
                        <button onClick={() => setIsOpen(false)} className='font-montserrat leading-normal text-lg text-slate-gray list-none'>X</button>
                    </li>
                    {navLinks.map((item) => (
                        <li key={item.label} className='lg:inline'>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray' onClick={() => setIsOpen(false)}>{item.label}</a>
                        </li>
                    ))}
                    
                    
                </div>
                
                <button className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen ? closeIcon : hamburger} alt="Menu Toggle" width={25} height={25} />
                </button>
            </nav>
        </header>
    );
}

export default Nav;
