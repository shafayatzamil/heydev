import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../loginpage/Login";
import Register from "../loginpage/Register";
import AllUser from "../userpage/AllUser";
import UserDetails from "../userpage/UserDetails";
import ProtectedRoute from "./ProtectedRoutes";

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
        element: (
          <ProtectedRoute>
            <AllUser></AllUser>
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/:id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
