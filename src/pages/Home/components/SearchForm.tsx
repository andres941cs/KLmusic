import { Input,Button } from "@components/UI";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
    [key: string]: string;
  }
function SearchForm() {
    const { handleSubmit,register } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)
    
    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('searchInput')}></Input>
                <Button>Buscar Cancion</Button>
            </form>
        </>
     );
}

export default SearchForm;