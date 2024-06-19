interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const ChevronRightIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return (
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960">
            <path d="M504-480L320-664l56-56 240 240-240 240-56-56 184-184z"></path>
        </svg>
    );
}
 
export default ChevronRightIcon;