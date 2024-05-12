// import { Input, Label } from "@components/UI";
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
  }
const ProfilePage = () => {
    // const {token} = useContext(AuthContext);
    const [user, setUser] = useState<any>(null); 
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        getProfile(token!).then((response) => {
            setUser(response);
            console.log(response);
        });
        console.log(user);
    }, []);
    const {
        // handleSubmit,
        register
        //watch,
        //formState: { errors },
      } = useForm<IFormProfile>()
    // const registerFields = [
    //     { label: 'Username', type: 'text', name: 'username' },
    //     { label: 'Email', type: 'email', name: 'email' },
    //     { label: 'Password', type: 'password', name: 'password' },
    //   ];
    return (
        <Card className="flex flex-col">
            {/* Card Header */}
            <div className="bg-purple-300 h-72 flex items-center  gap-5 p-5">
                    <img src={user?user.image:'Loading...'} alt="Profile" className="w-52 h-52 rounded-full"/>
                    <div className="flex flex-col justify-center  gap-1">
                        <span>Profile</span>
                        <h1 className="xl:text-8xl font-bold text-foreground">{user?user.username:"Loading..."}</h1>
                    </div>
                </div>  
            {/* Card Body */}
            {/* flex flex-col items-center */}
            <div className="bg-black h-full p-5">
                <h2 className="text-2xl font-bold text-foreground">Edit Profile</h2>
                <p className="text-foreground">This is your profile page. You can see your personal information here.</p>
                <form className="xl:w-1/3 lg:w-1/2">
                    {/* <Label>Username:</Label>
                    <Input className="" nameInput="username" register={register} />
                    <Label>Email:</Label>
                    <Input className="" nameInput="email" register={register} />
                    <Label>Password:</Label>
                    <Input className="" nameInput="password" register={register} /> */}

                    <Label>Username:</Label>
                    <input className="" value={user?user.username:"Loading..."} {...register("username")}/>
                    <Label>Email:</Label>
                    <input className=""  value={user?user.email:"Loading..."} {...register("email")} />
                    <Label>Password:</Label>
                    <input className="" {...register("password")} />

                </form>
            </div>
        </Card>
    );
    }

export default ProfilePage;