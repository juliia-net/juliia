<script>
  import { onMount } from 'svelte';

  let progress = 0;
  let menuOpen = false;

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  onMount(() => {
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  });
</script>

<svelte:head>
  <title>JULIIA — Keep Moving</title>
  <meta
    name="description"
    content="A kinetic little corner of the web for skating, breaking, and San Francisco energy."
  />
  <meta property="og:title" content="JULIIA — Keep Moving" />
  <meta property="og:description" content="Roll. Break. Explore. Repeat." />
  <meta property="og:image" content="https://juliia.net/images/skate-bay.jpg" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="progress" style:transform={`scaleX(${progress})`}></div>

<header class="site-header">
  <a class="logo" href="#top" aria-label="Juliia, back to top">J<span>!</span></a>
  <button
    class:open={menuOpen}
    class="menu-toggle"
    aria-label="Toggle navigation"
    aria-expanded={menuOpen}
    onclick={() => (menuOpen = !menuOpen)}
  >
    <span></span><span></span>
  </button>
  <nav class:open={menuOpen} aria-label="Main navigation">
    <a href="#skate" onclick={closeMenu}>Skate</a>
    <a href="#break" onclick={closeMenu}>Break</a>
    <a href="#city" onclick={closeMenu}>The city</a>
  </nav>
</header>

<main>
  <section class="hero" id="top">
    <img src="/images/skate-bay.jpg" alt="Skateboard move by the San Francisco Bay" />
    <div class="hero-wash"></div>
    <div class="hero-copy">
      <p class="eyebrow">San Francisco · moving daily</p>
      <h1><span>Keep</span><strong>moving.</strong></h1>
      <p class="intro">Wheels down. Music up. The whole city is a playground.</p>
    </div>
    <div class="sticker sticker-one">100%<br />ORIGINAL</div>
    <div class="sticker sticker-two">NO<br />BORING<br />DAYS</div>
    <a class="scroll-cue" href="#skate">
      <span>drop in</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v17m0 0 7-7m-7 7-7-7" /></svg>
    </a>
  </section>

  <div class="ticker" aria-hidden="true">
    <div>
      <span>ROLL FAST</span><i>★</i><span>STAY WEIRD</span><i>★</i><span>BREAK THE BEAT</span><i>★</i>
      <span>ROLL FAST</span><i>★</i><span>STAY WEIRD</span><i>★</i><span>BREAK THE BEAT</span><i>★</i>
    </div>
  </div>

  <section class="skate-section section-pad" id="skate">
    <div class="section-number">01 / ROLL</div>
    <div class="section-title">
      <p>Four wheels.<br />Zero chill.</p>
      <h2>Skate<br /><em>everything.</em></h2>
    </div>
    <div class="skate-grid">
      <figure class="photo photo-night">
        <img src="/images/skatepark-night.jpg" alt="Taking a break at a night skatepark" loading="lazy" />
        <figcaption>night session / wheels still warm</figcaption>
      </figure>
      <figure class="photo photo-rest">
        <img src="/images/park-reset.jpg" alt="Resting in a San Francisco park with a skateboard" loading="lazy" />
        <figcaption>reset. breathe. go again.</figcaption>
      </figure>
      <div class="side-note">HILLS<br />MAKE<br />BETTER<br />STORIES <span>↗</span></div>
    </div>
  </section>

  <section class="break-section" id="break">
    <div class="break-lead section-pad">
      <div class="section-number light">02 / BREAK</div>
      <h2>Gravity is<br /><span>a suggestion.</span></h2>
      <p>Find the beat. Freeze the moment. Make the floor look optional.</p>
    </div>
    <div class="break-gallery">
      <figure class="break-main">
        <img src="/images/break-freeze.jpg" alt="A playful inverted breaking freeze in a garden" loading="lazy" />
        <div class="scribble" aria-hidden="true">WOW!</div>
      </figure>
      <figure class="break-small">
        <img src="/images/handstand-garden.jpg" alt="A one-handed freeze on the grass" loading="lazy" />
        <figcaption>world = upside down</figcaption>
      </figure>
    </div>
  </section>

  <section class="city-section section-pad" id="city">
    <div class="city-copy">
      <div class="section-number">03 / SF</div>
      <h2>Fog.<br />Hills.<br /><span>Go.</span></h2>
      <p>
        Concrete, cable cars, ocean air—and a new spot around every corner.
        San Francisco keeps the background moving.
      </p>
      <div class="coords">37.7749° N<br />122.4194° W</div>
    </div>
    <figure class="city-photo">
      <img src="/images/dmc-move.jpg" alt="Dancing beside a classic car in the California sun" loading="lazy" />
      <div class="burst" aria-hidden="true"><span>MOVE</span></div>
    </figure>
  </section>

  <section class="manifesto">
    <p class="eyebrow">house rules</p>
    <div class="rule"><span>01</span><strong>Try the weird move.</strong></div>
    <div class="rule"><span>02</span><strong>Laugh when it flops.</strong></div>
    <div class="rule"><span>03</span><strong>Get back up.</strong></div>
    <div class="rule"><span>04</span><strong>Make it yours.</strong></div>
  </section>

  <section class="finale">
    <p>still here?</p>
    <h2>GO<br /><span>PLAY!</span></h2>
    <a href="#top">again ↟</a>
  </section>
</main>

<footer>
  <a href="#top" class="footer-logo">JULIIA.NET</a>
  <p>Made with scraped knees &amp; loud music.</p>
  <span>SF · CA</span>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Mono:wght@300;400;500&family=Permanent+Marker&display=swap');

  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    margin: 0;
    background: #f1efe8;
    color: #171719;
    font-family: 'DM Mono', monospace;
    overflow-x: hidden;
  }
  :global(::selection) { background: #ff4fa3; color: #171719; }
  :global(a) { color: inherit; }
  .progress { position: fixed; inset: 0 0 auto; height: 4px; background: #dfff00; transform-origin: left; z-index: 100; }
  .site-header { position: absolute; inset: 0 0 auto; z-index: 20; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; color: white; }
  .logo { text-decoration: none; display: grid; place-items: center; width: 3.4rem; height: 3.4rem; border: 2px solid currentColor; border-radius: 50%; font: 2rem/1 'Archivo Black', sans-serif; transform: rotate(-8deg); }
  .logo span { color: #dfff00; }
  nav { display: flex; gap: .4rem; }
  nav a { padding: .65rem 1rem; border: 1px solid rgba(255,255,255,.6); border-radius: 999px; text-decoration: none; text-transform: uppercase; font-size: .72rem; letter-spacing: .08em; backdrop-filter: blur(10px); transition: .2s; }
  nav a:hover { color: #171719; background: #dfff00; border-color: #dfff00; transform: rotate(-2deg); }
  .menu-toggle { display: none; }
  .hero { position: relative; height: 100svh; min-height: 660px; isolation: isolate; overflow: hidden; background: #202024; color: white; }
  .hero > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 48%; filter: saturate(.82) contrast(1.08); animation: reveal-image 1.2s cubic-bezier(.2,.8,.2,1) both; }
  .hero-wash { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(10,10,12,.75) 0%, rgba(10,10,12,.15) 54%, rgba(10,10,12,.1)), linear-gradient(0deg, rgba(10,10,12,.65), transparent 45%); }
  .hero-copy { position: absolute; left: clamp(1.4rem, 7vw, 7rem); top: 50%; transform: translateY(-42%); width: min(880px, 84vw); }
  .eyebrow { margin: 0 0 1rem; text-transform: uppercase; letter-spacing: .18em; font-size: .72rem; }
  .hero h1 { margin: 0; font: clamp(4.8rem, 12vw, 11rem)/.76 'Archivo Black', sans-serif; text-transform: uppercase; letter-spacing: -.07em; }
  .hero h1 span, .hero h1 strong { display: block; }
  .hero h1 strong { margin-left: clamp(1rem, 8vw, 7rem); color: #dfff00; font-weight: inherit; transform: rotate(-2deg); text-shadow: 8px 8px 0 #ff4fa3; }
  .intro { max-width: 34rem; margin: 2.4rem 0 0 clamp(1rem, 8vw, 7rem); font-size: clamp(.9rem, 1.4vw, 1.15rem); line-height: 1.7; }
  .sticker { position: absolute; display: grid; place-items: center; text-align: center; font: 1.1rem/.9 'Archivo Black', sans-serif; color: #171719; }
  .sticker-one { top: 17%; right: 7%; width: 7rem; aspect-ratio: 1; border-radius: 50%; background: #ff4fa3; transform: rotate(11deg); box-shadow: 7px 7px 0 #171719; }
  .sticker-two { right: 13%; bottom: 13%; width: 6.5rem; height: 7.5rem; background: #69d8ff; transform: rotate(-7deg); clip-path: polygon(50% 0, 61% 17%, 81% 8%, 82% 30%, 100% 38%, 84% 53%, 96% 73%, 73% 76%, 68% 100%, 49% 84%, 29% 98%, 25% 76%, 0 72%, 14% 51%, 0 34%, 24% 28%, 28% 5%); }
  .scroll-cue { position: absolute; left: 2rem; bottom: 2rem; display: flex; gap: .8rem; align-items: center; text-decoration: none; text-transform: uppercase; font-size: .7rem; letter-spacing: .14em; writing-mode: vertical-rl; }
  .scroll-cue svg { width: 1.4rem; fill: none; stroke: currentColor; stroke-width: 1.5; animation: bob 1.6s ease-in-out infinite; }
  .ticker { overflow: hidden; background: #dfff00; border-block: 3px solid #171719; transform: rotate(-1deg) scale(1.01); position: relative; z-index: 3; }
  .ticker div { display: flex; width: max-content; gap: 1.8rem; padding: 1rem 0; animation: ticker 20s linear infinite; font: 1.4rem 'Archivo Black', sans-serif; }
  .ticker i { color: #ff4fa3; font-style: normal; }
  .section-pad { padding: clamp(5rem, 10vw, 9rem) clamp(1.4rem, 6vw, 6rem); }
  .section-number { border-top: 1px solid currentColor; padding-top: .8rem; font-size: .72rem; letter-spacing: .15em; text-transform: uppercase; }
  .section-title { display: grid; grid-template-columns: 1fr 2fr; align-items: end; gap: 2rem; margin: 3rem 0 4.5rem; }
  .section-title p { line-height: 1.7; text-transform: uppercase; font-size: .78rem; }
  .section-title h2, .break-lead h2, .city-copy h2 { margin: 0; font: clamp(4rem, 9vw, 9rem)/.8 'Archivo Black', sans-serif; text-transform: uppercase; letter-spacing: -.07em; }
  .section-title em { color: #ff4fa3; font-family: 'Permanent Marker', cursive; font-weight: 400; text-transform: lowercase; }
  .skate-grid { display: grid; grid-template-columns: 1.5fr .8fr auto; align-items: start; gap: clamp(1rem, 3vw, 3rem); }
  figure { margin: 0; }
  .photo img, .break-gallery img, .city-photo img { width: 100%; display: block; filter: saturate(.86) contrast(1.06); }
  .photo-night { transform: rotate(-2deg); }
  .photo-rest { margin-top: 9rem; transform: rotate(2.5deg); }
  figcaption { padding-top: .7rem; font-size: .68rem; text-transform: uppercase; letter-spacing: .08em; }
  .side-note { writing-mode: vertical-rl; font: 1rem/1.2 'Archivo Black', sans-serif; color: #ff4fa3; }
  .side-note span { color: #171719; font-size: 2rem; }
  .break-section { background: #171719; color: white; }
  .section-number.light { color: #dfff00; }
  .break-lead h2 { margin: 3rem 0 2rem; }
  .break-lead h2 span { color: #69d8ff; font-family: 'Permanent Marker', cursive; font-weight: 400; text-transform: lowercase; text-shadow: 5px 5px 0 #4d1c9b; }
  .break-lead > p { width: min(30rem, 100%); margin-left: auto; line-height: 1.8; }
  .break-gallery { display: grid; grid-template-columns: 1.25fr .75fr; align-items: center; gap: clamp(1rem, 5vw, 6rem); padding: 0 clamp(1.4rem, 6vw, 6rem) clamp(6rem, 12vw, 12rem); }
  .break-main { position: relative; transform: rotate(-1.5deg); }
  .break-small { transform: rotate(2.5deg); }
  .scribble { position: absolute; right: -2rem; top: 10%; color: #dfff00; font: clamp(2.5rem, 6vw, 6rem) 'Permanent Marker', cursive; transform: rotate(12deg); text-shadow: 4px 4px 0 #171719; }
  .city-section { display: grid; grid-template-columns: .75fr 1.25fr; gap: clamp(3rem, 8vw, 9rem); align-items: center; background: #ff5b2d; }
  .city-copy h2 { margin: 3rem 0; }
  .city-copy h2 span { color: #f1efe8; text-shadow: 5px 5px 0 #171719; }
  .city-copy > p { max-width: 30rem; line-height: 1.8; }
  .coords { margin-top: 5rem; padding: 1rem; width: max-content; border: 2px solid; font-weight: 500; transform: rotate(-3deg); background: #dfff00; box-shadow: 6px 6px 0 #171719; }
  .city-photo { position: relative; transform: rotate(1.7deg); box-shadow: 18px 18px 0 #171719; }
  .burst { position: absolute; display: grid; place-items: center; width: 9rem; height: 9rem; right: -3rem; bottom: -3rem; background: #69d8ff; clip-path: polygon(50% 0,61% 28%,85% 15%,72% 40%,100% 50%,72% 61%,85% 85%,60% 72%,50% 100%,39% 72%,15% 85%,28% 60%,0 50%,28% 39%,15% 15%,40% 28%); }
  .burst span { font: 1.3rem 'Archivo Black', sans-serif; transform: rotate(-10deg); }
  .manifesto { padding: clamp(6rem, 12vw, 12rem) clamp(1.4rem, 8vw, 8rem); background: #69d8ff; }
  .manifesto .eyebrow { margin-bottom: 4rem; }
  .rule { display: grid; grid-template-columns: 5rem 1fr; align-items: center; border-bottom: 2px solid; padding: 1.5rem 0; }
  .rule span { font-size: .75rem; }
  .rule strong { font: clamp(2rem, 5vw, 5rem)/1 'Archivo Black', sans-serif; text-transform: uppercase; letter-spacing: -.05em; transition: transform .2s, color .2s; }
  .rule:hover strong { transform: translateX(1rem); color: #4d1c9b; }
  .finale { min-height: 85svh; display: grid; place-content: center; text-align: center; color: white; background: #4d1c9b; padding: 5rem 1rem; }
  .finale p { text-transform: uppercase; letter-spacing: .2em; font-size: .7rem; }
  .finale h2 { margin: 1rem 0 3rem; font: clamp(6rem, 18vw, 17rem)/.7 'Archivo Black', sans-serif; letter-spacing: -.09em; }
  .finale h2 span { color: #dfff00; text-shadow: 8px 8px 0 #ff4fa3; }
  .finale a { justify-self: center; padding: .9rem 1.3rem; border: 2px solid; border-radius: 999px; text-decoration: none; text-transform: uppercase; font-size: .75rem; }
  .finale a:hover { background: white; color: #4d1c9b; }
  footer { display: flex; justify-content: space-between; align-items: end; gap: 2rem; padding: 2rem; color: white; background: #171719; font-size: .68rem; text-transform: uppercase; }
  .footer-logo { font: 1.4rem 'Archivo Black', sans-serif; text-decoration: none; }
  footer p { margin: 0; }
  @keyframes reveal-image { from { opacity: 0; transform: scale(1.08); } to { opacity: 1; transform: scale(1); } }
  @keyframes ticker { to { transform: translateX(-50%); } }
  @keyframes bob { 50% { transform: translateY(.5rem); } }
  @media (max-width: 760px) {
    .site-header { padding: 1rem 1.1rem; }
    .menu-toggle { display: grid; gap: .4rem; width: 3rem; height: 3rem; place-content: center; padding: 0; color: white; border: 1px solid rgba(255,255,255,.6); border-radius: 50%; background: rgba(0,0,0,.2); z-index: 2; }
    .menu-toggle span { display: block; width: 1.2rem; height: 2px; background: currentColor; transition: .2s; }
    .menu-toggle.open span:first-child { transform: translateY(4px) rotate(45deg); }
    .menu-toggle.open span:last-child { transform: translateY(-4px) rotate(-45deg); }
    nav { display: none; position: absolute; inset: 0; min-height: 100svh; background: #4d1c9b; place-content: center; text-align: center; }
    nav.open { display: grid; }
    nav a { border: 0; font: 2.8rem 'Archivo Black', sans-serif; }
    .hero-copy { left: 1.25rem; top: 52%; width: calc(100% - 2.5rem); }
    .hero h1 { font-size: clamp(4.3rem, 22vw, 7rem); }
    .hero h1 strong { margin-left: .5rem; }
    .intro { margin: 2rem 0 0 .5rem; max-width: 80%; }
    .sticker-one { top: 20%; right: 1rem; width: 5.5rem; font-size: .85rem; }
    .sticker-two { display: none; }
    .scroll-cue { display: none; }
    .section-title, .skate-grid, .break-gallery, .city-section { grid-template-columns: 1fr; }
    .section-title { margin-bottom: 2rem; }
    .section-title p { order: 2; }
    .section-title h2, .break-lead h2, .city-copy h2 { font-size: clamp(3.8rem, 18vw, 6.2rem); }
    .photo-rest { width: 72%; margin: -2rem 0 0 auto; }
    .side-note { display: none; }
    .break-gallery { padding-bottom: 6rem; }
    .break-main { width: 88%; }
    .break-small { width: 70%; margin: -3rem 0 0 auto; }
    .scribble { right: -1.5rem; }
    .city-copy { order: 2; }
    .city-photo { width: 88%; }
    .burst { width: 6.5rem; height: 6.5rem; right: -2rem; }
    .coords { margin-top: 2.5rem; }
    .rule { grid-template-columns: 3rem 1fr; }
    footer { align-items: flex-start; flex-direction: column; }
  }
  @media (prefers-reduced-motion: reduce) {
    :global(html) { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition: none !important; }
  }
</style>
