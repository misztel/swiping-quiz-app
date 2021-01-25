import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

const Layout = props => {
  const { children } = props;
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
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
