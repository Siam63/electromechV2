import React from 'react';
import headerLogo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={129}
                        height={29}
                        className='m-0 w-[129px] h-[29px]'
                    />
                </a>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <div className="hover:scale-110 transition-all">
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className='font-montserrat leading-normal text-lg text-blue-'
                                >
                                    {item.label}
                                </a>
                            </li>
                        </div>
                    ))}
                </ul>

                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a className="hover:scale-105 transition-all" href='/'>Sign in</a>
                    <span>/</span>
                    <a className="hover:scale-105 transition-all" href='/'>Explore now</a>
                </div>
                
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt='hamburger icon' width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav
