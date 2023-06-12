import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SinglePost from "./pages/Singlepost/Singlepost";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import CreatePostPage from "./pages/Allposts/CreatePost";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
    path: "posts/:id",
    element: <SinglePost />,
  },
  {
    path: "/Post",
    element: <App />,
  },
  {
    path: "/CreatePostPage",
    element: <CreatePostPage />,
  },
]);

export default router;
