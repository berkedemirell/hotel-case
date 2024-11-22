import logo from "../images/logo.png";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-slate-50">
      <div className="flex flex-row mds:grid mds:grid-cols-2 mob:grid-cols-1 items-center justify-between gap-12 p-24 border-b-2 border-buttonColor">
        <div className="flex flex-col items-start justify-center gap-4 w-1/4 mds:w-fit">
          <div className="">
            <img src={logo} alt="" className="w-32" />
          </div>
          <div>
            <p className="xxxs:text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              soluta minus, excepturi quidem ipsam quis.
            </p>
          </div>
          <div className="flex xxxs:text-xs flex-col items-start justify-center gap-2">
            <div className="flex flex-row gap-4 items-center xxxs:text-xs">
              <span className="text-xl xxxs:text-lg">
                <FaHome />
              </span>
              <p>48400 Bodrum, Türkiye</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <span className="text-xl xxxs:text-xs">
                <FaPhone />
              </span>
              <p>+123456789</p>
            </div>
            <div className="flex items-center flex-row gap-4">
              <span className="text-xl xxxs:text-xs">
                <FaEnvelope />
              </span>
              <p>mail@asda.com</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 mds:w-fit mob:w-full">
          <div className="flex flex-col gap-6">
            <div><p className="text-2xl xxxs:text-xl">Links</p></div>
            <div className="flex flex-col items-start justify-start gap-2 xxxs:text-sm">
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>About Us</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Services</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Team</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Gallery</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Terms</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Privacy Policy</p></Link>
            </div>
          </div>
        </div>
        <div className="w-1/4 mds:w-fit mob:w-full">
          <div className="flex flex-col gap-6">
            <div><p className="text-2xl xxxs:text-xl">Useful Links</p></div>
            <div className="flex flex-col items-start justify-start gap-2 xxxs:text-sm">
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Home</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Blog</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>FAQ</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Testimonials</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Gallery</p></Link>
              <Link className="flex flex-row items-center gap-1 hover:text-buttonColor transition-all duration-700"><span><FaArrowRight/></span><p>Contact Us</p></Link>
            </div>
          </div>
        </div>
        <div className="w-1/4 mds:w-fit"> 
          <div className="flex flex-col justify-start gap-6">
            <div>
              <p className="text-2xl xxxs:text-xl">Newsletter</p>
            </div>
            <div>
              <p className="xxxs:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis pariatur eaque rerum quis quod.</p>
            </div>
            <div className="flex flex-col gap-2">
              <input type="text" className="p-2 xxxs:p-1 text-slate-950" placeholder="E-mail*"/>
              <button className="bg-buttonColor p-2 xxxs:p-1">Abone Ol</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-24 pr-24 p-4 flex items-center justify-end mob:justify-center">
        <div className="flex flex-row gap-4">
          <Link className="text-2xl"><FaFacebook/></Link>
          <Link className="text-2xl"><FaTwitter/></Link>
          <Link className="text-2xl"><FaInstagram/></Link>
          <Link className="text-2xl"><FaPinterest/></Link>
          <Link className="text-2xl"><FaYoutube/></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
