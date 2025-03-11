const Contact = () => {
    return ( 
        <section id="contact" data-aos='fade-up' data-aos-delay='400'>
            <div className="mx-auto py-8 lg:py-16 max-w-screen-md">
                <h2 className="text-4xl font-extrabold text-center text-white mb-4 tracking-tight">Contact Me</h2>
                <form action="#" className="space-y-8">
                    <div >
                        <label className="text-xl text-white mb-2 font-bold block">Email</label>
                        <input type="email" id="email" placeholder="name@exemple.com" required
                          className="text-gray-900 rounded-lg shadow-sm text-sm p-2.5 w-full bg-gray-300 border border-gray-300 block  "
                        />
                    </div>
                    <div className='sm:col-span-2'>
                        <label className="text-xl text-white mb-2 font-bold block">Massage</label>
                        <textarea rows='6' id="massage" placeholder="Leave Massage" required
                          className="text-gray-900 rounded-lg shadow-sm text-sm p-2.5 w-full bg-gray-300 border border-gray-300 block  "
                        />
                    </div>
                    <button className="py-2 px-6 text-lg border-none inline-flex focus:outline-none hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] text-white bg-orange-500 duration-300 rounded-full hover:bg-orange-600">Send Massage</button>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;