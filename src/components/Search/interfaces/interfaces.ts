export interface CityFound{
  id: number; 
  place_name: string; 
  center: string []; 
}

export interface CityFoundCopy{
  id: number; 
  place_name: string; 
  lng: string; 
  lat: string;
}

export interface SearchContextInterface{
  location: CityFoundCopy;
  setLocation: (CityFoundCopy: CityFoundCopy) => void;
}