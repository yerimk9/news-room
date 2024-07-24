"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoImg from "../../../public/svgs/logo.svg";
import button from "../../../public/svgs/button.svg";
import AnalogClock from "./AnalogClock";
import Modal from "./Modal";
import mock from "../data/mock.json";

function MainHeader() {
  const [date, setDate] = useState({
    month: "",
    day: "",
    year: "",
    week: "",
  });
  const [time, setTime] = useState("");
  const [navVisible, setNavVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  useEffect(() => {
    const now = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekdayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    setDate({
      month: monthNames[now.getMonth()],
      day: now.getDate(),
      year: now.getFullYear(),
      week: weekdayNames[now.getDay()], // 요일 계산
    });

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    const intervalId = setInterval(updateTime, 1000);

    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
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
                <p className="gnav-menu-toc__section">지역 신문</p>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
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

          <Image
            src="https://q.livesense.co.jp/images/common/close.svg"
            className="burger-button__label burger-button__close"
            alt="메뉴 닫기"
            width={60}
            height={60}
          />
        </button>
      </nav>

      <div className="header-left">
        <Link href="/newslist" className="c-square sp-hidden">
          <div className="c-square__inner">
            <p className="c-square__title">All articles</p>
            <p className="c-square__sub-title">기사 목록</p>
            <div className="c-circle-image">
              <Image
                src="https://q.livesense.co.jp/images/index/articles.png"
                alt="기사 목록"
                width={100}
                height={100}
              />
            </div>
          </div>
        </Link>

        <div className="date-area">
          <p className="date-area__month">{date.month}</p>
          <p className="date-area__day">{date.day}</p>
          <p className="date-area__year">{date.year}</p>
        </div>

        <div className="week-area">
          <p className="week-area__week">{date.week}</p>
        </div>

        <div className="image-area sp-hidden">
          <div className="image-area__bg"></div>
        </div>

        <div className="header-tile-sp pc-hidden"></div>

        <div className="header-tile-sp pc-hidden">
          <button
            className="burger-button-sp burger-button-open"
            aria-label="메뉴 열기"
            onClick={toggleNav}
          ></button>

          {/* 모달 열기 */}
          <div
            className="image-area image-area--whats-qby frog-modal"
            onClick={toggleModal}
          >
            <div className="image-area__inner">
              <Image
                className="whats-qby"
                src="https://q.livesense.co.jp/images/index/whats_qby.svg"
                alt=""
                width={114}
                height={114}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="header-center relative ">
        <div>
          <Image
            src={logoImg}
            alt="logoImg"
            fill
            className="header-center__logo"
          />
        </div>
        <div className="header-center__logo_text">NEWS LIST</div>
      </div>

      <div className="header-right">
        {mock["mediaAssociations"].map((item, i) => (
          <Link
            href={item.linkUrl}
            className="header-icon sp-hidden"
            key={item.name}
            target="_blank"
          >
            <span className="header-icon__box header-icon__box-x">
              <Image
                src={item.imgUrl}
                alt={item.name}
                className="header-icon__img"
                width={50}
                height={50}
              />
            </span>
          </Link>
        ))}

        <button
          className="header-icon burger-button-open sp-hidden"
          aria-label="메뉴 열기"
          onClick={toggleNav}
        >
          <span className="header-icon__box">
            <Image src={button} alt="buttonImg" className="header-icon__img" />
          </span>
        </button>

        <div className="digital-clock-sp pc-hidden">
          <p className="digital-clock-sp__num">{time}</p>
        </div>

        <AnalogClock />

        <div className="digital-clock-pc sp-hidden">
          <p className="digital-clock-pc__num">{time}</p>
        </div>
      </div>

      <div className="header-nav-sp pc-hidden">
        <Link className="header-nav-sp__a" href="#">
          <p className="header-nav-sp__text">
            <span>What&apos;s Q by</span>
            <br />
            <span>LIVESENSE?</span>
          </p>
        </Link>
        <Link className="header-nav-sp__a" href="/blog/">
          <p className="header-nav-sp__text">
            <span>All</span>
            <br />
            <span>articles</span>
          </p>
        </Link>
        <Link
          className="header-nav-sp__a"
          href="https://www.livesense.co.jp/contact/"
        >
          <p className="header-nav-sp__text">
            <span>Message</span>
          </p>
        </Link>
        <Link
          className="header-nav-sp__a"
          href="https://suzuri.jp/Q_by_Livesense"
        >
          <p className="header-nav-sp__text">
            <span>좋은</span>
          </p>
        </Link>
      </div>

      <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </header>
  );
}

export default MainHeader;
