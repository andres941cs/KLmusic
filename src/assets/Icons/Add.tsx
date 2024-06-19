interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
export const AddCircleIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
    return (
      <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960">
        <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93zm0-320z"></path>
      </svg> );
}

export const AddIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
  return (
    <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960">
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240z"></path>
    </svg> );
}

export const PostAddIcon = ({ size= 24,fill="#e8eaed",className="",onClick}:IconProps) => {
  return ( 
      <svg width={size} height={size} fill={fill} className={className} onClick={onClick} viewBox="0 -960 960 960" >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200zm120-160v-80h320v80H320zm0-120v-80h320v80H320zm0-120v-80h320v80H320zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80z"></path>
      </svg>
   );
}
