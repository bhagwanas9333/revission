

import * as React from "react";
import Register from "./components/register/Register";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <Register />
    </>
  );
};

export default App;
