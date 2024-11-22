import NewsContainer from "../components/news/NewsContainer";
import withNavbar from "../hoc/withNavbar";
function Home() {
  return (
    <NewsContainer
      title="Top Headlines"
      endpoint="/top-headlines"
      params={{ country: "US" }}
    />
  );
}
export default withNavbar(Home);
