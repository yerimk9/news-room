"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function NewsList({ newsItems }) {
  const groupedNewsItems = [];

  for (let i = 0; i < newsItems.length; i += 10) {
    groupedNewsItems.push(newsItems.slice(i, i + 10));
  }

  useEffect(() => {
    const animateFrogLoop = () => {
      gsap.to(".frog-loop__wrapper", {
        xPercent: -100, // 왼쪽으로 이동
        repeat: -1, // 무한 반복
        duration: 30, // 애니메이션 지속 시간 (초)
        ease: "linear", // 애니메이션 가속도
      });
    };

    animateFrogLoop();
  }, []);

  return (
    <main className="main main-list">
      <div className="main-list__content">
        <div className="toc">
          {groupedNewsItems.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {group.map((newsItem, i) => (
                <div className="toc-column" key={i}>
                  <Link
                    href={`/news/${newsItem.NewsItemId}`}
                    className="toc-column__a"
                  >
                    <div className="toc-column__time toc-column__badge--new">
                      {newsItem.ApproveDate}
                    </div>
                    <h2 className="toc-column__title">{newsItem.Title}</h2>
                  </Link>
                </div>
              ))}
              {groupIndex < groupedNewsItems.length - 1 && (
                <div className="frog-loop swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div className="frog-loop__wrapper swiper-wrapper">
                    <div className="frog-loop__img swiper-slide swiper-slide-active">
                      <Image
                        src="https://q.livesense.co.jp/images/common/frog_scroll.png"
                        alt="frog scroll"
                        width={1764}
                        height={100}
                      />
                    </div>
                    <div className="frog-loop__img swiper-slide swiper-slide-active">
                      <Image
                        src="https://q.livesense.co.jp/images/common/frog_scroll.png"
                        alt="frog scroll"
                        width={1764}
                        height={100}
                      />
                    </div>
                    <div className="frog-loop__img swiper-slide swiper-slide-active">
                      <Image
                        src="https://q.livesense.co.jp/images/common/frog_scroll.png"
                        alt="frog scroll"
                        width={1764}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}

export default NewsList;
