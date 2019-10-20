import axios from 'axios';
import { getLocalStorage, setLocalStorage } from '../_localStorage.js';

const PETS = 'PETS';

const fetchPets = async (config) => {
  const cache = getLocalStorage(PETS);
  if (cache) { return cache; }
  const pets = await axios(`${process.env.REACT_APP_API_URL}/pets`, config);
  setLocalStorage(PETS, pets);
  return pets;
};

export default fetchPets;
