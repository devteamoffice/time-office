import React from "react";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <script>document.write(new Date().getFullYear())</script> &copy;
            TimeOffice. Designed and Developed by{" "}
            <FaHeart class="fs-18 align-middle text-danger" />{" "}
            <a
              href="https://pickyvibe.com"
              class="fw-bold footer-text"
              target="_blank"
            >
              PickyVibe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
