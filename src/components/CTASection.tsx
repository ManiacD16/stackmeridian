import React, { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  CheckCircle,
} from "lucide-react";
import Particles from "./Particles";
import emailjs from "emailjs-com";

// Initialize EmailJS with the user ID
emailjs.init("3ZClUwD2Xtx6zxLIR"); // Replace 'YOUR_USER_ID' with your actual user ID from the EmailJS dashboard

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({
  Icon,
  href,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-200 transition-colors duration-300"
  >
    <Icon size={24} />
  </a>
);

export const CTASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false); // Track if the mail was sent
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const btn = (e.target as Element).querySelector(
      "button"
    ) as HTMLButtonElement;
    btn.textContent = "Sending...";

    const serviceID = "service_k2t7co8"; // Your EmailJS service ID
    const templateID = "template_02g0d9s"; // Your EmailJS template ID

    try {
      await emailjs.sendForm(
        serviceID,
        templateID,
        e.target as HTMLFormElement
      );
      btn.textContent = "Send Email";
      setIsMailSent(true); // Set mail sent to true
      setTimeout(() => {
        setIsMailSent(false); // Reset after 3 seconds
      }, 3000);
      setIsModalOpen(false); // Close the modal after success
    } catch (err) {
      btn.textContent = "Send Email";
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20">
      <Particles color="rgba(255, 255, 255, 0.8)" count={50} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#00205B] to-blue-600 rounded-2xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="relative text-blue-50 mb-8">
            Let's discuss how Stack Meridian can help you achieve your digital
            goals.
          </p>
          <a
            href="#"
            onClick={() => setIsModalOpen(true)}
            className="relative group inline-flex items-center justify-center bg-white text-[#00205B] px-6 py-3 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 mb-8"
          >
            Contact Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="relative flex justify-center space-x-6 z-10">
            <SocialIcon
              Icon={Facebook}
              href="https://www.facebook.com/stackmeridian"
            />
            <SocialIcon
              Icon={Twitter}
              href="https://www.twitter.com/stackmeridian"
            />
            <SocialIcon
              Icon={LinkedIn}
              href="https://www.linkedin.com/company/stackmeridian"
            />
            <SocialIcon
              Icon={Instagram}
              href="https://www.instagram.com/stackmeridian"
            />
          </div>
        </div>
      </div>

      {/* Modal Popup for form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleFormSubmit} id="form">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  rows={4}
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-red-500 hover:text-red-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup - Mail Sent */}
      {isMailSent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md text-center">
            <CheckCircle size={48} className="text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Mail Sent</h3>
            <p className="text-sm text-gray-600">
              Your message has been sent successfully!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
