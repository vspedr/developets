import React from 'react';
import { Icon } from 'semantic-ui-react';

export const PetHeader = () => {
  return (
    <header className="App-header">
      <div className="App-header__group">
        <h1 className="App-title">DeveloPets</h1>
        <p className="App-header__group-intro">
          Introduce your animal buddies to your fellow developers
        </p>
      </div>
      <div className="App__icons">
        <Icon name="paw" size="huge" />
        <Icon name="paw" size='big' className="App__icons--big" />
        <Icon name="paw" size='big' />
      </div>
    </header>
  );
};
