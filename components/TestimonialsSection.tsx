"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya",
    location: "Shillong",
    quote:
      "Moi, the facial was proper smooth, yaar. Skin felt clean and fresh, and the whole vibe was very calm. I went home thinking, yes, this place is solid.",
  },
  {
    name: "Riya",
    location: "Guwahati",
    quote:
      "The team is super gentle and neat. No drama, just good work and friendly chat. My skin looked bright the same day, and I was honestly happy with it.",
  },
  {
    name: "Pema",
    location: "Itanagar",
    quote:
      "Bohot proper experience, bai. They explained everything clearly and made me feel comfortable from start to finish. Very chill and very professional.",
  },
  {
    name: "Lisha",
    location: "Kohima",
    quote:
      "I came for acne treatment and left feeling sorted. The finish was clean, timing was on point, and the result was exactly what I wanted.",
  },
  {
    name: "Nandita",
    location: "Aizawl",
    quote:
      "The clinic feels premium but not stiff, which I liked. The vibe was relaxed, music was nice, and the service was top class throughout.",
  },
  {
    name: "Mayuri",
    location: "Imphal",
    quote:
      "One visit and I could see the difference. The care was gentle, the staff was warm, and everything felt very well managed from the beginning.",
  },
];

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateItemsPerPage = () => {
      setItemsPerPage(mediaQuery.matches ? 2 : 1);
    };

    updateItemsPerPage();
    mediaQuery.addEventListener("change", updateItemsPerPage);

    return () => mediaQuery.removeEventListener("change", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const activePage = Math.min(page, Math.max(totalPages - 1, 0));

  const goToPage = (direction: "left" | "right") => {
    setPage((currentPage) => {
      if (direction === "left") {
        return (currentPage - 1 + totalPages) % totalPages;
      }

      return (currentPage + 1) % totalPages;
    });
  };

  const visibleTestimonials = testimonials.slice(
    activePage * itemsPerPage,
    activePage * itemsPerPage + itemsPerPage,
  );

  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto w-full h-auto max-w-[100%]">
        <div className="relative overflow-hidden bg-[#2a1f1d] px-6 py-[4.5rem] text-[#f4eee7] sm:px-10 sm:py-[6rem] lg:px-14 lg:py-[7rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_36%)]" />
          <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="lg:max-w-md lg:pt-6">
              <p className="font-body text-sm uppercase tracking-[0.34em] text-[#c8a882]">
                Testimonials
              </p>
              <h2 className="mt-7 max-w-sm font-display text-5xl font-bold leading-none text-[#f7f0ea] sm:text-6xl lg:text-[4.6rem]">
                What Our Clients Say
              </h2>
            </div>

            <div className="relative lg:pt-5">
              <div className="grid gap-8 lg:grid-cols-2 lg:divide-x lg:divide-[#f7f0ea]/15 lg:border-x lg:border-[#f7f0ea]/15 lg:px-10">
                {visibleTestimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.name}-${testimonial.location}`}
                    className="relative py-3 lg:px-10 lg:py-4"
                  >
                    <span className="pointer-events-none absolute left-0 top-0 text-white/6">
                      <Quote
                        aria-hidden="true"
                        size={110}
                        strokeWidth={1.6}
                        className="sm:size-[130px]"
                      />
                    </span>
                    <p className="relative max-w-xl text-base font-light leading-8 text-[#f4eee7]/90 sm:text-[1.1rem]">
                      {testimonial.quote}
                    </p>
                    <div className="relative mt-10">
                      <p className="font-display text-2xl font-bold text-[#fff8ef] sm:text-[2rem]">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#c8a882]">
                        {testimonial.location}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-end gap-3 sm:gap-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => goToPage("left")}
                    aria-label="Previous testimonials"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f0ea] text-[#8a633f] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:w-12"
                  >
                    <ChevronLeft aria-hidden="true" size={18} strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToPage("right")}
                    aria-label="Next testimonials"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f0ea] text-[#8a633f] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:w-12"
                  >
                    <ChevronRight aria-hidden="true" size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
