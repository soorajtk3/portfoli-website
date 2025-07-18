import type { LucideIcon } from "lucide-react";

interface CardProps {
  color?: string;
  width?: string;
  height?: string;
  text?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconTextColor?: string;
  onClick?: () => void;
  isSocial?: boolean
}
const Card = ({ color, width, height, icon: Icon,
  text, iconColor, iconTextColor, onClick, isSocial }: CardProps) => {
  return (
    <div onClick={onClick} className={`${color} ${width} ${height} ${isSocial ? 'cursor-pointer' : 'none'} rounded-lg shadow px-5 py-2 flex gap-3
    items-center justify-center
    `}>
      <Icon className={`${iconColor} w-5 h-5 `} />
      <span className={`${iconTextColor} text-base`}>{text}</span>
    </div>
  )
}

export default Card;
