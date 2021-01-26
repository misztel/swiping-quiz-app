import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import NavigationItem from './NavigationItem/NavigationItem';

const StyledNavigationItems = styled.ul`
  position: absolute;
  content: '';
  top: ${props => props.isOpen ? "0px" : "-100vh"};
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #00BFFF;
  transition: all 0.3s ease;
  list-style: none;

  @media (min-width: 768px) {
    position: relative;
    flex-direction: row;
    width: auto;
    height: auto;
    top: auto;
  }
`;

const NavigationItems = props => {
  const { isNavOpen, closeNav } = props;

  return (
    <StyledNavigationItems isOpen={isNavOpen} >
      <NavigationItem closeNav={closeNav} link="/" exact>Home</NavigationItem>
      <NavigationItem closeNav={closeNav} link="/play" >Play</NavigationItem>
      <NavigationItem closeNav={closeNav} link="/rank" >Rank</NavigationItem>
    </StyledNavigationItems>
  );
};

NavigationItems.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default NavigationItems;
