import { AuthContext } from "@pages/Login/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Definición del componente funcional
const Header = () => {
    const {isAuthenticated ,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate(`/login`)
    }
    return (
        // fixed top-0
        <header className=" w-full dark:bg-[#1C1917] dark:text-white text-gray-700 border-b dark:border-none">
        <nav className="p-3">
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
                            <Link to={'songs'} className="">Songs</Link>
                        </li>
                        <li>
                            <Link to={'artists'} className="">Artists</Link>
                        </li>
                        <li>
                            <Link to={'albums'} className="">Albums</Link>
                        </li>
                        <li>
                            <Link to={'/karaoke'} className="">Karaoke</Link>
                        </li>
                    </ul>
                    
                </div>
                {/* <!-- LOGIN / REGISTRO --> */}
                {!isAuthenticated ? (
                    <div className="hidden xl:flex gap-2 items-center lg:order-2">
                    <Link to={'login'} className="hover:bg-gray-500">Log in</Link>
                    <Link to={'register'} className="hover:bg-gray-500">Sign up</Link>
                </div>
                ) : (
                    <div className="hidden xl:flex gap-2 items-center lg:order-2">
                    <Link to={'profile'} className="hover:bg-gray-500">Profile</Link>
                    {/* <Link to={'logout'} className="hover:bg-gray-500">Logout</Link> */}
                    <button onClick={()=>handleLogout()} className="hover:bg-gray-500">Logout</button>
                        </div>
                )}
                
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