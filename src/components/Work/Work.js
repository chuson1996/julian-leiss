import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import c from 'classnames';
import { MagicContainer } from '../UI';
import Waypoint from 'react-waypoint';
import stayInRange from '../../helpers/stayInRange';

export default class Work extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      threshold: 0,
      design1Offset: 0,
      design2Offset: 0,
      design3Offset: 0,
      design4Offset: 0,
      design5Offset: 0,
      design6Offset: 0,
      design7Offset: 0,
      design8Offset: 0,
      design9Offset: 0,
      showTitle: true,
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

  getValueFromRange = stayInRange(-1500, 300);

  onScroll = () => {
    const k = this.getValueFromRange(this.state.threshold - window.scrollY);
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
      design1Offset: spring(k / 1.5),
      design2Offset: spring(k / 1),
      design3Offset: spring(k / 1.3),
      design4Offset: spring(k / 1),
      design5Offset: spring(k / 1.2),
      design6Offset: spring(k / 1),
      design7Offset: spring(k / 1.3),
      design8Offset: spring(k / 1),
      design9Offset: spring(k / 1.2),
    });
  };

  isInRange(num) {
    return (a, b) => (num > a && num < b);
  }

  setThreshold = (profileCard) => {
    setTimeout(() => {
      const threshold = profileCard.offsetTop - 100;
      const k = threshold - window.scrollY;
      this.setState({
        threshold,
        design1Offset: k / 1.5,
        design2Offset: k / 1,
        design3Offset: k / 1.3,
        design4Offset: k / 1,
        design5Offset: k / 1.2,
        design6Offset: k / 1,
        design7Offset: k / 1.3,
        design8Offset: k / 1,
        design9Offset: k / 1.2,
      });
    });
  };

  render() {
    const s = require('./Work.scss');
    const {
      design1Offset,
      design2Offset,
      design3Offset,
      design4Offset,
      design5Offset,
      design6Offset,
      design7Offset,
      design8Offset,
      design9Offset,
      showTitle,
      titleStayFixed,
    } = this.state;

    return (
      <div className={s.work}>
        {/* <MagicContainer show={showTitle}>
          <h1 className={'title hidden-xs'}>
            WORK
          </h1>
        </MagicContainer> */}

        <div className={'container'} ref={(e) => this.container = e}>
          <h1 className={c('title', 'hidden-xs')} style={{
            position: 'absolute',
            left: 0,
            right: 0,
            pointerEvents: 'none',
            opacity: showTitle ? 1 : 0,
            ...titleStayFixed ? {
              position: 'fixed',
              top: 200
            } : {}
          }}>
            WORK
          </h1>
          <h1 className={c('title', s.title)}>
            WORK
          </h1>
          <div ref={this.setThreshold} className={s.designs}>
            <Waypoint
              scrollableAncestor={window}
              onEnter={({previousPosition}) => {
                if (previousPosition === Waypoint.below) {
                  this.setState({ showTitle: true });
                }
              }}
            />
            <Motion style={{ designOffset: design1Offset }}>
              {({ designOffset }) =>
                <a href="https://ofus.me/" target="_blank">
                  <div className={c(s.design, s.design1)} style={{
                    transform: `translateY(${designOffset}px)`
                  }}>
                    <div className={s.designInfo}>
                      <h1>OFUS</h1>
                      <p>
                        Siux • Lead Designer<br/>
                        2015
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design1.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design2Offset }}>
              {({ designOffset }) =>
                <a target="_blank" href="http://julianleiss.com/work/nudge/">
                  <div
                    className={c(s.design, s.design2)}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={s.designInfo}>
                      <h1>NUDGE</h1>
                      <p>
                        The Purple Bunny • UI &<br/>
                        Motion Design<br/>
                        2016
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design2.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design3Offset }}>
              {({ designOffset }) =>
                <a href="https://dribbble.com/shots/2770651-Home-Page" target="_blank">
                  <div
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}
                    className={c(s.design, s.design3)}>
                    <div className={s.designInfo}>
                      <h1>CHICAGO MONTESORI</h1>
                      <p>
                        Indicius • UI/UX Design<br/>
                        2016
                      </p>
                    </div>
                    <img
                      className={c(s.badge, 'hidden-xs')}
                      src={require('./Badge.png')} alt="badge"/>
                    <img
                      className={s.designImage}
                      src={require('./Design3-2.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design4Offset }}>
              {({ designOffset }) =>
                <a href="http://julianleiss.com/work/siux/" target="_blank">
                  <div
                    className={c(s.design, s.design4)}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={s.designInfo}>
                      <h1>SIUX</h1>
                      <p>
                        Co Funder & Creative Director<br/>
                        2014
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design4.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design5Offset }}>
              {({ designOffset }) =>
                <a href="https://dribbble.com/shots/2962084-RISE-Fitness-App" target="_blank">
                  <div
                    className={c(s.design, s.design5)}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={s.designInfo}>
                      <h1>RISE</h1>
                      <p>
                        Indicius • UI/UX Design<br/>
                        2016
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design5.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design6Offset }}>
              {({ designOffset }) =>
                <a href="http://julianleiss.com/work/music-app/" target="_blank">
                  <div
                    className={c(s.design, s.design6)}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={s.designInfo}>
                      <h1>MUSIC</h1>
                      <p>
                        Siux • Lead Designer<br/>
                        2014
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design6.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design7Offset }}>
              {({ designOffset }) =>
                <a href="https://dribbble.com/shots/2848682-Pixel-Office" target="_blank">
                  <div
                    className={c(s.design, s.design7, 'hidden-xs')}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={c(s.designInfo, s.transparent)}>
                      <img
                        className={s.designImage}
                        src={require('./Design7_hover.png')}
                        alt=""/>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design7.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design8Offset }}>
              {({ designOffset }) =>
                <a href="http://julianleiss.com/work/toi/" target="_blank">
                  <div
                    className={c(s.design, s.design8)}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={s.designInfo}>
                      <h1>TOI</h1>
                      <p>
                        Indicius • UI/UX Design<br/>
                        2016
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design8.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design9Offset }}>
              {({ designOffset }) =>
                <a href="http://julianleiss.com/work/whitespace/" target="_blank">
                  <div
                    className={c(s.design, s.design9)}
                    style={{
                      transform: `translateY(${designOffset}px)`
                    }}>
                    <div className={s.designInfo}>
                      <h1>WHITESPACE</h1>
                      <p>
                        Indicius • UI/UX Design<br/>
                        2017
                      </p>
                    </div>
                    <img
                      className={s.designImage}
                      src={require('./Design9.png')}
                      alt=""/>
                  </div>
                </a>
              }
            </Motion>

            <Motion style={{ designOffset: design9Offset }}>
              {({ designOffset }) =>
                <div
                  className={s.viewMore}
                  style={{
                    pointerEvents: 'auto',
                    transform: `translateY(${designOffset}px)`
                  }}>
                  <Waypoint
                    scrollableAncestor={window}
                    topOffset={'80%'}
                    onEnter={({previousPosition}) => {
                      if (previousPosition === Waypoint.above) {
                        this.setState({ showTitle: true });
                      }
                    }}
                    onLeave={({currentPosition}) => {
                      if (currentPosition === Waypoint.above) {
                        this.setState({ showTitle: false });
                      }
                    }}
                  />
                  <p style={{ marginTop: 100 }}>
                    <a
                      target="_blank"
                      href="https://dribbble.com/julianleiss">View more →</a>
                  </p>
                </div>
              }
            </Motion>
          </div>
        </div>
      </div>
    );
  }
}
