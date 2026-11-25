import { useMemo, useState } from 'react';
import { PageHero, PageShell } from '../components/Layout.jsx';
import { ArrowUpRight, Calendar, ChevronDown, Search, Star } from '../components/Icons.jsx';
import { Chip, OutlineButton, PillButton, SectionHeader } from '../components/ui.jsx';
import { DestinationCard } from '../components/Cards.jsx';
import { destinationCategories, destinations, img, regions } from '../data.js';

function OverlayCard({ image, city, meta, tag, big }) {
  return (
    <article className={`overlay-card ${big ? 'overlay-card--big' : ''}`} style={{ backgroundImage: `url(${image})` }}>
      <span className="overlay-card__tag">{tag}</span>
      <div className="overlay-card__bottom">
        <div>
          <h3>{city}</h3>
          <p>{meta}</p>
        </div>
        {big ? (
          <PillButton variant="light">Explore</PillButton>
        ) : (
          <span className="round-btn round-btn--sm overlay-card__arrow">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
    </article>
  );
}

export default function Destinations() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter(
      (d) => (cat === 'All' || d.cats.includes(cat)) && (!q || `${d.city} ${d.country}`.toLowerCase().includes(q)),
    );
  }, [cat, query]);
  const visible = showAll ? list : list.slice(0, 6);

  return (
    <PageShell>
      <PageHero
        crumb="Destinations"
        title={
          <>
            Explore 1,200+
            {" "}<br />
            destinations
          </>
        }
        intro="From sun-soaked islands to snow-capped peaks — find your next escape and the best fares to get there."
      >
        <form className="search-bar" onSubmit={(e) => e.preventDefault()} role="search">
          <label className="search-bar__input">
            <Search size={22} />
            <input
              type="search"
              placeholder="Search a city, country or airport"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search destinations"
            />
          </label>
          <span className="search-bar__select">
            <Calendar size={18} /> Any month <ChevronDown size={16} />
          </span>
          <span className="search-bar__select">
            <Star size={16} /> Any rating <ChevronDown size={16} />
          </span>
          <button type="submit" className="search-bar__btn">
            <Search size={18} /> Search
          </button>
        </form>
        <div className="chip-row chip-row--scroll">
          {destinationCategories.map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
              {c}
            </Chip>
          ))}
        </div>
      </PageHero>

      <section className="card">
        <SectionHeader label="EDITOR'S PICK" title="Trending this season" right={<PillButton to="/deals">View all</PillButton>} />
        <div className="featured-grid">
          <OverlayCard big image={img.santorini} city="Santorini, Greece" meta="Flights from $612  ·  ★ 4.9  ·  Best: Apr – Oct" tag="#1 Trending" />
          <div className="featured-grid__side">
            <OverlayCard image={img.newYork} city="New York, USA" meta="From $842  ·  ★ 4.7" tag="Hot right now" />
            <OverlayCard image={img.banff} city="Banff, Canada" meta="From $612  ·  ★ 4.9" tag="Hot right now" />
          </div>
        </div>
      </section>

      <section className="card" id="all">
        <SectionHeader
          label="POPULAR DESTINATIONS"
          title="Where travelers are flying"
          right={
            <span className="sort-pill">
              Sort: Most popular <ChevronDown size={16} />
            </span>
          }
        />
        {visible.length ? (
          <div className="grid-3">
            {visible.map((d) => (
              <DestinationCard key={d.city} {...d} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No destinations match “{query}”. Try another city or category.</p>
        )}
        {list.length > 6 && (
          <div className="center">
            <OutlineButton icon={false} onClick={() => setShowAll((s) => !s)}>
              {showAll ? 'Show fewer' : 'Load more destinations'}
            </OutlineButton>
          </div>
        )}
      </section>

      <section className="card card--dark">
        <SectionHeader label="BROWSE BY REGION" title="Pick a corner of the world" light />
        <div className="grid-3 grid-3--tight">
          {regions.map((r) => (
            <a key={r.name} href="#all" className="region-tile">
              <span>
                <strong>{r.name}</strong>
                <small>{r.count} destinations</small>
              </span>
              <span className="region-tile__arrow">
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
