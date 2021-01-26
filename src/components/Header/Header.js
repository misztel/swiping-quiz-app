import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../UI/Logo/Logo';
import NavigationToggler from './Navigation/NavigationToggler/NavigationToggler';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background: #00BFFF;
`;

const Header = props => {
  const { toggleNav, isNavOpen, closeNav } = props;
  return (
    <StyledHeader>
      <Logo />
      <NavigationToggler clicked={toggleNav} isNavOpen={isNavOpen} />
      <NavigationItems closeNav={closeNav} isNavOpen={isNavOpen} />
    </StyledHeader>
  )
};

Header.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default Header;
