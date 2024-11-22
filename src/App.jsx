import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/business",
      element: <Business />,
    },
    {
      path: "/technology",
      element: <Technology />,
    },
    {
      path: "/sports",
      element: <Sports />,
    },
    {
      path: "/entertainment",
      element: <Entertainment />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
