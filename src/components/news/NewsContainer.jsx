// src/components/news/NewsContainer.jsx
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import axiosInstance from "../../api/interceptor";
import NewsCard from "./NewsCard";
import "../../scss/news.scss";

const NewsContainer = ({
  title = "News",
  endpoint = "/top-headlines",
  params = { country: "US" },
  cardType = "default",
}) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(endpoint, { params })
      .then((response) => {
        setNews(response.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endpoint, params]);

  return (
    <div className={`news-container ${isDarkMode ? "dark" : ""}`}>
      <h1 className="news-container__title">{title}</h1>

      {error && <p className="news-container__error-message">Error: {error}</p>}

      {isLoading ? (
        <p className="news-container__loading-message">Loading news...</p>
      ) : news.length > 0 ? (
        <NewsCard articles={news} cardType={cardType} />
      ) : (
        <p className="news-container__empty-message">No news available.</p>
      )}
    </div>
  );
};

export default NewsContainer;
