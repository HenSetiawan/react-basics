import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";

//pages
import Home from "./pages/Home";

// loader
import { homePageLoader } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:homePageLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
