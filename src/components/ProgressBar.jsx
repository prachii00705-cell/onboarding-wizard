function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress-container">

      <div className="progress-header">

        <div
          className={step >= 1 ? "circle active" : "circle"}
          aria-label="Step 1"
          aria-current={step === 1 ? "step" : undefined}
        >
          1
        </div>

        <div
          className={step >= 2 ? "circle active" : "circle"}
          aria-label="Step 2"
          aria-current={step === 2 ? "step" : undefined}
        >
          2
        </div>

        <div
          className={step >= 3 ? "circle active" : "circle"}
          aria-label="Step 3"
          aria-current={step === 3 ? "step" : undefined}
        >
          3
        </div>

      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label="Form Progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressBar;