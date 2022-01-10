import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var projects = this.props.data.projects.map(function(projects){
        return <div key={projects.title}><h3>{projects.title}</h3>
            <p className="info">{projects.language}<span>&bull;</span> <a href={projects.link}>{projects.link}</a></p>
            <p>{projects.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

      <div className="three columns header-col">
        <h1><span>Projects</span></h1>
      </div>

      <div className="nine columns main-col">
      {projects}
      </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Resume;
