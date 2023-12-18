import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
function Footer() {
  return (
    <div className="w-full bg-bodyColor ">
      <p className="text-sm text-center text-gray-400">
        lorem ipsum dolor sit amet consectetur adipisici.
      </p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="footerIcon">
          <FaGithub />
        </span>
        <span className="footerIcon"><FaFacebookF/></span>
        <span className="footerIcon"><FaLinkedin/></span>
        <span className="footerIcon"><FiInstagram/></span>
        <span className="footerIcon"><FiMail/></span>
        <span className="footerIcon"><FaYoutube/></span>
        <span className="footerIcon"><FaTwitter/></span>
        <span className="footerIcon"><FiSend/></span>
      </div>
    </div>
  );
}

export default Footer;
