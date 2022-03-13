import axios from "axios";
import { MAPBOX_KEY } from "./keys";
import { CityFound } from "../components/Search/interfaces/interfaces";

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
  } else {
    return {
      id:0,
      place_name: "", 
      lng:"",
      lat:""
    };
  }
};