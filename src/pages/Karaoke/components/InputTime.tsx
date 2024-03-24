import { useState } from "react";


function InputTime() {
    const [time, setTime] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        const formattedValue = value.replace(/\D/g, '').slice(0, 4); // Eliminar no números y limitar a 4 caracteres
        const minutes = formattedValue.slice(0, 2);
        const seconds = formattedValue.slice(2, 4);
        const formattedTime = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
        setTime(formattedTime);
        console.log(formattedTime)
    };
    return ( 
        <input value={time} onChange={handleInputChange} autoComplete="off" role="timer" type="text" spellCheck="false" className="h-full w-full bg-transparent" maxLength={7} aria-label=" 1&nbsp;minuto 1&nbsp;segundo 0 fotogramas"/>
     );
}

export default InputTime;