import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer">
            {/* <hr /> */}
            <div className="row justify-content-center">
              <div className="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link className="link-text" to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link className="link-text" to={"/Blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link className="link-text" to={"/Contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              {!this.props.loggedIn && <div className="col-7 col-sm-5">
                <h5>Sign Up</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link className="link-text" to={"/LogIn"}>Log In</Link>
                  </li>
                  <li>
                    <Link className="link-text" to={"/SignIn"}>Sign Up</Link>
                  </li>
                </ul>
              </div>}
              <div className="col-12 col-sm-4 align-self">
                <h5>Get in touch</h5>
                <span className="social-icon">
                  <SocialIcon
                    url="http://twitter.com/learnify"
                    style={{ height: 25, width: 25 }}
                    color="#45a29e"
                  />
                </span>
                <span className="social-icon">
                  <SocialIcon
                    url="http://facebook.com/learnify"
                    style={{ height: 25, width: 25 }}
                    color="#45a29e"
                  />
                </span>
                <span className="social-icon">
                  <SocialIcon
                    url="http://instagram.com/learnify"
                    style={{ height: 25, width: 25 }}
                    color="#45a29e"
                  />
                </span>
              </div>
            </div>
            <div className="row justify-content-center learnify-footer">
              <div>Learnify Inc. 2018</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}

const connectedFooter = connect(mapStateToProps)(Footer);
export default connectedFooter;
