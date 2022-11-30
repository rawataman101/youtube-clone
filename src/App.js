import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import SearchPage from "./SearchPage";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route
            path="/search/:searchTerm"
            element={
              <Fragment>
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </Fragment>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Fragment>
                <div className="app__page">
                  <Sidebar />
                  {/* Recommended Videos */}
                  <Videos />
                </div>
              </Fragment>
            }
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
