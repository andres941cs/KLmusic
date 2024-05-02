// import { Input, Label } from "@components/UI";
import { Label } from "@components/UI";
import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
// FONDO #1e1e1e
interface IFormProfile {
    username: string;
    email: string;
    password: string;
  }
const ProfilePage = () => {
    // const { user } = useAuth();
    const user = {name: "John Doe"};
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
            <div className="bg-purple-300 h-72 flex items-end gap-5 p-5">
                    <img src="https://i.pravatar.cc/300" alt="Profile" className="w-52 h-52 rounded-full"/>
                    <div className="flex flex-col justify-center items-start">
                        <span>Profile</span>
                        <h1 className="xl:text-8xl font-bold text-foreground">{user.name}</h1>
                        <div className="flex flex-col">
                            <span>Username: {user.name}</span>
                        </div>
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
                    <input className="" {...register("username")}/>
                    <Label>Email:</Label>
                    <input className="" {...register("email")} />
                    <Label>Password:</Label>
                    <input className="" {...register("password")} />

                </form>
            </div>
        </Card>
    );
    }

export default ProfilePage;