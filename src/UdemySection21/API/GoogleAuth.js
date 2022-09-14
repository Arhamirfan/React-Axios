import React from "react";
import { gapi } from "gapi-script";
import { Connect } from "react-redux";
import { signIn, signOut } from "../Store/actions";
import { connect } from "formik";
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId:
            "269136228378-8mo2q2sdeq0e1p8bql5ov7caj6edcoef.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "Web client 1",
        })
        .then(() => {
          this.auth = gapi.auth2.getAuthInstance();
          console.log("auth", this.auth);
          // this.setState({
          //   isSignedIn: this.auth.isSignedIn.get(),
          // });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div> Signedin is null</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" /> Sign Out!
        </button>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignIn} className="ui red google button">
            <i className="google icon" />
            Sign i with google
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <h3>{this.renderAuthButton()}</h3>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
//export default GoogleAuth;
