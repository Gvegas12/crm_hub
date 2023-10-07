import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "../providers/router";

const App: FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
