import React from "react";
import { Formsignin, Buttonstyles } from "./styles";
import Top from "../_Cabeçario";


class Input extends React.Component {
  render() {
    return (
      <div>
        
        <input
          
          
          type={this.props.type}
          id={this.props.id}
          className="form-control"
          placeholder={this.props.text}
          value={this.props.value}
          onChange={this.props.onChange}
          required=""
          autofocus=""
          style={{}}
          
        />
        
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="h3 mb-3 font-weight-normal">{this.props.text}</h1>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
          <Buttonstyles onClick={this.props.onClick}>
          {this.props.placeholder}
          </Buttonstyles>
      </div>
    );
  }
}

class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      signIn: false,
      reload: true
    };
  }

  onChangeEmail = event => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value
    });
  };

  onChangePassWord = event => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    });
  };

  onClick = event => {
    console.log(event.target);
    this.setState({
      signIn: true
    });

    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({
        reload: false
      });

   
    }
  };

  render() {
    const { email, password, signIn, reload } = this.state;
    const altertStyle = {
      color: "red"
    };
    return (
      
      <React.Fragment>
        <>

        {reload ? (
        <Formsignin>
          <form class="blue-text">
            <Header text="Digite Qualquer Coisa" />
            
            <Input
              
              text="Digite seu e-mail"
              value={email}
              onChange={this.onChangeEmail}
              
            />
            <Input
              id="inputPassword"
              text="Digite sua senha"
              type="password"
              value={password}
              onChange={this.onChangePassWord}
            />
            <div>
            <Buttonstyles>
            <Button placeholder="Entrar" onClick={this.onClick} />
            </Buttonstyles>
            </div>
            {(email === "" || password === "") && signIn ? (
              <h5 color="red" style={altertStyle}>
                Email ou Password errados
              </h5>
            ) : null}
          </form>
          </Formsignin>
        ) : (
          <div className="form-signin">
            <div className="loader" />
            <Top/>
            </div>
        )}
        </>
      </React.Fragment>
    );
  }
}

export default RegisterScreen;