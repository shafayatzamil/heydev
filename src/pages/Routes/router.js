import Home from "../Home/Home";
import Main from "../layout/Main";
import AllUser from "../userpage/AllUser";
import UserDetails from "../userpage/UserDetails";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <AllUser></AllUser>,
      },
      {
        path: "/users/:id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);

export default router;
