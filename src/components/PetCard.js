import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import placeholder from '../assets/img/paw.png';
import './PetCard.css';

export const PetCard = (pet) => {
  const extra = (
    <Card.Content extra>
      <a href={`http://github.com/${pet.owner}`}>
        <Icon name="github" />
        {pet.owner}
      </a>
    </Card.Content>
  );

  const image = (
    <Image
      className="card-image"
      alt={pet.name}
      src={pet.img ? pet.img : placeholder}
      centered
    />
  );

  return (
    <Card
      as="section"
      key={pet.id}
      image={image}
      header={pet.name}
      meta={`the ${pet.type}`}
      description={pet.description}
      extra={pet.owner ? extra : null}
    />
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach((currImg) => {
    currImg.onerror = function () {
      this.src = placeholder;
    };
  });
});
