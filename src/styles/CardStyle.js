import styled from "styled-components";

import placeholder from '../assets/img/paw.png';
import GitHub from '../components/GitHub';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 20rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1), 0 0 0 1px #d4d4d5;
`;

export const Thumbnail = styled.img`
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  object-fit: cover;
  width: 20rem ;
  height: 20rem;
`;

Thumbnail.defaultProps = {
  src: placeholder,
};

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12.5rem;
  width: 20rem;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.285em;
  line-height: 1.285em;
`;

export const SubTitle = styled.span`
  font-size: 0.875em;
  line-height: 1.4285em;
  color: #999999;
`;

export const Description = styled.p`
  margin-top: 0.55rem;
  font-size: 0.875em;
  line-height: 1.4285em;
  text-align: center;
  color: #525252;
`;

export const GitHubSection = styled.a`
  display: flex;
  width: 100% ;
  justify-content: center;
  align-items: center;
  padding: 0.656rem 0px;
  border-top: 1px solid #f2f2f2;
  cursor: pointer;

  &:hover {
    svg {
      fill: #4183c4;
    }
    span {
      color: #4183c4;
    }
  }
`;

export const GitHubIcon = styled(GitHub)`
  height: 14px;
  fill: #999999;
`;

export const Owner = styled.span`
  margin-left: 0.3rem;
  font-size: 0.875em;
  line-height: 1.4285em;
  color: #999999;
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