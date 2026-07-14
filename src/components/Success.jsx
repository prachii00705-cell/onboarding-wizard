function Success({ restart }) {
  return (
    <section
      className="success"
      role="status"
      aria-live="polite"
      aria-labelledby="success-title"
    >
      <div
        className="success-icon"
        aria-hidden="true"
      >
        ✅
      </div>

      <h1 id="success-title">
        Registration Successful!
      </h1>

      <p>
        Thank you for completing the onboarding
        process. Your information has been submitted
        successfully.
      </p>

      <button
        type="button"
        className="restart-btn"
        onClick={restart}
      >
        Fill Another Form
      </button>
    </section>
  );
}

export default Success;