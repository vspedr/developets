import React, { useState, useEffect } from 'react';
import { usePage } from './hooks/use-page';
import { Container, Card, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import parse from 'parse-link-header';
import './App.css';
import { PetCard } from './components/PetCard';
import { PetHeader } from './components/PetHeader';
import fetchPets from './services/pets';
import { cacheRequest } from './_sessionStorage';
import { PETS } from './constants';


function App() {
  const LIMIT = 9;

  const [pets, setPets] = useState([]);
  const [page, setPage] = usePage();
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const config = {
        params: { _page: page, _limit: LIMIT }
      };
      const result = await cacheRequest(PETS, config.params._page, fetchPets(config));
      const parsedLink = parse(result.headers.link);
      setTotalPages(parsedLink.last._page);
      setPets(result.data);
    }
    fetchData();
  }, [page]);

  const onPageChange = (event, data) => {
    setPage(data.activePage);
  };

  return (
    <div className="App">
      <PetHeader />
      <div className="App-content">
        <Container>
          <Card.Group className="centered" stackable>{pets.map(pet => PetCard(pet))}</Card.Group>
        </Container>
      </div>
      <div className="App-pagination">
        <Pagination
          activePage={page}
          onPageChange={onPageChange}
          totalPages={totalPages}
        ></Pagination>
      </div>
    </div>
  );
}

export default App;
