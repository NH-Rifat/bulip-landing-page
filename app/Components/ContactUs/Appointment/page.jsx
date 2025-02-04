"use client";
import React, { useState } from "react";
import contact_usImage from "../../../../assets/contact/Contact-Us-appointment.jpg";
import Image from "next/image";
import { Clock } from "lucide-react";

const formDataInitial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  privacyPolicy: false,
};

const formLabels = {
  heading: "Get in touch",
  subheading: "We’d love to hear from you. Please fill out this form.",
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone number",
  message: "Message",
  privacyPolicy: "You agree to our friendly privacy policy.",
  submitButton: "Make Appointment",
};

const imageDetails = {
  src: contact_usImage,
  alt: "Customer support",
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState(formDataInitial);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(JSON.stringify(formData, null, 2)); // Display data in an alert (optional)
  };

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section - Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {formLabels.heading}
          </h2>
          <p className="mt-4 text-gray-600">{formLabels.subheading}</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  {formLabels.firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={formLabels.firstName}
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block h-10  w-full border border-info-secondary-light rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  {formLabels.lastName}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={formLabels.lastName}
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block h-10  w-full border border-info-secondary-light rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              {/* Email */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  {formLabels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block h-10  w-full border border-info-secondary-light rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="phone"
                >
                  {formLabels.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block h-10  w-full border border-info-secondary-light rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                {formLabels.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-info-secondary-light rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                id="privacyPolicy"
                name="privacyPolicy"
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="h-4 w-4 rounded-full text-orange-500 border-gray-300  focus:ring-orange-500"
              />
              <label
                htmlFor="privacyPolicy"
                className="ml-2 block text-sm text-gray-700"
              >
                {formLabels.privacyPolicy}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full lg:w-1/2 py-3 px-6  flex justify-center items-center gap-2 text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span>{formLabels.submitButton}</span>{" "}
              <Clock strokeWidth={3} size={16} />
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <Image
            src={imageDetails.src}
            alt={imageDetails.alt}
            className="w-full max-w-md rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
