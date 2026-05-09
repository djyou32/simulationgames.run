import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories, MAIN_SITE_URL, SITE_URL } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Simulation Games Run - Find the Right Simulation Game Category",
  description:
    "Use this simulation games guide to explore life sims, relaxing sims, driving sims, farming sims, job sims, and scenario sims before playing on Simulation-Games.com.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Simulation games category guide",
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      url: `${SITE_URL}/${category.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <section className="container hero">
        <div>
          <p className="eyebrow">Simulation game discovery</p>
          <h1>Find the simulation game style you want to play next.</h1>
          <p className="lead">
            This site is a focused guide to the major simulation game categories:
            life, relaxing, driving, farming, job, and scenario sims. When you
            are ready to play, continue to the full curated library on the main
            Simulation Games site.
          </p>
          <div className="hero-actions">
            <a className="button" href={MAIN_SITE_URL}>
              Play Simulation Games
            </a>
            <a className="button secondary" href="#categories">
              Browse Categories
            </a>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/images/scenario.png"
            alt="Colorful simulation game scene"
            width={900}
            height={720}
            priority
          />
          <div className="media-caption">
            Guides here. Playable games on Simulation-Games.com.
          </div>
        </div>
      </section>

      <section id="categories" className="container section">
        <h2 className="section-title">Simulation Game Categories</h2>
        <p className="section-copy">
          Each page below explains what players usually expect from that type of
          simulation game and links back to the matching playable collection on
          the main site.
        </p>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              className="category-card"
              key={category.slug}
              href={`/${category.slug}`}
              style={{ borderTop: `4px solid ${category.accent}` }}
            >
              <Image
                src={category.image}
                alt={`${category.name} preview`}
                width={640}
                height={360}
              />
              <div className="card-body">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section long-copy">
        <div className="narrow-copy">
          <p className="eyebrow">How this guide helps</p>
          <h2 className="section-title">
            A clearer starting point before you open the playable library.
          </h2>
          <p>
            Simulation games are a broad genre, and that is exactly why a small
            guide can be useful. One player may be looking for a peaceful farm
            to check on during a short break, while another wants a vehicle
            challenge with careful steering, heavy traffic, or tricky parking.
            Someone else may want a role-play experience where they manage a
            shop, repair a car, build a family routine, or make decisions inside
            a tightly designed scenario. All of those experiences belong under
            the larger simulation games umbrella, but they satisfy very
            different moods.
          </p>
          <p>
            Simulation Games Run is built as a discovery layer for that choice.
            Instead of asking players to scan a large catalog with no context,
            it introduces the main styles first: life simulator games for
            personal stories, relaxing simulation games for calm progress,
            driving simulation games for vehicle control, farming simulation
            games for growth and harvest loops, job simulator games for
            hands-on work tasks, and scenario simulator games for focused
            what-if challenges. Once a player recognizes the style they want,
            the main Simulation Games site is the next step for actually
            playing free browser games.
          </p>
          <p>
            This structure also helps returning players. If you already know
            you enjoy shop management, you can move toward job sims. If you like
            slow upgrades, fields, gardens, and visible progress, farming sims
            are the natural direction. If you want something lighter after a
            long day, the relaxing category points toward cozy tasks and low
            pressure goals. The point is not to overcomplicate play; it is to
            make the first click more accurate.
          </p>
        </div>
      </section>

      <section className="container section">
        <div className="split">
          <div>
            <p className="eyebrow">Choosing a category</p>
            <h2 className="section-title">Match the game to the moment.</h2>
            <p>
              The best simulation game for a player often depends on session
              length, attention level, and the kind of satisfaction they want.
              A five-minute break works well with simple organizing, cleaning,
              decorating, or idle progress. A longer session can support a
              business route, a farm upgrade path, a city drive, or a scenario
              with several attempts. This guide keeps those differences visible
              so players can choose quickly without losing the playful spark
              that brought them here.
            </p>
            <p>
              Browser-based simulation games are especially approachable because
              they reduce the distance between curiosity and play. There is no
              large download, no long installation step, and no need to commit
              to one game before you understand the mood. You can read a
              category overview here, jump to the matching collection on the
              main site, try a few games, and then return whenever you want a
              different type of simulated world.
            </p>
          </div>
          <div className="guide-list">
            <div>
              <h3>For calm play</h3>
              <p>
                Start with relaxing or farming sims when you want steady
                progress, gentle repetition, and tasks that feel satisfying
                without demanding perfect performance.
              </p>
            </div>
            <div>
              <h3>For skill and control</h3>
              <p>
                Choose driving sims when the appeal is movement itself:
                steering, braking, parking, drifting, navigating roads, and
                learning how a vehicle responds.
              </p>
            </div>
            <div>
              <h3>For role-play</h3>
              <p>
                Life and job sims are strong fits when you want to step into a
                role, build routines, serve customers, improve tools, or see a
                small system grow through repeated choices.
              </p>
            </div>
            <div>
              <h3>For problem solving</h3>
              <p>
                Scenario sims work well when you prefer a defined situation,
                a clear challenge, and the replay value of trying a different
                decision path.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section long-copy">
        <div className="narrow-copy">
          <p className="eyebrow">Why use the main site</p>
          <h2 className="section-title">
            From category research to free online simulation games.
          </h2>
          <p>
            The main Simulation Games site is where the playable catalog lives.
            This support site keeps the explanation clean and focused, while
            the main domain carries the game pages, playable embeds, thumbnails,
            and ongoing library updates. That split keeps the journey simple:
            learn the category here, then play there. It is useful for new
            players who do not yet know the genre vocabulary, and it is also
            useful for search visitors who arrive with a broad phrase such as
            simulation games, life simulator games, farming simulation games, or
            driving simulation games.
          </p>
          <p>
            Every category page on Simulation Games Run includes a direct route
            to the matching collection on Simulation-Games.com. Those links are
            intentionally prominent because this domain is not trying to replace
            the main project. Its job is to explain, organize, and send players
            onward with better intent. When the guide does its work well, the
            player arrives at the main site already knowing whether they want a
            cozy game, a job role, a vehicle challenge, a farm loop, a life
            story, or a scenario-based test.
          </p>
          <p>
            If you are browsing casually, start with the category cards above.
            If you already know what you want, use the navigation links in the
            header. If you want to skip the explanations entirely, the play
            buttons take you straight to the full library. The guide is here to
            slow down the decision just enough to make the next click better,
            then get out of the way.
          </p>
        </div>
      </section>

      <section className="promo-band">
        <div className="container split">
          <div>
            <h2 className="section-title">Ready to jump straight in?</h2>
            <p>
              The complete playable catalog lives on the main domain, where
              players can browse free online simulation games across all
              categories.
            </p>
          </div>
          <div className="cta-row">
            <a className="button" href={MAIN_SITE_URL}>
              Visit Simulation-Games.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
