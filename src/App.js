import "./App.css";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";

import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/select" component={Select} />
        <Route path="/main" component={Main} />
      </BrowserRouter>
    </>
  );
};

export default App;
