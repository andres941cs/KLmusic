import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { randomKaraoke, searchKaraoke } from '@services/Karaoke.services';
import { Karaoke } from '@models/Karaoke';
import { Button } from '@components/UI';

function HomePage(){
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    
    const handleResults = () => {
        if(search === '') return;
        searchKaraoke(search).then((data) => {
            const newResutls:any = []
            data.forEach((element:Karaoke) => {
                newResutls.push(element)
            });
            setResults(newResutls)
        })
    }
    const handleRandom = () => {
        randomKaraoke().then((data) => {
            console.log(data);
            navigate(`/player/${data.id}`)
        })
    }
    const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleResults()
        }
    }
    const playKaraoke = (id:number) => {
        navigate(`/player/${id}`)
    }

    return (
        <>
            <main className="flex flex-col items-center justify-center px-4 md:px-0">
                <section className=" w-full sm:mx-auto sm:w-full sm:max-w-xl rounded-xl">
                    <h1 className="dark:text-white text-8xl text-center">KLmusic</h1>
                <div className="mt-5">
                    <div className={`flex items-center ${results.length==0?'rounded-3xl':'rounded-t-3xl border-b-0'}  border border-gray-200 h-12 px-3 max-w-xl`}>
                        <span className="material-symbols-outlined dark:text-white">search</span>
                        <input value={search} onChange={handleSearch} onKeyDown={(e)=>handleKeyDown(e)} className={`w-full px-3 bg-transparent dark:text-white ${results.length==0?' border-none':'border-b border-muted'} focus:outline-none`} type="text" />
                    </div>
                    {results.length>0&&(<ul className='border border-gray-200 border-t-0 rounded-b-3xl'>
                            {
                            results.map((result:Karaoke,index) => (
                                <li key={result.id} onClick={()=>playKaraoke(result.id!)} className={`text-foreground px-6 hover:bg-muted  ${index === results.length - 1 && 'rounded-b-3xl'}`}>
                                    {result.lyric!.song!.name} - {result.lyric!.song!.artist!.name}
                                </li>
                            ))}
                        </ul>
                    )}
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

export default HomePage