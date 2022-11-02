import { Suspense } from "react";
import { Loading } from "./Components/Loading";
import { Router } from "./Router";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
};

export default App;
