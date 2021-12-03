import React from "react";

import loginImg from "../../login.svg";
import axios from "axios";



export class Register extends React.Component {
  submitUser(event)
  {
      event.preventDefault();
      const form = event.target;
      axios.post('http://localhost:4000/Users',{
          UserName:this.refs.UserName.value,
          email:this.refs.email.value,
          password:this.refs.password.value
      })
      .then((response)=>{
          console.log(response);
      })
      .catch((err)=>{
          console.log(err);
      });
      form.reset();
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form className="col s12"  onSubmit={this.submitUser.bind(this)} >
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="firstName" ref="UserName" type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" ref="email" type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" ref="password" type="text" name="password" placeholder="password" />
            </div>
            <div className="footer">
           
          <button type="button" type="submit" name="action" className="btn">
            Register
          </button>
        </div>
          </div>
          </form>
        </div>
       
        
      </div>
     
    );
  }
}
