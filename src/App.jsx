import { RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import { Provider } from "react-redux"
import appStore from "./appStore"
import { appRoutes } from "./routes"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRoutes} >
          <Home />;
        </RouterProvider>
      </Provider>
    </>
  )
}

export default App;
