import { useContext, useState } from "react";
import Result, { ResultAlbum, ResultArtist, ResultSong } from "./Results";
import Tabs from "./Tabs";
import { SubmitHandler, useForm } from "react-hook-form";
import { API_URL } from "@utils/constants";
import { StackLayout } from "@components/Layouts/StackLayout";
import ArrowLeftIcon from "@assets/Icons/ArrowLeftIcon";
import CloseIcon from "@assets/Icons/CloseIcon";
import { FilterContext } from "@context/Filter";

/* COMPOPNENTE MOVIL */
function MainResult() {
    const { data, setData } = useContext(FilterContext);
    const [filter, setFilter] = useState('karaoke');
    // INTERFACES
    interface FormData { [key: string]: string; }
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
                  console.log("Error", response);
              }
              return response.json();
          })
          .then(data => {
              setData(data);
          })
          .catch(error => {
              console.error("Error during fetch operation:", error);
          });
      
    }
    const tabs = [
        { label: 'Karaokes', content: <Result karaokes={data} /> },
        { label: 'Artists', content: <ResultArtist artists={data} />},
        { label: 'Songs', content: <ResultSong songs={data} />},
        { label: 'Albums', content: <ResultAlbum albums={data}/> },
    ];
    return ( 
        <StackLayout className="h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-full bg-[#f7f7f7] dark:bg-[#585858] py-1">
                <ArrowLeftIcon size={24} onClick={()=>window.location.reload()}  className="fill-foreground mx-2"/>
                <input {...register('name')} autoFocus className="w-full h-10 bg-transparent text-foreground border-none focus:outline-none"></input>
                <CloseIcon onClick={() => reset()} size={24} fill="#e8eaed" className="fill-foreground mx-2"/>
            </form>

            <Tabs setFilter={setFilter} tabs={tabs} />

        </StackLayout>
     );
}

export default MainResult;