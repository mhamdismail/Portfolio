"use client";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import SubmitButton from "../Button/SubmitButton";
import gsap from "gsap";
interface SupportButtonProps {
  isVisible: boolean;
}
const SupportButton: React.FC<SupportButtonProps> = ({ isVisible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isVisible]);
  useEffect(() => {
    const form = formRef.current;
    if (form) {
      const fullHeight = form.scrollHeight + 40;
      if (isOpen) {
        gsap.to(form, {
          height: fullHeight,
          paddingBottom: 20,
          paddingTop: 20,
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(form, { height: "auto" });
          },
        });
      } else {
        // Closing the form with an animation
        gsap.to(form, {
          height: 0,
          paddingBottom: 0,
          paddingTop: 0,
          duration: 1,
          ease: "power3.inOut",
        });
      }
    }
  }, [isOpen]);

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const submit = async () => {
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        toggleForm();
        toast.success("Message sent successfully!");
        return true;
      } else {
        toast.error(`Failed to send message: ${data.error}`);
        return false;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while sending the message.");
      return false;
    }
  };

  return (
    <div className="relative md: bottom-0 w-[80vw] sm:w-2/3 md:w-1/2 text-white">
      <ToastContainer />
      <div
        onClick={toggleForm}
        className="relative bg-gradient-to-tr from-blue-400 to-blue-500 rounded-tl-full flex items-center justify-center bg-customDarkBlue pt-2 cursor-pointer text-lg md:text-2xl"
      >
        {isOpen && (
          <Image
            src="/icon/close.png"
            alt="Close Form"
            loading="lazy"
            width={30}
            height={30}
            className="absolute right-0 top-0"
          />
        )}
        <Image
          src="/icon/support.png"
          alt="Support"
          loading="lazy"
          width={50}
          height={30}
        />
        <span>Contact Us</span>
      </div>

      <div
        ref={formRef}
        className="space-y-2 bg-gradient-to-tr from-blue-400 to-blue-500 px-4 h-0 overflow-hidden"
      >
        <div>
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-1 border placeholder:text-transparent text-blue-500 border-white outline-none"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="text-md font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border placeholder:text-transparent text-blue-500 border-white outline-none"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="text-md font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 border placeholder:text-transparent text-blue-500 border-white outline-none"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border placeholder:text-transparent text-blue-500 border-white outline-none"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <SubmitButton
          name="Submit"
          submit={submit}
          onSuccess={() => toast.success("Message sent successfully!")}
        />
      </div>
    </div>
  );
};

export default SupportButton;
