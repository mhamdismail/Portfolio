// ContactDetails.tsx
import React from "react";
import { motion } from "framer-motion";

const ContactDetails: React.FC = () => {
  return (
    <motion.div
      className="w-10/12 text-white text-center flex flex-col space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">Other Ways to Contact Us</h2>
      <p>
        Phone:{" "}
        <a href="tel:+96176875862" className="text-blue-400 hover:underline">
          +961 76 875 862
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:mohammadismail162003@gmail.com"
          className="text-blue-400 hover:underline"
        >
          mohammadismail162003@gmail.com
        </a>
      </p>
      <p>Location: Beirut, Lebanon</p>
    </motion.div>
  );
};

export default ContactDetails;
