import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const SurveyPrompt = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleNo = () => {
    setIsOpen(false);
    toast.success("Thank you! We are getting the best options for you!", {
      position: "top-center",
      duration: 3000,
    });
  };

  const handleYes = () => {
    setIsOpen(false);
    navigate('/survey');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-semibold text-secondary-dark mb-4">
          Would you like to take our survey?
        </h2>
        <p className="text-gray-600 mb-6">
          Your feedback helps us improve our services.
        </p>
        <div className="flex gap-4 justify-end">
          <button
            onClick={handleNo}
            className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            No, thanks
          </button>
          <button
            onClick={handleYes}
            className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Yes, I'll help
          </button>
        </div>
      </div>
    </div>
  );
};