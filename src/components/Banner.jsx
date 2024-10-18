const Banner = ({ 
    title = 'Become a React Dev', 
    subtitle = 'Find the React job that fits your skills and needs' 
}) => {
    return (
        <>
         <section className="bg-indigo-700 py-32 mb-4 h-[500px]">
            <div className="lg:w-1/2 mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center space-y-10">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{title}</h1>
                    <p className="my-4 text-xl text-white">{subtitle}</p>
                </div>
            </div>
         </section>
        </>
    )
}

export default Banner