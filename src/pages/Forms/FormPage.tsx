import { Button, Input } from "@components/UI";
import { Card } from "@components/UI/Card";

import { useForm } from "react-hook-form";



const FormPage = () => {
    // VA SER UN  FORMULARIO PARA INSERTAR ARTISTAS, ALBUMES, CANCIONES
    // CON TABS PARA CAMBIAR DE UNO A OTRO -> SE TIENE QUE AUTORELLENAR LOS CAMPOS
    // CON LOS DATOS DE LA API DE SPOTIFY EN EL API SE COMPRUEBA SI ESTAN CORRECTOS Y LES DA EL OK
    return ( 
        <Card>
            <h1>INSERT ARTISTS</h1>
            <FormArtist/>
            {/* Buscar Data */}
            {/* <div className="w-80">
                <input  type="text" placeholder="Search Artist"/>
                <span className="material-symbols-outlined">search</span></div> */}
            {/* <AutoComplete name={'search'} fecht={()=>console.log('ho')}/> */}
            {/* Formulario */}
            {/* <Form title="Artist" inputs={registerFields} onSubmit={handleRegister} /> */}
        </Card>
     );
}
 
export default FormPage;


// interface IAutoComplete {
//     name?:string;
//     fecht:()=>void;
// }
// const AutoComplete = ({name?, fecht}:IAutoComplete) => {
//     const [search, setSearch] = useState<string>("")
//     const getSuggestions = (event:React.ChangeEvent<HTMLInputElement>) => {
//         setSearch(event.target.value)
//         console.log(event.target.value)
//         fecht();
//     }
//     return ( 
//         <div className="flex items-center">
//             <input className="border rounded py-1 px-2 bg-muted" value={search} onChange={getSuggestions} type="text" placeholder="Search"/>
//             <span className="material-symbols-outlined">search</span>
//         </div>
//      );
// }

export const FormArtist = () => {
    interface FormData {
        [key: string]: string;
      }
    const onSubmit = (data:FormData) => {
        console.log(data)
    }
    const { register, handleSubmit} = useForm<FormData>()
    return ( 
        <>
        <h1>INSERT ARTISTS</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-80 flex flex-col gap-3">
            <input  type="text" placeholder="Search Artist"/>
            <Input nameInput="image" register={register}/>
            <Button className="bg-primary">Save</Button>
        </form>
        </>
     );
}
