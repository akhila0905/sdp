
import React from 'react';
import axios from 'axios';
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      Users:[],
      currentUser:{},
    }
    
  }
  componentDidMount()
  {
    const url ='http://localhost:4000/Users';

    axios.get(url)
      .then((Response)=>{
        this.setState({
        Users:Response.data
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  
  
  
  submitUser(event)
    {
      var i=0;
        event.preventDefault();
        const form = event.target;
      for(i=0;i<1;i++)
      {
         console.log(this.refs.email.value)
         if(this.state.Users[i].email===this.refs.email.value)
         {
           console.log("verification success");
         }
        
 
      }
        form.reset();
    }
   
  render() {
    return (
      <div className="base-container"  ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="server busy" />
          </div>
          <form className="col s12"  onSubmit={this.submitUser.bind(this)}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input id="email" ref="email" type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" ref="password" type="password" name="password" placeholder="password" />
            </div>
            <div className="footer">
            <button type="button" type="submit" name="action" className="btn">
            Login
          </button>
        </div>
          </div>
          </form>
        </div>
        
      </div>
    );
  }
}
