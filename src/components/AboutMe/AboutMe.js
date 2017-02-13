import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import c from 'classnames';
// import { MagicContainer } from '../UI';
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
      image5Offset: 0,
      titleOffsetTop: 0,
      showTitle: false,
      titleStayFixed: false
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
    const titleTop = this.container.offsetTop - window.scrollY;
    if (titleTop < 0) {
      // console.log('Stay fixed my boy');
      this.setState({
        titleStayFixed: true
      });
    } else {
      this.setState({
        titleStayFixed: false
      })
    }
    this.setState({
      showTitle: this.isInRange(window.scrollY)(
        this.container.offsetTop - 350,
        this.container.offsetTop + this.container.offsetHeight / 5
      ),
      image1Offset: spring(k / 2),
      image2Offset: spring(k / 3),
      image3Offset: spring(k / 3.1),
      image4Offset: spring(k / 1.5),
      image5Offset: spring(k / 2.5),
    });
  };

  setThreshold = (profileCard) => {
    setTimeout(() => {
      const threshold = profileCard.offsetTop - 100;
      this.setState({
        threshold,
        image1Offset: (threshold - window.scrollY) / 2,
        image2Offset: (threshold - window.scrollY) / 3,
        image3Offset: (threshold - window.scrollY) / 3.1,
        image4Offset: (threshold - window.scrollY) / 1.5,
        image5Offset: (threshold - window.scrollY) / 2.5,
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
      image5Offset,
      showTitle,
      titleStayFixed
    } = this.state;
    return (
      <div className={s.aboutMe}>
        {/* <MagicContainer show={showTitle}>
          <h1 className={c('title', s.title, 'hidden-xs')}>
            ABOUT ME
          </h1>
        </MagicContainer> */}

        <div className={'container'} ref={(e) => this.container = e}>
          <h1 className={c('title', s.title, 'hidden-xs')} style={{
            position: 'absolute',
            left: 0,
            right: 0,
            opacity: showTitle ? 1 : 0,
            ...titleStayFixed ? {
              position: 'fixed',
              top: 200
            } : {}
          }}>
            ABOUT ME
          </h1>
          <h1 className={c('title', s.title)}>
            ABOUT ME
          </h1>
          <div className={s.cards}>
            <div className={s.row}>
              <Motion style={{ imageOffset: image1Offset }}>
                {({ imageOffset }) =>
                  <div
                    className={c(s.card, s.cardMap)}
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
                    className={c(s.card, s.cardProfile)}>
                    <img src={require('./ProfilePic2.gif')} alt=""/>
                  </div>
                }
              </Motion>

              <Motion style={{ imageOffset: image5Offset }}>
                {({ imageOffset }) =>
                  <div
                    style={{
                      transform: `translateY(${imageOffset}px)`
                    }}
                    ref={this.setThreshold}
                    className={c(s.card, s.cardPlaylist)}>
                    <img className={c(s.badge, 'hidden-xs')} src={require('./MyLastPlaylistBadge.png')} alt=""/>
                    <img className={s.cardImage} src={require('./JulianMagic.png')} alt=""/>
                  </div>
                }
              </Motion>
            </div>
            <div className={s.row}>
              <Motion style={{ imageOffset: image4Offset }}>
                {({ imageOffset }) =>
                  <div
                    style={{
                      transform: `translateY(${imageOffset}px)`
                    }}
                    className={c(s.card, s.cardPlant)}>
                    <img className={s.cardImage} src={require('./Plant.png')} alt=""/>
                  </div>
                }
              </Motion>
              <Motion style={{ imageOffset: image3Offset }}>
                {({ imageOffset }) =>
                  <div
                    style={{
                      transform: `translateY(${imageOffset}px)`
                    }}
                    className={c(s.card, s.cardPantone)}>
                    <img src={require('./Pantone.png')} alt=""/>
                  </div>
                }
              </Motion>
            </div>
          </div>

          <Arrow/>

          <p className={c('lead', s.intro)}>
            I am an 19 years old Web/UI Professional Designer. Proactive, passionate for technology, focused on details yet pragmatic and pixel-perfect design oriented.
          </p>

          <p><a href="https://www.linkedin.com/in/julianleiss">View my full bio →</a></p>
        </div>
      </div>
    );
  }
}
