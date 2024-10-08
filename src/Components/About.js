import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var resumeDownload = "/";
    }

    var mainUrl = "https://xgill15x.github.io/JasonGill/JasonGill_Resume.pdf";
    // mainUrl = "/JasonGill_Resume.pdf";

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="jasonGill" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a href={mainUrl} className="button" download>
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
