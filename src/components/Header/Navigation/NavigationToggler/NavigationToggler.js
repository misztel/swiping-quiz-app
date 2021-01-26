import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavigationToggler = styled.div`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavigationTogglerInner = styled.span`
  position: absolute;
  top: 2px;
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background-color: #121824;
  transition: transform .3s cubic-bezier(.68,-.55,.265,1.55);
  transform: ${props => props.isNavOpen ? "translate3d(0,10px,0) rotate(135deg);" : "rotate(0deg)"};

  &:before{
    position: absolute;
    top: ${props => props.isNavOpen ? "0px" : "10px"};
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background: #121824;
    transition: all .3s cubic-bezier(.68,-.55,.265,1.55);
    opacity: ${props => props.isNavOpen ? "0" : "1"};
  }

  &:after{
    position: absolute;
    top: 20px;
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background: #121824;
    transition: transform .3s cubic-bezier(.68,-.55,.265,1.55);
    transition-delay: 75ms;
    transform: ${props => props.isNavOpen ? "translate3d(0,-20px,0) rotate(-270deg)" : "rotate(0deg)"};
  }
`;

const NavigationToggler = props => {
  const { clicked, isNavOpen } = props;
  return (
    <StyledNavigationToggler onClick={clicked}>
      <StyledNavigationTogglerInner isNavOpen={isNavOpen} />
    </StyledNavigationToggler>
  );
};

NavigationToggler.propTypes = {
  clicked: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired
};

export default NavigationToggler;
