'use client'
import React, { useState } from 'react';

export default function CourseRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    currentYear: '',
    internshipDomain: '',
    tenure: '',
    whyJoin: '',
    priorExperience: '',
    flexibleSchedule: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (err) {
      alert('Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div id="apply" className="min-h-screen bg-[#f0f4f9] py-8 px-4 font-sans antialiased text-[#202124]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">Thank you, {formData.name}! Your application has been received. We &apos;ll get back to you soon.</p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', college: '', currentYear: '', internshipDomain: '', tenure: '', whyJoin: '', priorExperience: '', flexibleSchedule: '', file: null }) }}
              className="bg-[#1a73e8] hover:bg-blue-700 text-white font-medium text-sm px-6 py-2 rounded shadow-sm transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="apply" className="min-h-screen bg-[#f0f4f9] py-8 px-4 font-sans antialiased text-[#202124]">
      {/* Main Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        
        {/* Header Logo Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 flex items-center justify-start bg-white border-b border-gray-100">
            <div className="flex items-center space-x-2">
              {/* Simplistic Logo representation based on image_44ee8a.png */}
              <div className="w-10 h-10 rounded-full bg-[#0a2540] flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-bold text-[#0a2540] tracking-tight">
                thinkly<span className="text-blue-500 text-sm font-normal">.com</span>
              </span>
            </div>
          </div>
          {/* Top Decorative Blue Bar */}
          <div className="h-[10px] bg-[#4285f4] w-full"></div>
        </div>

        {/* Form Description Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative overflow-hidden">
          <h1 className="text-3xl font-normal text-black mb-2">Course registration</h1>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Welcome to Thinkly.co! Launch your career journey with industry-relevant domains, hands-on projects, and expert mentorship. Fill out this 2-minute form to register for your favorite domain and get shortlisted.
          </p>
          <hr className="my-4 border-gray-200" />
          <div className="flex justify-between items-center text-xs text-gray-600">
            <div>
              <span className="font-medium text-gray-900">shubhamjha6299@gmail.com</span>{' '}
              <a href="#" className="text-blue-600 hover:underline">Switch account</a>
            </div>
            <span className="text-gray-400 text-lg">☁️</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            The name, email address and photo associated with your Google Account will be recorded when you upload files and submit this form.
          </p>
          <p className="text-xs text-red-600 mt-4">* Indicates required question</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Field */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your answer"
              onChange={handleChange}
              className="w-full md:w-2/3 border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 text-sm transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your answer"
              onChange={handleChange}
              className="w-full md:w-2/3 border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 text-sm transition-colors"
            />
          </div>

          {/* College/University Name */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              College/University Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="college"
              required
              placeholder="Your answer"
              onChange={handleChange}
              className="w-full md:w-2/3 border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 text-sm transition-colors"
            />
          </div>

          {/* Current Year of Study */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Current Year of Study
            </label>
            <select
              name="currentYear"
              onChange={handleChange}
              className="w-full md:w-1/3 bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-blue-600"
            >
              <option value="">Choose</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          {/* Select your Preferred Internship Domain */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Select your Preferred Internship Domain
            </label>
            <select
              name="internshipDomain"
              onChange={handleChange}
              className="w-full md:w-1/3 bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-blue-600"
            >
              <option value="">Choose</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Tenure of Internship */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Tenure of Internship <span className="text-red-500">*</span>
            </label>
            <select
              name="tenure"
              required
              onChange={handleChange}
              className="w-full md:w-1/3 bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-blue-600"
            >
              <option value="">Choose</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
            </select>
          </div>

          {/* Why do you want to join */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Why do you want to join this internship at Thinkly.co?
            </label>
            <input
              type="text"
              name="whyJoin"
              placeholder="Your answer"
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 text-sm transition-colors"
            />
          </div>

          {/* Prior Experience Radio Group */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Do you have any prior experience or project work in this domain? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {[
                'Yes (Beginner)',
                'Yes (Intermediate)',
                'No, I am a complete fresher looking to learn'
              ].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer text-sm text-gray-800">
                  <input
                    type="radio"
                    name="priorExperience"
                    value={option}
                    required
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Flexible Schedule Radio Group */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-4">
              Are you comfortable with a flexible, remote/online schedule? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {['Yes', 'No'].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer text-sm text-gray-800">
                  <input
                    type="radio"
                    name="flexibleSchedule"
                    value={option}
                    required
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Resume/LinkedIn File Upload */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <label className="block text-base font-medium text-gray-900 mb-1">
              Resume / LinkedIn Profile Link <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-4">Upload or suggest standard image, documents.</p>
            <label className="inline-flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 text-sm text-blue-600 font-medium bg-white hover:bg-blue-50/50 cursor-pointer transition-colors shadow-sm">
              <span>📁</span>
              <span>Add file</span>
              <input
                type="file"
                name="file"
                className="hidden"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
              />
            </label>
            {formData.file && (
              <span className="text-xs text-gray-600 ml-3">{formData.file.name}</span>
            )}
          </div>

          {/* Form Actions (Submit & Clear) */}
          <div className="flex justify-between items-center pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#1a73e8] hover:bg-blue-700 text-white font-medium text-sm px-6 py-2 rounded shadow-sm transition-colors disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            <button
              type="reset"
              onClick={() => setFormData({})}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm px-4 py-2 transition-colors"
            >
              Clear form
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 pt-4 space-y-1">
          <p>Never submit passwords through Google Forms.</p>
          <p className="text-[10px]">
            This content is neither created nor endorsed by Google.{' '}
            <a href="#" className="underline">Report Abuse</a> -{' '}
            <a href="#" className="underline">Terms of Service</a> -{' '}
            <a href="#" className="underline">Privacy Policy</a>
          </p>
          <p className="font-semibold text-gray-600 text-sm pt-2">Google Forms</p>
        </div>

      </div>
    </div>
  );
}