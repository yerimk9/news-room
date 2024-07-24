import Footer from "./_components/Footer";
import MainHeader from "./_components/MainHeader";
import Main from "./_components/Main";
import Modal from "./_components/Modal";
import getAllNews from "./_services/getAllNews";

export default async function Home() {
  const response = await getAllNews(20211201, 20211203);
  const newsItems = response?.response?.body?.NewsItem || [];

  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <source
          // src="https://q.livesense.co.jp/images/index/bg-video.mp4"
          // src="https://cdn.pixabay.com/video/2023/07/04/170043-842720124_tiny.mp4"
          src="https://cdn.pixabay.com/video/2021/12/06/99856-658707374_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="border-container">
        <div className="content-container">
          <MainHeader />

          <Main newsItems={newsItems} />
        </div>
      </div>
      <Footer />

      <Modal />
    </div>
  );
}
