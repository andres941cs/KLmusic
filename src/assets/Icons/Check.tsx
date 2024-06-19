interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const CheckIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
            <path d="M382-240L154-468l57-57 171 171 367-367 57 57-424 424z"></path>
        </svg>
     );
}
 
export default CheckIcon;