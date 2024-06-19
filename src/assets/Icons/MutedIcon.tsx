interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const MutedIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
            <path d="M616-320l-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104zm-496-40v-240h160l200-200v640L280-360H120zm280-246l-86 86H200v80h114l86 86v-252zM300-480z"></path>
        </svg>
     );
}
 
export default MutedIcon;