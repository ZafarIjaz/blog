import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SinglePost from "./pages/Singlepost";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import CreatePostPage from "./pages/CreatePost";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "posts/:id",
    element: <SinglePost />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/CreatePostPage",
    element: <CreatePostPage />,
  },
  {
    path: "/Post",
    element: <App />,
  },
]);

export default router;
