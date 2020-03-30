import React, { Component } from "react";
import "./SignForm.css";

class SignForm extends Component {
  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
      //   document.getElementById("signin").style.width = "20vw";
      //   document.getElementById("signup").style.width = "80vw";
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
      //   document.getElementById("signup").style.width = "20vw";
      //   document.getElementById("signin").style.width = "80vw";
    });
  }
  constructor(){
    super();
    this.state={
      nname:'',
      ssurname:'',
      eemail:'',
      ppassword:'',
      loginemail:'',
      loginpassword:''
    }
  }

  onNameChange=(event)=>{
    this.setState({nname:event.target.value})
  }
  onSnameChange=(event)=>{
    this.setState({ssurname:event.target.value})
  }
  onEmailChange=(event)=>{
    this.setState({eemail:event.target.value})
  }
  onPswdChange=(event)=>{
    this.setState({ppassword:event.target.value})
  }
  onLoginemailchange=(event)=>{
    this.setState({loginemail:event.target.value})
  }
  onLoginpasswordchange=(event)=>{
    this.setState({loginpassword:event.target.value})
  }
  onSubmit=()=>{
    fetch('http://localhost:3000/signup',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:this.state.nname,
        surname:this.state.ssurname,
        email:this.state.eemail,
        password:this.state.ppassword

      })
    });
  }
  onLogin=()=>{
    fetch('http://localhost:3000/login',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.loginemail,
        password:this.state.loginpassword

      })
    });
  }



  render() {
    return (
      <div class="container1" id="container">
        <div id="signup" class="form-container sign-up-container">
          <form action="#">
            <h1>Create Free Account</h1>
            <span>Sign up using social networks</span>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fa fa-facebook-f" />
              </a>
              <a href="#" class="social">
                <i class="fa fa-google" />
              </a>
              <a href="#" class="social">
                <i class="fa fa-linkedin" />
              </a>
            </div>
            <div>OR</div>
            <input type="text" placeholder="Name" onChange={this.onNameChange} />
            <input type="text" placeholder="Surname" onChange={this.onSnameChange}  />
            <input type="email" placeholder="Email" onChange={this.onEmailChange} />
            <input type="password" placeholder="Password" onChange={this.onPswdChange}  />
            <button onClick={this.onSubmit}>Sign Up</button>
          </form>
        </div>

        <div id="signin" class="form-container sign-in-container">
          <form action="#">
            <h1>Login to Your Account</h1>
            <span>Login using social network</span>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fa fa-facebook-f" />
              </a>
              <a href="#" class="social">
                <i class="fa fa-google" />
              </a>
              <a href="#" class="social">
                <i class="fa fa-linkedin" />
              </a>
            </div>
            <div>OR</div>
            <input type="email" placeholder="Email" onChange={this.onLoginemailchange} />
            <input type="password" placeholder="Password" onChange={this.onLoginpasswordchange}/>
            {/* <a href="#">Forgot your password?</a> */}
            <button onClick={this.onLogin}>Sign In</button>
          </form>
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>One Of Us?</h1>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>

            <div class="overlay-panel overlay-right">
              <h1>New Here?</h1>
              <p>Sign up and discover a great amount of new opportunities!</p>
              <button class="ghost" id="signUp" >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignForm;
