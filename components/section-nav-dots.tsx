"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "Overview" },
  { id: "approach", label: "The Challenge" },
  { id: "impact", label: "Global Reach" },
  { id: "programs", label: "Programmes" },
  { id: "partners", label: "Collaborators" },
  { id: "contact", label: "Contact" },
];

export function SectionNavDots() {
  const [active, setActive] = useState("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        let maxRatio = 0;
        let currentSection = "";

        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            currentSection = id;
          }
        });

        if (currentSection) {
          setActive(currentSection);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      setActive(id);

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`
        fixed right-4 lg:right-6 top-1/2 -translate-y-1/2
        z-40 flex flex-col gap-3
        transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }
      `}
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Navigate to ${label}`}
            title={label}
            className="
              group flex items-center justify-end gap-2
              outline-none touch-manipulation
            "
          >
            {/* Tooltip */}
            <span
              className="
                hidden md:block
                text-xs font-medium
                text-foreground
                bg-background
                border border-border
                rounded-md
                px-2 py-1
                shadow-sm
                opacity-0
                group-hover:opacity-100
                -translate-x-1
                group-hover:translate-x-0
                transition-all duration-200
                whitespace-nowrap
                pointer-events-none
              "
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className={`
                rounded-full shrink-0
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? "w-4 h-4 bg-primary scale-125 shadow-lg shadow-primary/40"
                    : "w-3 h-3 bg-border opacity-70 scale-100"
                }
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
