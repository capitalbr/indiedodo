import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { CREATE_CAMPAIGN } = Mutations;
const { FETCH_CAMPAIGNS } = Queries;

class CampaignCreate extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "",
//       tagline: "",
//       overview: "",
//       story: "",
//       faq: "",
//       image_url: "",
//       category: "",
//       goal: "",
//       end_date: "",
//     };
//   }

//   handleUpdate(e) {
//     e.preventDefault();
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   update(field) {
//     return e => this.setState({ [field]: e.target.value });
//   }

//   updateCache(cache, { data }) {
//     let campaigns;
//     try {
//       campaigns = cache.readQuery({ query: FETCH_CAMPAIGNS });
//     } catch (err) {
//       return;
//     }

//     if (campaigns) {
//       let campaignArray = campaigns.campaigns;
//       let newCampaign = data.newCampaign;
//       cache.writeQuery({
//         query: FETCH_CAMPAIGNS,
//         data: { campaigns: campaignArray.concat(newCampaign) }
//       });
//     }
//   }

//   handleSubmit(e, newCampaign) {
//     e.preventDefault();
//     let title = this.state.title;
//     newCampaign({
//       variables: {
//         title: "",
//         tagline: "",
//         overview: "",
//         story: "",
//         faq: "",
//         image_url: "",
//         category: "",
//         goal: "",
//         end_date: "",
//       }
//     });
//   }

  render() {
    return (
      <div className='create-campaign-container'>
          <h1>Start a New Campaign</h1>
      </div>
    );
  }
}

export default CampaignCreate;
