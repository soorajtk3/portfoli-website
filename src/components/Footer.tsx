import React from 'react';
import { Download } from 'lucide-react';

interface FooterProps {
  onDownloadResume?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onDownloadResume }) => {
  return (
    <footer className="bg-gray-800">
      <div className=" px-6 py-10">
        <div className="flex flex-col items-center">
          <h1 className='text-2xl font-bold text-white'>Let's Connect</h1>
          <h5 className='text-white'>I'm always interested in new opportunities and collaborations.</h5>
          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
