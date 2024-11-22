import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import axiosInstance from "../../api/interceptor";
import HeadlineCard from "./headlinescard";
import "@/scss/headlines.scss";

export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    axiosInstance
      .get("/top-headlines", { params: { country: "US" } })
      .then((response) => {
        setHeadlines(response.data.articles);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className={`headlines-container ${isDarkMode ? "dark" : ""}`}>
      <h1>Top Headlines</h1>
      {error && <p className="error-message">Error: {error}</p>}
      {headlines.length > 0 ? (
        <HeadlineCard articles={headlines} />
      ) : (
        <p className="loading-message">Loading headlines...</p>
      )}
    </div>
  );
}
