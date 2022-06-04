import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div className="footer_div1">
        <div className="footer_div2">
          Copyright &reg; NSSH {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

