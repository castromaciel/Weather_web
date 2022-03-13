export interface CityFound{
  id: number; 
  place_name: string; 
  center: string []; 
}

export interface CityFoundCopy {
  [x: string]: any;
  id: number; 
  place_name: string; 
  lng: string; 
  lat: string;
} 

export interface SearchContextInterface{
  location: CityFoundCopy;
  setLocation: (CityFoundCopy: CityFoundCopy) => void;
}