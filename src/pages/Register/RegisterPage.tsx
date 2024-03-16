/* IMPORTACIONES */
import { SubmitHandler } from "react-hook-form";
import Form from "../../components/UI/Form";
import { redirect } from "react-router-dom";

/* COMPONENTE */
function RegisterPage(){
    /* COMPONENTE */
    interface FormData {
      [key: string]: string;
    }
    /* CONSTANTES */
    const handleRegister: SubmitHandler<FormData> = (data) =>{
      const URL ="http://127.0.0.1:8000/api/register";
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
            return redirect("/login");
        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
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
        <Form title="Registro" inputs={registerFields} onSubmit={handleRegister} />
        </div>
      
     );
}

export default RegisterPage;