/* IMPORTACIONES */
import { AuthContext } from "@pages/Login/AuthContext";
import { API_URL } from "@utils/constantes";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
// PENDIENTE: ACABAR ESTILOS, REMEMBER TOKEN Y VALIDACIONES RUTA AL COMPLETAR EL LOGIN
/* COMPONENTE */
// INTERFAZ GENERICA PARA LOS DATOS
interface FormData {
  [key: string]: string;
}
// INTERFAZ PARA EXTENDER LAS PROPIEDADES DEL FORMULARIO
interface Props extends React.FormHTMLAttributes<HTMLFormElement>{}
/* COMPONENTE */
function LoginForm(props:Props) {
  const {isAuthenticated,login,logout} = useContext(AuthContext)
  const navigate = useNavigate();
  //const { register, handleSubmit, watch, formState: { errors }} = useForm<FormData>()
  const { register, handleSubmit} = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    //console.log(watch(['username','password']))
    const URL = API_URL+ "/api/login";
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
            login();
            navigate("/");

        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
            toast.error("ERROR")
        });
    
  }
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0">
      <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
        <div className="grid h-full w-full justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
          <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
            <h3 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
              Sign in
            </h3>
            <div className="mt-6">
              <div className="space-y-8">
                <div className="font-medium">
                  <label
                    className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                    htmlFor="input_username">
                    {/* Username*/}Email
                  </label>
                  <input
                    className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]"
                    {...register("email")}
                  />
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
                    {...register("password")}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  data-slot="control"
                  className="group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8 transition duration-0 ease-in-out data-[changing]:duration-200 forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight] bg-zinc-200 ring-1 ring-inset ring-black/5 dark:bg-white/5 dark:ring-white/15 data-[checked]:bg-[--switch-bg] data-[checked]:ring-[--switch-bg-ring] dark:data-[checked]:bg-[--switch-bg] dark:data-[checked]:ring-[--switch-bg-ring] focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[hover]:data-[checked]:ring-[--switch-bg-ring] data-[hover]:ring-black/15 dark:data-[hover]:data-[checked]:ring-[--switch-bg-ring] dark:data-[hover]:ring-white/25 data-[disabled]:bg-zinc-200 data-[disabled]:data-[checked]:bg-zinc-200 data-[disabled]:opacity-50 data-[disabled]:data-[checked]:ring-black/5 dark:data-[disabled]:bg-white/15 dark:data-[disabled]:data-[checked]:bg-white/15 dark:data-[disabled]:data-[checked]:ring-white/15 [--switch-bg-ring:theme(colors.zinc.950/90%)] [--switch-bg:theme(colors.zinc.900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:theme(colors.white/25%)] [--switch-ring:theme(colors.zinc.950/90%)] [--switch-shadow:theme(colors.black/10%)] [--switch:white] dark:[--switch-ring:theme(colors.zinc.700/90%)]"
                  id="headlessui-control-:R1dllfalta:"
                  role="switch"
                  type="button"
                  tabIndex={0}
                  aria-checked="false">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5 translate-x-0 transition duration-200 ease-in-out border border-transparent bg-white shadow ring-1 ring-black/5 group-data-[checked]:bg-[--switch] group-data-[checked]:shadow-[--switch-shadow] group-data-[checked]:ring-[--switch-ring] group-data-[checked]:translate-x-4 sm:group-data-[checked]:translate-x-3 group-data-[disabled]:group-data-[checked]:bg-white group-data-[disabled]:group-data-[checked]:shadow group-data-[disabled]:group-data-[checked]:ring-black/5"></span>
                </button>
                <label
                  data-slot="label"
                  className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                  htmlFor="headlessui-control-:R1dllfalta:">
                  Remember <span className="hidden sm:inline">me</span>
                </label>

                <input type="hidden" />
              </div>
              <p className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
                <a
                  href="#"
                  className="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300">
                  Forgot password?
                </a>
              </p>
            </div>
            <button
              className="w-full relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)]"
              type="submit">
              Get started
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"></span>
            </button>
            <p
              data-slot="text"
              className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              Don’t have an account?
              <a
                href="#"
                className="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300 ml-2">
                Sign up
              </a>
            </p>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
