import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/log.png";
import { BiMap } from "react-icons/bi";
// import Icon from "./Icon";
import { SiGoogle } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import "./Links.styles.css";
// import GoogleLogin from "react-google-login";
const Links = () => {
  document.title = "Palash";

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">Image is Here</div>
        <div class="col-md-4">
          <div className="bg-hero flex flex-col justify-center items-center h-screen">
            <div>
              <motion.h1
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <img
                  src={logo}
                  className="w-28 rounded-full pointer-events-none"
                  alt="logo"
                />
              </motion.h1>
            </div>
            <div>
              <motion.h1
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <p className="px-6 pt-2 pb-2.5 font-large text-xl text-center text-white">
                  OUTLETCONTROL
                </p>
                <div className="flex flex-row justify-between text-white">
                  <div className="px-1 pt-1 pb-1 font-small text-lg leading-normal justify-between">
                    <BiMap size={26} />
                  </div>
                  <div className="text-2xl">
                    <p>OUTLET CONTROL PRJOCET</p>
                  </div>
                </div>
              </motion.h1>
            </div>
            <div className="py-4 text-white">
              <a
                href="/"
                className="block p-6 max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md"
              >
                <p className="font-bold text-black-700 selection:text-gray-400 text-xs">
                  Coninue
                </p>
              </a>
            </div>
            <div>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 bg-[#0a192f] hover:bg-gray/90 focus:ring-4 focus:outline-none focus:ring-[#0a192f]/50 font-medium rounded-lg text-lg w-96 px-5 pt-2.5 pb-2 flex justify-between"
                >
                  <div>
                    {/* <Icon /> */}
                    <BsFacebook />
                  </div>
                  <div className="text-[#ccd6f6]">Continue with Facebook</div>
                  <div></div>
                </motion.button>
              </a>
            </div>
            <div className="py-4">
              <a href="#" rel="noopener noreferrer" target="_blank">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 bg-[#0a192f] hover:bg-gray/90 focus:ring-4 focus:outline-none focus:ring-[#0a192f]/50 font-medium rounded-lg text-lg w-96 px-5 pt-2.5 pb-2 flex justify-between"
                >
                  <div>
                    {/* <Icon /> */}
                    <SiGoogle />
                  </div>
                  <div className="text-[#ccd6f6]">Continue with Google</div>
                  <div></div>
                </motion.button>
              </a>
            </div>
            <div>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 bg-[#0a192f] hover:bg-gray/90 focus:ring-4 focus:outline-none focus:ring-[#0a192f]/50 font-medium rounded-lg text-lg w-96 px-5 pt-2.5 pb-2 flex justify-between"
                >
                  <div>
                    {/* <Icon /> */}
                    <BsApple />
                  </div>
                  <div className="text-[#ccd6f6]">Continue with Apple</div>
                  <div></div>
                </motion.button>
              </a>
            </div>

            {/* <div>
        <Payment />
      </div> */}
            <footer>
              <div className="py-6 px-4 flex flex-col items-center justify-center text-center">
                <h3>Customer Booking?</h3>
                <span class="text-sm text-gray-300 sm:text-center">
                  If you are a customer wishing to book a service
                </span>
                <div className="py-4 text-white">
                  <a
                    href="/"
                    className="block p-6 max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md"
                  >
                    <p className="font-bold text-black-700 selection:text-gray-400 text-xs">
                      Sign Up
                    </p>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
