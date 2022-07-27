import styled from "styled-components";

import placeholder from '../assets/img/paw.png';
import GitHub from '../components/GitHub';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  width: 20rem;
  height: 20rem;
`;

Thumbnail.defaultProps = {
  src: placeholder,
};

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 1rem;
`;

export const Title = styled.h1`

`;

export const SubTitle = styled.span`
  
`;

export const Description = styled.p`
  
`;

export const GitHubSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const GitHubIcon = styled(GitHub)`
  height: '14px';
`;

export const Owner = styled.a`
  
`;

// @media only screen and (max-width: 767px) {
//   .card-image {
//     object-fit: cover;
//     width: 240px;
//     height: 240px;
//   }
// }

// @media only screen and (max-width: 767px) {
//   .ui.stackable.cards > .card {
//     width: 240px !important;
//   }
// }