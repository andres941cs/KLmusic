interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const ArrowDownIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return (
      <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960">
        <path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z"></path>
      </svg> );
}
 
export default ArrowDownIcon;