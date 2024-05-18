import { SelectItem } from "@components/UI/Select";
import { Lyric } from "@models/Lyric";
import { Song } from "@models/songs";
import { getLyricsBySongId } from "@services/Lyric.services";
import { searchSongs } from "@services/Songs.services";
import { ChangeEvent, useState } from "react";

interface ISearchSong { onData: (data: []) => void;isOpen:boolean;setIsOpen: (data: boolean) => void; }
const SearchSong = ({ onData,isOpen,setIsOpen }: ISearchSong) => {

    const [value, setValue] = useState('');
    const [sugesstions, setSuggestions] = useState([]);

    const getSuggestions  = (event:ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setValue(event.target.value);
        setSuggestions([]);
        if(event.target.value.length >= 3) {
            searchSongs(event.target.value).then((data) => {
                const suggestions = data.map((song:Song) => {
                    return <li key={song.id} onClick={()=>showLyrics(song.id)}>{song.name}</li>
                })
                setSuggestions(suggestions);
                console.log(suggestions)
            })
        }
    }
    // const showLyrics = (id:number) => {
    //     getLyricsBySongId(id).then((data) => {
    //         console.log(data)
            
    //         const arrayLyrics = data.map((lyric:Lyric) => {
    //             return <option key={lyric.id} value={lyric.lyric}>{lyric.id}</option>
    //         })
    //         onData(arrayLyrics);
    //     })
    // }
    const showLyrics = (id:number) => {
        getLyricsBySongId(id).then((data) => {
            const arrayLyrics = data.map((lyric:Lyric) => {
                return <SelectItem key={lyric.id} value={lyric.lyric}>{lyric.language}</SelectItem>
            })
            onData(arrayLyrics);
            setIsOpen(false);
        })
    }
    if (!isOpen) return null;
    return ( 
        <>
        <div onClick={()=>setIsOpen(false)} className={`bg-black opacity-80 h-screen w-screen absolute z-40 top-0 left-0 `}></div>
        <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <input value={value} onChange={getSuggestions} onKeyDown={(e)=>{(e.key === 'Enter')&&e.preventDefault()}} 
            className="border border-white bg-white/5 w-60 h-8 px-3 py-5 outline-none" placeholder="Song" />
            <ul>{sugesstions}</ul>
        </div>
        
        </>
     );
}
 
export default SearchSong;