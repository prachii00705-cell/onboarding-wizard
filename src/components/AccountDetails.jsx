import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../validation/schema";

function AccountDetails({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
    defaultValues: {
      username: formData.username,
      password: formData.password,
    },
  });

  function onSubmit(data) {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    nextStep();
  }

  return (
    <div className="form-card">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="username">
            Username <span className="required">*</span>
          </label>

          <input
            id="username"
            type="text"
            placeholder="lewisHamilton1287363"
            autoComplete="username"
            aria-invalid={errors.username ? "true" : "false"}
            aria-describedby={
              errors.username
                ? "username-error"
                : undefined
            }
            {...register("username")}
          />

          {errors.username && (
            <p
              id="username-error"
              className="error"
            >
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>

          <div className="password-wrapper">
            <input
              id="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter a password"
              autoComplete="new-password"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={
                errors.password
                  ? "password-error"
                  : undefined
              }
              {...register("password")}
            />

            <button
              type="button"
              className="toggle-password-btn"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              aria-pressed={showPassword}
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword
                ? "Hide"
                : "Show"}
            </button>
          </div>

          {errors.password && (
            <p
              id="password-error"
              className="error"
            >
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="review-buttons">
          <button
            type="button"
            className="back-btn"
            onClick={prevStep}
          >
            ← Back
          </button>

          <button
            className="next-btn"
            type="submit"
            disabled={!isValid}
          >
            Next →
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;