interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const FullScreenIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
            <path d="M120-120v-200h80v120h120v80H120zm520 0v-80h120v-120h80v200H640zM120-640v-200h200v80H200v120h-80zm640 0v-120H640v-80h200v200h-80z"></path>
        </svg>
     );
}
 
export default FullScreenIcon;