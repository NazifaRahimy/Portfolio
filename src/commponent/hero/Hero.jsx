import NavBar from "../navBar/NavBar";

const Hero = () => {
    return (  
        <div className="w-[100%]  relative sm:min-h-[660px] min-h-[550px] flex flex-col overflow-hidden">
           <div className="w-[880px] h-[960px] md:w-[660px] md:h-[720px] absolute -top-20 right-0  bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 rounded-full transform  rotate-12 "></div>
            <NavBar />
            <section    data-aos = 'fade-up'
              data-aos-delay= '250'
            className="relative text-white z-10  ">
                <div className="container px-5  mx-auto items-center py-24 flex flex-col md:flex-row ">
                    <div className="flex flex-col items-center text-center w-full mb-16 md:mb-0 md:w-1/2 md:pr-16 lg:pr-24 2xl:pr-44 lg:flex-grow md:items-start md:text-left ">
                        <img src="Assitas/hi.png" alt="hi" className="w-20 h-20 absolute top-[480px] left-44 md:top-[130px]  md:left-[490px] -translate-y-1/2  " />
                        <h1 className='title-font text-4xl  mb-4 font-bold text-white'>Hi! I'm NaFISa</h1>
                        <p className='mb-8 leading-relaxed'>Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit. </p>
                        <div className="flec justify-center">
                            <a href='CV.pdf'>
                            <button className='inline-flex text-white bg-orange-500 border-0 py-3 px-7 focus:outline-none hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] hover:bg-orange-600 rounded-full text-lg'>Download CV</button>
                            </a>
                        </div>
                    
                    </div>
                    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 md:mr-[-3%]">
                       <img src='Assitas/img.jpg'  alt="girl" className='object-cover object-center rounded-full w-80 h-80' />
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Hero;