// import React, { Component } from "react";
// import { Mutation } from "react-apollo";

// import Mutations from "../../graphql/mutations";
// import Queries from "../../graphql/queries";
// const { CREATE_CAMPAIGN, VERIFY_USER } = Mutations;
// const { FETCH_CAMPAIGNS } = Queries;

// class CampaignCreate extends Component {
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
//     this.handleSubmit = this.handleSubmit.bind(this);
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
//         user: this.verifyUser()
//       }
//     });
//   }

//   verifyUser(){
//     return (
//       <Query query={ VERIFY_USER }>
//           {({ loading, error, data }) => {
//             if (loading) return <p>Loading...</p>;
//             if (error) return <p>Error</p>;
//             return data.payload.user._id
//             ));
//           }}
//       </Query>
//     )
//   }

//   render() {
//     return (
//       <div className='create-campaign-container'>
//         <section className='create-campaign-header'>
//           <h4>Campaign / Basics</h4>
//         </section>
//           <h1>Basics</h1>
//           <p>Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.</p>
//       <Mutation
//         mutation={REGISTER_USER}
//         onCompleted={data => {
//           const { token } = data.register;
//           localStorage.setItem("auth-token", token);
//           this.props.history.push("/");
//         }}
//         update={(client, data) => this.updateCache(client, data)}
//       >
//         {registerUser => (
//           <div className='register-container'>

//             <form
//               className='register-form'
//               onSubmit={e => {
//                 e.preventDefault();
//                 registerUser({
//                   variables: {
//                     name: this.state.name,
//                     email: this.state.email,
//                     password: this.state.password,
//                     // bio_header: this.state.bio_header,
//                     // bio: this.state.bio
//                   }
//                 });
//               }}
//             >
//               <div className='register-header'>
//                 <h1>Welcome!</h1>
//                 <p>Sign up to join IndieDodo</p>
//               </div>

//               <div className='register-inputs'>
//                 <input
//                   value={this.state.name}
//                   onChange={this.update("name")}
//                   placeholder=" Full Name"
//                 />
//                 <input
//                   value={this.state.email}
//                   onChange={this.update("email")}
//                   placeholder="Email"
//                 />
//                 <input
//                   value={this.state.password}
//                   onChange={this.update("password")}
//                   type="password"
//                   placeholder="Password"
//                 />
//                 <label>
//                   <input type="checkbox" value='email-signup' /> <span className='email-signup'>Sign me up for the IndieDodo newsletter</span>
//                 </label>
//                 <label>
//                   <input type="checkbox" value='TOS-agree' /> <span className='tos-agree'>I agree to the <a href="https://www.indiegogo.com/about/terms"> Terms of Use </a> and <a href="https://www.indiegogo.com/about/privacy">Privacy Policy</a></span>
//                 </label>
//               </div>
//               <div className='register-buttons'>
//                 <button type="submit">Register</button>
//               </div>
//             </form>

//             <footer className='session-switch'>
//               <span>Already have an account? <a href="#/login">Log In</a></span>
//             </footer>

//           </div>
//         )}
//       </Mutation>
//       </div>
//     );
//   }
// }

// export default CampaignCreate;
