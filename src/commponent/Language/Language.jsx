const Language = () => {
    const Languages = [
        {code:'En', name: 'English', level: 'Maternal'},
        {code:'Ar', name: 'Arbic', level: 'Common'},
        {code:'Sp', name: 'Spanish', level: 'Average'},
        {code:'Fr', name: 'Freach', level: 'Good'}
    ]
    return ( 
        <section id="language"  data-aos='fade-up' data-aos-delay='400'
         className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 mt-10 ">
            <div className="grid grid-cols-2 gap-10 md:flex ">
                {
                    Languages.map(({index, name, code, level}) =>(
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-20 md:h-20 text-black relative bg-white rounded-full flex items-center justify-center shadow-lg text-lg md:text-xl mb-6 md:mb-8 ">
                                <span className="z-10 font-bold">{code}</span>
                                <div className="absolute w-24 h-24 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460]  shadow-[0_0_20px_rgba(255,165,0,0.7)]"></div>
                            </div>
                            <span className="text-white text-lg md:text-xl">{name}</span>
                            <span className="text-orange-300  text-lg md:text-xl font-bold">{level}</span>
                        </div>
                    ))
                }
            </div>
            
        </section>
     );
}
export default Language;