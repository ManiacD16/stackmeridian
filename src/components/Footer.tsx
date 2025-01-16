import React from "react";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({
  Icon,
  href,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#00205B] transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src="/placeholder-logo.svg"
              alt="Stack Meridian"
              className="h-8 w-auto"
            />
            <p className="mt-2 text-sm text-gray-600">
              Transforming ideas into digital reality
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-[#00205B] mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#00205B]"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#00205B]">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-600 hover:text-[#00205B]"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#00205B]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <h3 className="text-lg font-semibold text-[#00205B] mb-2">
              Connect With Us
            </h3>
            <div className="flex justify-end space-x-4">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com" />
              <SocialIcon Icon={Twitter} href="https://www.twitter.com" />
              <SocialIcon Icon={LinkedIn} href="https://www.linkedin.com" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Stack Meridian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
