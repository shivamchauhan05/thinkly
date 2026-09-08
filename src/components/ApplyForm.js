"use client";

import React, { useState } from "react";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiCalendar,
  FiFlag,
  FiLayers,
  FiClock,
  FiEdit3,
  FiBriefcase,
  FiWifi,
  FiFileText,
  FiUploadCloud,
} from "react-icons/fi";

export default function CourseRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    currentYear: "",
    studypassed: "",
    internshipDomain: "",
    tenure: "",
    whyJoin: "",
    priorExperience: "",
    flexibleSchedule: "",
    file: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const labelClass =
    "flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2";

  const iconClass = "text-green-600 text-[17px]";

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 hover:border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100";

  const selectClass =
    "w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-900 outline-none transition-all duration-200 hover:border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "file") {
          if (value) {
            payload.append("file", value);
          }
        } else {
          payload.append(key, value ?? "");
        }
      });

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      alert("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      currentYear: "",
      studypassed: "",
      internshipDomain: "",
      tenure: "",
      whyJoin: "",
      priorExperience: "",
      flexibleSchedule: "",
      file: null,
    });
  };

  if (submitted) {
    return (
      <div
        id="apply"
        className="
          min-h-screen
          bg-gradient-to-br
          from-slate-50
          to-green-50
          py-16
          px-4
          font-sans
          antialiased
        "
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="
              bg-white
              rounded-2xl
              shadow-xl
              shadow-gray-200/50
              border
              border-gray-100
              p-12
              text-center
            "
          >
            {/* Success Icon */}

            <div
              className="
                w-16
                h-16
                bg-green-100
                rounded-full
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              "
            >
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2
              className="
                text-3xl
                font-bold
                text-gray-900
                mb-3
              "
            >
              Application Submitted!
            </h2>

            <p
              className="
                text-gray-600
                mb-8
                max-w-md
                mx-auto
              "
            >
              Thank you, {formData.name}! Your application has been received.
              Our team will review it and get back to you shortly.
            </p>

            <button
              onClick={resetForm}
              className="
                bg-green-600
                hover:bg-green-700
                text-white
                font-semibold
                text-sm
                px-8
                py-3
                rounded-xl
                shadow-lg
                shadow-green-600/20
                transition-all
                duration-200
                hover:shadow-xl
                hover:-translate-y-0.5
              "
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  // main form

  return (
    <div
      id="apply"
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        to-green-50
        py-12
        px-4
        font-sans
        antialiased
      "
    >
      <div className="max-w-4xl mx-auto">
        {/* header  */}
        <div className="text-center mb-10">
          {/* LOGO */}

          <div className="flex items-center justify-center mb-5">
            <img
              src="/logo.png"
              alt="Logo"
              className="
                h-auto
                w-64
                object-contain
              "
            />
          </div>

          {/* HEADING */}

          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-900
              mb-3
            "
          >
            Course <span className="text-green-600">Registration</span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              text-gray-500
              max-w-lg
              mx-auto
              leading-relaxed
            "
          >
            Launch your career journey with industry-relevant domains, hands-on
            projects, and expert mentorship. Fill out this form to <span className="text-green-600">get started</span> .
          </p>
        </div>

        {/* form  */}

        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            rounded-2xl
            shadow-xl
            shadow-gray-200/50
            p-6
            md:p-10
            space-y-6
            border
            border-gray-100
          "
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                <FiUser className={iconClass} />

                <span>
                  Full Name <span className="text-red-500">*</span>
                </span>
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                <FiMail className={iconClass} />

                <span>
                  Email Address <span className="text-red-500">*</span>
                </span>
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                <FiPhone className={iconClass} />

                <span>
                  Phone Number <span className="text-red-500">*</span>
                </span>
              </label>

              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9+\-\s]{10,15}"
                title="Please enter a valid phone number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                <FiBookOpen className={iconClass} />

                <span>
                  College / University <span className="text-red-500">*</span>
                </span>
              </label>

              <input
                type="text"
                name="college"
                required
                placeholder="e.g. Delhi University"
                value={formData.college}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                <FiCalendar className={iconClass} />

                <span>Current Year of Study</span>
              </label>

              <div className="relative">
                <select
                  name="currentYear"
                  value={formData.currentYear}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select year</option>

                  <option value="1st Year">1st Year</option>

                  <option value="2nd Year">2nd Year</option>

                  <option value="3rd Year">3rd Year</option>

                  <option value="4th Year">4th Year</option>

                  <option value="completed">Completed</option>
                </select>

                <svg
                  className="
                    w-4
                    h-4
                    text-gray-400
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    pointer-events-none
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* PASSED YEAR */}

            <div>
              <label className={labelClass}>
                <FiFlag className={iconClass} />

                <span>
                  Current year of study passed{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <input
                type="text"
                name="studypassed"
                required
                placeholder="e.g. 2025"
                value={formData.studypassed}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>
              <FiLayers className={iconClass} />

              <span>Preferred Domain</span>
            </label>

            <div className="relative">
              <select
                name="internshipDomain"
                value={formData.internshipDomain}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select domain</option>

                <option value="Web Development">Web Development</option>

                <option value="Data Science">Data Science</option>

                <option value="UI/UX Design">UI/UX Design</option>

                <option value="Digital Marketing">Digital Marketing</option>

                <option value="Content Writing">Content Writing</option>

                <option value="SEO">SEO</option>

                <option value="PHP Developer">PHP Developer</option>
              </select>

              <svg
                className="
                  w-4
                  h-4
                  text-gray-400
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  pointer-events-none
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              <FiClock className={iconClass} />

              <span>
                Internship Tenure <span className="text-red-500">*</span>
              </span>
            </label>

            <div className="relative">
              <select
                name="tenure"
                required
                value={formData.tenure}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select tenure</option>

                <option value="1 Month">1 Month</option>

                <option value="2 Months">2 Months</option>

                <option value="3 Months">3 Months</option>

                <option value="6 Months">6 Months</option>
              </select>

              <svg
                className="
                  w-4
                  h-4
                  text-gray-400
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  pointer-events-none
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              <FiEdit3 className={iconClass} />

              <span>Why do you want to join this internship?</span>
            </label>

            <textarea
              name="whyJoin"
              placeholder="Tell us about your motivation..."
              value={formData.whyJoin}
              onChange={handleChange}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className={labelClass}>
              <FiBriefcase className={iconClass} />

              <span>
                Prior Experience in this Domain{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>

            <div className="grid gap-3 mt-2">
              {[
                "Yes (Beginner)",
                "Yes (Intermediate)",
                "No, I am a complete fresher looking to learn",
              ].map((option) => (
                <label
                  key={option}
                  className={`
                    flex
                    items-center
                    gap-3
                    cursor-pointer
                    px-4
                    py-3
                    rounded-xl
                    border
                    transition-all
                    duration-200
                    ${
                      formData.priorExperience === option
                        ? "border-green-500 bg-green-50 shadow-sm"
                        : "border-gray-100 hover:border-green-300 hover:bg-green-50/40"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="priorExperience"
                    value={option}
                    required
                    checked={formData.priorExperience === option}
                    onChange={handleChange}
                    className="
                      w-4
                      h-4
                      accent-green-600
                    "
                  />

                  <span
                    className="
                      text-sm
                      text-gray-700
                      font-medium
                    "
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              <FiWifi className={iconClass} />

              <span>
                Comfortable with a flexible remote schedule?{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>

            <div className="flex gap-3 mt-2">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className={`
                    flex
                    items-center
                    gap-2
                    cursor-pointer
                    px-5
                    py-3
                    rounded-xl
                    border
                    transition-all
                    duration-200
                    ${
                      formData.flexibleSchedule === option
                        ? "border-green-500 bg-green-50 shadow-sm"
                        : "border-gray-100 hover:border-green-300 hover:bg-green-50/40"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="flexibleSchedule"
                    value={option}
                    required
                    checked={formData.flexibleSchedule === option}
                    onChange={handleChange}
                    className="
                      w-4
                      h-4
                      accent-green-600
                    "
                  />

                  <span
                    className="
                      text-sm
                      text-gray-700
                      font-medium
                    "
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              <FiFileText className={iconClass} />

              <span>
                Resume / CV <span className="text-red-500">*</span>
              </span>
            </label>

            <p
              className="
                text-xs
                text-gray-400
                mb-3
              "
            >
              Upload your resume (PDF, DOC, DOCX — max 5MB).
            </p>

            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-2
                border-2
                border-dashed
                border-green-300
                rounded-xl
                px-6
                py-7
                text-sm
                text-gray-600
                font-medium
                bg-green-50/30
                hover:bg-green-50
                hover:border-green-500
                cursor-pointer
                transition-all
                duration-200
              "
            >
              <FiUploadCloud
                className="
                  w-6
                  h-6
                  text-green-600
                "
              />

              <span className="text-green-700">Click to upload file</span>

              <span className="text-xs text-gray-400">
                PDF, DOC or DOCX — Max 5MB
              </span>

              <input
                type="file"
                name="file"
                required
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  const selected = e.target.files[0];

                  if (selected && selected.size > 5 * 1024 * 1024) {
                    alert("File size must be under 5MB");

                    e.target.value = "";

                    return;
                  }

                  setFormData({
                    ...formData,
                    file: selected,
                  });
                }}
              />
            </label>

            {formData.file && (
              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-green-700
                  bg-green-50
                  border
                  border-green-100
                  rounded-lg
                  px-3
                  py-2
                "
              >
                <FiFileText
                  className="
                    w-4
                    h-4
                    text-green-600
                    flex-shrink-0
                  "
                />

                <span className="truncate">{formData.file.name}</span>
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="
                w-full
                bg-green-600
                hover:bg-green-700
                active:bg-green-800
                text-white
                font-semibold
                text-sm
                px-8
                py-3.5
                rounded-xl
                shadow-lg
                shadow-green-600/20
                transition-all
                duration-200
                hover:shadow-xl
                hover:-translate-y-0.5
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {submitting ? (
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <svg
                    className="
                      w-4
                      h-4
                      animate-spin
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="
                        M4 12a8 8 0 018-8V0
                        C5.373 0 0 5.373 0 12h4
                        zm2 5.291A7.962 7.962 0
                        014 12H0c0 3.042 1.135
                        5.824 3 7.938l3-2.647z
                      "
                    />
                  </svg>

                  <span>Submitting...</span>
                </span>
              ) : (
                "Submit Application →"
              )}
            </button>

            <p
              className="
                text-xs
                text-gray-400
                text-center
                mt-4
              "
            >
              By submitting, you agree to our{" "}
              <a
                href="#"
                className="
                  text-green-600
                  underline
                  hover:text-green-700
                "
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="
                  text-green-600
                  underline
                  hover:text-green-700
                "
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
