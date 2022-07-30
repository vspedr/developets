import React from 'react';
import { Pagination } from 'semantic-ui-react';

// Need to fix the Pagination component!!!
// He's overriding the style of all the other components.
// import 'semantic-ui-css/semantic.min.css';

import { Container } from '../styles/FooterStyle';

export const Footer = ({ page, onPageChange, totalPages }) => {
  return (
    <Container>
      <Pagination
        activePage={ page }
        onPageChange={ onPageChange }
        totalPages={ totalPages }
      ></Pagination>
    </Container>
  );
};
