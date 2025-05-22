import ComicCard from "./ComicCard";

export default function ComicList({ comics }) {
  return (
    <section id="comics-section">
      <div className="container">
        <div className="row">
          {comics.map((comic) => (
            <ComicCard comic={comic} key={comic.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
