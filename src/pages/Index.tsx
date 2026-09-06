
import { useState } from 'react';

const Index = () => {
  const [activeSensitivity, setActiveSensitivity] = useState(100);
  const [isActivated, setIsActivated] = useState(true);

  const sensitivities = [20, 40, 60, 80, 100];

  const handleSensitivityChange = (value: number) => {
    setActiveSensitivity(value);
    setIsActivated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center p-4">
      <div className="backdrop-blur-lg bg-white/85 rounded-3xl shadow-2xl p-8 w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-lg font-bold text-slate-900 tracking-wider">
            CREATOR : PREMIUM SENSI ⚙️
          </h1>
        </div>

        {/* Sensitivity Options */}
        <div className="space-y-3 mb-6">
          {sensitivities.map((sensitivity) => (
            <button
              key={sensitivity}
              onClick={() => handleSensitivityChange(sensitivity)}
              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeSensitivity === sensitivity
                  ? 'bg-slate-300 shadow-inner text-slate-900'
                  : 'bg-white/60 text-slate-800 hover:bg-white/80'
              }`}
            >
              {sensitivity}%🎯
            </button>
          ))}
        </div>

        {/* Notification */}
        {isActivated && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg animate-fadeIn">
            <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              ✓
            </div>
            <span className="text-emerald-700 font-bold text-sm">AIM BOT ACTIVADO</span>
          </div>
        )}

        {/* Current Sensitivity Display */}
        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm font-medium">
            Current Sensitivity: <span className="text-slate-900 font-bold">{activeSensitivity}%</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
