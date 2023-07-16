import React from "react";

import Navigation from "./Router/Navigation";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getMe } from "./store/User/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);
  React.useLayoutEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
