import { useState } from 'react';
import { SliderQuestion } from '../components/SliderQuestion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const questions = [
  "City or seaside?",
  "More activities or more relaxation?",
  "No frills or luxury?",
];

const Survey = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(5));

  const handleAnswer = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    toast.success("Thank you! We are getting the best options for you!", {
      position: "top-center",
      duration: 3000,
    });
    setTimeout(() => navigate('/recommendations'), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {questions.map((question, index) => (
            <SliderQuestion
              key={index}
              question={question}
              value={answers[index]}
              onChange={(value) => handleAnswer(index, value)}
            />
          ))}
          
          <div className="flex justify-center mt-8 mb-12">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Update my preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
