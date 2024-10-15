import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  );
}

export default App;
