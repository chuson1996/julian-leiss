/* globals emailjs */
import React, { Component } from 'react';
import c from 'classnames';

export default class ComponentName extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: null,
        email: null,
        comment: null,
      }
    };
  }

  validate = () => {
    const { form: { name, email, comment }} = this.state;
    if (!name || !email || !comment) return false;

    // validate email
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) return false;

    return true;
  };

  onFormChange = (field, value) => {
    this.setState({
      form: {
        ...this.state.form,
        [field]: value
      }
    });
  };

  onSubmit = (e) => {
    const { form: { name, email, comment }} = this.state;
    e.preventDefault();
    if (this.validate()) {
      emailjs.send('julian_leiss', 'contact',{
        from_name: `${name} (${email})`,
        message_html: comment
      })
      .then(
        function(response) {
          alert('Your message has been sent.')
          e.target.reset();
          console.log('SUCCESS', response);
        },
        function(error) {
          console.log('FAILED', error);
        }
      );
    }
  };

  render() {
    const s = require('./Contact.scss');
    return (
      <div className={s.contact}>
        <div className={'container'}>
          <h1 className={c('title')}>
            CONTACT
          </h1>

          <form
            onSubmit={this.onSubmit}
            className={s.form}>
            <div className={s.line}>
              <input
                required
                onChange={(e) => this.onFormChange('name', e.target.value)}
                type="text"
                name="name"
                placeholder="Your name"/>
              <input
                required
                onChange={(e) => this.onFormChange('email', e.target.value)}
                type="email"
                name="email"
                placeholder="Your email"/>
            </div>

            <div className={s.line}>
              <textarea
                required
                onChange={(e) => this.onFormChange('comment', e.target.value)}
                className={s.commentInput}
                placeholder="Your comment"
                // cols="300"
                rows="10">
              </textarea>
            </div>

            <button type="submit" className={s.sendBtn}>Send →</button>
          </form>
        </div>
      </div>
    );
  }
}
