import NewsContainer from "../components/news/NewsContainer";
import withNavbar from "../hoc/withNavbar";
function Business() {
  return (
    <NewsContainer
      title="Top Headlines"
      endpoint="/top-headlines"
      params={{ country: "US", category: "business" }}
    />
  );
}
export default withNavbar(Business);
