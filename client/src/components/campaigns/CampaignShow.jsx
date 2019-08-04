import React from "react";
import { Query } from "react-apollo";
import { 
  FaAccusoft, 
  FaHeart, 
  FaFacebookSquare, 
  FaTwitter,
  FaLink,
  FaDollarSign
} from "react-icons/fa"; 
import Queries from "../../graphql/queries";
import { Link } from "react-router-dom";
// import Mutations from "../../graphql/mutations";
const { FETCH_CAMPAIGN, FETCH_USER, FETCH_CAMPAIGN_CONTRIBUTIONS, FETCH_USER_CAMPAIGNS, FETCH_CAMPAIGN_PERKS } = Queries;
// const { CREATE_CONTRIBUTION } = Mutations;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AllContributions = (campaign_id, goal, end_date) => {
  // debugger
  return (
    <Query
      query={FETCH_CAMPAIGN_CONTRIBUTIONS}
      variables={{ campaignId: campaign_id }}
    >
      {({ loading, error, data }) => {
        if (loading) return 0;
        if (error) return 0;
        const { campaignContributions } = data;
        let total = 0;
        let numContributions = 0;
        let backerText = (numContributions > 0) ? "backers" : "backer";
        campaignContributions.forEach((contribution) => {
          total = total + Number(contribution.amount)
          numContributions = numContributions + 1;
        })
        let percent_raised = (total / goal * 100).toFixed(2);
        total = total.toFixed(0);
        const endDate = new Date(end_date);
        const  currDate = new Date();
        const diffTime = Math.abs(endDate.getTime() - currDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let dayText = (numContributions > 0) ? "days" : "day";
        return (
          <div>
            <div className="raised-text-cont">
               <div>
                  ${numberWithCommas(total)} USD raised
                </div>
                <div>
                {numberWithCommas(numContributions)} {backerText}
                </div>
            </div>
            <div className="raised-bar-show-cont">
              <div className="raised-bar" style={{ width: `${percent_raised}%`, maxWidth: "100%" }} />
            </div>
            <div className="raised-text-cont">
              <div>
                {numberWithCommas(percent_raised)}% of ${numberWithCommas(goal.toFixed(0))} Flexible Goal
              </div>
              <div>
                {diffDays} {dayText} left
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

const CampaignPerks = (campaign_id, user_id) => {
  return (
    <Query
      query={FETCH_CAMPAIGN_PERKS}
      variables={{ campaignId: campaign_id }}
    >
      {({ loading, error, data }) => {
        if (loading) return 0;
        if (error) return 0;
        const { campaignPerks } = data;
        return (
          <div>
            {campaignPerks.map((perk) => {
              return (
                <div className="perk-item-container" key={perk._id}>
                  <img className="perk-image" src={perk.image_url} alt="single perk"/>
                  <div className="perk-item-text-container">
                    <h2 className="perk-title">{perk.title}</h2>
                    <h4 className="perk-desc">{perk.description}</h4>
                    <div className="show-cost-container">
                      <h2 className="cost-text">${perk.cost}</h2>
                      <h4 className="usd-text">USD</h4>
                    </div>
                    <h4 className="ship-inv-head">Estimated Shipping</h4>
                    <h4 className="ship-inv-info">{perk.est_shipping}</h4>
                    <h4 className="ship-inv-info">{perk.inventory_info}</h4>
                    <h4 className="ship-inv-info">{perk.shipping_info}</h4>
                  </div>
                  <div className="get-perk-btn-container">
                    
                    <Link className='new-char-link'
                      to={{
                        pathname: '/checkout',
                        state: {
                          perk: perk,
                          user_id: user_id
                        }
                      }}
                    ><button className="get-perk-btn">GET THIS PERK</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }}
    </Query>
  )
}

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);

    this.user = "";
    this.state = { 
      modal: false,
      perks: []
    }
  }
  
  // backit(e){
  //   e.preventDefault();
  //   return(
  //     <Mutation
  //       mutation={CREATE_CONTRIBUTION}
  //     >
  //     {(newContribution) => (
  //         newContribution({
  //           variables: {
  //             goal: e.target.value,
  //             user: this.temp._id
  //           }
  //         })
  //     )}
  //     </Mutation>
  //   )
  // }

  showBackit(e){
    // debugger
    e.preventDefault();
    this.setState({modal: true});
  }

  closeBackIt(e){
    e.preventDefault();
    this.setState({ modal: false });
  }

  perkText(isModal) {
    if (this.perks.length > 0) {
      if (isModal) {
        return (
          <div id="perk-items-list-title">Select a perk</div>
        )
      } else {
        return (
          <h4 className="select-perk">Select a perk!</h4>
        )
      }
    } else {
      return (
        <div></div>
      )
    }
  }
  
  renderBackIt(){
    // debugger
    return (
        <div className="modal-background modal-content" onClick={this.closeBackIt.bind(this)}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <div className="back-it">
                <div>
                  <h1>Back This Project</h1>
                </div>
              <div className= "back-it-sub-container">
                
                <div className="backit-body">
                  <div className="choose-amt-title">
                    Make a contribution
                  </div>
                  <div className="backit-choose-amt">
                    <div className="input-container">
                      <div className="input-sub-container">
                        <div id="dollar-sign-container">
                          <FaDollarSign id="dollar-sign"/>
                        </div>
                        <input placeholder="100" type="text"></input>
                        <div id="usd">USD</div>
                      </div>
                      <div className="input-sub-container2">
                        <div className="continue-button">
                          <button>
                            CONTINUE
                          </button>
                      </div>
                      </div>
                    <div id="disclaimer">Contributions are not associated with perks</div>
                    </div>
                  </div>
              </div> 

            <div id="perk-items-list">
              <div>{this.perks}</div>
            </div>
              </div>
              
            </div>
          </div>
        </div>
    );
  }

  youtube(youtube_url){
    if (youtube_url.length > 0) {
      return (
        <iframe className="youtube" title="youtube_url" width="560" height="315" src={youtube_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  realCampaignUrl(real_url){
    if (real_url) {
      return (
        <a href={real_url}>Please Support The Real Project!</a>
      )
    } else {
      return (
        <div></div>
      )
    } 
  }

  render(){
    let backIt = <div className="hidden"></div>
    if (this.state.modal) {
      backIt = this.renderBackIt()
    } else {
      backIt = <div className="hidden"></div>
    }
    return (
      <div>
        <Query
          query={FETCH_CAMPAIGN}
          variables={{ campaignId: this.props.match.params.campaignId }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            this.user = data.campaign.user;
            this.contributions = AllContributions(this.props.match.params.campaignId, data.campaign.goal, data.campaign.end_date);
            this.perks = CampaignPerks(this.props.match.params.campaignId, this.user);
            // { title, tagline, overview, story, faq, image_url, category, goal, end_date } = data.campaign;
            return (
              <div>
                <div className="campaign-show-header">
                  <div>
                    <img src={data.campaign.image_url} alt='CampaignImage' />
                  </div>
                  <div className="campaign-show-header-info">
                    <div className="funding">FUNDING</div>
                    <div className="campaign-show-title">{data.campaign.title}</div>
                    <div className="campaign-show-overview">{data.campaign.overview}</div>
                    
                      <Query
                        query={FETCH_USER}
                        variables={{ id: this.user }}
                      >
                      {({ loading, error, data } ) => {
                          if (loading) return <p>Loading...</p>;
                          if (error) return <p>Error</p>;
                          
                          return <div className="campaign-owner">
                            <div className="user-icon-show"><FaAccusoft className="user-img"/></div>
                          <div className="user-icon-show-info">
                              <div className="user-name">{data.user.name}</div>
                              <Query
                                query={FETCH_USER_CAMPAIGNS}
                                variables={{ userId: data.user._id }}
                              >
                                {({ loading, error, data }) => {
                                  if (loading) return <p>Loading...</p>;
                                  if (error) return <p>Error</p>;
                                  let c;
                                  if (data.userCampaigns.length > 1) {
                                    c = "Campaigns"
                                  } else {
                                    c = "Campaign"
                                  }
                                  return(
                                    <div className="campaign-amount">
                                      {data.userCampaigns.length} {c}
                                    </div>
                                  )
                                }}
                              </Query>
                            </div>
                          </div>
                      }}
                      </Query>
                {this.contributions}
                <div className="campaign-show-header-buttons">
                  <div className="campaign-show-buttons-container">
                    <div className="backit" onClick={this.showBackit.bind(this)}>
                        <button>BACK IT</button>
                    </div>
                    <div className="follow">
                        <button>
                          <FaHeart className="follow-icon"/>
                          <span>FOLLOW</span>
                        </button>
                    </div>
                  </div>
                  <div className="share-icon-container-center">
                    <div className="share-icon-container">
                        <FaFacebookSquare className="share-icons" />
                        <FaTwitter className="share-icons" />
                        <FaLink className="share-icons" />
                    </div>
                  </div>
                  </div>
                </div>
                </div>
                <div className="show-info-container">
                  <div className="show-center-info-container">
                    <h3 className="show-info-header">Overview</h3>
                    {this.youtube(data.campaign.youtube_url)}
                    <p>{data.campaign.story}</p>
                    <h3 className="show-info-header">Faq</h3>
                    <p>{data.campaign.faq}</p>
                    <br></br>
                    <br></br>
                    <p>Tagline: {data.campaign.tagline}</p>
                    <p>Category {data.campaign.category}</p>
                    {this.realCampaignUrl(data.campaign.real_url)}
                  </div>
                  <div className="show-perks">
                    {this.perkText(false)}
                    {this.perks}
                  </div>
                </div>
            </div>
            );
          }}
        </Query>
        {backIt}
      </div>
    );
  }
};

export default CampaignShow;
