import ComicList from "../comic/ComicList";

export default function Main({ comics }) {
  return (
    <main id="page-main">
      <div className="jumbotron"></div>
      <div className="container">
        <div className="current-series">CURRENT SERIES</div>
        <section className="main-content">
          <ComicList comics={comics} />
        </section>
        <div className="load-more">
          <button>LOAD MORE</button>
        </div>
      </div>
    </main>
  );
}
