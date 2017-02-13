import React, { Component } from 'react';
import styled from 'styled-components';
import {
  MastHead,
  AboutMe,
  Work,
  Contact,
  Arrow,
  Menu,
  MenuButton
} from './components';

const CenterDiv = styled.div`
  text-align: center;
`;

const LeftCTA = styled.div`
  position: fixed;
  height: 100vh;
  left: 30px;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  z-index: 98;
`;

const CTA = styled.p`
  transform: rotate(-90deg);
  display: inline-block;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    const { menuOpen } = this.state;
    document.querySelector('html').style.overflowY = !menuOpen ? 'hidden' : 'initial';
    this.setState({
      menuOpen: !menuOpen
    });
  };

  onMenuChange = (event) => {
    const { menuOpen } = this.state;
    document.querySelector('html').style.overflowY = !menuOpen ? 'hidden' : 'initial';
    this.setState({
      menuOpen: false
    });

    switch (event) {
      case Menu.MENU_GO_TO_ABOUT:
        document.getElementById('aboutMeMark')
          .scrollIntoView({ behavior: 'smooth' });
        break;
      case Menu.MENU_GO_TO_WORK:
        document.getElementById('workMark')
          .scrollIntoView({ behavior: 'smooth' });
        break;
      case Menu.MENU_GO_TO_CONTACT:
        document.getElementById('contactMark')
          .scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <div>
        <LeftCTA>
          <CTA>
            <a
              onClick={() => document.getElementById('contactMark')
                .scrollIntoView({ behavior: 'smooth' })}
              style={{
                color: '#8C8C97'
              }}>Contact</a>
          </CTA>
        </LeftCTA>
        <MenuButton open={menuOpen} onToggle={this.toggleMenu}/>
        <Menu
          onChange={this.onMenuChange}
          open={menuOpen}/>
        <MastHead/>
        <span id="aboutMeMark"></span>
        <AboutMe/>

        <span id="workMark"></span>
        <Work/>
        <CenterDiv>
          <Arrow/>
        </CenterDiv>

        <span id="contactMark"></span>
        <Contact/>
        <p className="copyrightText">
          © Copyright 2017. All rights reserved.
        </p>
      </div>
    );
  }
}

export default App;
