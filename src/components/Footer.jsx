import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail } from "react-icons/fi";
import { HiShieldCheck } from "react-icons/hi";
import logo from "../assets/logos/BBlunt-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

          {/* Logo + Social */}
          <div className="md:col-span-1">
            <img
              src={logo}
              alt="BBLUNT"
              className="space y-2 h-12  mb-2 filter brightness-0 invert"
            />
             

            <div className="flex gap-4">
              <FiFacebook className="w-4 h-4 cursor-pointer hover:text-white" />
              <FiTwitter className="w-4 h-4 cursor-pointer hover:text-white" />
              <FiInstagram className="w-4 h-4 cursor-pointer hover:text-white" />
              <FiYoutube className="w-4 h-4 cursor-pointer hover:text-white" />
              <FiMail className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className=" text-sm font-semibold text-white mb-4">
              About Us
            </h4>
            <ul className=" space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Return Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">
                Request Replacement/Returns
              </li>
            </ul>
          </div>

          {/* Our Salons */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Our Salons
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer">Mumbai</li>
              <li className="hover:text-white cursor-pointer">Hyderabad</li>
              <li className="hover:text-white cursor-pointer">Bangalore</li>
              <li className="hover:text-white cursor-pointer">Gurugram</li>
              <li className="hover:text-white cursor-pointer">Guwahati</li>
              <li className="hover:text-white cursor-pointer">Kolkata</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer">All Products</li>
              <li className="hover:text-white cursor-pointer">Hair Styling</li>
              <li className="hover:text-white cursor-pointer">Hair Colour</li>
              <li className="hover:text-white cursor-pointer">Hair Care</li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              My Account
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer">Profile</li>
              <li className="hover:text-white cursor-pointer">Orders</li>
              <li className="hover:text-white cursor-pointer">Addresses</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © 2026 Honasa Consumer Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <HiShieldCheck className="w-4 h-4" />
            <span>100% Payment Protection, Easy Return Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
