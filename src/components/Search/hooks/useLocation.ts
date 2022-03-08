import { useState } from 'react';
import { CityFound } from '../interfaces/interfaces';
import { getCity } from '../../../services/getCity';

export const useLocation = () => {

  const [location, setLocation] = useState<CityFound>();

  const cityFound = async(place:string) => {
    setLocation(await getCity(place))
  }

  return {
    location,
    cityFound
  }
}