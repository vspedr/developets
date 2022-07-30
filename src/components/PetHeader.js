import React from 'react';

import {
  PawIcon,
  Container,
  Titles,
  Title,
  SubTitle,
  Wrapper,
  Icons
} from '../styles/HeaderStyle';

export const PetHeader = () => {
  return (
    <Wrapper>
      <Container>
        <Titles>
          <Title>
            DeveloPets
          </Title>
          <SubTitle>
            Introduce your animal buddies to your fellow developers
          </SubTitle>
        </Titles>
        <Icons>
          <PawIcon width="56px" height="58px" />
          <PawIcon />
          <PawIcon />
        </Icons>
      </Container>
    </Wrapper>
  );
};
