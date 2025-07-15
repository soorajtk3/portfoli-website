import React from 'react';
import { Download } from 'lucide-react';

interface HeaderProps {
  onDownloadResume?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadResume }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-800">Sooraj Vijayan T K</h1>
          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
