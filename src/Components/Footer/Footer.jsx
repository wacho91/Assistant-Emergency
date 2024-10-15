
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Logo from "../../assets/logo.png"

import { motion } from "framer-motion"


const Footer = () => {
  return (
    <div>
        <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
            {/*Brand Info*/}
            <div className="space-y-4">
                <img src={Logo} alt="logo" className="w-40" />
                <p className="text-gray-400 xl:max-w-[400px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                    voluptatum ut molestiae facere.
                </p>
            </div>
            {/*Social Icons*/}
            <div className="flex space-x-6 text-3xl">
                <FaInstagram className="hover:text-primary duration-200" />
                <FaFacebook className="hover:text-primary duration-200" />
                <FaLinkedin className="hover:text-primary duration-200" />
            </div>
        </div>
    </div>
  )
}

export default Footer
