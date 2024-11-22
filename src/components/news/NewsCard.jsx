// src/components/news/NewsCard.jsx
import { useTheme } from "../../context/ThemeContext";
import "../../scss/news.scss";

const NewsCard = ({ articles, cardType = "default" }) => {
  const { isDarkMode } = useTheme();

  // Render different card styles based on cardType
  const renderCard = (article, index) => {
    switch (cardType) {
      case "compact":
        return (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="news-card news-card--compact"
          >
            <div className="news-card__content">
              <h3 className="news-card__title">{article.title}</h3>
              {article.source && (
                <span className="news-card__source">{article.source.name}</span>
              )}
            </div>
          </a>
        );

      case "detailed":
        return (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="news-card news-card--detailed"
          >
            {article.urlToImage && (
              <div className="news-card__image-container">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="news-card__image"
                />
              </div>
            )}
            <div className="news-card__content">
              <h2 className="news-card__title">{article.title}</h2>
              <p className="news-card__description">
                {article.description || "No description available."}
              </p>
              <div className="news-card__meta">
                {article.source && (
                  <span className="news-card__source">
                    {article.source.name}
                  </span>
                )}
                {article.publishedAt && (
                  <span className="news-card__date">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </a>
        );

      default: // 'default' card type
        return (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="news-card"
          >
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <div className="news-card__content">
              <h2 className="news-card__title">{article.title}</h2>
              <p className="news-card__description">
                {article.description || "No description available."}
              </p>
            </div>
          </a>
        );
    }
  };

  return (
    <div
      className={`news-card-container ${isDarkMode ? "dark" : ""} news-card-container--${cardType}`}
    >
      {articles.map((article, index) => renderCard(article, index))}
    </div>
  );
};

export default NewsCard;
