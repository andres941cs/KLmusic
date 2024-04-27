//import SearchForm from "./components/SearchForm"
import { useState } from 'react'
import { Button } from '../../components/UI'
import { randomKaraoke, searchKaraoke } from './../../services/Karaoke.services';

function HomePage(){
    const [search, setSearch] = useState('')
    const handleSearch = (event) => {
        setSearch(event.target.value);
      };
    
    const handleResults = () => {
        if(search === '') return
        searchKaraoke(search).then((data) => {
            console.log(data)
        })
    }
    const handleRandom = () => {
        randomKaraoke().then((data) => {
            console.log(data)
        })
    }
    return (
        <>
            <main className="flex flex-col items-center justify-center px-4 md:px-0">
                <section className=" w-full sm:mx-auto sm:w-full sm:max-w-xl rounded-xl">
                    <h1 className="dark:text-white text-8xl text-center">KLmusic</h1>
                <div className="mt-5">
                    <div className="flex items-center rounded-3xl border border-gray-200 h-12 px-3 max-w-xl">
                        <span className="material-symbols-outlined dark:text-white">search</span>
                        <input value={search} onChange={handleSearch} className="w-full px-3 bg-transparent dark:text-white border-none focus:outline-none" type="text" id="search-bar"/>
                    </div>
                    {/* IMPLEMENTANDO */}
                    {/* <div className='border border-gray-200 border-t-0 rounded-b-3xl '>
                        <ul className=''>
                            <li className='text-foreground px-6 hover:bg-gray-700'>Un resuldato</li>
                            <li className='text-foreground px-6'>Otro resultado</li>
                        </ul>
                    </div> */}
                    <div className='flex gap-3 my-3'>
                        <Button onClick={handleResults}>Search Song</Button>
                        <Button onClick={handleRandom}>Random Song</Button>
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