import axios from 'axios';

const fetchPets = async (config) => {
  return await axios(`${process.env.REACT_APP_API_URL}/pets`, config);
};

export default fetchPets;
