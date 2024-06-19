/* IMPORTACIONES */
import { Switch } from "@components/UI/Switch";
import { AuthContext } from "@context/AuthContext";
import { API_URL } from "@utils/constants";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'

interface FormData {
  [key: string]: string;
}
// INTERFAZ PARA EXTENDER LAS PROPIEDADES DEL FORMULARIO
interface Props extends React.FormHTMLAttributes<HTMLFormElement>{}
/* COMPONENTE */
function LoginForm(props:Props) {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const URL = API_URL + "login";
      const PARAMS = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }
      fetch(URL,PARAMS)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data["error"]){
              toast.error(data["error"])
              return;
            }
            login(data["token"]);
            navigate("/");

        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
        });
    
  }
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 md:px-0">
      <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
        <div className="grid h-full w-full justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
          <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
            <h3 className="text-xl font-semibold tracking-[-0.015em] text-zinc-950  dark:text-white">
              Log In
            </h3>
            <div className="!mt-5">
              <div className="space-y-8">
                <div className="font-medium">
                  <label
                    className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                    htmlFor="input_username">
                    Email
                  </label>
                  <input
                    className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]"
                    {...register("email", { required: true , pattern: /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                  />
                  {errors.email && <span className="absolute text-red-500">Email invalid</span>}
                </div>
                <div className="font-medium">
                  <label
                    className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                    htmlFor="input_password">
                    Password
                  </label>
                  <input
                    className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]"
                    type="password"
                    id="input_password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className="absolute text-primary">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <div className="flex items-center gap-2">
                <Switch id="remember" />
                <label
                  data-slot="label"
                  className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                  htmlFor="remember">
                  Remember <span className="hidden sm:inline">me</span>
                </label>

                <input type="hidden" />
              </div>
              <p className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              <Link
                  to={"/reset"}
                  className="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300">
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full relative isolate hover:opacity-80 inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)]"
              type="submit">
              Get started
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"></span>
            </button>
            <p data-slot="text" className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              Don’t have an account?
              <Link
                to={"/register"}
                className="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300 ml-2">
                Sign up
              </Link>
            </p>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
