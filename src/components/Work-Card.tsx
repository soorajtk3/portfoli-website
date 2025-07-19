

interface WorkDetailsProps {
  id: number;
  designation: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: duties[];
}
interface duties {
  id: number;
  title: string
}
const WorkCard = ({ id, designation, company, location, duration, responsibilities }: WorkDetailsProps) => {

  return (
    <div key={id}
      className="rounded-xl bg-white shadow-lg p-8 hover:shadow-xl mb-6"
    >
      <div className="flex justify-between">
        <h2 className="text-gray-800 text-2xl font-bold">{designation}</h2>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          {duration}
        </div>

      </div>
      <h3 className="text-xl text-blue-600 font-semibold mb-1">{company}</h3>
      <h4 className="text-gray-600 mb-3">{location}</h4>
      <div>
        <ul className="space-y-3">
          {responsibilities?.map((item) => (
            <li key={item?.id} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">{item?.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )


};

export default WorkCard;
