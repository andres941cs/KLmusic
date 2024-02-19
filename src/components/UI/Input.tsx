/* IMPORTACIONES */
import { Path, UseFormRegister } from 'react-hook-form';

/* INTERFACES */
interface IFormValues {
    [key: string]: string;
  }
  
// type InputProps = {
// nameInput:Path<IFormValues>
// register: UseFormRegister<IFormValues>
// required: boolean
// }
interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    nameInput:Path<IFormValues>
    register: UseFormRegister<IFormValues>
    }
  
/* COMPONENTE INPUT  */
export const Input = ({ nameInput, register,...props }: Props) => (
    <>
        <input {...props} {...register(nameInput)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
    </>
)
export default Input


// import { FieldValues, UseFormRegister } from 'react-hook-form';
// interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
//     registerInput: UseFormRegister<FieldValues>; 
// }
// export const Input = ({registerInput,...props}:Props) => {

//     return (
//         <input {...props} {...registerInput} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"></input>
//     );
// }

// export default Input

// IMPORTACIONES
// import { RegisterOptions, useForm } from 'react-hook-form';
// interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
//     //register: UseFormRegister<FieldValues>; 
//     params:RegisterForm
// }
// interface FormData {
//     [key: string]: string;
//   }
// interface RegisterForm{
//     nameInput: string;
//     rules?: RegisterOptions;
// }

// export const Input = ({params,...props}:Props) => {
//     const {register} = useForm<FormData>()
//     return (
//         <input {...props} {...register(params.nameInput, params.rules)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"></input>
//     );
// }

// export default Input
