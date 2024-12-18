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
    const form = formRef.current;
    if (!form) return;
    const commonDuration = 1.2;
    const commonEasing = "power2.inOut";

    if (isOpen) {
      gsap.to(form, {
        height: "auto",
        opacity: 1,
        paddingTop: 20,
        paddingBottom: 20,
        duration: commonDuration,
        ease: commonEasing,
      });
    } else {
      gsap.to(form, {
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: commonDuration,
        ease: commonEasing,
      });
    }
  }, [isOpen]);

  const toggleForm = () => setIsOpen((prev) => !prev);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = async () => {
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        toggleForm();
        toast.success("Message sent successfully!");
        return true;
      } else {
        toast.error(`Failed to send message: ${data.error}`);
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
      return false;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-[70vw] sm:w-[350px]">
      <ToastContainer />
      <div
        onClick={toggleForm}
        className="flex items-center justify-center gap-2 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        <Image
          src={isOpen ? "/icon/close.png" : "/icon/support.png"}
          alt="Support"
          width={24}
          height={24}
        />
        <span className="text-lg font-semibold">
          {isOpen ? "Close" : "Contact Us"}
        </span>
      </div>

      <div
        ref={formRef}
        className="mt-4 bg-gradient-to-tr from-blue-400 to-blue-500 text-black shadow-2xl rounded-lg overflow-hidden opacity-0 h-0 transition-all"
      >
        <div className="p-4 sm:p-6">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 rounded-lg border-2 border-blue-300 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 rounded-lg border-2 border-blue-300 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-2 rounded-lg border-2 border-blue-300 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 rounded-lg border-2 border-blue-300 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <SubmitButton
                name="Send"
                submit={submit}
                onSuccess={() => toast.success("Message sent successfully!")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportButton;
