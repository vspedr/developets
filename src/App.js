import React, { useEffect, useState } from 'react';
import { usePage } from './hooks/use-page';
import { Card, Container, Header, Input, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import parse from 'parse-link-header';
import './App.css';
import { PetCard } from './components/PetCard';
import { PetHeader } from './components/PetHeader';
import fetchPets from './services/pets';
import { cacheRequest } from './_sessionStorage';
import { PETS } from './constants';
import { HashLoader } from "react-spinners";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const LIMIT = 9;

  const [pets, setPets] = useState([]);
  const [page, setPage] = usePage();
  const [allPets, setAllPets] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const config = {
        params: { _page: page, _limit: LIMIT }
      };
      const result = await cacheRequest(PETS, config.params._page, fetchPets(config));
      const axiosResponse = await fetchPets();
      setAllPets(axiosResponse.data);
      const parsedLink = parse(result.headers.link);
      setTotalPages(parsedLink.last._page);
      setPets(result.data);
    }

    if (searchText.length === 0) {
      fetchData().then(() => setLoading(false));
    } else {
      const searchPets =
                allPets &&
                allPets.filter(
                  pet =>
                    findPetBy(pet.name, searchText) ||
                        findPetBy(pet.owner, searchText) ||
                        findPetBy(pet.type, searchText)
                );
      setPets(searchPets);
    }
  }, [page, searchText]);

  const onPageChange = (event, data) => {
    setPage(data.activePage);
  };

  const findPetBy = (pet, _search) =>
    pet.toLowerCase().includes(_search.toLowerCase());


  return (
    <div className="App">
      <PetHeader/>
      {
        loading ? <HashLoader
          color="#36d7b7"
          cssOverride={{
            marginTop: 100,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          size={500}
        /> :
          <div>
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
      }
    </div>
  );
}

export default App;
