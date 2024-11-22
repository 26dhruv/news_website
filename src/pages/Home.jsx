// src/pages/Home.jsx
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import HeadLines from "../components/home/headlines";
import withNavbar from "../hoc/withNavbar";
import "../scss/global.scss";

function Home() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className={`main-content ${isDarkMode ? "dark" : ""}`}>
      <HeadLines />
    </div>
  );
}

export default withNavbar(Home);
