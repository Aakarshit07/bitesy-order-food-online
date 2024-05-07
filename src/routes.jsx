import Body from "./pages/Body.jsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import ResraurantMenu from "./pages/RestaurantMenu.jsx";


export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />
      }, 
      {
        path: "/about",
        element: <About />
      }, 
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <ResraurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/thankyou",
        element: <ThankYou />
      },
    ],
    errorElement: <ErrorPage />
  }, 
]);