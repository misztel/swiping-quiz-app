import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #121824;
  z-index: 99;
`;

const Logo = () => (
  <StyledLogo>
    Swiping Quiz
  </StyledLogo>
);

export default Logo;
