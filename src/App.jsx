import { useState } from "react";
import Home from "./Home";
import PredictionForm from "./predictionform";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <PredictionForm goBack={() => setShowForm(false)} />
      ) : (
        <Home goToForm={() => setShowForm(true)} />
      )}
    </>
  );
}

export default App;
