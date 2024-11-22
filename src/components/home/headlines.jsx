import { useEffect, useState } from "react";
import axiosInstance from "../../api/interceptor";
import HeadlineCard from "./headlinescard";
import "@/scss/headlines.scss"; // Use alias if configured

export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

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
    <div className="headlines-container">
      <h1>Top Headlines</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {headlines.length > 0 ? (
        <HeadlineCard articles={headlines} />
      ) : (
        <p>Loading headlines...</p>
      )}
    </div>
  );
}
