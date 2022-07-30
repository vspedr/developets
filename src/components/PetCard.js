import React, { useState } from 'react';

import placeholder from '../assets/img/paw.png';

import {
  Container,
  Content,
  Description,
  GitHubIcon,
  GitHubSection,
  Owner,
  SubTitle,
  Thumbnail,
  Title,
} from '../styles/CardStyle';

export const PetCard = ({ pet }) => {
  const [imageFallbackError, setImageFallbackError] = useState(false);
  const { name, type, description, img, owner } = pet;

  const imgSrc = imageFallbackError ? placeholder : img;

  const handleImageError = () => {
    setImageFallbackError(true);
  };

  const thumbnail = (
    img
      ? <Thumbnail alt={ name } src={ imgSrc } onError={ handleImageError } />
      : <Thumbnail alt={ name } />
  );

  return (
    <Container>
      { thumbnail }
      <Content>
        <Title>{ name }</Title>
        <SubTitle>{ `the ${type}` }</SubTitle>
        <Description>{ description }</Description>
      </Content>
      <GitHubSection href={ owner ? `http://github.com/${owner}` : null }>
        <GitHubIcon />
        <Owner>{ owner || null }</Owner>
      </GitHubSection>
    </Container>
  );
};