import { useState } from 'react';
import { CityFoundCopy } from '../interfaces/interfaces';
import { getCity } from '../../../services/getCity';

export const useLocation = () => {

  const [location2, setLocation] = useState<CityFoundCopy>();

  const cityFound = async(place:string) => {
    setLocation(await getCity(place))
  }

  return {
    location2,
    cityFound
  }
}