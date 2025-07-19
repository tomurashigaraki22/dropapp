import React, { useState } from 'react';
import { X, Smartphone, Apple } from 'lucide-react';

const apps = {
  user: {
    android: {
      label: 'Android',
      url: 'https://mega.nz/file/n1pV3YBZ#8vU3zOuDt9qhiPyAMHeco680sUaY6Vwvq6QJeDk62Gc',
    },
    ios: {
      label: 'iOS',
      url: 'https://apps.apple.com/ng/app/drop-rideshare/id6744443445', // TODO: Replace with actual link
    },
  },
  driver: {
    android: {
      label: 'Android',
      url: 'https://mega.nz/file/X9oE2TLQ#91OTJn8eLk0Prxjksf_rQAeCf4-_W27AenpLNAW8g7E',
    },
    ios: {
      label: 'iOS',
      url: 'https://apps.apple.com/ng/app/drop-rideshare-driver/id6744000511', // TODO: Replace with actual link
    },
  },
};

export default function DownloadModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState('user');
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-[#f27e05]"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>
        <h2 className="text-2xl font-bold text-[#f27e05] mb-6 text-center">Download Drop App</h2>
        <div className="flex justify-center mb-8 gap-4">
          <button
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeTab === 'user' ? 'bg-[#f27e05] text-white' : 'bg-gray-100 text-[#000] hover:bg-[#f27e05]/10'}`}
            onClick={() => setActiveTab('user')}
          >
            User App
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeTab === 'driver' ? 'bg-[#f27e05] text-white' : 'bg-gray-100 text-[#000] hover:bg-[#f27e05]/10'}`}
            onClick={() => setActiveTab('driver')}
          >
            Driver App
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <a
            href={apps[activeTab].android.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 rounded-lg border border-[#f27e05] bg-[#f27e05] text-white font-bold text-lg hover:bg-[#f27e05]/90 transition-colors"
          >
            <Smartphone size={28} />
            Download for Android
          </a>
          <a
            href={apps[activeTab].ios.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 rounded-lg border border-[#000] bg-white text-[#000] font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Apple size={28} />
            Download for iOS
          </a>
        </div>
      </div>
    </div>
  );
} 