import { Link } from 'react-router-dom';


export default function HomePage({ t }) {
  return (
    <>
      <section className="chapter hero reveal">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.body}</p>
          <Link className="btn btn-primary" to="/buy">
            {t.hero.cta}
          </Link>
        </div>
        <div className="cover-wrap" aria-label="book cover">
          <img src="/book-cover.svg" alt="Portada del libro Liam D, el niño más esperado" />
        </div>
      </section>

      <section className="chapter excerpt reveal">
        <blockquote>{t.excerpt}</blockquote>
      </section>

      <section className="chapter reveal">
        <h2>{t.meaning.title}</h2>
        <p>{t.meaning.body1}</p>
        <p>{t.meaning.body2}</p>
      </section>

      <section className="chapter book-panel reveal">
        <div className="book-info">
          <h2>{t.book.title}</h2>
          <p>{t.book.description}</p>
          <p>{t.book.for}</p>
        </div>
      </section>

      <section className="chapter reveal">
        <h2>{t.testimonials.title}</h2>
        <div className="testimonial-list">
          {t.testimonials.items.map((item) => (
            <article key={item} className="testimonial-card">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="chapter purchase reveal">
        <h2>{t.purchase.title}</h2>
        <p>{t.purchase.body}</p>
        <p className="price">
          {t.purchase.priceLabel}: <strong>$19.99</strong>
        </p>
        <div className="trust">
          <span>{t.purchase.trust1}</span>
          <span>{t.purchase.trust2}</span>
          <span>{t.purchase.trust3}</span>
        </div>
        <Link className="btn btn-primary" to="/buy">
          {t.purchase.cta}
        </Link>
      </section>
    </>
  );
}
