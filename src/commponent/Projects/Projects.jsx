import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
   const Listprojects = [
      {id: 1, title: 'Project 1', image:'Assitas/image.jpg', description: 'Photo description for project'},
      {id: 2, title: 'Project 2', image:'Assitas/image2.jpg', description: 'Photo description for project'},
      {id: 3, title: 'Project 3', image:'Assitas/image3.jpg', description: 'Photo description for project'},
      {id: 4, title: 'Project 4', image:'Assitas/image4.jpg', description: 'Photo description for project'},
   ]

   const settings = {
    dots: true,       
    infinite: true,    // اصلاح شد (حروف کوچک)
    slidesToShow: 3,  
    slidesToScroll: 1,
    arrows: true,     
    responsive: [     
        {
            breakpoint: 700, 
            settings: {
                slidesToShow: 1, 
            }
        }
    ]};

    return ( 
        <section id="project" data-aos='fade-up' data-aos-delay='400'
        className="flec flec-col overflow-hidden text-white">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="font-bold text-4xl text-center mb-10">My Project</h1>
                <Slider {...settings}>
                    { Listprojects.map(({id, title, image, description}) =>(
                        <div key={id} className="p-5">
                            <div className=" h-auto border-2 overflow-hidden shadow-[0_0_15px_rgba(255,165,0,0.7)]  border-orange-400 border-opacity-40 rounded-lg ">
                                <img src={image} alt={title} className="w-full h-auto sm:h-24 md:h-36 lg:h-48 object-cover object-center" />
                                <div className="p-6">
                                    <h1 className="text-xl text-gray-400 font-medium tracking-widest mb-1">{title}</h1>
                                    <p className="leading-relaxed mb-3">{description}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
        // <section id="project" className="flex flex-col text-white overflow-hidden w-full h-[500px]">
        //     <div className="container px-5 py-24 mx-auto ">
        //         <h1 className="text-4xl font-bold text-center mb-10">My Project</h1>
        //      <div className="flex gap-5 mb-20">
        //      <div className="p-5">
        //             <div className="w-[300px] overflow-hidden h-auto border-2 rounded-lg border-orange-400 border-opacity-40">
        //                 <img src="Assitas/image.jpg" alt="" className="w-full object-cover object-center h-auto sm:h-24 md:h-36 lg:h-48" />
        //                 <div className="p-6">
        //                     <h2 className="text-gray-4 mb-1 tracking-widest font-medium text-xl">projct 1</h2>
        //                     <p className="leading-relaxed mb-3">this id ffj kkkkkkkkk</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="p-5">
        //             <div className="w-[300px] overflow-hidden h-auto border-2 rounded-lg border-orange-400 border-opacity-40">
        //                 <img src="Assitas/image.jpg" alt="" className="w-full object-cover object-center h-auto sm:h-24 md:h-36 lg:h-48" />
        //                 <div className="p-6">
        //                     <h2 className="text-gray-4 mb-1 tracking-widest font-medium text-xl">projct 1</h2>
        //                     <p className="leading-relaxed mb-3">this id ffj kkkkkkkkk</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="p-5">
        //             <div className="w-[300px] overflow-hidden h-auto border-2 rounded-lg border-orange-400 border-opacity-40">
        //                 <img src="Assitas/image.jpg" alt="" className="w-full object-cover object-center h-auto sm:h-24 md:h-36 lg:h-48" />
        //                 <div className="p-6">
        //                     <h2 className="text-gray-4 mb-1 tracking-widest font-medium text-xl">projct 1</h2>
        //                     <p className="leading-relaxed mb-3">this id ffj kkkkkkkkk</p>
        //                 </div>
        //             </div>
        //         </div>
        //      </div>
        //     </div>
        // </section>
     );
}
 
export default Projects;