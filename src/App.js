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
  let content, pagination;

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

  if(pets.length > 0) {
    content = <Card.Group className="centered" stackable>{pets.map(pet => PetCard(pet))}</Card.Group>;
    pagination =  <Pagination activePage={page} onPageChange={onPageChange} totalPages={totalPages}></Pagination>;
  } else {
    content = <div><h1>Where are our pets ?</h1><p>It seems like these guys are playing hide and seek.<br /> They'll be back once we find them.</p></div>;
    pagination = '';
  }

  return (
    <div className="App">
      <PetHeader />
      <div className="App-content">
        <Container>
          {content}
        </Container>
      </div>
      <div className="App-pagination">
        {pagination}
      </div>
    </div>
  );
}

export default App;
