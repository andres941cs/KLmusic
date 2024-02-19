// Definición del componente funcional
const Header = () => {
    return (
        <header className="fixed top-0 w-full text-gray-700">
        <nav className="bg-blue-500 lg:bg-green-500 xl:bg-red-500 py-3">
            <div className="flex flex-wrap justify-between lg:justify-center xl:justify-between items-center mx-auto max-w-screen-xl">
                {/* <!-- LOGO --> */}
                <a href="/" className="flex lg:hidden xl:flex items-center">
                    {/* <img src="" className="mr-3 h-6 sm:h-9" alt="LKmusic Logo" /> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">LKmusic</span>
                </a>
                {/* <!-- RUTAS --> */}
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="/" className="" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="">Company</a>
                        </li>
                        <li>
                            <a href="#" className="">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="">Features</a>
                        </li>
                        <li>
                            <a href="#" className="">Team</a>
                        </li>
                    </ul>
                    
                </div>
                {/* <!-- LOGIN / REGISTRO --> */}
                <div className="hidden xl:flex gap-2 items-center lg:order-2">
                    <a href="login" className="hover:bg-gray-500">Log in</a>
                    <a href="register" className="hover:bg-gray-500">Sign up</a>
                </div>
                
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center text-sm lg:hidden dark:hover:text-gray-700" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    </header>
    );
  };
  
  // Exportar el componente para su uso en otros archivos
  export default Header;