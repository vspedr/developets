import React from 'react';
import { Header, Icon,  } from 'semantic-ui-react';

const PetHeader = () => {

  return (
    <header className="App-header">
      <Header as="h1" icon textAlign="center" className="App-title">
        <Icon name="paw" />
        <Header.Content className="App-header-text">DEVELOPETS</Header.Content>
      </Header>
    </header>
  );
};

export default PetHeader;
