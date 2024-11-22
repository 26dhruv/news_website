import NewsContainer from "../components/news/NewsContainer";
import withNavbar from "../hoc/withNavbar";
function Entertainment() {
  return (
    <NewsContainer
      title="Top Headlines"
      endpoint="/top-headlines"
      params={{ country: "US", category: "entertainment" }}
    />
  );
}
export default withNavbar(Entertainment);
