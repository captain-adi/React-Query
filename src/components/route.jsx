import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import FetchOld from "../pages/FetchOld";
import FetchRQ from "../pages/FetchRQ";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);

export default router;
