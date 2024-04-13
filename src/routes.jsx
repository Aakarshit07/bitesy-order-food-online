import { Suspense, } from "react";
import Body from "./pages/Body.jsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResraurantMenu from "./pages/RestaurantMenu.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";



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
          path: "/grocery",
          element:
          <Suspense fallback={<h1>Loading...</h1>}>
            
          </Suspense>
        }
      ],
      errorElement: <ErrorPage />
    }, 
  ])