import React, { useState, useEffect } from 'react';
import { Container, Card, Header, Icon, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import parse from 'parse-link-header';
import './App.css';
import { PetCard } from './components/PetCard';

function App() {
  const LIMIT = 9;

  const [pets, setPets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const config = {
        params: { _page: page, _limit: LIMIT }
      };
      const result = await axios(
        `${process.env.REACT_APP_API_URL}/pets`,
        config
      );
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
      <header className="App-header">
        <Header as="h1" icon textAlign="center" className="App-title">
          <Icon name="paw" />
          <Header.Content>DeveloPets</Header.Content>
        </Header>
      </header>
      <div className="App-content">
        <Container>
          <Card.Group stackable>{pets.map(pet => PetCard(pet))}</Card.Group>
        </Container>
      </div>
      <Pagination
        activePage={page}
        onPageChange={onPageChange}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
}

export default App;
