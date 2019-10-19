import axios from 'axios';

const fetchPets = async () => {
  const result = await axios(`${process.env.REACT_APP_API_URL}/pets`);

  return result.data;
};

export default fetchPets;
