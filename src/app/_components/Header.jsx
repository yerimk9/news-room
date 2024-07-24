"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import gsap from "gsap";
import Image from "next/image";
import mock from "../data/mock.json";

function Header(props) {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  useEffect(() => {
    const headerTitleEl = document.querySelector(".logo__title");
    const headerLogoEl = document.querySelector(".logo__frog");

    const handleScroll = _.throttle(function () {
      const currentScrollY = window.scrollY;
      const isSmallScreen = window.innerWidth <= 1100;

      if (currentScrollY === 0) {
        // At the top of the page
        gsap.to(headerTitleEl, {
          top: "45px",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        if (!isSmallScreen) {
          gsap.to(headerLogoEl, {
            width: "200px",
            height: "200px",
            top: 0,
            left: "10px",
            duration: 0.1,
            ease: "power2.out",
          });
        }
      } else {
        // Not at the top of the page
        gsap.to(headerTitleEl, {
          top: "-100px",
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        if (!isSmallScreen) {
          gsap.to(headerLogoEl, {
            width: "110px",
            height: "110px",
            top: "30px",
            left: "30px",
            duration: 0.1,
            ease: "power2.out",
          });
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <button className="logo" aria-label="사이트 틉으로">
        <div className="logo__frog">
          <Link href="/" className="logo__frog-a"></Link>
          <div className="logo__title">
            <Link href="/" className="logo__a">
              <Image
                src="https://q.livesense.co.jp/images/common/logo_title.png"
                alt="Q by Livesense"
                width={1674}
                height={96}
                className="logo__image"
              />
            </Link>
          </div>
        </div>
      </button>

      <button
        className={`burger-button ${navVisible ? "open" : ""}`}
        aria-label="네비게이션의 계폐"
        onClick={toggleNav}
      >
        <div className="burger-button__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {!navVisible ? (
          <Image
            src="https://q.livesense.co.jp/images/common/menu.svg"
            className="burger-button__label burger-button__menu"
            alt="메뉴 열기"
            width={60}
            height={60}
          />
        ) : (
          <Image
            src="https://q.livesense.co.jp/images/common/close.svg"
            className="burger-button__label burger-button__close"
            alt="메뉴 닫기"
            width={60}
            height={60}
          />
        )}
      </button>

      <nav className={`gnav ${navVisible ? "visible" : ""}`}>
        <div className="gnav-wrapper">
          <div className="gnav-menu">
            <div className="gnav-menu-title"></div>
            <div className="gnav-menu__box">
              <div className="gnav-menu-toc">
                <p className="gnav-menu-toc__all">
                  <Link href="/newslist" className="gnav-menu-toc__a">
                    NEWS LIST
                  </Link>
                </p>
                <p className="gnav-menu-toc__section">지역신문</p>
                <ul className="gnav-menu-toc__ul">
                   {mock["mediaList"].map((item, i) => (
                    <li key={item.name} className="gnav-menu-toc__item">
                      <Link
                        href={item.linkUrl}
                        className="gnav-menu-toc__a"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {/* <li className="gnav-menu-toc__item">
                    <Link href="/" className="gnav-menu-toc__a">
                      니스비 마리에
                    </Link>
                  </li>
                  <li className="gnav-menu-toc__item">
                    <Link href="/" className="gnav-menu-toc__a">
                      니스비 마리에
                    </Link>
                  </li>
                  <li className="gnav-menu-toc__item">
                    <Link href="/" className="gnav-menu-toc__a">
                      니스비 마리에
                    </Link>
                  </li>
                  <li className="gnav-menu-toc__item">
                    <Link href="/" className="gnav-menu-toc__a">
                      니스비 마리에
                    </Link>
                  </li>
                  <li className="gnav-menu-toc__item">
                    <Link href="/" className="gnav-menu-toc__a">
                      니스비 마리에
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
