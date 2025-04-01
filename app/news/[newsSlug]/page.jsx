export default async function NewsItemPage({ params }) {
  const { newsSlug } = await params;
  return <>Some News Item with slug: {newsSlug}</>;
}
