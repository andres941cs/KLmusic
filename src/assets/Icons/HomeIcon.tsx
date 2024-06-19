interface IconProps { fill?: string; size?: number;className?:string;onClick?:()=>void;}
const HomeIcon = ({ size= 24,fill='#e8eaed',className=''}:IconProps) => {
  return ( 
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} className={className} viewBox="0 -960 960 960">
        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160zm320-350z"></path>
      </svg>
    );
}
 
export default HomeIcon;