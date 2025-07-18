import React from 'react';
import { Mail, Download } from 'lucide-react';
import { handleDownloadResume } from '../utils/common-functions';

interface FooterProps {
  onDownloadResume?: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800">
      <div className=" px-6 py-10">
        <div className="flex flex-col items-center">
          <h1 className='text-2xl font-bold text-white'>Let's Connect</h1>
          <h5 className='text-gray-300 mt-3 mb-6'>I'm always interested in new opportunities and collaborations.</h5>
          <div className='flex justify-between gap-4 mb-8'>
              <a  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" href="mailto:soorajtk3@gmail.com">
                <Mail size={18} />
                Email me
              </a>
            <button
              onClick={handleDownloadResume}
              className="cursor-pointer flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
          <h6 className='text-gray-400 text-sm mt-1 mb-1'>© 2025 Sooraj Vijayan T K. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
