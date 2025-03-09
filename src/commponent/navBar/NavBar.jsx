import React from 'react';

const NavBar = () => {
    const listNavbar = [
        {name: 'Home',link: '#home' },
        {name: 'Skills',link: '#skills' },
        {name: 'Experience',link: '#experience' },
        {name: 'Language',link: '#language' },
        {name: 'Projects',link: '#project' },
    ]
    return (  
        <header className='w-[100%] h-auto relative z-10 text-gray-600'>
            <div className='container mx-auto p-5 flex flex-col md:flex-row flex-wrap items-center  text-white'>
                <p className='flex font-medium items-center mb-4 md:mb-0'>
                    <span className='text-white ml-3 text-3xl'>Portofolio</span>
                </p>
                <nav className='flex flex-wrap items-center justify-center mx-auto text-base'>
                    {
                        listNavbar.map(({name, link,index})=>(
                            <a className='mr-5 hover:text-yellow-300' key={index} href={link}>{name}</a>
                        )  
                    )
                    }
                </nav>
                <button className='inline-flex items-center focus:outline-none py-1 px-5 text-base mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900'>
                    <a href="#contact">Contanct Me</a>
                </button>
            </div>
        </header>
    );
}
 
export default NavBar;