import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;

  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;

  @media (max-width: 767px) {
    position: fixed;
    justify-content: flex-start;
    padding-top: 32px;
  }
`;

const Hamburger = styled.div`
  z-index: 100;
  margin-right: 36px;
  cursor: pointer;

  @media (max-width: 767px) {
    transform: rotate(90deg);
  }
`;

const Line = styled.span`
  display: inline-block;
  height: 31px;
  width: 2px;
  margin-right: 4px;
  background-color: #8D8D97;
  transition: background-color .3s, opacity .3s;
`;

export default class MenuButton extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onToggle: PropTypes.func
  };

  static defaultProps = {
    open: false,
    onToggle: () => {}
  };

  render() {
    const { open, onToggle } = this.props;

    return (
      <Container>
        <Motion style={open ?
          { rotate: spring(45), y: spring(8) } :
          { rotate: spring(0), y: spring(0) }}
        >
          {({ rotate, y }) =>
            <Hamburger onClick={() => onToggle()}>
              <Line
                style={{
                  backgroundColor: open ? '#1E1E1E' : null,
                  transform: `rotate(-${rotate}deg) translateY(${y}px)`
                }}> </Line>
              <Line
                style={open ? {
                  backgroundColor: '#1E1E1E',
                  opacity: 0
                } : {}
              }> </Line>
              <Line
                style={{
                  backgroundColor: open ? '#1E1E1E' : null,
                  transform: `rotate(${rotate}deg) translateY(${y}px)`
                }}> </Line>
            </Hamburger>
          }
        </Motion>
      </Container>
    );
  }
}
