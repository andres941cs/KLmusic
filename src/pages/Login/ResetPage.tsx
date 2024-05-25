/* IMPORTACIONES */
import { SubmitHandler } from "react-hook-form";
import Form from "@components/UI/Form";//@/components/UI/Form
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { API_URL } from "@utils/constants";

/* COMPONENTE */
function ResetPage(){
    interface FormData {
      [key: string]: string;
    }
    /* CONSTANTES */
    const navigate = useNavigate();
    const handleReset: SubmitHandler<FormData> =  (data) =>{
      /* ------------- VALIDACIONES ------------- */
      /* CAMPOS VACIOS */
      if (!data.email) {
        toast.error('Todos los campos son obligatorios');
        return;
      }
      /* FORMATO EMAIL INVALIDO */
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(data.email)) {
        toast.error('El email no tiene un formato válido');
        return;
      }
      /* ------------- PETICION ------------- */
      const URL =API_URL+"forgot";
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
        toast.success(`Se ha enviado un correo a ${data.email} con las instrucciones para restablecer la contraseña`);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }  
        
    const registerFields = [
      { label: 'Email', type: 'email', name: 'email' },
    ];

    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <Form title="Reset Password" inputs={registerFields} onSubmit={handleReset} />
        <Toaster richColors/>
      </div>
     );
}

export default ResetPage;