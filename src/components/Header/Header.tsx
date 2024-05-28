import { AuthContext } from "@context/AuthContext";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const {isAuthenticated ,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate(`/login`)
    }

    return (
        <header className=" w-full dark:bg-[#1C1917] dark:text-white text-gray-700 border-b dark:border-b-gray-600">
            <nav className="p-3">
                <div className="flex lg:flex-wrap justify-between lg:justify-center xl:justify-between items-center mx-auto max-w-screen-xl">
                    {/* <!-- LOGO --> */}
                    <a href="/" className="flex lg:hidden xl:flex items-center">
                        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="KLmusic Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">KLmusic</span>
                    </a>

                    <div className="lg:hidden flex justify-around h-full w-full ">
                        <NavLink to={'songs'}  className="material-symbols-outlined text-xl hover:text-primary m-auto lg:hidden">music_note</NavLink>
                        <NavLink to={'artist'} className="material-symbols-outlined m-auto hover:text-primary lg:hidden">artist</NavLink>
                        <NavLink to={'album'} className="material-symbols-outlined m-auto hover:text-primary lg:hidden">album</NavLink>
                        
                        <div className="flex gap-2">
                        {isAuthenticated ? (
                            <>
                            <NavLink  to={'profile'} className="material-symbols-outlined my-auto hover:text-primary lg:hidden">account_circle</NavLink>
                            <span onClick={()=>handleLogout()} className="material-symbols-outlined my-auto lg:hidden">logout</span>
                            </>
                        ):(
                        <NavLink  to={'login'} className="material-symbols-outlined my-auto hover:text-primary lg:hidden">person</NavLink>
                        )}
                        </div>
                    </div>
                    {/* <!-- RUTAS --> */}
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li><NavLink to={'/'} className={({ isActive, isPending }) => 
                                    {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                    Home
                                </NavLink></li>
                            <li>
                                <NavLink to={'songs'} className={({ isActive, isPending }) => 
                                    {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                    Songs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'artists'} className={({ isActive, isPending }) => 
                                    {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                    Artists
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'albums'} className={({ isActive, isPending }) => 
                                    {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                    Albums
                                </NavLink>
                            </li>
                            {isAuthenticated && (
                                <li>
                                    <NavLink to={'karaokes'} className={({ isActive, isPending }) => 
                                        {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                        Karaokes
                                    </NavLink>
                                </li>
                            )}
                            {/* <!-- LOGIN / REGISTRO --> */}
                    {!isAuthenticated ? (
                        <div className="hidden lg:flex gap-2 items-center lg:order-2">
                            <NavLink to={'login'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Log in
                            </NavLink>
                            <NavLink to={'register'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Sign up
                            </NavLink>
                        </div>
                    ) : (
                        <div className="hidden xl:flex gap-2 items-center lg:order-2">
                            <NavLink to={'profile'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Profile
                            </NavLink>
                            <button onClick={()=>handleLogout()} className="hover:bg-gray-500">Logout</button>
                        </div>
                    )}
                        </ul>
                        
                    </div>
                    {/* <!-- LOGIN / REGISTRO --> */}
                    {!isAuthenticated ? (
                        <div className="hidden xl:flex gap-2 items-center lg:order-2">
                            <NavLink to={'login'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Log in
                            </NavLink>
                            <NavLink to={'register'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Sign up
                            </NavLink>
                        </div>
                    ) : (
                        <div className="hidden xl:flex gap-2 items-center lg:order-2">
                            <NavLink to={'profile'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Profile
                            </NavLink>
                            <button onClick={()=>handleLogout()} className="hover:bg-gray-500">Logout</button>
                        </div>
                    )}
                    
                    
                </div>
            </nav>
        </header>
    );
  };
  
  // Exportar el componente para su uso en otros archivos
  export default Header;