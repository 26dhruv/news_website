import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "../context/ThemeContext";

const withNavbar = (WrappedComponent) => {
  return function WithNavbarComponent(props) {
    return (
      <ThemeProvider>
        <div className="app-container">
          <Navbar />
          <WrappedComponent {...props} />
        </div>
      </ThemeProvider>
    );
  };
};

export default withNavbar;
