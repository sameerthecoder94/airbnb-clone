import { FC, useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import { firestoreDB } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Hotel } from '../types';

const Popular: FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const hotelsRef = collection(firestoreDB, 'hotels');
    const sortedHotelsQuery = query(hotelsRef, orderBy('rating', 'desc'));
    getDocs(sortedHotelsQuery).then((data) => {
      const hotelsData = data.docs.map((doc) => doc.data());
      setHotels(hotelsData as any);
    });
  }, []);

  return (
    <div>
      <div className='p-4'>
        <h4 className='font-bold text-2xl mb-4'>Popular Locations</h4>
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
