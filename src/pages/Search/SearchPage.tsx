
import { useState } from "react";
import { GridLayout } from "../../components/Layouts/GridLayout"
import { Card } from "../../components/UI/Card"
import MainResult from "./components/MainResult"


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
        
        <GridLayout columns={2} gap={4} className="mt-5">
        <div className="bg-red-500 h-20 rounded">01</div>
          <div className="bg-red-500 h-20">01</div>
          <div className="bg-red-500 h-20">01</div>
          <div className="bg-red-500 h-20">01</div>
          <div className="bg-red-500 h-20">01</div>
          <div className="bg-red-500 h-20">01</div>
          <div className="bg-red-500 h-20">01</div>
          <div className="bg-red-500 h-20">01</div>
        </GridLayout>
        </div>
      }
      {
        component === "Searching" &&
        <MainResult/>
      }
    </Card>
  )
}

export default SearchPage