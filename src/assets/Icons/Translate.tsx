interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const TranslateIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return ( 
        <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
            <path d="M476-80l182-480h84L924-80h-84l-43-122H603L560-80h-84zM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201zm468-72h144l-72-204-72 204z"></path>
        </svg>
     );
}
 
export default TranslateIcon;