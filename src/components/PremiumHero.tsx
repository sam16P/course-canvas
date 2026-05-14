import { useEffect, useRef, useState } from "react";

const videos = [
  "cj9Ib38YeGg",
  "XDNOiVxe1xg",
  "-LV8Fp0E5Fc",
  "g_whQMMGtm4",
  "B9S3InhNO0w",
  "6Enuu3_apoM",
];

const features = [
  { title: "LEARN PLATFORM", sub: "13 COURSES BUNDLE", emoji: "🎓" },
  { title: "MONTHLY LIVE BATCH", sub: "HACKATHON TO LAUNCH", emoji: "🚀" },
  { title: "WEEKLY GUIDANCE", sub: "LIVE INNER CIRCLE", emoji: "🤝" },
  { title: "CLOUD KITCHEN NETWORK", sub: "SUPPORT FROM 7000+ MEMBER", emoji: "🌐" },
];

function LazyYouTube({ id }: { id: string }) {
  const [load, setLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="ckn-video-card group">
      {load ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="Success story"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setLoad(true)}
          className="ckn-video-thumb"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
          }}
        >
          <span className="ckn-play">▶</span>
        </button>
      )}
    </div>
  );
}

export function PremiumHero() {
  const offerRef = useRef<HTMLDivElement>(null);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".ckn-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ckn-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ckn-root -mx-4 sm:-mx-6 -mt-8 mb-12">
      <style>{`
        .ckn-root { font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
        .ckn-root *, .ckn-root *::before, .ckn-root *::after { box-sizing: border-box; }

        /* Reveal */
        .ckn-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .ckn-in { opacity: 1; transform: translateY(0); }

        /* ===== HERO ===== */
        .ckn-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(1200px 700px at 8% 15%, rgba(168,32,200,.55), transparent 60%),
            radial-gradient(1000px 700px at 95% 85%, rgba(236,72,153,.45), transparent 60%),
            radial-gradient(700px 500px at 50% 50%, rgba(249,115,22,.22), transparent 70%),
            linear-gradient(135deg, #18002E 0%, #2A0147 45%, #14002A 100%);
          color: #fff;
          padding: 96px 24px 110px;
          border-radius: 0 0 36px 36px;
          box-shadow: 0 40px 80px -40px rgba(0,0,0,.55);
        }
        .ckn-hero::after, .ckn-hero::before { animation: cknFloat 14s ease-in-out infinite; }
        @keyframes cknFloat {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(20px,-20px,0) scale(1.08); }
        }
        /* grain */
        .ckn-hero > .ckn-grain {
          position: absolute; inset: 0; pointer-events: none; opacity: .35; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }
        .ckn-hero::before, .ckn-hero::after {
          content: ""; position: absolute; border-radius: 50%; filter: blur(80px); opacity: .55; pointer-events: none;
        }
        .ckn-hero::before { width: 460px; height: 460px; background: #a820c8; top: -120px; left: -100px; opacity: .55; }
        .ckn-hero::after  { width: 540px; height: 540px; background: #ec4899; bottom: -160px; right: -140px; opacity: .45; }
        .ckn-hero-inner { position: relative; max-width: 1200px; margin: 0 auto; }
        .ckn-strip {
          display: inline-block; padding: 8px 18px; border-radius: 999px;
          background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18);
          font-size: 12px; letter-spacing: .14em; text-transform: uppercase; backdrop-filter: blur(10px);
          margin-bottom: 28px;
        }
        .ckn-strip b { color: #fbbf24; }
        .ckn-hero h1 {
          font-size: clamp(40px, 7vw, 88px); line-height: 1.02; font-weight: 900;
          letter-spacing: -.02em; margin: 0 0 18px;
          background: linear-gradient(90deg, #ffffff 0%, #f5d0fe 55%, #ffffff 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          text-shadow: 0 10px 60px rgba(236,72,153,.30);
        }
        .ckn-hero p.sub { font-size: clamp(15px, 1.6vw, 20px); color: #d8c4ee; max-width: 680px; margin: 0 0 36px; }
        .ckn-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 18px 38px; font-weight: 800; font-size: 16px; letter-spacing: .12em;
          color: #fff; border: 0; cursor: pointer; border-radius: 14px;
          background: linear-gradient(135deg, #f97316, #ef4444);
          box-shadow: 0 18px 50px -12px rgba(239,68,68,.7), inset 0 1px 0 rgba(255,255,255,.25);
          transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
        }
        .ckn-cta:hover { transform: translateY(-3px) scale(1.02); filter: brightness(1.08);
          box-shadow: 0 28px 60px -10px rgba(239,68,68,.8); }
        .ckn-cta-note { display: block; margin-top: 16px; font-size: 12px; letter-spacing: .18em; color: #fbbf24; text-transform: uppercase; }

        /* ===== OFFER ===== */
        .ckn-offer {
          position: relative;
          background:
            radial-gradient(800px 500px at 10% 0%, rgba(168,32,200,.30), transparent 60%),
            radial-gradient(700px 500px at 95% 100%, rgba(236,72,153,.25), transparent 60%),
            linear-gradient(180deg, #1a0033 0%, #22003D 100%);
          padding: 90px 24px;
          color: #fff;
        }
        .ckn-offer-inner { max-width: 1100px; margin: 0 auto; text-align: center; }
        .ckn-offer h2 {
          font-size: clamp(28px, 4vw, 46px); font-weight: 900; margin: 0 0 12px;
          background: linear-gradient(90deg, #fb923c, #ec4899);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ckn-offer .lead { color: #cdb5e6; max-width: 640px; margin: 0 auto 44px; font-size: 16px; }
        .ckn-card {
          background: linear-gradient(180deg, rgba(54,8,92,.6), rgba(24,0,46,.6));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 28px; padding: 52px 32px;
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 40px 100px -30px rgba(0,0,0,.7),
            0 0 60px -10px rgba(236,72,153,.25);
          border: 1px solid rgba(196,132,252,.22); text-align: center;
        }
        .ckn-logo {
          width: 76px; height: 76px; margin: 0 auto 16px; border-radius: 20px;
          background: #fff; padding: 8px; object-fit: contain; display: block;
          box-shadow: 0 12px 30px -6px rgba(236,72,153,.65);
        }
        .ckn-tier { letter-spacing: .35em; font-size: 13px; color: #c4a3e0; font-weight: 700; }
        .ckn-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(196,132,252,.35), transparent); margin: 22px auto; max-width: 380px; }
        .ckn-headline { font-size: clamp(22px, 3vw, 34px); font-weight: 900; color: #fff; margin: 0 0 36px; }
        .ckn-headline .hl { background: linear-gradient(90deg, #fb923c, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .ckn-features { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 28px; }
        @media (max-width: 820px) { .ckn-features { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 420px) { .ckn-features { grid-template-columns: 1fr; } }
        .ckn-feature { transition: transform .3s ease; }
        .ckn-feature:hover { transform: translateY(-6px); }
        .ckn-circle {
          width: 130px; height: 130px; border-radius: 50%; margin: 0 auto 14px;
          background: linear-gradient(135deg, rgba(168,32,200,.35), rgba(236,72,153,.30));
          display: flex; align-items: center; justify-content: center; font-size: 48px;
          box-shadow: 0 18px 36px -10px rgba(236,72,153,.45), inset 0 0 0 2px rgba(255,255,255,.18);
        }
        .ckn-feature h4 { font-size: 13px; font-weight: 900; letter-spacing: .08em; color: #fff; margin: 6px 0 4px; }
        .ckn-feature p { font-size: 12px; color: #b9a0d4; margin: 0; letter-spacing: .04em; font-weight: 600; }

        /* ===== STORIES ===== */
        .ckn-stories {
          position: relative; padding: 96px 24px; border-radius: 36px 36px 0 0;
          background:
            radial-gradient(900px 600px at 15% 20%, rgba(168,32,200,.40), transparent 60%),
            radial-gradient(900px 600px at 85% 80%, rgba(236,72,153,.35), transparent 60%),
            linear-gradient(180deg, rgba(20,0,42,.92), rgba(10,0,24,.96)),
            url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=60') center/cover no-repeat;
          color: #fff;
          box-shadow: 0 -40px 80px -40px rgba(0,0,0,.4);
        }
        .ckn-stories-inner { max-width: 1200px; margin: 0 auto; }
        .ckn-stories h2 {
          text-align: center; font-size: clamp(28px, 4vw, 46px); font-weight: 900;
          letter-spacing: .04em; margin: 0 0 48px;
          background: linear-gradient(90deg, #fff, #f5d0fe);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ckn-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .ckn-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .ckn-grid {
            display: flex; overflow-x: auto; scroll-snap-type: x mandatory;
            gap: 16px; padding-bottom: 12px; -webkit-overflow-scrolling: touch;
          }
          .ckn-grid > * { flex: 0 0 85%; scroll-snap-align: center; }
        }
        .ckn-video-card {
          position: relative; aspect-ratio: 16/9; border-radius: 18px; overflow: hidden;
          background: #000;
          box-shadow: 0 20px 50px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .ckn-video-card:hover { transform: translateY(-6px) scale(1.015);
          box-shadow: 0 30px 70px -20px rgba(239,68,68,.45), 0 0 0 1px rgba(239,68,68,.3); }
        .ckn-video-card iframe { width: 100%; height: 100%; border: 0; display: block; }
        .ckn-video-thumb {
          position: absolute; inset: 0; border: 0; cursor: pointer;
          background-size: cover; background-position: center;
          display: flex; align-items: center; justify-content: center;
        }
        .ckn-play {
          width: 68px; height: 68px; border-radius: 50%;
          background: linear-gradient(135deg, #ef4444, #b91c1c);
          color: #fff; font-size: 22px; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px rgba(239,68,68,.6), 0 0 0 8px rgba(239,68,68,.18);
          transition: transform .25s ease;
        }
        .ckn-video-card:hover .ckn-play { transform: scale(1.08); }

        @media (max-width: 640px) {
          .ckn-hero { padding: 60px 20px 72px; }
          .ckn-offer { padding: 60px 20px; }
          .ckn-stories { padding: 64px 20px; }
          .ckn-card { padding: 36px 20px; }
          .ckn-circle { width: 110px; height: 110px; font-size: 40px; }
        }
      `}</style>

      {/* SECTION 1 — HERO */}
      <div className="ckn-hero">
        <div className="ckn-grain" />
        <div className="ckn-hero-inner">
          <div className="ckn-reveal">
            <span className="ckn-strip"><b>DO NOT MISS OUT!</b> &nbsp;Special Offer Of The Month Below</span>
          </div>
          <h1 className="ckn-reveal">
            CLOUD KITCHEN<br/>SYSTEM BUNDLE
          </h1>
          <p className="sub ckn-reveal">
            Blueprint to Start Restaurant, Cafe, QSR, Bakery and Cloud Kitchen
          </p>
          <div className="ckn-reveal">
            <button
              className="ckn-cta"
              onClick={() => window.location.href = "https://academy.cloudkitchennetwork.com/web/checkout/691d86d0274820516cc3339d"}
            >
              GET THE OFFER →
            </button>
            <span className="ckn-cta-note">
              Everything you need to successfully launch food business
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2 — OFFER CARD */}
      <div className="ckn-offer" ref={offerRef}>
        <div className="ckn-offer-inner">
          <h2 className="ckn-reveal">Here's What You Are Getting…</h2>
          <p className="lead ckn-reveal">
            When you lock in your spot &amp; complete the transaction today, you'll get
          </p>
          <div className="ckn-card ckn-reveal">
            <img src="/ckn-logo.png" alt="Cloud Kitchen Network logo" width={76} height={76} className="ckn-logo" />
            <div className="ckn-tier">SILVER MEMBERS</div>
            <div className="ckn-divider" />
            <h3 className="ckn-headline">
              WELCOME TO <span className="hl">CLOUD KITCHEN NETWORK!</span>
            </h3>
            <div className="ckn-features">
              {features.map((f) => (
                <div className="ckn-feature" key={f.title}>
                  <div className="ckn-circle">{f.emoji}</div>
                  <h4>{f.title}</h4>
                  <p>{f.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 — SUCCESS STORIES */}
      <div className="ckn-stories">
        <div className="ckn-stories-inner">
          <h2 className="ckn-reveal">SUCCESS STORIES</h2>
          <div className="ckn-grid ckn-reveal">
            {videos.map((id) => (
              <LazyYouTube key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumHero;