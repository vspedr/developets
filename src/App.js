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
  let content, pagination;

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

  if(pets.length > 0) {
    content = <Card.Group className="centered" stackable>{pets.map(pet => PetCard(pet))}</Card.Group>;
    pagination =  <Pagination activePage={page} onPageChange={onPageChange} totalPages={totalPages}></Pagination>;
  } else {
    content = <div><h1>Where are our pets ?</h1><p>It seems like these guys are playing hide and seek.<br /> They'll be back once we find them.</p></div>;
    pagination = '';
  }

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
