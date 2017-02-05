import React, { Component } from 'react';
import c from 'classnames';

export default class ComponentName extends Component {
  static propTypes = {};

  render() {
    const s = require('./Contact.scss');
    return (
      <div className={s.contact}>
        <div className={'container'}>
          <h1 className={c('title')}>
            CONTACT
          </h1>

          <form
            className={s.form}>
            <div className={s.line}>
              <input type="text" name="name" placeholder="Your name"/>
              <input type="email" name="email" placeholder="Your email"/>
            </div>

            <div className={s.line}>
              <textarea
                className={s.commentInput}
                placeholder="Your comment"
                // cols="300"
                rows="10">
              </textarea>
            </div>

            <a className={s.sendBtn}>Send →</a>
          </form>
        </div>
      </div>
    );
  }
}
