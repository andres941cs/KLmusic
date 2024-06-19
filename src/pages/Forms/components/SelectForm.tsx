import AsyncSelect from 'react-select/async';

interface ISelect {
    myFecht:(name:string)=>Promise<any>;
    onData:(data:any)=>void;
}
const SelectForm = ({myFecht,onData}:ISelect) => {


    const loadOptions = (inputValue: string) =>
        new Promise<any[]>((resolve) => {
            if (inputValue.length <3) return [];
            myFecht(inputValue)
            .then((data) => resolve(
                data.map((item:any) => ({ label: item.name, value: item.id }))
            ));
      });

    return ( 
        <AsyncSelect className='!text-black' cacheOptions loadOptions={ loadOptions} defaultOptions onChange={onData} />
     );
}
 
export default SelectForm;