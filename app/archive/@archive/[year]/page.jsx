import NewsItemList from "@/components/NewsItemList";
import { getNewsForYear } from "@/lib/getNews";

const FilteredNewsPage = ({ params }) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsItemList items={news} />;
};

export default FilteredNewsPage;
