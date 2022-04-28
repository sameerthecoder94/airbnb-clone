import { FC, useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import { firestoreDB } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Hotel } from '../types';

const FeaturedLocations: FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const hotelsRef = collection(firestoreDB, 'hotels');
    getDocs(hotelsRef).then((data) => {
      const hotelsData = data.docs.map((doc) => doc.data());
      setHotels(hotelsData as any);
    });
  }, []);

  return (
    <div className='p-4'>
      <h4 className='font-bold text-2xl mb-4'>Featured Locations</h4>
      <div className='flex'>
        {hotels.map((hotel) => {
          return (
            <LocationCard
              key={hotel.id}
              id={hotel.id}
              image={hotel.image}
              location={hotel.location}
              name={hotel.name}
              price={hotel.price}
              rating={hotel.rating}
              description={hotel.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedLocations;
