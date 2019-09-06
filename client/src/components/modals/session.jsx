import React from "react";
import { ApolloConsumer } from "react-apollo";
import Login from "../session/login";
import Register from "../session/register";
import Queries from "../../graphql/queries";
import { Query } from "react-apollo";
const { MODAL_TYPE } = Queries;

export default class SessionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true
    }
  }

  updateCache(client) {
    client.writeData({
      data: {
        modalType: false
      }
    });
  }

  handleChange(e) {
    this.setState({ donation: e.target.value })
  }

  renderSelect(){
    return (
      <ApolloConsumer>
        {client => (
          <Query query={MODAL_TYPE}>
            {({ data }) => {
              this.data = data;
              switch (data.modalType) {
                case "login":
                  return(
                    <div 
                      className="modal-container" 
                      onClick={(e) => this.updateCache(client)}>
                      <div 
                        className="modal-component" 
                        onClick={e => e.stopPropagation()}>
                        <Login />
                      </div>
                    </div>
                  )
                case "register":
                  return (
                    <div 
                      className="modal-container" 
                      onClick={(e) => this.updateCache(client)}>
                      <div 
                        className="modal-component" 
                        onClick={e => e.stopPropagation()}>
                        <Register />
                      </div>
                    </div>
                  )
                default:
                return "";
              }
            }}
          </Query>
        )}
      </ApolloConsumer>
    )
  }

  render(){
    return (
      this.renderSelect()
    );
  }

}