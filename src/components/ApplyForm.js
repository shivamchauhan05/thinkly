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
      <div id="apply" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 font-sans antialiased">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">Thank you, {formData.name}! Your application has been received. Our team will review it and get back to you shortly.</p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', college: '', currentYear: '', internshipDomain: '', tenure: '', whyJoin: '', priorExperience: '', flexibleSchedule: '', file: null }) }}
              className="bg-[#0a2540] hover:bg-[#0d3050] text-white font-semibold text-sm px-8 py-3 rounded-xl shadow-lg shadow-blue-900/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/10 transition-all bg-white placeholder-gray-400";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
  const selectClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/10 transition-all bg-white appearance-none";

  return (
    <div id="apply" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 font-sans antialiased">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#0a2540] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/20">
              T
            </div>
            <span className="text-2xl font-bold text-[#0a2540] tracking-tight">
              thinkly<span className="text-blue-500 text-sm font-normal">.com</span>
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Course Registration</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Launch your career journey with industry-relevant domains, hands-on projects, and expert mentorship. Fill out this form to get started.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-10 space-y-6">

          {/* Name + Email Row */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          {/* College */}
          <div>
            <label className={labelClass}>College / University <span className="text-red-500">*</span></label>
            <input type="text" name="college" required placeholder="e.g. Delhi University" value={formData.college} onChange={handleChange} className={inputClass} />
          </div>

          {/* Current Year + Domain Row */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Current Year of Study</label>
              <div className="relative">
                <select name="currentYear" value={formData.currentYear} onChange={handleChange} className={selectClass}>
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <div>
              <label className={labelClass}>Preferred Domain</label>
              <div className="relative">
                <select name="internshipDomain" value={formData.internshipDomain} onChange={handleChange} className={selectClass}>
                  <option value="">Select domain</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <label className={labelClass}>Internship Tenure <span className="text-red-500">*</span></label>
            <div className="relative">
              <select name="tenure" required value={formData.tenure} onChange={handleChange} className={selectClass}>
                <option value="">Select tenure</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Why Join */}
          <div>
            <label className={labelClass}>Why do you want to join this internship?</label>
            <textarea name="whyJoin" placeholder="Tell us about your motivation..." value={formData.whyJoin} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} />
          </div>

          {/* Prior Experience */}
          <div>
            <label className={labelClass}>Prior Experience in this Domain <span className="text-red-500">*</span></label>
            <div className="space-y-3 mt-1">
              {[
                'Yes (Beginner)',
                'Yes (Intermediate)',
                'No, I am a complete fresher looking to learn'
              ].map((option) => (
                <label key={option} className={`flex items-center space-x-3 cursor-pointer p-3 rounded-xl border transition-all ${formData.priorExperience === option ? 'border-[#0a2540] bg-[#0a2540]/5' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}>
                  <input type="radio" name="priorExperience" value={option} required checked={formData.priorExperience === option} onChange={handleChange} className="w-4 h-4 text-[#0a2540] border-gray-300 focus:ring-[#0a2540]" />
                  <span className="text-sm text-gray-700 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Flexible Schedule */}
          <div>
            <label className={labelClass}>Comfortable with a flexible remote schedule? <span className="text-red-500">*</span></label>
            <div className="flex space-x-4 mt-1">
              {['Yes', 'No'].map((option) => (
                <label key={option} className={`flex items-center space-x-2 cursor-pointer p-3 rounded-xl border transition-all ${formData.flexibleSchedule === option ? 'border-[#0a2540] bg-[#0a2540]/5' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}>
                  <input type="radio" name="flexibleSchedule" value={option} required checked={formData.flexibleSchedule === option} onChange={handleChange} className="w-4 h-4 text-[#0a2540] border-gray-300 focus:ring-[#0a2540]" />
                  <span className="text-sm text-gray-700 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className={labelClass}>Resume / LinkedIn Profile <span className="text-red-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Upload your resume or share your LinkedIn profile link.</p>
            <label className="flex items-center justify-center space-x-2 border-2 border-dashed border-gray-200 rounded-xl px-6 py-5 text-sm text-gray-500 font-medium bg-gray-50/50 hover:bg-gray-100 cursor-pointer transition-all hover:border-gray-300">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <span>Click to upload file</span>
              <input type="file" name="file" className="hidden" onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} />
            </label>
            {formData.file && (
              <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600 bg-green-50 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{formData.file.name}</span>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button type="submit" disabled={submitting} className="w-full bg-[#0a2540] hover:bg-[#0d3050] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-blue-900/20 transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
              {submitting ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span>Submitting...</span>
                </span>
              ) : 'Submit Application'}
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
              By submitting, you agree to our{' '}
              <a href="#" className="text-[#0a2540] underline hover:no-underline">Terms</a> and{' '}
              <a href="#" className="text-[#0a2540] underline hover:no-underline">Privacy Policy</a>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
