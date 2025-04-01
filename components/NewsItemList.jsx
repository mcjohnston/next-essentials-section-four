import Image from "next/image";
import Link from "next/link";

const NewsItemList = ({ items }) => {
  return (
    <>
      <ul className="news-list">
        {items ? (
          items.map((newsItem) => (
            <li
              key={`news-list-item-key-${newsItem.id}`}
              className="news-list-item"
            >
              <div className="news-list-item--img">
                <Link href={`/news/${newsItem.slug}`}>
                  <Image
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                    fill
                  />
                </Link>
              </div>
              <span>{newsItem.title}</span>
            </li>
          ))
        ) : (
          <div>No current news items</div>
        )}
      </ul>
    </>
  );
};

export default NewsItemList;
