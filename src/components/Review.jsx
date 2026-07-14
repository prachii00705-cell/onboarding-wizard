function Review({
  formData,
  prevStep,
  handleSubmit,
  loading,
}) {
  return (
    <section
      className="review-card"
      aria-labelledby="review-title"
    >
      <h2 id="review-title">
        Review Your Information
      </h2>

      <section className="review-section">
        <h3>👤 Personal Information</h3>

        <div className="review-row">
          <span>Full Name</span>
          <strong>{formData.fullName}</strong>
        </div>

        <div className="review-row">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-row">
          <span>Phone</span>
          <strong>{formData.phone}</strong>
        </div>
      </section>

      <section className="review-section">
        <h3>🔐 Account Details</h3>

        <div className="review-row">
          <span>Username</span>
          <strong>{formData.username}</strong>
        </div>

        <div className="review-row">
          <span>Password</span>
          <strong>
            {"•".repeat(formData.password.length)}
          </strong>
        </div>
      </section>

      <div className="review-buttons">
        <button
          type="button"
          className="back-btn"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
          type="button"
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
          aria-busy={loading}
        >
          {loading
            ? "Submitting..."
            : "Submit"}
        </button>
      </div>
    </section>
  );
}

export default Review;