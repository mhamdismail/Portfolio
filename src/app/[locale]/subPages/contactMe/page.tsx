// ContactForm.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import InputField from "@/components/Input/input"; // Adjust import path as necessary
import SocialMediaIcons from "@/components/Contactus/SocialMediaIcons"; // Adjust import path as necessary
import ContactDetails from "@/components/Contactus/ContactDetails"; // Adjust import path as necessary
import { gsap } from "gsap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", () => {
        gsap.to(buttonRef.current, {
          scale: 1.01,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
      buttonRef.current.addEventListener("mousedown", () => {
        gsap.to(buttonRef.current, {
          scale: 0.9,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          duration: 0.1,
          ease: "power2.out",
        });
      });
      buttonRef.current.addEventListener("mouseup", () => {
        gsap.to(buttonRef.current, {
          scale: 1.01,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          duration: 0.1,
          ease: "power2.out",
        });
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("API Error:", data);
        setError(data.message || "Something went wrong.");
        setSuccess(false);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("An error occurred. Please try again later.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen pt-10 ">
      <div className="p-6 w-10/12 bg-gray-900 rounded-lg shadow-md h-5/6  ">
        <div className="flex justify-center items-center text-4xl text-white font-bold pt-7">
          Contact Me
        </div>
        <form onSubmit={handleSubmit} className="space-y-8 ">
          <InputField
            input={{
              value: formData.name,
              set: (value) => setFormData({ ...formData, name: value }),
            }}
            name="Your Name"
            placeholder="Your Name"
            error={{
              value: !!error && !formData.name,

              set: (value) =>
                setError(value ? "Please fill out all fields." : ""),
            }}
            disable={false}
            inputLength={1}
            maxInputLength={50}
            type="text"
          />
          <InputField
            input={{
              value: formData.email,
              set: (value) => setFormData({ ...formData, email: value }),
            }}
            name="Your Email"
            placeholder="Your Email"
            error={{
              value: !!error && !formData.email,
              set: (value) =>
                setError(value ? "Please fill out all fields." : ""),
            }}
            disable={false}
            inputLength={1}
            maxInputLength={100}
            type="email"
          />
          <InputField
            input={{
              value: formData.phone,
              set: (value) => setFormData({ ...formData, phone: value }),
            }}
            name="phone "
            placeholder="phone "
            error={{
              value: !!error && !formData.name,
              set: (value) =>
                setError(value ? "Please fill out all fields." : ""),
            }}
            disable={false}
            inputLength={1}
            maxInputLength={50}
            type="Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className={`w-full p-2 border rounded ${
              !!error && !formData.message
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          <button
            type="submit"
            ref={buttonRef}
            className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <SocialMediaIcons />
      </div>
      <ContactDetails />
    </div>
  );
};

export default ContactForm;
