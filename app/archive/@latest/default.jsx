import NewsItemList from "@/components/NewsItemList";
import { getLatestNews } from "@/lib/getNews";

const LatestNewPage = () => {
  const news = getLatestNews();
  return (
    <div>
      <h2>Latest News</h2>
      <NewsItemList items={news} />
    </div>
  );
};

export default LatestNewPage;
