import { StackLayout } from "@components/Layouts/StackLayout";
import { Label } from "@components/UI";
import { AuthContext } from "@context/AuthContext";
import { getProfile, updateProfile } from "@services/UserData";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

interface IFormProfile {
    username: string;
    email: string;
    password: string;
    new_password: string;
  }
const ProfilePage = () => {
    const [user, setUser] = useState<any>(null);
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        getProfile(token!).then((response) => {setUser(response);})
        .catch(() =>{ 
            navigate('/login')
            logout();
        } );
    }, []);

    const { handleSubmit, register } = useForm<IFormProfile>()
    
      const onSubmit: SubmitHandler<IFormProfile> = (data) => {
        // Validations
        if(data.password && data.new_password === ''){
            toast.error('The new password field cannot be empty');
            return;
        }

        if(data.password === data.new_password && data.password !== '' && data.new_password !== ''){
            toast.error('The new password cannot be the same as the previous one');
            return;
        }

        if(data.username === "" && data.email === "" && data.password === "" && data.new_password === ""){
            toast.error('The fields have not been modified');
            return;
        }
        // Update Profile
        const token = sessionStorage.getItem('token');
        console.log(data);
        if(data.password !== '' && data.new_password !== ''){
            const updateUser = {
            username: data.username==''?user.username:data.username,
            email: data.email==''?user.email:data.email,
            password: data.password,
            new_password: data.new_password
            }
            updateProfile(token!, updateUser, user.id).then((response) => {
                toast.success(response);
            })

        }else{
            const updateUser = {
                username: data.username==''?user.username:data.username,
                email: data.email==''?user.email:data.email,
            }
            updateProfile(token!, updateUser,user.id).then((response) => {
            toast.success(response);
            })
        }
        
      }

    return (
        <StackLayout className="flex flex-col h-full w-full text-card-foreground shadow overflow-auto">
            {/* Card Header */}
            <div className="bg-muted lg:h-72 flex flex-col sm:flex-row items-center w-full gap-5 p-5">
                    <img src={user?user.image:'Loading...'} alt="Profile" className="w-52 h-52 rounded-full"/>
                    <div className="flex flex-col justify-center gap-1 w-full">
                        <span>Profile</span>
                        <h1 className="md:text-7xl sm:text-6xl text-xl font-bold text-foreground">{user?user.username:"Loading..."}</h1>
                    </div>
                </div>  
            {/* Card Body */}
            <div className="dark:bg-black sm:dark:bg-transparent h-full w-full p-5 border dark:border-none">
                <form onSubmit={handleSubmit(onSubmit)} className="xl:w-1/3 lg:w-1/2 m-auto">
                <h2 className="text-2xl font-bold text-foreground">Edit Profile</h2>
                <p className="text-foreground">This is your profile page. You can see your personal information here.</p>
                    <Label>Username:</Label>
                    <input className="w-full border rounded py-1 px-2 bg-muted mb-3" defaultValue={user?.username} {...register("username")}/>

                    <Label>Email:</Label>
                    <input className="w-full border rounded py-1 px-2 bg-muted mb-3"  defaultValue={user?.email} {...register("email")} />

                    <Label>Last Password:</Label>
                    <input className="w-full  border rounded py-1 px-2 bg-muted" type="password" {...register("password")} />

                    <Label>New Password:</Label>
                    <input className="w-full  border rounded py-1 px-2 bg-muted" type="password" {...register("new_password")} />

                    <button className="w-full bg-primary hover:bg-red-800 text-white py-2 rounded mt-5">Update Profile</button>
                </form>
            </div>
            <Toaster richColors/>
        </StackLayout>
    );
    }

export default ProfilePage;