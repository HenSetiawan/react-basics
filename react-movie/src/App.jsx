import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";

//pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
