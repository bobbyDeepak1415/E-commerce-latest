import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h3>e-shop</h3>
          <p>
            Your one-step for all your needs.Shop with use and experience the
            best online shopping experiences
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Follow us</h4>
          <div>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter className="text-blue-500"/>
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
