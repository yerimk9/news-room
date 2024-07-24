"use client";
import React from "react";
import topBtn from "../../../public/svgs/top.svg";
import footer1 from "../../../public/svgs/footerlogo1.svg";
import footer2 from "../../../public/svgs/footerlogo2.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer footer--home">
      <button
        className="footer-pagetop footer-pagetop--home"
        aria-label="페이지 맨 위로"
        onClick={scrollToTop}
      >
        <Image
          src={topBtn}
          alt="페이지 맨 위로 버튼모양"
          width={60}
          height={60}
          className="footer-pagetop__img"
        />
      </button>
      <div className="footer-copyright">
        <p>Copyright © Livesense Inc.</p>
      </div>
      <div className="footer-logo">
        <Link className="footer-logo__a" href={"/"}>
          <Image
            src={footer1}
            alt="foot1"
            width={50}
            height={50}
            className="footer-logo__img footer-logo__img--pc"
          />
          <Image
            src={footer2}
            alt="foot2"
            width={50}
            height={50}
            className="footer-logo__img footer-logo__img--sp"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
