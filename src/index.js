import React, { createContext } from "react";
import ReactDOM from "react-dom";
import Store from "./store/store";

import App from "./App";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      store: new Store(),
    }}
  >
    <App />
  </Context.Provider>,

  document.getElementById("root")
);
