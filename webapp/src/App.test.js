import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import ReduxStore from "./Redux";

test("renders", () => {
  render(
    <Provider store={ReduxStore}>
      <App />
    </Provider>,
  );
});
