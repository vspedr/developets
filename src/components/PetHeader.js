import React from 'react';

import {
  PawIcon,
  Container,
  Intro,
  Title,
  Wrapper,
  Icons
} from '../styles/HeaderStyle';

export const PetHeader = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          DeveloPets
        </Title>
        <Intro>
          Introduce your animal buddies to your fellow developers
        </Intro>
      </Container>
      <Icons>
        <PawIcon height="60px"/>
        <PawIcon />
        <PawIcon />
      </Icons>
    </Wrapper>
  );
};
