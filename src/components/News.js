import React, { useState, useContext, useEffect } from 'react';
import NewsItem from './NewsItem';
import { selectedContext } from './Navbar';
import axios from 'axios';

const News = () => {
  let category = useContext(selectedContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  let select = category ? category : 'general';

  useEffect(() => {
    async function fetchingData() {
      setLoading(true);  // Set loading to true before fetching data
      try {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${select}/in.json`);
        const arr = [];
        response.data.articles.forEach((news) => {
          arr.push(news);
        });
        setArticles(arr);
      } catch (error) {
        console.error("Error fetching the news articles: ", error);
      }
      setLoading(false);  // Set loading to false after fetching data
    }

    fetchingData();
  }, [category]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(articles.length / itemsPerPage) - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className='container '>
      <h1 id='head'>NewsStar {category}</h1>
      {loading ? (  // Conditional rendering based on loading state
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            {currentArticles.map((element) => (
              <div className="container col-7 col-md-8 col-lg-5 col-xl-4 mt-2" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={currentPage <= 0}
              type="button"
              className="btn btn-dark mb-4"
              onClick={handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={currentPage >= Math.ceil(articles.length / itemsPerPage) - 1}
              type="button"
              className="btn btn-dark mb-4"
              onClick={handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default News;
