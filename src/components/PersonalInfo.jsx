import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../validation/schema";

function PersonalInfo({
  formData,
  setFormData,
  nextStep,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange",
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
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
          <label htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Charles Leclerc"
            autoFocus
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={
              errors.fullName ? "fullName-error" : undefined
            }
            {...register("fullName")}
          />

          {errors.fullName && (
            <p
              id="fullName-error"
              className="error"
            >
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="kimi55137@gmail.com"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={
              errors.email ? "email-error" : undefined
            }
            {...register("email")}
          />

          {errors.email && (
            <p
              id="email-error"
              className="error"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number <span className="required">*</span>
          </label>

          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Enter a 10-digit number"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={
              errors.phone ? "phone-error" : undefined
            }
            {...register("phone")}
          />

          {errors.phone && (
            <p
              id="phone-error"
              className="error"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          className="next-btn"
          type="submit"
          disabled={!isValid}
        >
          Next →
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;