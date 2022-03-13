import { createContext } from 'react';
import { SearchContextInterface } from '../interfaces/interfaces';

export const SearchContext = createContext<SearchContextInterface>({
  location: {
    id: 0,
    place_name: "",
    lng: "",
    lat: "",
  },
  setLocation: (location) => console.warn('City not found: ', location),
})

