export default function AboutPage({ t }) {
  return (
    <section className="chapter about-page reveal">
      <h1>{t.about.title}</h1>
      <div className="about-grid">
        <article>
          <h2>{t.about.bookTitle}</h2>
          <p>{t.about.bookBody}</p>
        </article>
        <article>
          <h2>{t.about.authorTitle}</h2>
          <p>{t.about.authorBody}</p>
        </article>
      </div>
    </section>
  );
}
