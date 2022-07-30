import styled from "styled-components";

import Paw from '../components/Paw';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Titles = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  color: #fbfafa;
`;

export const Title = styled.h1`
  font-size: 2.625em;
  align-self: center;
  letter-spacing: 4px;
  font-weight: 900;
`;

export const SubTitle = styled.p`
  max-width: 17.5rem;
  text-align: center;
  font-size: 1.2em;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PawIcon = styled(Paw)`
  fill: #fbfafa;
  width: ${({ width }) => width || '28px'};
  height: ${({ height }) => height || '29px'};
`;