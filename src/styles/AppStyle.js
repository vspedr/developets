import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.875rem;
  flex-wrap: wrap;
  max-width: 64rem;
`;

export const Item = styled.li`
  list-style: none;
`;