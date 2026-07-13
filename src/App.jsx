import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const [step] = useState(1);

  const [formData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  return (
    <div className="container">
      <ProgressBar step={step} />

      <h1>Multi-Step Onboarding Wizard</h1>

      <h2>Step {step} of 3</h2>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default App;
