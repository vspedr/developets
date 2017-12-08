import React, { Component } from 'react';
import { Container, Card, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { PetCard } from './components/PetCard';
import { pets } from './data/pets';

class App extends Component {
  render() {
    const petCards = pets.map(pet => PetCard(pet));
    return (

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <h1 className="App-title">DeveloPets</h1>
      // </header>
      <div className="App">
        <header className="App-header">
          <Header as="h1" icon textAlign="center" inverted color="grey">
            <Icon name="paw" />
            <Header.Content>
              DeveloPets
            </Header.Content>
          </Header>
        </header>
        <div className="App-content">
          <Container>
            <Card.Group>
              {petCards}
            </Card.Group>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
