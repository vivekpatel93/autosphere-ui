import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    pinCode: "",
    houseNo: "",
    panNumber: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // ---------- VALIDATIONS ----------
  const validatePhone = (value) => {
    // exactly 10 digits + not all same number
    const regex = /^(?!([0-9])\1{9})\d{10}$/;

    if (!regex.test(value)) {
      setPhoneError("Phone must be 10 valid digits (not repeating).");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (value) => {
    const regex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(value)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  // ---------- HANDLE CHANGE ----------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "phone") validatePhone(value);
    if (name === "email") validateEmail(value);
  };

  // ---------- SUBMIT ----------
  const handleSubmit = async (e) => {
  e.preventDefault();
    if (phoneError || emailError) {
      alert("Please fix validation errors before submitting.");
      return;
    }
  try {
    // Save to local storage
    localStorage.setItem("registrationData", JSON.stringify(form));

    const res = await fetch("http://localhost:8080/user/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("Failed to save data");
    }

    const data = await res.json();
    setSubmitted(data);

    alert("Registration successful!");
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Check console.");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gray-900">
      <div className="shadow-xl rounded-2xl p-8 w-full max-w-md bg-gray-800 text-white" >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          {/* NAME */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter your name"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Create password"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter your phone number"
            />
            {phoneError && (
              <p className="text-red-600 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          {/* CITY */}
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter city name"
            />
          </div>

          {/* PIN CODE */}
          <div>
            <label className="block mb-1 font-medium">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={form.pinCode}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter your pin code"
            />
          </div>

          {/* HOUSE NUMBER */}
          <div>
            <label className="block mb-1 font-medium">House Number</label>
            <input
              type="text"
              name="houseNo"
              value={form.houseNo}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter your house no"
            />
          </div>

          {/* PAN NUMBER */}
          <div>
            <label className="block mb-1 font-medium">Pan Number</label>
            <input
              type="text"
              name="panNumber"
              value={form.panNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 bg-gray-700 border-none"
              placeholder="Enter your pan number"
            />
          </div>

          <button
            type="submit"
            disabled={phoneError || emailError}
            className="w-full bg-blue-600 disabled:bg-gray-400 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Saved Data:</h3>
            <p>
              <b>Name:</b> {submitted.name}
            </p>
            <p>
              <b>Email:</b> {submitted.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
