import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export const PetCard = (pet, index) => (
  <Card key={index}>
    <Card.Content>
      <Card.Header>
        {pet.name}
      </Card.Header>
      <Card.Meta>
        <span className='age'>
          { pet.subtype ?
            `the ${pet.subtype} ${pet.type}` :
            `the ${pet.type}`
          }
        </span>
      </Card.Meta>
      <Card.Description>
        {pet.description}
      </Card.Description>
      <Card.Content extra>
        <a href={`http://github.com/${pet.owner}`}>
          <Icon name='user' />
          {`Owner: ${pet.owner}`}
        </a>
      </Card.Content>
    </Card.Content>
  </Card>
);
