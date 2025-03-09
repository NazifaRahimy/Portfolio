const Skills = () => {
    return (  
        <section id="skills"    data-aos = 'fade-up'
              data-aos-delay= '250'
        className="relative overflow-hidden w-full flex flex-col">
            <div className="container mx-auto   px-5 py-24 flex flex-wrap items-center " >
                <div    data-aos = 'fade-right' data-aos-delay= '250'
                 className="text-white mb-6 md:mb-0 md:w-1/2 border-b md:border-b-0 md:border-r border-orange-400 md:pr-12">
                    <h1 className="text-white sm:text-4xl text-2xl mb-2 ">Skills </h1>
                    <p className="leading-relaxed text-base mb-4 md:mb-0">ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.Lorem ipusm dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div     data-aos = 'fade-left' data-aos-delay= '250' className="flex flex-col md:pl-12 md:w-1/2 ">
                <div className=" flex flex-wrap list-none ">
                    <li className="w-1/2 lg:w-1/3 mb-4"><img className="w-24 h-24 rounded-md" src="Assitas/js.png" alt="js" /></li>
                    <li className="w-1/2 lg:w-1/3 mb-4"><img className="w-24 h-24 rounded-md" src="Assitas/html-5.png" alt="js" /></li>
                    <li className="w-1/2 lg:w-1/3 mb-4"><img className="w-24 h-24 rounded-md" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSKAERIWCPNdR5Wmq4oxlPvwKokWjjDZwkg&s' alt="js" /></li>
                    <li className="w-1/2 lg:w-1/3 mb-4"><img className="w-24 h-24 rounded-md" src="Assitas/webdesign.png"/></li>
                    <li className="w-1/2 lg:w-1/3 mb-4"><img className="w-24 h-24 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3k5hFWvblr1XFlBToxaGLTj5GHwQkU7SlQ&s"/></li>
                    <li className="w-1/2 lg:w-1/3 mb-4"><img className="w-24 h-24 rounded-md" src="Assitas/react.png"/></li>
                </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;
