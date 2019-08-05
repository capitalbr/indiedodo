import React, { Component } from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
import axios from 'axios';


//WYSIWYG
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };
//END WYSIWYG



const { CREATE_CAMPAIGN } = Mutations;
const { CURRENT_USER, FETCH_CAMPAIGNS } = Queries;


const postImage = (payload) => {
  return axios.post(`/upload`, payload, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data`,
    }
  });
};

const youtubeURLHelper = (url) => {
  const idx = url.indexOf("v=") + 2;
  const query = url.slice(idx);
  let embeddedUrl = "https://www.youtube.com/embed/" + query;
  return (embeddedUrl)
}

class CampaignCreate extends Component {
  constructor(props) {
    super(props);
    //WYSIWYG
    const contentState = convertFromRaw(content);
    this.state = {
      title: "testetestetestetestetestetesteteste",
      tagline: "testetestetestetestetestetesteteste",
      overview: "testetestetestetestetestetesteteste",
      // story: "testetestetestetestetestetesteteste",
      faq: "testetestetestetestetestetesteteste",
      image_url: "testetestetestetestetestetesteteste",
      youtube_url: "https://www.youtube.com/watch?v=IChRNbuHHWE",
      real_url: "",
      category: "testetestetestetestetestetesteteste",
      goal: "20000",
      end_date: "2019-12-15",
      contentState
    };
    this.temp = "";
    this.verifyUser = this.verifyUser.bind(this);
    this.picture = "";
  }

  //WYSIWYG
  onContentStateChange(contentState){
    this.setState({
      contentState,
    });
  };

  //END WYSIWYG

  // handleUpdate(e) {
  //   e.preventDefault();
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  // updateCache(cache, { data }) {
  //   let campaigns;
  //   try {
  //     campaigns = cache.readQuery({ query: FETCH_CAMPAIGNS });
  //   } catch (err) {
  //     return;
  //   }

  //   if (campaigns) {
  //     let campaignArray = campaigns.campaigns;
  //     let newCampaign = data.newCampaign;
  //     cache.writeQuery({
  //       query: FETCH_CAMPAIGNS,
  //       data: { campaigns: campaignArray.concat(newCampaign) }
  //     });
  //   }
  // }

  // handleSubmit(e, newCampaign) {
  //   e.preventDefault();
  //   // let title = this.state.title;
  //   newCampaign({
  //     variables: {
  //       title: "",
  //       tagline: "",
  //       overview: "",
  //       story: "",
  //       faq: "",
  //       image_url: "",
  //       category: "",
  //       goal: "",
  //       end_date: "",
  //       user: ""
  //     }
  //   });
  // }

  verifyUser(token, client){
    client.query({query: CURRENT_USER, variables: {token}})
    .then(({data}) => {
      // this.setState({user: user._id})

      this.temp = data.currentUser
    })
  }

  handleChangeImg(e) {
    e.preventDefault();
    this.picture = e.target.files[0];
  }

  updateCache(cache, {data}){
    // 
    let campaigns;
    try {
      campaigns = cache.readQuery({ query: FETCH_CAMPAIGNS })
    } catch (error) {
      return;
    }
    const newCampaign = data.newCampaign;
    if (campaigns) {
      const campaignArray = campaigns.campaigns;
      cache.writeQuery({
        query: FETCH_CAMPAIGNS,
        data: { campaigns: campaignArray.concat(newCampaign) }
      })
    }
  }

  render() {
    const { contentState } = this.state;
    return <ApolloConsumer>
    {(client) => {
      const token = localStorage.getItem("auth-token");
      // this.temp = this.verifyUser(token);
      this.verifyUser(token, client);
      return (
        <div className='create-campaign-container'>
          <div className="vert-image-container">
            <img className="vert-image" src="https://indiedodo-dev.s3-us-west-1.amazonaws.com/jungle_vert_slice.png" alt="sidebar-jungle" />
          </div>
          <div>
            <section className='create-campaign-header'>
              <h3 className="camp-basics">Campaign / Basics</h3>
            </section>
            <Mutation
              mutation={CREATE_CAMPAIGN}
              update={(cache, data) => this.updateCache(cache, data)}
              onCompleted={data => {
                // const { token } = data.register;
                // localStorage.setItem("auth-token", token);
                this.props.history.push("/landing"); //send to new campaign show
              }}
              // update={(client, data) => this.updateCache(client, data)}
            >
            {CreateCampaign => (
              <div className='campaign-form-container'>
                <h2>Basics</h2>
                <h6 className="create-basics">Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.</h6>
                <form
                  className='campaign-form'
                  onSubmit={e => {
                    e.preventDefault();
                    const picture = this.picture;
                    let formData = new FormData();
                    let embeddedURL = youtubeURLHelper(this.state.youtube_url);
                    formData.append("picture", picture);
                    postImage(formData)
                      .then(({data}) => {
                        CreateCampaign({
                          variables: {
                            title: this.state.title,
                            tagline: this.state.tagline,
                            overview: this.state.overview,
                            // story: this.state.story,
                            story: JSON.stringify(this.state.contentState, null, 4),
                            faq: this.state.faq,
                            image_url: data.location,
                            youtube_url: embeddedURL,
                            real_url: this.state.real_url,
                            category: this.state.category,
                            goal: Number(this.state.goal),
                            end_date: this.state.end_date,
                            user: this.temp._id
                          }
                        });
                    console.log("postImg no error");
                      });
                  }}
                >
                  <div className='campaign-create-inputs'>
                    <h3 className="create-subhead">Campaign Title</h3>
                    <h6 className="create-input-txt">What is the title of your campaign?</h6>
                    <textarea
                      className="create-txtarea-short"
                      value={this.state.title}
                      onChange={this.update("title")}
                    />
                    <h3 className="create-subhead">Campaign Tagline</h3>
                    <h6 className="create-input-txt">Provide a short description that best describes your campaign to your audience.</h6>
                    <textarea
                      className="create-txtarea-tall"
                      value={this.state.tagline}
                      onChange={this.update("tagline")}
                    />
                    <h3 className="create-subhead">Category</h3>
                      <h6 className="create-input-txt">To help backers find your campaign, select a category that best represents your project.</h6> 
                    <textarea
                      className="create-txtarea-narrow"
                      value={this.state.category}
                      onChange={this.update("category")}
                    />
                    <h3 className="create-subhead">Overview</h3>
                      <h6 className="create-input-txt">Lead with a compelling statement that describes your campaign and why it’s important to you, highlight key campaign features, and remember - keep it short!</h6> 
                    <textarea
                      className="create-txtarea-tall"
                      value={this.state.overview}
                      onChange={this.update("overview")}
                    />
                    <h3 className="create-subhead">Story</h3>
                      <h6 className="create-input-txt">Tell potential contributors more about your campaign. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest.</h6> 
                      <div className="create-story-editor">
                        <Editor
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName="toolbar-class"
                          
                          onContentStateChange={this.onContentStateChange.bind(this)}
                          
                        />
                        {/* <textarea
                          disabled
                          value={JSON.stringify(contentState, null, 4)}
                        /> */}
                      </div>
                    <h3 className="create-subhead">FAQ</h3>
                      <h6 className="create-input-txt">The FAQ section should provide the most common details that backers are looking for when evaluating your campaign. We will also provide common answers to questions about crowdfunding and how Indiegogo works.</h6> 
                    <textarea
                      className="create-txtarea-tall"
                      value={this.state.faq}
                      onChange={this.update("faq")}
                    />
                      <h3 className="create-subhead">Campaign Goal Amount</h3>
                      <h6 className="create-input-txt">How much money would you like to raise for this campaign? Please enter a number between $1 and $1,000,000</h6> 
                    <input
                      className="create-txtarea-narrow"
                      value={this.state.goal}
                      onChange={this.update("goal")}
                      type="number"
                      min="1"
                      max="1000000000"
                    />
                      <h3 className="create-subhead">Campaign Duration</h3>
                      <h6 className="create-input-txt">When will your campaign end? Select the last day.</h6> 
                    <input
                      className="create-date"
                      value={this.state.end_date}
                      onChange={this.update("end_date")}
                      type="date"
                    />
                      <h3 className="create-subhead">Upload An Image</h3>
                      <h6 className="create-input-txt">Upload a square image that represents your campaign.</h6> 
                      <input
                        className="create-img"
                        id="file"
                        type="file"
                        name="picture"
                        accept="application/x-zip-compressed,image/*"
                        onChange={this.handleChangeImg.bind(this)}>  
                      </input>
                      <h3 className="create-subhead">Youtube Link</h3>
                      <h6 className="create-input-txt">Optional Youtube URL to display onto your campaign page. Note: use the regular URL - we will handle embedding.</h6>
                      <input
                        className="create-txtarea-narrow"
                        value={this.state.youtube_url}
                        onChange={this.update("youtube_url")}
                        type="text"
                      />
                      <input
                        className="create-txtarea-narrow"
                        value={this.state.real_url}
                        onChange={this.update("real_url")}
                        type="text"
                        placeholder="Optional Actual Website URL"
                      />
                      <div className="create-btn-container">
                        <input id="create-campaign-button" className="btn-glow" type="submit" value="CREATE CAMPAIGN" />
                      </div>
                  </div>
                </form>
              </div>
            )}
          </Mutation>
        </div>
      </div>
      );
    }}
    </ApolloConsumer>
  }
}


export default CampaignCreate;

