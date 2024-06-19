/* IMPORTACIONES */
import { useForm, SubmitHandler } from "react-hook-form";
import { Label , Input, Button} from "./";
/* INTERFACES */
interface Inputs {
  label: string;
  type: string;
  name: string;
}
// INTERFAZ GENERICA PARA LOS DATOS
interface FormData {
  [key: string]: string;
}
// HEREDAR LAS PROPIEDADES DEL HTML FORM
// extends React.FormHTMLAttributes<HTMLFormElement>
interface Props  {
  title: string;
  inputs: Inputs[];
  onSubmit: SubmitHandler<FormData>
}

export const Form = (props: Props ) => {
  const {
    handleSubmit,register
    //watch,
    //formState: { errors },
  } = useForm<FormData>()

  // Función para manejar el envío del formulario
  const handleFormSubmit = (data: FormData) => props.onSubmit(data);

  return (
    <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
      <form {...props} onSubmit={handleSubmit(handleFormSubmit)}  className="w-full max-w-sm space-y-8 p-8 text-foreground m-auto">
        <h3 className="text-xl font-semibold tracking-[-0.015em] -mb-3 text-zinc-950  dark:text-white">{props.title}</h3>
        {props.inputs.map((field) => (
          <div key={field.name}>
            <Label>{field.label}:</Label>
            {/* <Input type={field.type} registerInput={register(field.name)} /> */}
            {/* <Input type={field.type} params={{ nameInput: field.name, rules: { required: 'Email is required' } }} /> */}
            <Input type={field.type}  {...register(field.name)}></Input>
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
