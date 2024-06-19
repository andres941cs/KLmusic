interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const PauseIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
            <path d="M520-200v-560h240v560H520zm-320 0v-560h240v560H200zm400-80h80v-400h-80v400zm-320 0h80v-400h-80v400zm0-400v400-400zm320 0v400-400z"></path>
        </svg>
     );
}
 
export default PauseIcon;