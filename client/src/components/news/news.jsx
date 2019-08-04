import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { GET_NEWS } = Queries;

const News = () => {
  return (
    <div>
      <ul>
        <Query query={GET_NEWS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            debugger
            let randNews = data.getArticles.sort(() => .5 - Math.random());
            let news = randNews.slice(0,4);
            return news.map(({ title, description, url, urlToImage }) => (
              <li key={Math.random()}>
                <img src={urlToImage} alt={title}/>
                <p>{title}</p>
                <p>{description}</p>
                <a href={url}>Read Article</a>
              </li>
            ));
          }}
        </Query>
      </ul>
    </div>
  );
};

export default News;

