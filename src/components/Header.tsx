import { AuthContext } from "@context/AuthContext";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const {isAuthenticated ,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate(`/login`)
    }

    return (
        <header className="hidden md:block w-full dark:bg-[#1C1917] dark:text-white text-gray-700 border-b dark:border-b-gray-600">
            <nav className="p-3">
                <div className="flex md:flex-wrap justify-between md:justify-center lg:justify-between items-center mx-auto max-w-screen-xl">
                    {/* <!-- LOGO --> */}
                    <Link to="/" className="flex md:hidden lg:flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">KLmusic</span>
                    </Link>
                    {/* <!-- RUTAS --> */}
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto">
                        <div className="flex flex-col font-medium md:flex-row md:space-x-8 md:mt-0">
                            <NavLink to={'/'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Home
                            </NavLink>
                            <NavLink to={'songs'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Songs
                            </NavLink>

                            <NavLink to={'artists'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Artists
                            </NavLink>

                            <NavLink to={'albums'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Albums
                            </NavLink>
 
                            {isAuthenticated && (
                                <NavLink to={'karaokes'} className={({ isActive, isPending }) => 
                                    {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                    Karaokes
                                </NavLink>
                            )}
                        </div>  
                    </div>
                    {/* <!-- LOGIN / REGISTRO --> */}
                    {!isAuthenticated ? (
                        <div className="hidden md:absolute md:right-5 md:flex gap-2 items-center md:order-2 lg:relative">
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
                        <div className="hidden md:absolute md:right-5 md:flex gap-2 items-center md:order-2 lg:relative">
                            <NavLink to={'profile'} className={({ isActive, isPending }) => 
                                {return isActive ? "text-red-600 font-semibold border-b border-red-600" : isPending ? "pending" : "hover:text-red-600";}}>
                                Profile
                            </NavLink>
                            <button onClick={()=>handleLogout()} className="hover:text-red-600">Logout</button>
                        </div>
                    )}  
                </div>
            </nav>
        </header>
    );
  };

  export default Header;