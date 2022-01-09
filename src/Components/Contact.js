import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import * as privateInfo from "../privateInfo"
import '../App.css';

class Contact extends Component {
  
   constructor(props) {
      super(props);
      this.state = {
          senderName: "",
          senderEmail: "",
          senderSubject: "",
          senderMessage: ""
      };

      this.onNameChange = this.onNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onSubjectChange = this.onSubjectChange.bind(this);
      this.onMessageChange = this.onMessageChange.bind(this);

      this.submitEmail = this.submitEmail.bind(this);
      this.clearOnSubmit = this.clearOnSubmit.bind(this);
   }

   onNameChange(e) {
      e.persist()
      this.setState({senderName: e.target.value})
   }

   onEmailChange(e) {
      e.persist()
      this.setState({senderEmail: e.target.value})
   }

   onSubjectChange(e) {
      e.persist()
      this.setState({senderSubject: e.target.value})
   }

   onMessageChange(e) {
      e.persist()
      this.setState({senderMessage: e.target.value})

   }

   submitEmail(e) {
      e.preventDefault()
      console.log(this.state.senderName)
      console.log(this.state.senderEmail)
      console.log(this.state.senderSubject)
      console.log(this.state.senderMessage)

      emailjs.send(privateInfo.serviceID, privateInfo.templateID,{
         subject: this.state.senderSubject,
         name: this.state.senderName,
         email: this.state.senderEmail,
         message: this.state.senderMessage,
         },privateInfo.userID);

      this.setState({senderName: "", senderEmail: "", senderSubject: "", senderMessage: ""}, function() {
         window.alert("Your message was sent!")
         window.location.reload()
      })

   }

   clearOnSubmit(e) {
      console.log(e)
   }
  
   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={this.submitEmail} action="" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.onNameChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.onEmailChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input onSubmit={this.clearOnSubmit} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.onSubjectChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea onChange={this.onMessageChange} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button id={window.innerWidth >= 768 ? 'submitEmailButton':''}type='submit'>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact Me</h4>
					   <p className="Email">
						   {name}<br />
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
