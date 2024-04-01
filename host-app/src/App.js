import React, { Suspense } from "react";
const MFE1_Button = React.lazy(() => import("MFE1/Button"));

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        <Suspense fallback="Loading Button">
          <MFE1_Button />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
