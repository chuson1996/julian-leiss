import React, { Component } from 'react';
// import { Parallax } from 'react-parallax';
import { Motion, spring } from 'react-motion';
import c from 'classnames';

export default class ComponentName extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      background: {
        y: 0
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    this.setState({
      background: {
        y: spring(scrollY / 5)
      }
    });
  };

  render() {
    const s = require('./MastHead.scss');
    const { background } = this.state;
    return (
      <Motion style={background}>
      {({ y }) =>
        <div className={s.mastHead} style={{
          backgroundImage: `url(${require('../../assets/Hero.png')})`,
          backgroundPosition: `center ${y}px`
        }}>
          <div className={s.heroContainer}>
            <h1 className={c(s.title, 'title')}>
              JULIAN LEISS
            </h1>
          </div>
          <div className={s.bottomBar}>
            <p>View my work</p>
            <svg width="31px" height="11px" viewBox="-1 0 31 11">
              <g id="arrow-down" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(1.000000, 1.000000)" strokeLinecap="square">
                  <path d="M14,8 L26.9903811,0.5" id="Line" stroke="#4E4E53" strokeWidth="2"></path>
                  <path d="M0.330127019,8 L13.3205081,0.5" id="Line" stroke="#4E4E53" strokeWidth="2" transform="translate(6.825318, 4.250000) scale(-1, 1) translate(-6.825318, -4.250000) "></path>
              </g>
            </svg>
          </div>
        </div>
      }
      </Motion>
    );
  }
}
