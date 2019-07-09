import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  let name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
      <input
        style={{
          borderRadius: 5,
          borderStyle: 'unset',
          fontSize: '2em',
          padding: 5,
          marginRight: 10,
          fontFamily: 'Museo, Arial, Helvetica, sans-serif',
        }}
        ref={node => (name = node)}
        type="text"
        placeholder="Name"
      />
      <input
        style={{
          borderRadius: 5,
          borderStyle: 'unset',
          fontSize: '2em',
          padding: 5,
          display: 'inline',
          fontFamily: 'Museo, Arial, Helvetica, sans-serif',
        }}
        ref={node => (email = node)}
        type="email"
        placeholder="Email"
      />
      <br />
      <button
        style={{
          background: '#0b5d93',
          color: 'white',
          borderRadius: '0.4rem',
          fontSize: '2rem',
          padding: 10,
          marginTop: 10,
          textDecoration: 'none',
          cursor: 'pointer',
          fontFamily: 'Museo, Arial, Helvetica, sans-serif',
        }}
        onClick={submit}
      >
        Subscribe
      </button>
    </div>
  );
};

class MailChimpForm extends Component {
  render() {
    const url =
      'https://texasjusticeinitiative.us18.list-manage.com/subscribe/post?u=fd262cb4a5fc0bafb38da2e22&amp;id=2663621fac';
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
        )}
      />
    );
  }
}

export default MailChimpForm;