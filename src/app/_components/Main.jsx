"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import loadPage from "../_utils/loadPage";
import Modal from "./Modal";
import mock from "../data/mock.json";

function Main({ newsItems }) {
  const ref = useRef(); // 기사를 담을 영역의 참조
  const mainRef = useRef(); // 전체 main 요소의 참조
  const [maxColumns, setMaxColumns] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 20;
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const articlesData = newsItems.map((item, i) => ({
    link: `/news/${item["NewsItemId"]}`,
    height: Math.floor(Math.random() * (560 - 430 + 1)) + 430,
    content: {
      title: item["Title"],
      createAt: item["ApproveDate"],
    },
  }));

  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const handleResize = useCallback(() => {
    const isSmallScreen = window.innerWidth <= 580;
    setMaxColumns(isSmallScreen ? 2 : 4);
    setIsSmallScreen(isSmallScreen);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // 초기 값 설정
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handlePageClick = useCallback(
    (page) => {
      loadPage(
        ref,
        mainRef,
        page,
        articlesData,
        maxColumns,
        articlesPerPage,
        isSmallScreen
      );
    },
    [articlesData, maxColumns, articlesPerPage, isSmallScreen]
  );

  useEffect(() => {
    handlePageClick(currentPage);
  }, [currentPage, maxColumns, articlesData, isSmallScreen, handlePageClick]);

  return (
    <main ref={mainRef}>
      <div className="main-left">
        <Link href={"/"} className="c-square">
          <div className="c-square__inner">
            <p className="c-square__title">Message</p>
            <p className="c-square__sub-title">메시지</p>
            <div className="c-circle-image">
              <Image
                src={"https://q.livesense.co.jp/images/index/messege.png"}
                alt="d"
                width={124}
                height={124}
              />
            </div>
          </div>
        </Link>
        <Link href={"/"} className="c-square">
          <div className="c-square__inner">
            <p className="c-square__title">Message</p>
            <div className="c-circle-image">
              <Image
                src={"https://q.livesense.co.jp/images/index/goods.png"}
                alt="d"
                width={124}
                height={124}
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="main-center">
        <div className="article-card-area" ref={ref}></div>

        <div className="pagination">
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className="page-item"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>

        <div className="subscription">
          <div className="subscription_text">
            <p className="subscription_title">
              오늘도 저희 사이트를 찾아주셔서 감사합니다.
            </p>
            <p className="">
              유익하고 흥미로운 기사들이 준비되어 있으니, 마음껏 즐겨주세요!
            </p>
          </div>
        </div>
      </div>

      <div className="main-right">
        <div className="c-square c-square--whats-qby" onClick={toggleModal}>
          <div className="c-square__inner">
            <Image
              src={"https://q.livesense.co.jp/images/index/whats_qby.svg"}
              alt="d"
              width={138}
              height={138}
              className="whats-qby"
            />
          </div>
        </div>

        {mock["mediaList"].map((item, i) => (
          <Link
            href={item.linkUrl}
            className="c-square"
            key={item.name}
            target="_blank"
          >
            <div className="c-square__inner">
              {/* <p className="c-square__writer-title">지역신문</p> */}
              <div className="c-circle-image">
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="c-circle-image__img bg-white"
                />
              </div>
              <p className="c-square__writer-name">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </main>
  );
}

export default Main;
