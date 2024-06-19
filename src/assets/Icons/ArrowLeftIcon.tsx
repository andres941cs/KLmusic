interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const ArrowLeftIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return (
      <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960">
        <path d="M400-240L160-480l240-240 56 58-142 142h486v80H314l142 142-56 58z"></path>
      </svg> );
}
 
export default ArrowLeftIcon;