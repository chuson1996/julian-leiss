import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import c from 'classnames';
import { MagicContainer } from '../UI';
import { Arrow } from '..';

export default class AboutMe extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      threshold: 0,
      image1Offset: 0,
      image2Offset: 0,
      image3Offset: 0,
      image4Offset: 0,
      titleOffsetTop: 0,
      showAboutMe: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    setTimeout(() => {
      this.onScroll();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  isInRange(num) {
    return (a, b) => (num > a && num < b);
  }

  onScroll = () => {
    const k = Math.min(1000, Math.max(this.state.threshold - window.scrollY, -1000));
    this.setState({
      showAboutMe: this.isInRange(window.scrollY)(
        this.container.offsetTop - 350,
        this.container.offsetTop + this.container.offsetHeight / 5
      ),
      image1Offset: spring(k / 2),
      image2Offset: spring(k / 3),
      image3Offset: spring(k / 4),
      image4Offset: spring(k / 1.5),
    });
  };

  setThreshold = (profileCard) => {
    setTimeout(() => {
      const threshold = profileCard.offsetTop - 100;
      this.setState({
        threshold,
        image1Offset: (threshold - window.scrollY) / 2,
        image2Offset: (threshold - window.scrollY) / 3,
        image3Offset: (threshold - window.scrollY) / 4,
        image4Offset: (threshold - window.scrollY) / 1.5
      });
    });
  };

  render() {
    const s = require('./AboutMe.scss');
    const {
      image1Offset,
      image2Offset,
      image3Offset,
      image4Offset,
      showAboutMe
    } = this.state;
    return (
      <div className={s.aboutMe}>
        <MagicContainer show={showAboutMe}>
          <h1 className={c('title', s.title, 'hidden-xs')}>
            ABOUT ME
          </h1>
        </MagicContainer>

        <div className={'container'} ref={(e) => this.container = e}>
          <h1 className={c('title', s.title, 'visible-xs')}>
            ABOUT ME
          </h1>
          <div className={s.cards}>
            <Motion style={{ imageOffset: image1Offset }}>
              {({ imageOffset }) =>
                <div
                  className={c(s.card, s.card1)}
                  style={{
                    transform: `translateY(${imageOffset}px)`
                  }}>
                  <p>
                    -34.6036844 <br/>
                    -58.3815591
                  </p>
                  <img src={require('./Map.png')} alt=""/>
                </div>
              }
            </Motion>

            <Motion style={{ imageOffset: image2Offset }}>
              {({ imageOffset }) =>
                <div
                  style={{
                    transform: `translateY(${imageOffset}px)`
                  }}
                  ref={this.setThreshold}
                  className={c(s.card, s.card2)}>
                  <img src={require('./ProfilePic.png')} alt=""/>
                </div>
              }
            </Motion>

            <Motion style={{ imageOffset: image3Offset }}>
              {({ imageOffset }) =>
                <div
                  style={{
                    transform: `translateY(${imageOffset}px)`
                  }}
                  className={c(s.card, s.card3)}>
                  <img src={require('./Pantone.png')} alt=""/>
                </div>
              }
            </Motion>

            <Motion style={{ imageOffset: image4Offset }}>
              {({ imageOffset }) =>
                <div
                  style={{
                    transform: `translateY(${imageOffset}px)`
                  }}
                  className={c(s.card, s.card4)}>
                  <img src={require('./Plant.png')} alt=""/>
                </div>
              }
            </Motion>
          </div>

          <Arrow/>

          <p className={c('lead', s.intro)}>
            I am an 19 years old Web/UI Professional Designer. Proactive, passionate for technology, focused on details yet pragmatic and pixel-perfect design oriented.
          </p>

          <p><a href="">View my full bio →</a></p>
        </div>
      </div>
    );
  }
}
