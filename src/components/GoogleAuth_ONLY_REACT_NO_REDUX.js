//  Complete Google OAuth implementation with React in this page, In this page we did not use any Redux code it is completely based on React only. From start to end Google OAuth implementaion is in this page only.

import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '288487374363-pid3rl8t71g0tjt128ufpo01ut1858qn.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({
          //   isSignedIn: this.auth.isSignedIn.get(),
          // }); OR
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
    });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
      // return <div>I dot Not know if we signed in or not</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign out
        </button>
      );
      // return <div> I am signed in</div>;
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
      // return <div> I am NOT signed in</div>;
    }
  }

  render() {
    return <div> {this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;
