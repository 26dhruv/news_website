import NewsContainer from "../components/news/NewsContainer";
import withNavbar from "../hoc/withNavbar";
function Sports() {
  return (
    <NewsContainer
      title="Top Headlines"
      endpoint="/top-headlines"
      params={{ country: "US", category: "sports" }}
    />
  );
}
export default withNavbar(Sports);
