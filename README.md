# Indiedodo
Live Project: [Indiedodo](https://indie-dodo.herokuapp.com/#/landing)  

An Indiegogo clone that uses a rewards-based system by giving ‘perks’ to customers who are willing to help fund a project.  

 <p align="center">
    <img src="https://user-images.githubusercontent.com/48269593/64215708-935aa000-ce7b-11e9-9097-68d3e186a8b9.png"             width="80%">
 </p>

<p float="left">
 <img src="https://user-images.githubusercontent.com/48269593/64215060-a61fa580-ce78-11e9-9a2f-0166261f8fe4.png"  width="51%"> 
  <img src="https://user-images.githubusercontent.com/48269593/64215459-812c3200-ce7a-11e9-8607-38e263e16e96.png"        width="48%">
</p>

# Technologies
* **Backend:** MongoDB/Express/GraphQL
* **Frontend:** React/Node.js/Apollo
* **Hosting:** Heroku
* BCrypt for user authentication
* AWS S3 for storage of images/videos
* Docker for images and containers

# Functionality
## User Authentication
* Users can create accounts and login/logout.
* Demo account to quickly gain access to all features/pages.
* Protected/Auth routes redirect user based on logged in status.

## Fund Raising Campaigns
* Create, and view, campaigns.
* Modal to choose perks or pledge specified amount to a campaign.
* Track campaigns owner and funding status.

``` javascript
const youtubeURLHelper = (url) => {
  const idx = url.indexOf("v=") + 2;
  const query = url.slice(idx);
  let embeddedUrl = "https://www.youtube.com/embed/" + query;
  return (embeddedUrl)
}
```
## Landing Page
* Multiple Carosels for featured, trending, and recent campaigns.
* News API displaying conservation stories across the globe related to the campaigns.

## Checkout Page
* Enter payment information (not accepting real payments at this time!)
* Review contribution summary and submit.

