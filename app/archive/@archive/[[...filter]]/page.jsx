import Link from "next/link";
import NewsItemList from "@/components/NewsItemList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
} from "@/lib/getNews";

// catch all route setup, /archive/:year/:month/:day etc.
const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  const yearLinks = getAvailableNewsYears();
  const selectedYear = filter?.[0]; // /:y/
  const selectedMonth = filter?.[1]; // /:y/:m

  let news;
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found</p>;

  if (news && news.length > 0) {
    newsContent = <NewsItemList items={news} />;
  }

  // note + for type conversion
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {yearLinks.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
