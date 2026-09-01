import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAsset from "@/assets/hero.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

const PHONE = "+91 99524 18523";
const PHONE_HREF = "tel:+919952418523";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uday NEET Academy | NEET Biology Coaching & Tuition, India" },
      {
        name: "description",
        content:
          "NEET-UG Biology coaching and Class 11 & 12 tuition by Dr. P. Udayakumar, PhD — 20+ years of teaching. Online and in-person, all year round. Call +91 99524 18523.",
      },
      { property: "og:title", content: "Uday NEET Academy | NEET Biology Coaching" },
      {
        property: "og:description",
        content:
          "NEET-UG Biology coaching and Class 11 & 12 tuition by Dr. P. Udayakumar, PhD. Online and in-person, available all year.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Uday NEET Academy",
          url: "https://udayneetacademy.com",
          telephone: "+91 99524 18523",
          areaServed: "India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const courses = [
  {
    tag: "NEET-UG",
    title: "NEET-UG Biology",
    body: "Full Class 11 + 12 syllabus, NCERT line-by-line revision and a large bank of objective questions.",
  },
  {
    tag: "Foundation",
    title: "Class 11 & 12 Biology",
    body: "CBSE, ICSE, IGCSE, Tamil Nadu, Kerala, Karnataka and Andhra board syllabi — Botany and Zoology.",
  },
  {
    tag: "B.Sc.",
    title: "Botany & Zoology",
    body: "Degree-level guidance for B.Sc. students, including theory support and exam preparation.",
  },
  {
    tag: "UPSC",
    title: "Science & Technology",
    body: "The Science & Technology sections for Civil Services Prelims and Mains, taught concept-first.",
  },
  {
    tag: "Schools",
    title: "Class 6–10 Science",
    body: "Biology, EVS and basic sciences — building the diagram-and-recall habit early.",
  },
];

const credentials = [
  { label: "Ph.D., Doctor of Philosophy", year: "2013" },
  { label: "UGC NET qualified", year: "2014" },
  { label: "M.Phil.", year: "2007" },
  { label: "M.Sc.", year: "1995" },
  { label: "M.Ed., B.Ed., M.A., MBA (Education), PGDCA", year: "—" },
];

const awards = [
  { label: "Best Teacher Award, Dept. of School Education", year: "2006" },
  { label: "Best Scientist Award, Bose Science Society", year: "2013" },
  { label: "Best Teacher Educator Award, Bose Science Society", year: "2016" },
];

function Home() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-cream text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Uday NEET Academy logo"
              width={36}
              height={36}
              className="size-9"
            />
            <span className="leading-none">
              <span className="block font-display text-[17px] font-semibold tracking-tight text-forest">
                Uday NEET Academy
              </span>
              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                Biology · Coimbatore
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 font-body text-sm text-muted-ink md:flex">
            <a href="#courses" className="transition-colors hover:text-forest">
              Courses
            </a>
            <a href="#about" className="transition-colors hover:text-forest">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-forest">
              Contact
            </a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream ring-1 ring-black/5 transition-colors hover:bg-teal"
          >
            <span className="size-1.5 rounded-full bg-gold" />
            Call &amp; Enquire
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="rise font-mono text-xs uppercase tracking-[0.25em] text-teal">
              NEET-UG · Biology Coaching · India
            </p>
            <h1
              className="rise mt-4 text-balance font-display text-[40px] font-semibold leading-[1.02] tracking-tight text-forest sm:text-[56px]"
              style={{ animationDelay: "60ms" }}
            >
              Biology, taught slowly and taught{" "}
              <em className="font-display italic text-teal">right</em>.
            </h1>
            <p
              className="rise mt-5 max-w-[46ch] text-pretty font-body text-lg leading-relaxed text-muted-ink"
              style={{ animationDelay: "120ms" }}
            >
              Dr. P. Udayakumar has taught Biology for over twenty years. One-to-one and
              small-group coaching for NEET-UG, Class 11 &amp; 12 and B.Sc. students —
              online or in person, any day of the year.
            </p>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-base font-medium text-cream ring-1 ring-black/5 transition-colors hover:bg-teal"
              >
                {PHONE}
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-base font-medium text-forest ring-1 ring-line transition-colors hover:bg-cream"
              >
                See courses
              </a>
            </div>
            <div
              className="rise mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-ink"
              style={{ animationDelay: "240ms" }}
            >
              <span>Ph.D. · UGC NET</span>
              <span>20+ years teaching</span>
              <span>All boards &amp; NEET</span>
            </div>
          </div>
          <div className="rise relative lg:col-span-5" style={{ animationDelay: "150ms" }}>
            <img
              src={heroAsset.url}
              alt="Biology textbook with plant anatomy diagrams and study notes"
              width={1088}
              height={1360}
              className="aspect-4/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="floaty absolute top-10 -left-4 rounded-2xl bg-cream/90 px-5 py-4 shadow-sm ring-1 ring-black/5 backdrop-blur sm:-left-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
                Experience
              </div>
              <div className="mt-1 font-display text-2xl font-semibold leading-none text-forest">
                20+
              </div>
              <div className="font-body text-xs text-muted-ink">Years of teaching</div>
            </div>
            <div
              className="floaty absolute bottom-12 -right-3 rounded-2xl bg-forest px-5 py-4 text-cream shadow-sm ring-1 ring-black/5 sm:-right-6"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="font-body text-xs text-cream/70">Available</div>
              <div className="font-display text-lg font-semibold leading-tight">
                Every day, all year
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="courses" className="border-y border-line bg-paper/60">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
                (a) Courses
              </div>
              <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
                What we teach
              </h2>
            </div>
            <p className="hidden max-w-[34ch] font-body text-sm text-muted-ink sm:block">
              One-to-one private classes, small group crash courses and regular batches —
              online or at home.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-cream p-6 ring-1 ring-black/5 transition-shadow hover:shadow-md hover:ring-teal/30"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
                  {c.tag}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-forest">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-ink">
                  {c.body}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-forest p-6 text-cream ring-1 ring-black/5">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
                Enquiry
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-cream">
                Not sure where to start?
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-cream/75">
                Call for a short counselling chat and a study plan that fits your syllabus
                and exam date.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-cream underline decoration-gold underline-offset-4"
              >
                Speak to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24"
      >
        <div className="lg:col-span-7">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
            (b) About
          </div>
          <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
            Dr. P. Udayakumar
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty font-body text-lg leading-relaxed text-muted-ink">
            An educator and academic author based in Coimbatore, Tamil Nadu, with more than
            twenty years of teaching behind him. He has been a principal at Chezhian
            Matriculation Higher Secondary School, a professor at Bharathiar University,
            and has published Biology reference books for Class 11 and 12 students.
          </p>
          <p className="mt-4 max-w-[52ch] text-pretty font-body text-lg leading-relaxed text-muted-ink">
            His lessons are carefully planned and visual — presentations, diagrams,
            self-made notes and PDFs matched to each student's syllabus, plus an extensive
            collection of objective questions for NEET practice. Classes run in Tamil,
            English or Malayalam.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
            <div>
              <div className="font-display text-3xl font-semibold leading-none text-forest">
                20+
              </div>
              <div className="mt-1.5 font-body text-xs text-muted-ink">Years teaching</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold leading-none text-forest">
                7
              </div>
              <div className="mt-1.5 font-body text-xs text-muted-ink">Boards covered</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold leading-none text-forest">
                3
              </div>
              <div className="mt-1.5 font-body text-xs text-muted-ink">National awards</div>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-5">
          <div className="rounded-2xl bg-cream p-6 ring-1 ring-black/5">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
              Credentials
            </div>
            <ul className="mt-2 divide-y divide-line">
              {credentials.map((c) => (
                <li key={c.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="font-body text-ink">{c.label}</span>
                  <span className="shrink-0 font-mono text-xs text-muted-ink">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-cream p-6 ring-1 ring-black/5">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
              Awards
            </div>
            <ul className="mt-2 divide-y divide-line">
              {awards.map((a) => (
                <li key={a.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="font-body text-ink">{a.label}</span>
                  <span className="shrink-0 font-mono text-xs text-muted-ink">{a.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              (c) Contact
            </div>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              Book a counselling call.
            </h2>
            <p className="mt-4 max-w-[40ch] font-body leading-relaxed text-cream/70">
              The phone is answered any day of the year, any time during the day. Or send a
              note and we'll call you back.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-cream px-6 py-4 text-forest ring-1 ring-black/5 transition-colors hover:bg-paper"
            >
              <span className="size-2 rounded-full bg-gold" />
              <span className="font-display text-xl font-semibold tracking-tight">
                {PHONE}
              </span>
            </a>
            <div className="mt-6 font-body text-sm text-cream/60">
              udayneetacademy.com · Coimbatore, Tamil Nadu · Online &amp; in person
            </div>
          </div>
          <div className="lg:col-span-7">
            <form
              className="space-y-4 rounded-2xl bg-cream p-6 text-ink ring-1 ring-black/5 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block font-body text-sm">
                  <span className="text-muted-ink">Student name</span>
                  <input
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-lg bg-paper/60 px-3.5 py-2.5 ring-1 ring-line focus:ring-2 focus:ring-teal focus:outline-none"
                    placeholder="Student name"
                  />
                </label>
                <label className="block font-body text-sm">
                  <span className="text-muted-ink">Phone</span>
                  <input
                    type="tel"
                    required
                    className="mt-1.5 w-full rounded-lg bg-paper/60 px-3.5 py-2.5 ring-1 ring-line focus:ring-2 focus:ring-teal focus:outline-none"
                    placeholder="+91 ..."
                  />
                </label>
              </div>
              <label className="block font-body text-sm">
                <span className="text-muted-ink">Course of interest</span>
                <select className="mt-1.5 w-full rounded-lg bg-paper/60 px-3.5 py-2.5 ring-1 ring-line focus:ring-2 focus:ring-teal focus:outline-none">
                  <option>NEET-UG Biology</option>
                  <option>Class 11 &amp; 12 Biology</option>
                  <option>Class 6–10 Science</option>
                  <option>B.Sc. Botany / Zoology</option>
                  <option>UPSC Science &amp; Tech</option>
                </select>
              </label>
              <label className="block font-body text-sm">
                <span className="text-muted-ink">Message</span>
                <textarea
                  rows={3}
                  className="mt-1.5 w-full resize-none rounded-lg bg-paper/60 px-3.5 py-2.5 ring-1 ring-line focus:ring-2 focus:ring-teal focus:outline-none"
                  placeholder="Current class, board and target exam date…"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-forest px-6 py-3.5 text-base font-medium text-cream ring-1 ring-black/5 transition-colors hover:bg-teal"
              >
                Send enquiry
              </button>
              <p className="font-body text-xs text-muted-ink">
                {sent
                  ? `Thank you — for the quickest reply, please also call ${PHONE}.`
                  : `This form is not connected yet. For an immediate answer, call ${PHONE}.`}
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-ink sm:h-16 sm:flex-row sm:py-0">
          <span>Uday NEET Academy</span>
          <span>© {new Date().getFullYear()} · Coimbatore, India</span>
        </div>
      </footer>
    </div>
  );
}
