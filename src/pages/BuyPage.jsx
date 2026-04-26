import { useState } from 'react';

export default function BuyPage({ t }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Placeholder for real transactional email integration.
    console.log('Order received', Object.fromEntries(formData.entries()));
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="chapter checkout reveal">
      <h1>{t.checkout.title}</h1>
      <p>{t.checkout.subtitle}</p>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          {t.checkout.name}
          <input type="text" name="name" required />
        </label>
        <label>
          {t.checkout.email}
          <input type="email" name="email" required />
        </label>
        <label>
          {t.checkout.address}
          <input type="text" name="address" required />
        </label>
        <div className="checkout-grid">
          <label>
            {t.checkout.city}
            <input type="text" name="city" required />
          </label>
          <label>
            {t.checkout.state}
            <input type="text" name="state" required maxLength="2" />
          </label>
          <label>
            {t.checkout.zip}
            <input type="text" name="zip" required pattern="[0-9]{5}" />
          </label>
        </div>
        <p className="price">$19.99</p>
        <button className="btn btn-primary" type="submit">
          {t.checkout.submit}
        </button>
      </form>
      {submitted && <p className="success-msg">{t.checkout.success}</p>}
    </section>
  );
}
