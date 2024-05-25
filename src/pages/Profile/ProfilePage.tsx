import { Label } from "@components/UI";
import { Card } from "@components/UI/Card";
import { getProfile } from "@services/User.services";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// FONDO #1e1e1e
interface IFormProfile {
    username: string;
    email: string;
    password: string;
    new_password: string;
  }
const ProfilePage = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        getProfile(token!).then((response) => {setUser(response);});
    }, []);

    const {
        // handleSubmit,
        register
        //watch,
        //formState: { errors },
      } = useForm<IFormProfile>()

    return (
        <Card className="flex flex-col m-0">
            {/* Card Header */}
            <div className="bg-muted h-72 flex flex-col sm:flex-row items-center  gap-5 p-5">
                    <img src={user?user.image:'Loading...'} alt="Profile" className="w-52 h-52 rounded-full"/>
                    <div className="flex flex-col justify-center gap-1 w-full">
                        <span>Profile</span>
                        <h1 className="md:text-8xl sm:text-6xl text-xl font-bold text-foreground">{user?user.username:"Loading..."}</h1>
                    </div>
                </div>  
            {/* Card Body */}
            {/* flex flex-col items-center */}
            <div className="dark:bg-black h-full p-5 border dark:border-none">
                <form className="xl:w-1/3 lg:w-1/2 m-auto">
                <h2 className="text-2xl font-bold text-foreground">Edit Profile</h2>
                <p className="text-foreground">This is your profile page. You can see your personal information here.</p>
                    <Label>Username:</Label>
                    <input className="w-full border rounded py-1 px-2 bg-muted mb-3" defaultValue={user?.username} {...register("username")}/>

                    <Label>Email:</Label>
                    <input className="w-full border rounded py-1 px-2 bg-muted mb-3"  defaultValue={user?.email} {...register("email")} />

                    <Label>Password:</Label>
                    <input className="w-full  border rounded py-1 px-2 bg-muted" type="password" {...register("password")} />

                    <Label>New Password:</Label>
                    <input className="w-full  border rounded py-1 px-2 bg-muted" type="password" {...register("new_password")} />

                    <button className="w-full bg-primary text-white py-2 rounded mt-5">Update Profile</button>
                </form>
            </div>
        </Card>
    );
    }

export default ProfilePage;