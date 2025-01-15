import { useState } from 'react';

interface SliderQuestionProps {
  question: string;
  value: number;
  onChange: (value: number) => void;
}

export const SliderQuestion = ({ question, value, onChange }: SliderQuestionProps) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 mb-6 shadow-sm animate-fade-in">
      <h3 className="text-xl font-medium text-secondary-dark mb-6">{question}</h3>
      <div className="relative">
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #FF6B00 0%, #FF6B00 ${
              ((value - 1) / 9) * 100
            }%, #E5E7EB ${((value - 1) / 9) * 100}%, #E5E7EB 100%)`,
          }}
        />
        <div
          className={`absolute -top-8 left-[${
            ((value - 1) / 9) * 100
          }%] transform -translate-x-1/2 transition-opacity ${
            isDragging ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="bg-primary text-white px-2 py-1 rounded text-sm">
            {value}
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>Not satisfied</span>
        <span>Very satisfied</span>
      </div>
    </div>
  );
};