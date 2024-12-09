import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ecalculator from "./components/Ecalculator.jsx";
import NotFound from "./NotFound.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
// import Result from "./components/Result.jsx";
import ResultComponent from "./components/ResultComponent.jsx"
import { CarbonProvider } from "./carbonContext.jsx";
import Comparison from "./components/Comparison.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CarbonProvider>
        {" "}
        {/* Wrapping App with CarbonProvider */}
        <App /> 
      </CarbonProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/ecal", element: <Ecalculator /> },
      { path: "/result", element: <ResultComponent /> },
      { path: "/pathway", element: <Comparison/> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
