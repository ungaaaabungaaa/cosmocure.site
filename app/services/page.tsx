const services = [
  "Skin and beauty consultations",
  "Facial care treatments",
  "Nail and grooming services",
];

export default function ServicesPage() {
  return (
    <main className="bg-cream px-6 py-24 text-muted sm:py-32">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 font-body text-sm uppercase text-caramel">
          Services
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-espresso sm:text-6xl">
          Beauty services shaped around clean, confident results.
        </h1>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <li
              key={service}
              className="border-t border-caramel/35 pt-4 text-base font-light leading-7"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
