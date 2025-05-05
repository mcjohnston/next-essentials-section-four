"use client";
import Link from "next/link";

const NewsArchiveErrorPage = ({ error }) => {
  return (
    <div>
      No news for selected segment. Try going back to the
      <Link href="/archive">archive</Link>
    </div>
  );
};

export default NewsArchiveErrorPage;
