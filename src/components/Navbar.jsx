import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-around px-2 py-4 bg-indigo-700 border border-b border-indigo-500 shadow-lg">
                <div className="flex items-center gap-2">
                    <img className='w-10 h-auto animate-spin ' src={logo} alt="Logo" />
                    <span className="lg:text-3xl font-bold text-xl text-white">React Jobs</span>
                </div>
                <div className="lg:space-x-20 space-x-4">
                    <button className="text-white bg-black lg:py-2 lg:px-5 rounded-lg hover:bg-slate-500 p-2">Home</button>
                    <button className="text-white bg-black lg:py-2 lg:px-5 rounded-lg hover:bg-slate-500 p-2">Jobs</button>
                    <button className="text-white bg-black lg:py-2 lg:px-5 rounded-lg hover:bg-slate-500 p-2">Add Job</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar