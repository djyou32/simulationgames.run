import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, MAIN_SITE_URL, SITE_URL } from "@/lib/categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {
      title: "Simulation Games Category Not Found",
    };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/${category.slug}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/${category.slug}`,
      images: [{ url: category.image }],
      type: "article",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Simulation Games Run",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${SITE_URL}/${category.slug}`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <article>
        <header className="container article-hero">
          <p className="eyebrow">Category guide</p>
          <h1>{category.title}</h1>
          <p className="lead">{category.intro}</p>
          <div className="hero-actions">
            <a className="button" href={category.mainUrl}>
              Play {category.name}
            </a>
            <a className="button secondary" href={MAIN_SITE_URL}>
              Visit Main Site
            </a>
          </div>
          <div className="article-media">
            <Image
              src={category.image}
              alt={`${category.name} artwork`}
              width={1120}
              height={520}
              priority
            />
          </div>
        </header>

        <div className="container article-body">
          <div>
            <section className="content-block">
              <h2>Why Players Search for {category.name}</h2>
              <p>{category.value}</p>
              <p>
                If you want a playable collection instead of a guide, visit{" "}
                <a href={category.mainUrl}>{category.name} on Simulation Games</a>.
                That page is the best next step for choosing a free online game
                in this category.
              </p>
            </section>

            <section className="content-block">
              <h2>A Complete Overview of {category.name}</h2>
              <p>
                {category.name} are popular because they let players experiment
                with a version of reality that is easier to restart, adjust,
                and understand than real life. The category can be casual or
                surprisingly deep, but the core appeal is always the same:
                players take control of a system, make choices inside it, and
                watch the results appear on screen. That system might be a
                person, a vehicle, a farm, a workplace, a room, a business, or
                a specific situation with rules and consequences.
              </p>
              <p>
                This makes {category.name.toLowerCase()} useful for many types
                of players. Some visitors want a slow game they can enjoy while
                relaxing. Others want a more active challenge where timing,
                planning, steering, customer service, resource management, or
                decision making matters. A good simulation game gives those
                players clear feedback. When you upgrade a tool, finish a task,
                avoid a mistake, or build something that works, the game makes
                progress visible.
              </p>
              <p>
                The browser format adds another advantage: fast comparison. You
                can try one idea, close it, and move to another without treating
                the choice like a major commitment. That is especially helpful
                in a genre with many substyles. A player searching for{" "}
                {category.name.toLowerCase()} may discover that they actually
                prefer one of the related searches below, such as{" "}
                {category.picks.slice(0, 2).join(" or ")}. This guide is meant
                to make that discovery faster before you continue to the main
                playable collection.
              </p>
            </section>

            <section className="content-block">
              <h2>What to Expect</h2>
              <ul className="feature-list">
                {category.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="content-block">
              <h2>Popular Search Intent</h2>
              <p>
                Players looking for {category.name.toLowerCase()} often want
                fast browser access, clear controls, no-download play, and a
                reliable list of games that match the category.
              </p>
              <div className="pill-row">
                {category.picks.map((pick) => (
                  <span className="pill" key={pick}>
                    {pick}
                  </span>
                ))}
              </div>
            </section>

            <section className="content-block">
              <h2>How to Choose the Right {category.shortName}</h2>
              <p>
                Start by deciding what kind of session you want. If you only
                have a few minutes, look for games with simple controls, quick
                rewards, and tasks that make sense immediately. If you want a
                longer session, choose a game with upgrades, layered goals, or
                a setting that gives you room to improve over time. The same
                category can support both moods, but the best choice changes
                with your available time and attention.
              </p>
              <p>
                Next, think about the type of feedback that feels satisfying to
                you. Some players enjoy visible growth, such as a bigger farm,
                a cleaner room, a better vehicle, a busier shop, or a character
                with more options. Others enjoy precision, where the pleasure
                comes from doing one action better than before. In{" "}
                {category.name.toLowerCase()}, both patterns can appear, so it
                helps to read the game description and screenshots on the main
                site before pressing play.
              </p>
              <p>
                Finally, choose based on friction. A strong browser simulation
                should load quickly, explain itself through play, and make the
                next objective understandable. You should not need a long manual
                before the first useful action. When a game has good pacing,
                you can learn the first loop quickly, then decide whether the
                deeper systems are worth more time.
              </p>
            </section>

            <section className="content-block">
              <h2>What Makes This Category Worth Playing Online?</h2>
              <p>
                Online simulation games are valuable because they make variety
                easy. A downloadable simulator may ask for a larger commitment,
                but browser games let players sample ideas immediately. That
                matters for {category.name.toLowerCase()} because the category
                is often defined by feel. A screenshot can show the setting, yet
                the real question is whether the loop feels rewarding once you
                control it yourself.
              </p>
              <p>
                Playing online also makes the genre more accessible for younger
                players, casual visitors, school breaks, work breaks, and anyone
                using a device where installing large games is inconvenient.
                The main Simulation Games library focuses on that quick-access
                experience. This page gives you the vocabulary and expectations;
                the linked collection gives you the actual games to test.
              </p>
              <ul className="detail-list">
                <li>
                  Choose short-loop games when you want instant progress and
                  simple goals.
                </li>
                <li>
                  Choose upgrade-heavy games when you want a longer sense of
                  growth.
                </li>
                <li>
                  Choose skill-based games when you want control, timing, and
                  repeated improvement.
                </li>
                <li>
                  Choose story or role-play games when you want decisions to
                  feel personal.
                </li>
              </ul>
            </section>

            <section className="content-block">
              <h2>From This Guide to Simulation-Games.com</h2>
              <p>
                Simulation Games Run is designed to be a helpful doorway, not a
                separate destination from the main project. The detailed game
                pages, playable embeds, and larger catalog are hosted on
                Simulation-Games.com, where you can browse more titles and move
                between related categories. Use this page when you want to
                understand the category, then follow the play link when you are
                ready to try the games directly.
              </p>
              <p>
                If this category sounds close but not perfect, use the related
                category links in the sidebar. Simulation game tastes often
                overlap. A player who likes {category.shortName.toLowerCase()}
                {" "}may also enjoy a slower cozy sim, a more active vehicle sim, a
                work-based management game, or a scenario with stronger
                objectives. The main site is built for that kind of browsing,
                so you can move from curiosity to play without starting a new
                search every time.
              </p>
            </section>

            <section className="content-block">
              <h2>Frequently Asked Questions</h2>
              {category.faq.map((item) => (
                <div className="faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </section>
          </div>

          <aside className="sidebar" aria-label="Related simulation game links">
            <div className="side-panel">
              <h2>Play on the Main Site</h2>
              <p>
                Continue to the live playable category page on
                Simulation-Games.com.
              </p>
              <a className="button" href={category.mainUrl}>
                Open {category.name}
              </a>
            </div>
            <div className="side-panel">
              <h3>More Categories</h3>
              <div className="link-list">
                {categories
                  .filter((item) => item.slug !== category.slug)
                  .map((item) => (
                    <Link key={item.slug} href={`/${item.slug}`}>
                      <span>{item.shortName}</span>
                      <span>View</span>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
