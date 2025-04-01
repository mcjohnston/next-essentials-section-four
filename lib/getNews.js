const baseNewsURL = "https://jsonplaceholder.typicode.com";

export const getNews = async () => {
  const news = await fetch(`${baseNewsURL}/posts`);
  const result = await news.json();

  return result;
};
