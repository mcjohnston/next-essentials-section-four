import { Fragment } from "react";
import Link from "next/link";
import slugify from "slugify";

const NewsItemList = ({ items }) => {
  return (
    <>
      <ul className="news-list">
        {items ? (
          items.map((newsItem) => (
            <Fragment key={`news-list-item-key-${newsItem.id}`}>
              <div className="news-list-item">
                <h2>{newsItem.title}</h2>
                <p>{newsItem.body}</p>
                <Link href={`/news/${slugify(newsItem.title)}`}>Read More</Link>
              </div>
            </Fragment>
          ))
        ) : (
          <div>No current news items</div>
        )}
      </ul>
    </>
  );
};

export default NewsItemList;
