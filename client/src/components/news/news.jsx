import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { GET_NEWS } = Queries;

const News = () => {
  return (
    <div className='news-container'>
        <h1 classname='news-header'>From the News</h1>
        <p>Your inside-look at conservation stories across the globe.</p>
        <Query query={GET_NEWS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            debugger
            let randNews = data.getArticles.sort(() => .5 - Math.random());
            let news = randNews.slice(0,3);
            return news.map(({ title, description, url, urlToImage }, i) => (
              <article className='news-article' key={i}>
                <img className='article-image'src={urlToImage} alt={title}/>
                <h1 className='article-title'>{title}</h1>
                <p className='article-description'>{description}</p>
                <a className='article-link' href={url}>Read Article</a>
              </article>
            ));
          }}
        </Query>
    </div>
  );
};

export default News;

