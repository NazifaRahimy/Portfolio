import React from 'react';

const Footer = () => {
    const listNavbar = [
        {name: 'Home',link: '#' },
        {name: 'Skills',link: '#skills' },
        {name: 'Experience',link: '#experience' },
        {name: 'Language',link: '#language' },
        {name: 'Projects',link: '#project' },
    ]
    return ( 
        <footer className='bg-gray-700 rounded-lg shadow'>
            <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
                <span className='text-ms text-gray-200 sm:text-center'>
                    2023 <a href='#' className='hover:underline'> Protfolio</a>
                </span>
                <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 sm:mt-0'>
                    {
                        listNavbar.map((item,index) => (
                            <a className='hover:text-orange-400 mx-4 md:mx-6 'key={index} href={item.link}>{item.name}</a>
                        ))
                    }
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;