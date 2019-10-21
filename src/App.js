import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Header,
  Icon,
  Pagination,
  Input
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import parse from "parse-link-header";
import "./App.css";
import { PetCard } from "./components/PetCard";
import fetchPets from "./services/pets";

function App() {
  const LIMIT = 9;

  const [pets, setPets] = useState([]);
  const [page, setPage] = usePage();
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");

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

  const findPetBy = (pet, _search) =>
    pet.toLowerCase().includes(_search.toLowerCase());

  const searchPets =
    pets &&
    pets.filter(
      pet =>
        findPetBy(pet.name, searchText) ||
        findPetBy(pet.owner, searchText) ||
        findPetBy(pet.type, searchText)
    );

  return (
    <div className="App">
      <header className="App-header">
        <Header as="h1" icon textAlign="center" className="App-title">
          <Icon name="paw" />
          <Header.Content>DeveloPets</Header.Content>
        </Header>
      </header>
      <div className="App-search">
        <Header as="h3">
          <Header.Content>Looking for a specific pet?</Header.Content>
        </Header>
        <Input
          className="App-search-input"
          icon="search"
          placeholder="Search by name, owner, or species..."
          type="text"
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className="App-content">
        <Container>
          <Card.Group className="centered" stackable>
            {searchPets.map(pet => PetCard(pet))}
          </Card.Group>
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
