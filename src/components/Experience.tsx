import { Briefcase } from "lucide-react";
import { experienceData } from "../utils/experience-details";
import WorkCard from "./Work-Card";

const Experience = () => {

  return (
    <div className="px-16 mt-10">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-blue-600" />
            Work Experience
          </h2>
        </div>
        {experienceData?.map((item) => (
          <WorkCard key={item?.id} id={item?.id} designation={item?.designation}
            company={item?.company}
            location={item?.location}
            duration={item?.duration}
            responsibilities={item?.responsibilities}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience;
