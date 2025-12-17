import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/Store/appStore";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([{}])

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
