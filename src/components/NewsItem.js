import React from 'react';


const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className='my-3'>
      <div className="card" style={{ width: '20rem', height: '30rem' }}>
        <div className="card-img-container">
          <img
            src={!imageUrl ? "https://cdn.browshot.com/static/images/not-found.png" : imageUrl}
            className="card-img-top"
            alt="News"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title"  id='title'>{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
