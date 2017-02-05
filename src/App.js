import React, { Component } from 'react';
// import logo from './logo.svg';
import { MastHead, AboutMe, Work, Contact, Arrow } from './components';
import styled from 'styled-components';

const CenterDiv = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <MastHead/>
        <AboutMe/>
        <Work/>
        <CenterDiv>
          <Arrow/>
        </CenterDiv>
        <Contact/>
        <p className="copyrightText">© Copyright 2017. All rights reserved.</p>
      </div>
    );
  }
}

export default App;
