import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';

const smOnly = (content) => `
  @media (max-width: 767px) {
    ${content}
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  background-image: url(${require('./Background.png')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;

  opacity: 1;
  transition: opacity .3s;

  z-index: 99;
  font-size: 27px;
  ${smOnly(`
    font-size: 18px;
  `)}
`;

const H1 = styled.h1`
  color: white;
  line-height: 100px;
`;

const Anchor = styled.a`
  color: inherit;
  cursor: pointer;
  display: block;

  &:focus,
  &:active {
    color: inherit;
  }
`;

export default class Menu extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    open: PropTypes.bool
  };

  static defaultProps = {
    open: false,
    onChange: () => {}
  };

  static MENU_GO_TO_ABOUT = 'MENU_GO_TO_ABOUT';
  static MENU_GO_TO_WORK = 'MENU_GO_TO_WORK';
  static MENU_GO_TO_CONTACT = 'MENU_GO_TO_CONTACT';


  render() {
    const { onChange, open } = this.props;

    return (
      <Container style={ open ? {} : { opacity: 0, pointerEvents: 'none' }}>
        <StaggeredMotion
          defaultStyles={Array(3).fill({ y: 0, opacity: 0 })}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? {
                y: open ? spring(0) : spring(80),
                opacity: open ? spring(1) : spring(0)
              }
              : {
                y: spring(prevInterpolatedStyles[i - 1].y),
                opacity: spring(prevInterpolatedStyles[i - 1].opacity)
              }
          })}>
          {(styles) =>
            <H1>
              {styles.map(({ y, opacity }, i) => {
                let _onClick;
                let text;
                switch(i) {
                  case 0:
                    _onClick = () => onChange(Menu.MENU_GO_TO_ABOUT);
                    text = 'ABOUT ME';
                    break;
                  case 1:
                    _onClick = () => onChange(Menu.MENU_GO_TO_WORK);
                    text = 'WORK';
                    break;
                  case 2:
                    _onClick = () => onChange(Menu.MENU_GO_TO_CONTACT);
                    text = 'CONTACT';
                    break;
                  default:
                    break;
                }

                return (
                  <Anchor
                    key={i}
                    style={{
                      opacity,
                      transform: `translate(0, ${y}px)`
                    }}
                    onClick={_onClick}>{text}</Anchor>
                );
              })}
            </H1>
          }
        </StaggeredMotion>
      </Container>
    );
  }
}
