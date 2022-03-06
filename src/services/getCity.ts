import { MAPBOX_KEY } from "./keys";
import axios from "axios";

interface CityFound{
  id: number; 
  place_name: string; 
  center: string []; 
}

export const getCity = async (city: string) => {
  if(city.length >= 5 ){
    try {
      const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_KEY}`);
  
      return resp.data.features.map( (city:CityFound) => ({
        id: city.id,
        name: city.place_name,
        lng: city.center[0],
        lat: city.center[1]
      }))
  
    } catch (error) {
      console.log(error)
      return []; 
    }
  }
};