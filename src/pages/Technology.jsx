import NewsContainer from "../components/news/NewsContainer";
import withNavbar from "../hoc/withNavbar";
function Technology() {
  return (
    <NewsContainer
      title="Top Headlines"
      endpoint="/top-headlines"
      params={{ country: "US", category: "technology" }}
    />
  );
}
export default withNavbar(Technology);
