import { useState } from "react";

interface InputTimeProps { id: string; }
const InputTime = ({id}:InputTimeProps) => {
    const [time, setTime] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const numericValue = value.replace(/[^0-9:,]/g, "");
        setTime(numericValue);
    };
    return ( 
        <input value={time} id={id}  onChange={handleInputChange} required autoComplete="off" type="text" 
        pattern="[0-2][0-4]:[0-5][0-9]:[0-5][0-9],[0-9][0-9][0-9]" className="h-full w-full bg-background text-foreground p-3" maxLength={12}/>
     );
}
export default InputTime;