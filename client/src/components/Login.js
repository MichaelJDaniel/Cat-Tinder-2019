import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from "semantic-ui-react";

class Login extends React.Component {
  state = { email: "", password: "", }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
  }
  
  handleSubmit = (e) => {
    e.preventdefault();
    
    this.props.auth.handleLogin({ ...this.state }, this.props.history);
  }


  render() {
    const { email, password, } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            autoFocus
            required
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
            />
            <Form.Input
            label="Password"
            autoFocus
            required
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
            />
          <Segment textAlign="center" basic>
            <Button primary type="submit">Submit</Button>
          </Segment>
        </Form>
      </Segment>


    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}