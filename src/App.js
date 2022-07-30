import React, { useState, useEffect, Fragment } from 'react';
import { usePage } from './hooks/use-page';
import parse from 'parse-link-header';
import fetchPets from './services/pets';
import { cacheRequest } from './_sessionStorage';
import { PETS } from './constants';

import { PetCard } from './components/PetCard';
import { PetHeader } from './components/PetHeader';
import { Footer } from './components/Footer';
import { Spinner } from './components/Spinner';

import GlobalStyle from './styles/GlobalStyle';

import { Wrapper, Container, List, Item } from './styles/AppStyle';

const LIMIT = 9;

function App() {
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState('iddle');
  const [page, setPage] = usePage();
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('loading');

        const config = { params: { _page: page, _limit: LIMIT } };

        const result = await cacheRequest(
          PETS,
          config.params._page,
          fetchPets(config)
        );
        const parsedLink = parse(result.headers.link);

        setTotalPages(parsedLink.last._page);
        setPets(result.data);

        setStatus('success');
      } catch (err) {
        setStatus('error');
      }
    }

    fetchData();
  }, [page]);

  const onPageChange = (event, data) => {
    setPage(data.activePage);
  };

  return (
    <Fragment>
      <Wrapper>
        <PetHeader />
        <Container>
          {status === 'success' ? (
            <Fragment>
              <List>
                {pets.map((pet) => (
                  <Item key={pet.id}>
                    <PetCard pet={pet} />
                  </Item>
                ))}
              </List>
              <Footer
                activePage={page}
                onPageChange={onPageChange}
                totalPages={totalPages}
              />
            </Fragment>
          ) : (
            <Spinner />
          )}
        </Container>
      </Wrapper>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
