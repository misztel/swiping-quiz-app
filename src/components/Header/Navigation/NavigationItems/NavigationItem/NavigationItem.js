import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavigationItem = styled.li`
  padding: 10px;

  a{
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: #121824;
  }
  a:hover{
    color: #f8f8f8;
  }
  a.active{
    color: #f8f8f8;
  }
`;

const NavigationItem = (props) => {
  const { link, children, exact, closeNav } = props;
  return (
    <StyledNavigationItem onClick={closeNav}>
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </StyledNavigationItem>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  closeNav: PropTypes.func.isRequired
};

NavigationItem.defaultProps = {
  exact: false
};

export default NavigationItem;
