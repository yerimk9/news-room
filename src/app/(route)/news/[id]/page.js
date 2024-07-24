"use client";
import AnalogClock from "@/app/_components/AnalogClock";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Loading from "@/app/_components/Loading";
import getAllNews from "@/app/_services/getAllNews";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function NewsItemPage({ params }) {
  const [selectedItem, setSelectedItem] = useState(null);
  // console.log(params.id);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getAllNews(20211201, 20211203);
        const fetchedNewsItems =
          (await response?.response?.body?.NewsItem) || [];

        const foundItem = fetchedNewsItems.find(
          (item) => item.NewsItemId === params.id
        );
        setSelectedItem(foundItem);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [params.id]);

  if (!selectedItem) {
    return <Loading />;
  }

  return (
    <div className="newsItemPage-container">
      <Header />

      <div className="content">
        <div>
          <div className="newsItem_title">{selectedItem?.Title}</div>
          <div className="newsItem_subTitle">{selectedItem?.SubTitle1}</div>
          <div className="newsItem_date">{selectedItem?.ApproveDate}</div>
        </div>
        <div>
          <div className="newsItem_image">
            <Image
              src={selectedItem?.OriginalimgUrl}
              alt="newsImage"
              width={700}
              height={400}
            />
          </div>
          <div className="newsItem_body">
            {" "}
            {selectedItem?.ContentsType === "H" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedItem?.DataContents,
                }}
              />
            ) : (
              <div>{selectedItem?.DataContents}</div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NewsItemPage;
