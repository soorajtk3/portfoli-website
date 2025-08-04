
import type { LucideIcon } from "lucide-react";
interface SkillProps {
  icon: LucideIcon;
  skillTitle?: string;
  skills?: string[];
  chipColor?: string;
  boxColor?: string;
}
const SkillCard = ({ icon: Icon, skillTitle, skills, chipColor, boxColor }: SkillProps) => {


  return (
    <div>
      <div className={`${boxColor} max-w-96 h-40 w-80 bg-white  px-6 py-3 rounded-xl shadow-md`}>
        <div className={`flex gap-2 items-center`} >
          <Icon className={` w-5 h-5 `} />
          <h3 className="text-xl text-black-500 font-semibold text-left">{skillTitle}</h3>
        </div>
        <div className="flex flex-wrap gap-4 mt-3">
          {skills?.map((item, index) => (
            <div key={index}
              className={`${chipColor} w-auto rounded-xl p-2 `}
            >
              <h3 className="text-white text-sm font-medium">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default SkillCard;
