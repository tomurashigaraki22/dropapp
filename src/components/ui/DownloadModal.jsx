import React, { useState } from 'react';
import { X, Smartphone, Apple } from 'lucide-react';

const apps = {
  user: {
    android: {
      label: 'Android',
      url: 'http://148.113.201.195:8000/user',
    },
    ios: {
      label: 'iOS',
      url: 'https://apps.apple.com/ng/app/drop-rideshare/id6744443445', // TODO: Replace with actual link
    },
  },
  driver: {
    android: {
      label: 'Android',
      url: 'http://148.113.201.195:8000/dropdriver',
    },
    ios: {
      label: 'iOS',
      url: 'https://apps.apple.com/ng/app/drop-rideshare-driver/id6744000511', // TODO: Replace with actual link
    },
  },
};

export default function DownloadModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState('user');
  const [choice, setChoice] = useState(null);
  const [copied, setCopied] = useState(false);
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
          <button
            type="button"
            onClick={() => setChoice({ platform: 'android' })}
            className="flex items-center gap-4 px-6 py-4 rounded-lg border border-[#f27e05] bg-[#f27e05] text-white font-bold text-lg hover:bg-[#f27e05]/90 transition-colors"
          >
            <Smartphone size={28} />
            Download for Android
          </button>
          <button
            type="button"
            onClick={() => setChoice({ platform: 'ios' })}
            className="flex items-center gap-4 px-6 py-4 rounded-lg border border-[#000] bg-white text-[#000] font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Apple size={28} />
            Download for iOS
          </button>
        </div>
      </div>
      {choice && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-[#f27e05]"
              onClick={() => setChoice(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-center mb-4">
              {choice.platform === 'android' ? 'Android' : 'iOS'} Options
            </h3>
            <div className="flex flex-col gap-4">
              {choice.platform === 'android' ? (
                <>
                  <button
                    type="button"
                    onClick={() => { window.location.href = apps[activeTab].android.url; }}
                    className="w-full text-center px-4 py-3 rounded-lg font-semibold bg-[#f27e05] text-white hover:bg-[#f27e05]/90 transition-colors"
                  >
                    Download APK
                  </button>
                  <p className="text-sm text-gray-500 text-center">If the download doesn’t start, copy the link and paste in a new tab.</p>
                  <button
                    type="button"
                    onClick={async () => {
                      const text = apps[activeTab].android.url;
                      try {
                        await navigator.clipboard.writeText(text);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      } catch {
                        const ta = document.createElement('textarea');
                        ta.value = text;
                        ta.style.position = 'fixed';
                        ta.style.opacity = '0';
                        document.body.appendChild(ta);
                        ta.focus();
                        ta.select();
                        try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2000); } finally { document.body.removeChild(ta); }
                      }
                    }}
                    className="w-full text-center px-4 py-2 rounded-lg font-semibold border border-[#f27e05] text-[#f27e05] hover:bg-[#f27e05]/10"
                  >
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </>
              ) : (
                <a
                  href={apps[activeTab].ios.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-3 rounded-lg font-semibold bg-black text-white hover:bg-black/90 transition-colors"
                >
                  Open App Store
                </a>
              )}
              <div className="border rounded-lg p-4 flex flex-col items-center gap-3">
                <p className="font-medium">Scan QR code to download</p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(apps[activeTab][choice.platform].url)}`}
                  alt="QR Code"
                  className="w-40 h-40"
                />
                <a
                  href={apps[activeTab][choice.platform].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f27e05] font-semibold"
                >
                  Open Link
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
    
