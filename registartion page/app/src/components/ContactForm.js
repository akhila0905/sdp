import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const form = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: white;
    background-color: #383B39;
    outline: none;
    border: none;
    border-radius: 8px solid black;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: black;
    color: white;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export  class ContactForm extends React.Component {
 
  submitUser(event)
  {
      event.preventDefault();
      const form = event.target;
      axios.post('http://localhost:5000/ContactUs',{
          Name:this.refs.name.value,
          email:this.refs.email.value,
          message:this.refs.message.value
      })
      .then((response)=>{
          console.log(response);
      })
      .catch((err)=>{
          console.log(err);
      });
      form.reset();
  }

  render(){
    return (
      
        <div className="base-container">
      
      <div className="content">
        <form className="col s12"  onSubmit={this.submitUser.bind(this)} >
        <div className="form">
          <div className="form-group" style={{width: '100%',marginBottom: '2rem'}}>
            <label htmlFor="username" style={{fontSize:'1.8rem'}}>name
            <input id="name" ref="name" type="text" style={{ width: '100%',fontSize: '2rem',padding:'1.2rem',color: 'white',backgroundColor: '#383B39',outline: 'none',border: 'none',borderRadius: '8px solid black', marginTop:'1rem'}} name="name"  />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{fontSize:'1.8rem'}}>Email</label>
            <input id="email" ref="email" type="text" style={{ width: '100%',fontSize: '2rem',padding:'1.2rem',color: 'white',backgroundColor: '#383B39',outline: 'none',border: 'none',borderRadius: '8px solid black', marginTop:'1rem'}} name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{fontSize:'1.8rem'}}>message</label>
            <input id="password" ref="message" style={{width: '100%',fontSize: '2rem',padding:'1.2rem',color: 'white',backgroundColor: '#383B39',outline: 'none',border: 'none',borderRadius: '8px solid black', marginTop:'1rem',minHeight: '250px'}} type="text" name="message" />
          </div>
          <div className="footer">
         
        <button type="button" type="submit" name="action" style={{backgroundColor: 'black',color: 'white',fontSize: '2rem',display: 'inline-block',outline: 'none',border: 'none',padding: '1rem 4rem',borderRadius: '8px',cursor: 'pointer'}} className="btn">
          Send
        </button>
      </div>
        </div>
        </form>
      </div>
     
      
    </div>
     
   
       
        
 
     
    );
  }
}