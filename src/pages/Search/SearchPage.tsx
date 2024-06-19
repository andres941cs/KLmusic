import { useContext, useState } from "react";
import MainResult from "./components/MainResult"
import GridLayout from "@components/Layouts/GridLayout";
import { FilterContext } from "@context/Filter";
import SearchIcon from "@assets/Icons/SearchIcon";
import { Karaoke } from "@models/Karaoke";
import { getKaraokesByGenre } from "@services/KaraokeData";

function SearchPage(){
  const [component, setComponent] = useState("Search");
  const { setData } = useContext(FilterContext);
  const getKaraokes = (genre:string) => {
    setComponent('Searching');
    getKaraokesByGenre(genre).then((data:Karaoke) => setData(data));
  }

  return (
    <div className="p-5 h-full w-full text-card-foreground overflow-hidden">
      {/* VERSION MOVIL */}
      { component === "Search" &&
        <div>
            <h1>Search</h1>
        <div className="flex items-center rounded bg-white">
          <SearchIcon className="fill-black mx-2"/>
          <input onClick={()=>setComponent('Searching')} className="w-full h-10 bg-transparent text-black border-none focus:outline-none"></input>
        </div>
        
        <GridLayout cols={2} rows={4} className="mt-5 gap-4 w-full">
        <div className="flex justify-center items-center bg-red-500 h-20 rounded">POP</div>
          <div onClick={()=>getKaraokes('Rock')} className="flex justify-center items-center bg-indigo-500 h-20 rounded align-middle">ROCK</div>
          <div onClick={()=>getKaraokes('Rap')} className="flex justify-center items-center bg-orange-500 h-20 rounded">RAP</div>
          <div onClick={()=>getKaraokes('Reggaeton')} className="flex justify-center items-center bg-blue-500 h-20 rounded">Reggaeton</div>
          <div onClick={()=>getKaraokes('Electronic')} className="flex justify-center items-center bg-green-500 h-20 rounded">Electronic </div>
          <div onClick={()=>getKaraokes('R&B')} className="flex justify-center items-center bg-violet-500 h-20 rounded">R&B</div>
          <div onClick={()=>getKaraokes('Classic')} className="flex justify-center items-center bg-pink-500 h-20 rounded">Classical Music</div>
          <div onClick={()=>getKaraokes('Country')} className="flex justify-center items-center bg-rose-500 h-20 rounded">Country</div>
        </GridLayout>
        </div>
      }
      {
        component === "Searching" &&
          <MainResult/>
      }
    </div>
  )
}

export default SearchPage