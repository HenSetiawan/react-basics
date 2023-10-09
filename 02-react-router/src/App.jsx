/* eslint-disable no-unused-vars */
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { careerLoader } from "./pages/career/Career";
import { detailCareerLoader } from "./pages/career/DetailCareer";

//pages
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/help/Help";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Career from "./pages/career/Career";
import DetailCareer from "./pages/career/DetailCareer";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
        loader: careerLoader,
      },
      {
        path: "/career/:id",
        element: <DetailCareer />,
        loader: detailCareerLoader,
      },
      {
        path: "/help",
        element: <Help />,
        children: [
          {
            path: "/help/faq",
            element: <Faq />,
          },
          {
            path: "/help/contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
