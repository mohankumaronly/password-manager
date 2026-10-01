import { useState } from "react";
import type { SyntheticEvent } from "react";

type FormData = {
  name: string;
  email: string;
};

const initialForm: FormData = { name: "", email: "" };

const SubscribeForm = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: hook up to your backend / newsletter API later
    console.log("Subscribe form submitted:", form);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <p className="text-xl font-bold text-gray-900">
          You're on the list!
        </p>
        <p className="mt-2 text-sm text-gray-600">
          We'll notify you when a new version drops.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
      {/* Name */}
      <div>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name"
          className={`w-full px-4 py-3 text-sm rounded-md border bg-white
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-shadow ${errors.name ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Business Email *"
          className={`w-full px-4 py-3 text-sm rounded-md border bg-white
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-shadow ${errors.email ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white
                   font-semibold text-sm uppercase tracking-wide
                   py-3 rounded-md transition-colors"
      >
        Subscribe
      </button>

      {/* Consent text */}
      <p className="text-xs text-gray-500 leading-relaxed">
        By clicking <strong>Subscribe</strong>, you agree to receiving product
        updates and accept our{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default SubscribeForm;