import React, { useState, useEffect } from 'react';
import { Container, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import './App.css';
import { PetCard } from './components/PetCard';
import { PetHeader } from './components/Header';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${process.env.REACT_APP_API_URL}/pets`);
      setPets(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <PetHeader />
      <div className="App">
        <div className="App-content">
          <Container>
            <Card.Group stackable>{pets.map(pet => PetCard(pet))}</Card.Group>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
