import "../../scss/headlines.scss";

const HeadlineCard = ({ articles }) => {
  return (
    <div className="headline-card-container">
      {articles.map((article, index) => (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="headline-card"
        >
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <div className="headline-content">
            <h2 className="headline-title">{article.title}</h2>
            <p className="headline-description">
              {article.description || "No description available."}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default HeadlineCard;
