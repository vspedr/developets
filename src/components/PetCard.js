import React from 'react';

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

export const PetCard = (pet) => {
  const { name, type, description, img, owner } = pet;

  const username = (
    owner
      ? <Owner href={ `http://github.com/${owner}` }>{ owner }</Owner>
      : null
  );

  const thumbnail = (
    img
      ? <Thumbnail alt={ name } src={ img } />
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
      <GitHubSection>
        <GitHubIcon />
        { username }
      </GitHubSection>
    </Container>
  );
};
