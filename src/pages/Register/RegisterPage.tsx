/* IMPORTACIONES */
import { SubmitHandler } from "react-hook-form";
import Form from "@components/UI/Form";//@/components/UI/Form
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { API_URL } from "@utils/constants";

/* COMPONENTE */
function RegisterPage(){
    interface FormData {
      [key: string]: string;
    }
    /* CONSTANTES */
    const navigate = useNavigate();
    const handleRegister: SubmitHandler<FormData> =  (data) =>{
      /* ------------- VALIDACIONES ------------- */
      /* CAMPOS VACIOS */
      if (!data.username || !data.email || !data.password || !data.password_confirmation) {
        toast.error('Todos los campos son obligatorios');
        return;
      }
      /* FORMATO EMAIL INVALIDO */
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(data.email)) {
        toast.error('El email no tiene un formato válido');
        return;
      }
      /* CONTRASEÑAS INVALIDA */
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      if (!passwordPattern.test(data.password)) {
        toast.error('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
        return;
      }
      /* CONTRASEÑAS DIFERENTES */
      if(data.password !== data.password_confirmation){
        toast.error('Las contraseñas no coinciden');
        return;
      }
      /* ------------- PETICION ------------- */
      const URL =API_URL + "api/register";
      const PARAMS = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }

      fetch(URL,PARAMS)
      .then(response => response.json())
      .then(res => {
        if(res.errors){
          const mesagge =res.errors.join(' ');
          toast.error(mesagge);
          return;
        }
        toast.success(`Usuario: ${data.username} registrado correctamente`);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }  
        
    const registerFields = [
      { label: 'Username', type: 'text', name: 'username' },
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Password', type: 'password', name: 'password' },
      { label: 'Confirm Password', type: 'password', name: 'password_confirmation' },
    ];

    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <Form title="Sign in" inputs={registerFields} onSubmit={handleRegister} />
        <Toaster richColors/>
      </div>
     );
}

export default RegisterPage;