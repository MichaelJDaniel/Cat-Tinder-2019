import React from "react"
import axios from "axios"
import {AuthConsumer} from "../providers/AuthProvider"

class FetchUser extends React.Component {
  state = { loaded: false, }

  render() {
    return this.state.loaded ? this.props.children : null;

  }
}

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { auth => 
    }
  </AuthConsumer>
)