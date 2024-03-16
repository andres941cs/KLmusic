//import SearchForm from "./components/SearchForm"
import { Button } from '../../components/UI'
// import './index.css'
function HomePage(){
    
    return (
        <>
            {/* <section className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
            <h1 className="text-8xl">KLmusic</h1>
                <div className="flex ">
                    <SearchForm></SearchForm>
                </div>
            </section> */}
            <main className="flex flex-col items-center justify-center px-4 md:px-0">
                <section className=" w-full sm:mx-auto sm:w-full sm:max-w-xl rounded-xl">
                    {/* <div className="logo-container">
                        <h1 className="text-8xl">KLmusic</h1>
                    </div> */}
                    <h1 className="dark:text-white text-8xl text-center">KLmusic</h1>
                <div className="mt-5">
                    <div className="flex items-center rounded-3xl border border-gray-200 h-12 px-3 max-w-xl">
                        <span className="material-symbols-outlined dark:text-white">search</span>
                        <input className="w-full px-3 bg-transparent dark:text-white border-none focus:outline-none" type="text" id="search-bar"/>
                    </div>
                    {/* <div className="search-bar__buttons-container">
                        <input className="search-bar__button" type="submit" value="Buscar una Cancion"/>
                        <input className="search-bar__button" type="submit" value="Cancion Aleatoria"/>
                    </div> */}
                    <div className='flex gap-3 my-3'>
                        <Button>Search Song</Button>
                        <Button>Random Song</Button>
                    </div>
                    
                </div>
                </section>
            </main>
        </>
    )
}
// background-color: #303134;
//     box-shadow: 0 1px 6px 0 #171717;
//     border-color: rgba(223,225,229,0);

// HOVER
// background-color: #303134;
//     box-shadow: 0 1px 6px 0 #171717;
//     border-color: rgba(223,225,229,0);

// display: flex;
//     z-index: 3;
//     position: relative;
//     min-height: 44px;
//     background: #202124;
//     border: 1px solid #5f6368;
//     box-shadow: none;
//     border-radius: 24px;
//     margin: 0 auto;
//     width: 638px;
//     width: auto;
//     max-width: 584px;
export default HomePage