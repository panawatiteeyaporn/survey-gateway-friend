import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <img 
            src="https://holidays.easyjet.com/images/easyjet-holidays-logo.svg" 
            alt="EasyJet Holidays" 
            className="h-8 md:h-10"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary">
              Enjoy your holiday?
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Give us your feedback to see your next unbeatable holiday prices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/recommendations')}
              variant="default"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white"
            >
              I want the same holiday
            </Button>
            <Button
              onClick={() => navigate('/survey')}
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
            >
              Improve my holiday
            </Button>
            <Button
              onClick={() => navigate('/swipe')}
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
            >
              Give me something new
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
