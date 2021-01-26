import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/Header/Header';

const StyledMain = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Layout = props => {
  const { children } = props;

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navTogglerHandler = () => {
    setIsNavOpen(!isNavOpen);
  }

  const navCloseHandler = () => {
    setIsNavOpen(false);
  }

  return (
    <>
      <Header toggleNav={navTogglerHandler} closeNav={navCloseHandler} isNavOpen={isNavOpen} />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
