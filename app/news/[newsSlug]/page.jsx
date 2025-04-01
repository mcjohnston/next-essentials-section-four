import { DUMMY_NEWS } from "@/lib/mock-data/newsItemMockData";
import { notFound } from "next/navigation";

export default async function NewsItemPage({ params }) {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          <h1>{newsItem.title}</h1>
          <time datetime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
        <p>Some News Item with slug: {newsSlug}</p>
      </article>
    </>
  );
}
