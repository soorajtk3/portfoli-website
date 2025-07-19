import { GraduationCap, } from "lucide-react";
import { educationDetails, } from "../utils/common-details";

const EducationDetails = () => {

  return (
    <div className="mt-10 bg-white md:mx-30 lg:mx-60 mx-4 mb-10 
    shadow-lg p-8 hover:shadow-xl rounded-xl">
      <div>
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="text-blue-600" />
            Education
          </h2>
        </div>
        <div className="text-left p-4">
          <h2 className="text-2xl text-gray-800 font-bold">{educationDetails?.course}</h2>
          <h4 className="text-lg text-blue-600 font-semibold mt-2 mb-2">{educationDetails?.university}</h4>
          <h5 className="text-gray-600">{educationDetails?.year}</h5>
        </div>
      </div>
    </div>
  )
}

export default EducationDetails;
