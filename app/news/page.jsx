import { getNews } from "@/lib/getNews";
import NewsItemList from "@/components/NewsItemList";
import { Suspense } from "react";

const NewsListingPage = async () => {
  const newsItems = await getNews();
  return (
    <>
      <Suspense fallback={<p>Loading news items...</p>}>
        <NewsItemList items={newsItems} />
      </Suspense>
    </>
  );
};

export default NewsListingPage;
