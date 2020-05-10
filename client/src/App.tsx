import React from "react";
import { rootStore } from "./store";
import { StoreContext } from "./models";
import Main from "./Main";

function App() {
  return (
    <StoreContext.Provider value={rootStore}>
      <Main />
    </StoreContext.Provider>
  );
}

// @ts-ignore
window.store = rootStore;

export default App;
