import { useState } from 'react';
import { SliderQuestion } from '../components/SliderQuestion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const questions = [
  "How satisfied are you with our service?",
  "How likely are you to recommend us to others?",
  "How would you rate our website's ease of use?",
  "How satisfied are you with our customer support?",
  "How would you rate the value for money of our services?",
  "How clear was our communication with you?",
  "How well did we meet your expectations?",
  "How satisfied are you with our booking process?",
  "How would you rate our response time?",
  "How likely are you to use our services again?",
];

const Survey = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(5));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    toast.success("Thank you for completing our survey!", {
      position: "top-center",
      duration: 3000,
    });
    setTimeout(() => navigate('/'), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="h-2 bg-secondary rounded-full">
            <div
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-right text-sm text-gray-500 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === currentQuestion ? 'opacity-100' : 'hidden'
              }`}
            >
              <SliderQuestion
                question={question}
                value={answers[index]}
                onChange={(value) => handleAnswer(index, value)}
              />
              
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  className={`px-6 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-dark transition-colors ${
                    currentQuestion === 0 ? 'invisible' : ''
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (currentQuestion === questions.length - 1) {
                      handleSubmit();
                    } else {
                      setCurrentQuestion(currentQuestion + 1);
                    }
                  }}
                  className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                >
                  {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Survey;