import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex justify-center text-rose-50">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-rose-800 sm:mx-auto lg:my-8" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-xl">Socials</h1>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/elcidlang/" target="_blank">
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/elcid-dela-paz-91a9a6202"
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:elcid.delapaz@gmail.com">
                <FiMail size={30} />
              </a>
            </div>
          </div>
          <span className="block text-sm sm:text-center text-justify">
            Copyright © 2023. All Rights Reserved. This portfolio is made using
            ReactJS and Tailwind CSS.
          </span>
        </div>
      </div>
    </footer>
  );
}
