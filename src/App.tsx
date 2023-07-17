import React from "react";

import Navigation from "./Router/Navigation";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getMe } from "./store/User/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loadingforGetMeByToken);
  React.useLayoutEffect(() => {
    dispatch(getMe());
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
