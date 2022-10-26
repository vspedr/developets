import parse from 'parse-link-header';
import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import 'semantic-ui-css/semantic.min.css';
import { Card, Container, Pagination } from 'semantic-ui-react';
import './App.css';
import { PetCard } from './components/PetCard';
import { PetHeader } from './components/PetHeader';
import { PETS } from './constants';
import { usePage } from './hooks/use-page';
import fetchPets from './services/pets';
import { cacheRequest } from './_sessionStorage';

function App() {
  const LIMIT = 9;

  const [pets, setPets] = useState([]);
  const [page, setPage] = usePage();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const config = {
        params: { _page: page, _limit: LIMIT },
      };
      const result = await cacheRequest(
        PETS,
        config.params._page,
        fetchPets(config)
      );
      const parsedLink = parse(result.headers.link);
      setTotalPages(parsedLink.last._page);
      setPets(result.data);
    }

    fetchData().then(() => setLoading(false));
  }, [page]);

  const onPageChange = (event, data) => {
    setPage(data.activePage);
  };

  return (
    <div className="App">
      <PetHeader />
      {loading ? (
        <HashLoader
          color="#36d7b7"
          cssOverride={{
            marginTop: 100,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          size={500}
        />
      ) : (
        <main>
          <Container as="section" className="App-content">
            <Card.Group className="centered" stackable>
              {pets.map((pet) => PetCard(pet))}
            </Card.Group>
          </Container>
          <Pagination
            as="section"
            className="App-pagination"
            activePage={page}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        </main>
      )}
    </div>
  );
}

export default App;
