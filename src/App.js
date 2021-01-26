import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Layout from './containers/Layout/Layout';
import Game from './containers/Game/Game';
import Rank from './containers/Rank/Rank';
import Home from './containers/Home/Home';

const StyledApp = styled.div`

`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyledApp>
        <Layout>
          <Switch>
            <Route path="/play" component={Game} />
            <Route path="/rank" component={Rank} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
