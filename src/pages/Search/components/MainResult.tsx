// import { Card } from "../../../components/UI/Card";
import { useState } from "react";
import Result, { ResultAlbum, ResultArtist } from "./Results";
import Tabs from "./Tabs";
import { SubmitHandler, useForm } from "react-hook-form";
import { API_URL } from "@utils/constants";
import { Badge } from "@components/UI/Badge";
import { StackLayout } from "@components/Layouts/StackLayout";

// function MainResult() {
//     function clear(){
        
//     }
//     return ( 
//         // <Card className="h-[375px] w-[500px]">
//         <>
//             {/* <div className="flex flex-col gap-5 p-5 md:w-[500px] bg-[#181818] border border-[#27272A] group hover:bg-[#282828] relative">
//                 <div className="h-[100px] w-[100px] rounded-sm bg-slate-100" ></div>
//                 <p className="text-foreground">Name Song</p>
//                 <p className="italic text-muted-foreground">Song <span className="font-normal text-foreground">Name Artist</span></p>
//                 <button className="absolute bottom-5 right-5 transition-opacity duration-300 opacity-0  z-10 group-hover:opacity-100"><span className="material-symbols-outlined text-[5rem]">play_circle</span></button>
//             </div> */}
//             {/* VERSION MOVIL */}
//             {/* INPUT */}
//             <div className="flex items-center bg-[#f7f7f7] dark:bg-[#585858] -m-5 py-1">
//                 <span className="material-symbols-outlined font-thin dark:text-white mx-2">arrow_left_alt</span>
//                 <input className="w-full h-10 bg-transparent text-foreground border-none focus:outline-none"></input>
//                 <span className="material-symbols-outlined font-thin dark:text-white mx-2">close</span>
//             </div>
//             {/* RESULTADOS */}
//             <div>
//                 <Badge variant="outline">Best Results</Badge>
//             </div>
//         </>    
//         // </Card>
//      );
// }

// export default MainResult;

/* COMPOPNENTE MOVIL */
function MainResult() {
    // VALUES
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('song');
    // INTERFACES
    interface FormData {
        [key: string]: string;
      }
    // CONSTANTES
    const { register, reset, handleSubmit} = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => {
        // FACTORIZAR => SEPARAR A OTRO ARCHIVO
      const URL =`${API_URL}${filter}/search`;
        const PARAMS = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(data)
        }
        fetch(URL,PARAMS)
          .then(response => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json();
          })
          .then(data => {
              console.log(data);
              setData(data);
          })
          .catch(error => {
              console.error("Error during fetch operation:", error);
          });
      
    }
    console.log(filter)
    const tabs = [
        { label: 'Best Results', content: <Result songs={data} /> },
        { label: 'Artists', content: <ResultArtist artists={data} />},
        { label: 'Songs', content: <ResultAlbum albums={data}/>},
        { label: 'Albums', content: <Badge variant="outline">Songs</Badge> },
    ];
    return ( 
        // <Card className="h-[375px] w-[500px]">
        <StackLayout>
            {/* VERSION MOVIL */}
            {/* INPUT */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-full bg-[#f7f7f7] dark:bg-[#585858] py-1">
                <span className="material-symbols-outlined font-thin dark:text-white mx-2">arrow_left_alt</span>
                <input  {...register('search')} autoFocus className="w-full h-10 bg-transparent text-foreground border-none focus:outline-none"></input>
                <span onClick={() => reset()} className="material-symbols-outlined font-thin dark:text-white mx-2">close</span>
            </form>
            {/* RESULTADOS */}
            {/* <StackLayout orientation="row" className="gap-2 overflow-x-auto">
                <Badge variant="outline">Best Results</Badge>
                <Badge variant="outline">Artists</Badge>
                <Badge variant="outline">Songs</Badge>
                <Badge variant="outline">Albums</Badge>
            </StackLayout> */}

            <Tabs setFilter={setFilter} tabs={tabs} />

        </StackLayout>
        // </Card>
     );
}

export default MainResult;