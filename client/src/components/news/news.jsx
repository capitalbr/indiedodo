import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { GET_NEWS } = Queries;

const News = () => {
  return (
    <div className='news-container'>
        <div className="news-header">
          <h1>From the News</h1>
          <p>Your inside-look at conservation stories across the globe.</p>
        </div>
        <div className="news-body">
          <Query query={GET_NEWS}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error</p>;
              let randNews = data.getArticles.sort(() => .5 - Math.random());
              let news = randNews.slice(0,3);
              return news.map(({ title, description, url, urlToImage }, i) => (
                <a className='article-link' href={url} key={i}>
                  <article className='news-article'>
                    <div className='image-frame'>
                      <img className='article-image'src={urlToImage} alt={title}/>
                    </div>
                    <h1 className='article-title'>{title}</h1>
                    <p className='article-description'>{description}</p>
                    <div className='article-link-title'>
                      Read Article >
                    </div>
                  </article>
                </a>
              ));
            }}
          </Query>
        </div>
    </div>
  );
};

export default News;

