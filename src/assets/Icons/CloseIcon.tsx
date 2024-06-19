interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const CloseIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
      <path d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"></path>
        </svg>
     );
}
 
export default CloseIcon;