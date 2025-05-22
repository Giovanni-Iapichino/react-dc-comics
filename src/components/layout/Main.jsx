import ComicList from "../comic/ComicList";

export default function Main({ comics }) {
  return (
    <main id="page-main">
      <div className="jumbotron"></div>
      <div className="container">
        <section className="main-content">
          <ComicList comics={comics} />
          <div>
            <button className="load-more">LOAD MORE</button>
          </div>
        </section>
      </div>
    </main>
  );
}
