import React from 'react';
import axios from "axios";
// //ACTIONS
// export const fetchImg = (id) => {
//   return dispatch => {
//     return fetchImage(id).then(img => {
//       dispatch({ type: RECEIVE_IMAGE, img })
//       return img.data.img.data;
//     })
//   }
// }

// const postImg = (payload) => {
//   return dispatch => {
//     return postImage(payload);
//     // .then(img => dispatch({ type: RECEIVE_IMAGE, img }))
//   };
// };




const postImage = (payload) => {
  return axios.post(`/upload`, payload, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data`,
    }
  });
};

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cover_art_url: "",
      password: "",
      name: "",
      description: "",
      rules: "",
      is_private: false,
      file: ""

    };

    // this.makePrivate = this.makePrivate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.picture = "";
  }

  handleSubmit(e) {
    e.preventDefault();
    const picture = this.picture;
    let formData = new FormData();
    formData.append("picture", picture);
    postImage(formData);
    console.log("postImg no error");
  }

  handleChangeImg(e) {
    e.preventDefault();
    this.picture = e.target.files[0];
  }

  render() {

    // let image = this.state.cover_art_url ? <img id="campaign-cover-art" src="#" alt="whatever"/> : <div></div> ;
    // let isFileUploaded;

    // let thePath;


    // let image = this.state.file ? <img id="campaign-cover-art" src={this.state.file} alt="whatever" /> : <div></div>;
    // if (document.getElementById("campaign-cover-art-container")) {
    //   isFileUploaded = document.getElementById("campaign-cover-art-container").files
    // }

    // if (isFileUploaded) {
    //   thePath = document.getElementById("campaign-cover-art-container").files[0].path
    //   image = <img id="campaign-cover-art" src={thePath} alt="whatever" />;

    // }


    return (

      <div className="campaign_form_container">

        <form className="campaign-form " onSubmit={this.handleSubmit}>
          <h1>Create Campaign</h1>
          <input
            id="file"
            type="file"
            name="picture"
            accept="application/x-zip-compressed,image/*"
            onChange={this.handleChangeImg.bind(this)}></input>

          <input id="create-campaign-button" className="btn-glow" type="submit" value="Create Your Campaign" />
        </form>
      </div>


    )
  }

}

export default Test;