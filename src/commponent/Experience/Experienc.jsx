const Experience = () => {
    return ( 
        <section id="experience" className="relative  overflow-hidden flex flex-clo ">
            <div className="hidden absolute top-[100px] left-64 right-12 md:flex items-start justify-center inset-x-0 ">
                <div className="w-[380px] h-[380px] bg-gradient-to-br invisible from-orange-400 blur-2xl opacity-40 rounded-full"></div>
                <div className="w-96 h-96 bg-gradient-to-r from-[#ffdb12] blur-2xl opacity-40 rounded-full"></div>
            </div>
            <div className="container mx-auto flex  flex-col items-center md:flex-row  px-5 py-24 ">
                <div data-aos = 'fade-right' data-aos-delay= '250'
                    className="relative w-5/6 lg:max-w-lg lg:w-full mb-6 md:mb-0 md:w-1/2  ">
                    <div className="w-[400px] h-[450px] md:w-[300px] md:h-[450px] bg-gradient-to-tr from-orange-600 via-yellow-500 to-red-400 shadow-[0_0_40px_rgba(255,165,0,0.7)] transform rotate-3 absolute md:right-36 rounded-md z-0 -top-8"></div>
                    <img src="Assitas/img_experience.jpg" alt="img_experience"  className="w-[400px] h-[450px] md:w-[300px] md:h-[450px]  z-10 object-center  rounded-md relative "/>
                </div>
                <div data-aos = 'fade-left' data-aos-delay= '250'
                 className="lg:flex-grow md:w-1/2 text-center items-center flex flex-col md:items-start md:text-left text-white md:pl-8 ">
                    <h1 className="text-orange-500 mb-4 font-medium text-3xl">Experience</h1>
                    <h2 className="text-2xl font-bold ">2024 :</h2>
                    <p className="leading-relaxed mb-8">Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.</p>
                    <h2  className="text-2xl font-bold ">2025 :</h2>
                    <p className="leading-relaxed mb-8">Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Experience;