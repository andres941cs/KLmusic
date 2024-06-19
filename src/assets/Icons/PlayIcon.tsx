interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const PlayIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
            <path d="M320-200v-560l440 280-440 280zm80-280zm0 134l210-134-210-134v268z"></path>
        </svg>
     );
}
 
export default PlayIcon;