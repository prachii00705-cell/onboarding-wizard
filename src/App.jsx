import { useState } from "react";
import "./App.css";

import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    setStep((prev) => prev - 1);
  }

  function handleSubmit() {
    setLoading(true);

    console.table(formData);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  function restart() {
    setStep(1);
    setSubmitted(false);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
    });
  }

  return (
    <main className="container">
      {submitted ? (
        <Success restart={restart} />
      ) : (
        <section
          className="wizard"
          aria-labelledby="wizard-title"
        >
          <ProgressBar step={step} />

          <p className="step-text">
            Step {step} of 3
          </p>

          <h1 id="wizard-title">
          Create Your Account
          </h1>

          <p className="wizard-description">
          Complete the three simple steps below to finish your registration.
          </p>

          {step === 1 && (
            <PersonalInfo
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <AccountDetails
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <Review
              formData={formData}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}
        </section>
      )}
    </main>
  );
}

export default App;