const ArchiveLayout = ({ children, archive, latest }) => {
  return (
    <>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <h1>Latest News</h1>
      <section id="archive-latest">{latest}</section>
      {/* {children} */}
    </>
  );
};

export default ArchiveLayout;
