import { MAIN_SITE_URL } from "@/lib/categories";

export default function NotFound() {
  return (
    <section className="container section">
      <h1>Simulation games page not found</h1>
      <p className="lead">
        This guide page does not exist yet. You can still visit the full playable
        collection on the main Simulation Games site.
      </p>
      <a className="button" href={MAIN_SITE_URL}>
        Visit Simulation-Games.com
      </a>
    </section>
  );
}
