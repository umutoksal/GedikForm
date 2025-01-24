import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"; // Instagram, LinkedIn, and GitHub icons
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <div className="text-white text-lg font-bold">Gedik</div>
      <p className="text-sm text-white">Copyright 2024 by @Umut</p>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/umutmotovlog/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/umut-toksal-77b163306/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={25} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
