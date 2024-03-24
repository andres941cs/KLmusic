
import { useState } from "react";

//../../components/UI/Card
import MainResult from "./components/MainResult"
import GridLayout from "../../components/Layouts/GridLayout";
import { FiltersProvider } from "../../context/filter";
import { Card } from "@components/UI/Card";




function SearchPage(){
  const [component, setComponent] = useState("Search");

  // function changeComponent  (newComponent:string)  {
  //   setComponent(newComponent);
  // }
  function showResults(){
    setComponent('Searching')
  }

  return (
    <Card className="p-0">
      
      {/* VERSION MOVIL */}
      { component === "Search" &&
        <div>
            <h1>Search</h1>
        <div className="flex items-center rounded bg-white">
          <span className="material-symbols-outlined dark:text-black mx-2">search</span>
          <input onClick={showResults} className="w-full h-10 bg-transparent text-black border-none focus:outline-none"></input>
        </div>
        
        <GridLayout cols={2} rows={4} className="mt-5 gap-4">
        <div className="flex justify-center items-center bg-red-500 h-20 rounded">POP</div>
          <div className="flex justify-center items-center bg-indigo-500 h-20 rounded align-middle">ROCK</div>
          <div className="flex justify-center items-center bg-orange-500 h-20 rounded">RAP</div>
          <div className="flex justify-center items-center bg-blue-500 h-20 rounded">Reggaeton</div>
          <div className="flex justify-center items-center bg-green-500 h-20 rounded">Electronic </div>
          <div className="flex justify-center items-center bg-violet-500 h-20 rounded">R&B</div>
          <div className="flex justify-center items-center bg-pink-500 h-20 rounded">Classical Music</div>
          <div className="flex justify-center items-center bg-rose-500 h-20 rounded">Country</div>
        </GridLayout>
        </div>
      }
      {
        component === "Searching" &&
        <FiltersProvider>
        <MainResult/>
        </FiltersProvider>
      }
    </Card>
  )
}

export default SearchPage