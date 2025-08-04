import { Code } from "lucide-react";
import SkillCard from "./Skill-Card";
import { skillDetails } from "../utils/common-details";


const Skills = () => {
  return (
    <div className="lg:mx-16 mx-3 mt-10 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
          <Code className="text-blue-600" />
          Technical Skills
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {skillDetails?.map((item) => (
          <SkillCard key={item?.id} icon={item?.icon} chipColor={item?.chipColor} boxColor={item?.bgColor} skillTitle={item?.title}
            skills={item?.skills} />
        ))}
      </div>
    </div>
  )
}

export default Skills;
