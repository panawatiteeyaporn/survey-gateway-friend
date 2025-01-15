import { motion } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    description: "Discover the magic of white-washed buildings and stunning sunsets",
    price: "From £299pp",
  }
];

const Same = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-secondary mb-2 text-center">Your Next Holiday Awaits</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Based on your preferences, we've selected these amazing destinations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{destination.price}</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Buy now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Same;