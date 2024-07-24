import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import NewsList from "@/app/_components/NewsList";
import getAllNews from "@/app/_services/getAllNews";
import React from "react";

async function newsListPage(props) {
  const response = await getAllNews(20211201, 20211203);
  const newsItems = response?.response?.body?.NewsItem || [];

  return (
    <div className="newsList-container">
      <Header />

      <NewsList newsItems={newsItems} />

      <Footer />
    </div>
  );
}

export default newsListPage;
