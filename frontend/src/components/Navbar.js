import React from 'react';

import Logo from '../img/nba-logo-75.svg';

export default function Navbar() {
    return (
        <div className='md:flex flex-row justify-start items-center text-white p-4 font-poppinsm fixed hidden' id='nav' data-aos='fade' data-aos-delay='100' data-aos-duration='1000'>
            <a href="/">
                <img className='w-14 pr-4 ml-2 mr-1 border-b-2 border-transparent' src={Logo} alt="Logo" />
            </a>
            <a className='nav-link' href="#about" id='navAbout'>About</a>
            <a className='nav-link' href="#teams" id='navTeams'>Teams</a>
        </div>
    );
}
