<script>
  import { onMount } from 'svelte';

  let progress = 0;
  let menuOpen = false;
  let pointerX = 50;
  let pointerY = 30;

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  };

  /** @param {PointerEvent} event */
  const trackPointer = (event) => {
    pointerX = (event.clientX / window.innerWidth) * 100;
    pointerY = (event.clientY / window.innerHeight) * 100;
  };

  onMount(() => {
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  });
</script>

<svelte:window onpointermove={trackPointer} />

<svelte:head>
  <title>JULIIA — City in Motion</title>
  <meta name="description" content="Skating, breaking, and San Francisco—always in motion." />
  <meta property="og:title" content="JULIIA — City in Motion" />
  <meta property="og:description" content="Roll. Break. Explore. Repeat." />
  <meta property="og:image" content="https://juliia.net/images/skate-bay.jpg" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="scroll-progress" style:transform={`scaleX(${progress})`}></div>
<div class="cursor-glow" style={`--x:${pointerX}%; --y:${pointerY}%`}></div>

<header>
  <a href="#top" class="wordmark" aria-label="Juliia, back to top">
    <span class="mark">J</span><span>JULIIA.NET</span>
  </a>
  <div class="status"><i></i> SF / ONLINE</div>
  <button class="menu" class:open={menuOpen} aria-label="Toggle navigation" aria-expanded={menuOpen} onclick={() => (menuOpen = !menuOpen)}>
    <span></span><span></span>
  </button>
  <nav class:open={menuOpen} aria-label="Main navigation">
    <a href="#roll" onclick={() => (menuOpen = false)}>01 Roll</a>
    <a href="#break" onclick={() => (menuOpen = false)}>02 Break</a>
    <a href="#sf" onclick={() => (menuOpen = false)}>03 SF</a>
  </nav>
</header>

<main id="top">
  <section class="hero grid-bg">
    <div class="hero-meta mono">
      <span>37.7749° N</span>
      <span>122.4194° W</span>
      <span>BUILD 001</span>
    </div>
    <div class="hero-copy">
      <p class="kicker"><span>●</span> Bay Area movement system</p>
      <h1>CITY<br /><em>IN</em> MOTION</h1>
      <div class="hero-deck">
        <p>Wheels on concrete.<br />Hands on the floor.<br />Eyes on what’s next.</p>
        <a href="#roll">ENTER THE FLOW <b>↘</b></a>
      </div>
    </div>
    <figure class="hero-frame">
      <img src="/images/skate-bay.jpg" alt="Skateboard move by the San Francisco Bay" />
      <div class="frame-label">CAM_01 / EMBARCADERO</div>
      <div class="focus-corners" aria-hidden="true"></div>
    </figure>
    <div class="hero-stamp">NO<br />BRAKES</div>
    <div class="signal signal-a"></div><div class="signal signal-b"></div>
  </section>

  <div class="data-ticker" aria-hidden="true">
    <div><span>SKATE / BREAK / REPEAT</span><b>///</b><span>FOG MODE: ACTIVE</span><b>///</b><span>GRAVITY: OPTIONAL</span><b>///</b><span>SKATE / BREAK / REPEAT</span><b>///</b><span>FOG MODE: ACTIVE</span><b>///</b><span>GRAVITY: OPTIONAL</span><b>///</b></div>
  </div>

  <section class="roll section grid-bg" id="roll">
    <div class="section-head">
      <div><span class="index">01</span><span class="slash">/</span><span>ROLL MODE</span></div>
      <p>FOUR WHEELS<br />INFINITE LINES</p>
    </div>
    <h2>THE CITY IS<br /><span>THE PARK.</span></h2>
    <div class="roll-layout">
      <figure class="image-panel panel-main">
        <img src="/images/skatepark-night.jpg" alt="Taking a break at a night skatepark" loading="lazy" />
        <figcaption><span>FRAME_02</span><span>NIGHT SHIFT</span></figcaption>
      </figure>
      <div class="route-line" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <figure class="image-panel panel-side">
        <img src="/images/park-reset.jpg" alt="Resting in a San Francisco park with a skateboard" loading="lazy" />
        <figcaption><span>FRAME_03</span><span>RECHARGE</span></figcaption>
      </figure>
      <div class="roll-data mono">
        <p>SESSION</p><strong>24/7</strong>
        <p>ENERGY</p><strong>100%</strong>
        <p>COMFORT ZONE</p><strong>0%</strong>
      </div>
    </div>
  </section>

  <section class="break" id="break">
    <div class="break-title grid-bg">
      <div class="section-head light"><div><span class="index">02</span><span class="slash">/</span><span>MOVEMENT LAB</span></div><p>FLOOR SIGNAL<br />LOCKED</p></div>
      <h2>BREAK<br /><span>THE</span> RULES.</h2>
      <p class="break-intro">Find the beat. Build the move. Freeze the exact second when gravity loses the argument.</p>
    </div>
    <div class="lab-grid">
      <figure class="lab-main">
        <img src="/images/break-freeze.jpg" alt="A playful inverted breaking freeze in a garden" loading="lazy" />
        <div class="scanner" aria-hidden="true"></div>
        <figcaption>CAPTURE / FREEZE_008</figcaption>
      </figure>
      <div class="lab-console mono">
        <div class="console-top"><span>MOTION ANALYSIS</span><span class="live">LIVE</span></div>
        <div class="metric"><span>FLOW</span><strong>98</strong><i style="--value:98%"></i></div>
        <div class="metric"><span>BALANCE</span><strong>87</strong><i style="--value:87%"></i></div>
        <div class="metric"><span>STYLE</span><strong>MAX</strong><i style="--value:100%"></i></div>
        <p>&gt; BODY_POSITION: UNEXPECTED<br />&gt; BEAT_SYNC: TRUE<br />&gt; NEXT_MOVE: LOADING_</p>
      </div>
      <figure class="lab-side">
        <img src="/images/handstand-garden.jpg" alt="A one-handed freeze on the grass" loading="lazy" />
        <div>ROTATE VIEW <span>↻</span></div>
      </figure>
    </div>
  </section>

  <section class="sf grid-bg" id="sf">
    <div class="sf-type">
      <div class="section-head"><div><span class="index">03</span><span class="slash">/</span><span>HOME GRID</span></div><p>PACIFIC TIME<br />LOCAL SIGNAL</p></div>
      <h2>SAN<br />FRAN<span>CISCO</span></h2>
      <p class="sf-copy">Fog rolling in. Muni humming past. Concrete, ocean air, steep streets—and another spot hiding around the next corner.</p>
      <div class="sf-chips"><span>HILLS ++</span><span>FOG ++</span><span>COLOR ++</span></div>
    </div>
    <figure class="sf-image">
      <img src="/images/dmc-move.jpg" alt="Dancing beside a classic car in the California sun" loading="lazy" />
      <div class="vertical-label">WEST COAST / BEST COAST</div>
    </figure>
    <div class="orbit" aria-hidden="true"><span>SF</span></div>
  </section>

  <section class="protocol">
    <p class="mono">// MOVEMENT PROTOCOL</p>
    <div class="protocol-row"><span>01</span><strong>TRY THE WEIRD MOVE</strong><i>↗</i></div>
    <div class="protocol-row"><span>02</span><strong>LAUGH WHEN IT FLOPS</strong><i>↗</i></div>
    <div class="protocol-row"><span>03</span><strong>GET BACK UP</strong><i>↗</i></div>
    <div class="protocol-row"><span>04</span><strong>MAKE IT YOURS</strong><i>↗</i></div>
  </section>

  <section class="finale grid-bg">
    <div class="terminal mono"><span>JULIIA.NET</span><span>SYSTEM READY</span></div>
    <h2>GO<br /><span>OFFLINE.</span></h2>
    <p>THE BEST STUFF IS OUT THERE.</p>
    <a href="#top">RESTART ↟</a>
  </section>
</main>

<footer><span>JULIIA.NET / 2026</span><p>MADE IN SAN FRANCISCO WITH LOUD MUSIC</p><span>END OF LINE_</span></footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) { margin: 0; overflow-x: hidden; background: #080b10; color: #f3f5ed; font-family: 'Space Grotesk', sans-serif; }
  :global(::selection) { background: #ff4d00; color: white; }
  :global(a) { color: inherit; }
  .mono { font-family: 'IBM Plex Mono', monospace; }
  .grid-bg { background-image: linear-gradient(rgba(94,239,255,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(94,239,255,.075) 1px, transparent 1px); background-size: 42px 42px; }
  .scroll-progress { position: fixed; inset: 0 0 auto; z-index: 100; height: 3px; background: #ff4d00; transform-origin: left; }
  .cursor-glow { position: fixed; inset: 0; z-index: 30; pointer-events: none; background: radial-gradient(320px circle at var(--x) var(--y), rgba(94,239,255,.08), transparent 70%); mix-blend-mode: screen; }
  header { position: absolute; z-index: 50; inset: 0 0 auto; height: 78px; padding: 0 clamp(1rem,3vw,3rem); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; border-bottom: 1px solid rgba(255,255,255,.18); background: rgba(8,11,16,.4); backdrop-filter: blur(12px); }
  .wordmark { display: flex; align-items: center; gap: .8rem; text-decoration: none; font: 600 .75rem 'IBM Plex Mono', monospace; letter-spacing: .12em; }
  .mark { display: grid; place-items: center; width: 34px; aspect-ratio: 1; color: #080b10; background: #5eefff; font: 1.25rem 'Archivo Black', sans-serif; }
  .status { display: flex; align-items: center; gap: .6rem; font: .68rem 'IBM Plex Mono', monospace; letter-spacing: .12em; }
  .status i { width: 7px; aspect-ratio: 1; border-radius: 50%; background: #b8ff2c; box-shadow: 0 0 12px #b8ff2c; animation: pulse 1.5s infinite; }
  nav { justify-self: end; display: flex; gap: 1.5rem; }
  nav a { text-decoration: none; font: 500 .68rem 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
  nav a:hover { color: #5eefff; }
  .menu { display: none; }
  .hero { min-height: 100svh; position: relative; overflow: hidden; isolation: isolate; padding: 78px clamp(1rem,4vw,4rem) 2rem; }
  .hero::before { content: ''; position: absolute; inset: 0; z-index: -2; background: linear-gradient(115deg,#080b10 0 55%,#152345 100%); }
  .hero::after { content: ''; position: absolute; width: 40vw; height: 40vw; border-radius: 50%; right: -15vw; top: -15vw; z-index: -1; background: #1744ff; filter: blur(100px); opacity: .35; }
  .hero-meta { position: absolute; z-index: 3; left: 1.2rem; top: 45%; display: flex; gap: 1.4rem; font-size: .58rem; letter-spacing: .08em; writing-mode: vertical-rl; transform: rotate(180deg); opacity: .65; }
  .hero-copy { position: relative; z-index: 4; padding: clamp(5rem,12vh,9rem) 0 3rem; width: 65%; }
  .kicker { display: flex; align-items: center; gap: .7rem; margin: 0 0 2rem 4vw; font: .68rem 'IBM Plex Mono', monospace; letter-spacing: .14em; text-transform: uppercase; }
  .kicker span { color: #ff4d00; }
  h1 { margin: 0; font: clamp(5rem,11.5vw,11rem)/.78 'Archivo Black', sans-serif; letter-spacing: -.075em; }
  h1 em { display: inline-block; color: #080b10; -webkit-text-stroke: 2px #5eefff; font-style: normal; transform: skewX(-10deg); }
  .hero-deck { display: flex; align-items: end; gap: clamp(2rem,8vw,8rem); margin: 2.5rem 0 0 12vw; }
  .hero-deck p { margin: 0; font: .78rem/1.7 'IBM Plex Mono', monospace; text-transform: uppercase; }
  .hero-deck a { padding: .9rem 1.1rem; border: 1px solid #5eefff; text-decoration: none; font: .68rem 'IBM Plex Mono', monospace; box-shadow: inset 0 0 0 0 #5eefff; transition: .25s; }
  .hero-deck a:hover { color: #080b10; box-shadow: inset 220px 0 0 0 #5eefff; }
  .hero-deck b { color: #ff4d00; }
  .hero-frame { position: absolute; z-index: 2; width: min(43vw,660px); right: 4vw; bottom: 3vh; margin: 0; padding: 10px; border: 1px solid rgba(94,239,255,.55); background: rgba(8,11,16,.8); clip-path: polygon(0 0,93% 0,100% 7%,100% 100%,7% 100%,0 93%); }
  .hero-frame img { display: block; width: 100%; height: min(70vh,760px); object-fit: cover; object-position: center; filter: saturate(.65) contrast(1.18) hue-rotate(4deg); }
  .hero-frame::after { content: ''; position: absolute; inset: 10px; background: linear-gradient(180deg,transparent 45%,rgba(9,18,36,.5)), repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 4px); pointer-events: none; }
  .frame-label { position: absolute; z-index: 2; left: 1.4rem; bottom: 1.4rem; padding: .45rem .6rem; background: #080b10; font: .58rem 'IBM Plex Mono', monospace; }
  .focus-corners::before,.focus-corners::after { content: ''; position: absolute; z-index: 3; width: 34px; height: 34px; border-color: #ff4d00; }
  .focus-corners::before { left: 2rem; top: 2rem; border-left: 2px solid #ff4d00; border-top: 2px solid #ff4d00; }
  .focus-corners::after { right: 2rem; bottom: 2rem; border-right: 2px solid #ff4d00; border-bottom: 2px solid #ff4d00; }
  .hero-stamp { position: absolute; z-index: 6; right: 2vw; bottom: 12%; display: grid; place-items: center; width: 110px; aspect-ratio: 1; color: #080b10; background: #ff4d00; border-radius: 50%; font: 1.15rem/.85 'Archivo Black', sans-serif; text-align: center; transform: rotate(10deg); box-shadow: 0 0 0 7px #080b10,0 0 0 8px #ff4d00; }
  .signal { position: absolute; z-index: 1; height: 6px; background: #5eefff; opacity: .5; }
  .signal-a { width: 25vw; right: 30%; top: 28%; animation: signal 4s infinite; }.signal-b { width: 12vw; left: 8%; bottom: 18%; animation: signal 3s 1s infinite reverse; }
  .data-ticker { overflow: hidden; color: #080b10; background: #5eefff; border-block: 2px solid #080b10; }
  .data-ticker div { display: flex; gap: 2rem; width: max-content; padding: .8rem 0; font: 600 .72rem 'IBM Plex Mono', monospace; letter-spacing: .12em; animation: ticker 22s linear infinite; }
  .data-ticker b { color: #ff4d00; }
  .section { padding: clamp(6rem,10vw,10rem) clamp(1rem,6vw,6rem); }
  .section-head { display: flex; justify-content: space-between; align-items: start; padding-top: .8rem; border-top: 1px solid rgba(8,11,16,.35); font: 600 .68rem 'IBM Plex Mono', monospace; letter-spacing: .12em; }
  .section-head > div { display: flex; gap: 1rem; }.section-head p { margin: 0; text-align: right; line-height: 1.5; }.index { font-size: 1.5rem; }.slash { color: #ff4d00; }
  .roll { color: #080b10; background-color: #dce3e1; }
  .roll h2,.break h2,.sf h2,.finale h2 { margin: 4rem 0 5rem; font: clamp(4rem,9.5vw,10rem)/.82 'Archivo Black',sans-serif; letter-spacing: -.07em; }
  .roll h2 span { color: #1744ff; }
  .roll-layout { display: grid; grid-template-columns: 1.25fr 80px .78fr .42fr; align-items: center; gap: clamp(1rem,2.5vw,2.5rem); }
  .image-panel { margin: 0; padding: 7px; background: #080b10; box-shadow: 10px 10px 0 #5eefff; }
  .image-panel img { display: block; width: 100%; filter: grayscale(.15) contrast(1.12); }
  .image-panel figcaption { display: flex; justify-content: space-between; padding: .65rem .4rem .25rem; color: #f3f5ed; font: .58rem 'IBM Plex Mono', monospace; }
  .panel-side { transform: translateY(5rem); box-shadow: 8px 8px 0 #ff4d00; }
  .route-line { display: grid; place-items: center; height: 80%; border-left: 2px solid #1744ff; }
  .route-line i { width: 14px; aspect-ratio: 1; border: 3px solid #1744ff; border-radius: 50%; background: #dce3e1; }
  .roll-data p { margin: 1.5rem 0 .2rem; font-size: .58rem; }.roll-data strong { font-size: clamp(1.5rem,3vw,3rem); color: #1744ff; }
  .break { background: #080b10; }
  .break-title { padding: clamp(6rem,10vw,10rem) clamp(1rem,6vw,6rem) 4rem; }
  .section-head.light { border-color: rgba(255,255,255,.25); }
  .break h2 { margin-bottom: 2rem; }.break h2 span { color: #5eefff; -webkit-text-stroke: 0; }
  .break-intro { width: min(38rem,90%); margin-left: auto; font: .86rem/1.8 'IBM Plex Mono',monospace; text-transform: uppercase; }
  .lab-grid { display: grid; grid-template-columns: 1.15fr .55fr .7fr; align-items: center; gap: 2px; padding: 0 clamp(1rem,4vw,4rem) clamp(7rem,10vw,10rem); }
  .lab-grid figure { margin: 0; position: relative; overflow: hidden; }.lab-grid img { display: block; width: 100%; filter: grayscale(1) contrast(1.25); transition: .4s; }.lab-grid figure:hover img { filter: grayscale(.2) contrast(1.1); transform: scale(1.015); }
  .lab-main { border: 1px solid #5eefff; padding: 8px; }.lab-main figcaption { position: absolute; left: 1rem; bottom: 1rem; padding: .45rem; background: #080b10; font: .58rem 'IBM Plex Mono',monospace; }
  .scanner { position: absolute; left: 8px; right: 8px; top: 20%; height: 1px; background: #ff4d00; box-shadow: 0 0 14px #ff4d00; animation: scan 4s infinite alternate; }
  .lab-console { align-self: stretch; padding: clamp(1rem,2vw,2rem); color: #5eefff; background: #101824; border-block: 1px solid #5eefff; font-size: .62rem; }
  .console-top { display: flex; justify-content: space-between; margin-bottom: 3rem; }.live { color: #080b10; background:#b8ff2c;padding:.2rem .35rem; }
  .metric { display:grid;grid-template-columns:1fr auto;gap:.5rem;margin:1.6rem 0}.metric strong{color:white}.metric i{grid-column:1/-1;display:block;height:3px;background:linear-gradient(90deg,#5eefff var(--value),#263041 var(--value));}.lab-console p{margin-top:3rem;line-height:1.8;color:#a6afbd}
  .lab-side { border: 1px solid #ff4d00; padding: 8px; transform: translateY(4rem); }.lab-side div{display:flex;justify-content:space-between;padding:.7rem .3rem .2rem;font: .58rem 'IBM Plex Mono',monospace}.lab-side span{color:#ff4d00;font-size:1.3rem}
  .sf { position:relative;display:grid;grid-template-columns:1fr .72fr;gap:clamp(2rem,6vw,7rem);overflow:hidden;padding:clamp(6rem,10vw,10rem) clamp(1rem,6vw,6rem);color:#080b10;background-color:#ff4d00}
  .sf h2{margin-bottom:3rem}.sf h2 span{display:block;color:#f3f5ed;text-shadow:6px 6px 0 #1744ff}.sf-copy{max-width:34rem;font:500 .88rem/1.8 'IBM Plex Mono',monospace;text-transform:uppercase}.sf-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:3rem}.sf-chips span{padding:.6rem .8rem;border:1px solid;font:600 .62rem 'IBM Plex Mono',monospace;background:#b8ff2c}
  .sf-image{margin:4rem 0 0;position:relative;align-self:center;padding:8px;background:#080b10;box-shadow:14px 14px 0 #5eefff;transform:rotate(1.5deg)}.sf-image img{display:block;width:100%;filter:saturate(.7) contrast(1.15)}.vertical-label{position:absolute;right:-2.3rem;top:1rem;writing-mode:vertical-rl;color:#f3f5ed;font: .55rem 'IBM Plex Mono',monospace}
  .orbit{position:absolute;right:-10rem;bottom:-10rem;width:28rem;aspect-ratio:1;border:1px solid rgba(8,11,16,.5);border-radius:50%;display:grid;place-items:center;animation:spin 16s linear infinite}.orbit::before,.orbit::after{content:'';position:absolute;border:1px solid rgba(8,11,16,.35);border-radius:50%}.orbit::before{inset:3rem}.orbit::after{inset:7rem}.orbit span{font:4rem 'Archivo Black',sans-serif}
  .protocol{padding:clamp(6rem,10vw,10rem) clamp(1rem,7vw,7rem);background:#dce3e1;color:#080b10}.protocol>p{margin-bottom:4rem;font-size:.68rem}.protocol-row{display:grid;grid-template-columns:4rem 1fr auto;align-items:center;padding:1.5rem 0;border-top:1px solid;font-size:.68rem}.protocol-row strong{font:clamp(1.8rem,5vw,5rem)/1 'Archivo Black',sans-serif;letter-spacing:-.05em;transition:.2s}.protocol-row i{font-size:2rem;color:#ff4d00;font-style:normal}.protocol-row:hover strong{color:#1744ff;transform:translateX(1rem)}
  .finale{min-height:90svh;display:grid;place-content:center;text-align:center;position:relative;overflow:hidden;background-color:#1744ff}.terminal{position:absolute;left:2rem;right:2rem;top:2rem;display:flex;justify-content:space-between;padding-top:.8rem;border-top:1px solid;font-size:.58rem}.finale h2{margin:0;font-size:clamp(5.8rem,16vw,16rem)}.finale h2 span{color:#5eefff;-webkit-text-stroke:2px #080b10;text-shadow:9px 9px 0 #ff4d00}.finale p{font: .72rem 'IBM Plex Mono',monospace;letter-spacing:.16em}.finale a{justify-self:center;margin-top:2rem;padding:.8rem 1rem;border:1px solid;text-decoration:none;font: .65rem 'IBM Plex Mono',monospace}.finale a:hover{background:#5eefff;color:#080b10}
  footer{display:flex;justify-content:space-between;gap:2rem;padding:1.4rem 2rem;background:#080b10;font: .56rem 'IBM Plex Mono',monospace;letter-spacing:.08em}footer p{margin:0;color:#5eefff}
  @keyframes ticker{to{transform:translateX(-50%)}}@keyframes pulse{50%{opacity:.3}}@keyframes signal{50%{transform:translateX(100%);opacity:.1}}@keyframes scan{to{top:80%}}@keyframes spin{to{transform:rotate(360deg)}}
  @media(max-width:760px){
    .cursor-glow{display:none}header{grid-template-columns:1fr auto;height:66px}.status{display:none}.menu{display:grid;gap:5px;place-content:center;width:42px;height:42px;padding:0;border:1px solid #5eefff;background:#080b10;color:white;z-index:2}.menu span{display:block;width:18px;height:2px;background:currentColor;transition:.2s}.menu.open span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu.open span:last-child{transform:translateY(-3.5px) rotate(-45deg)}nav{display:none;position:fixed;inset:0;background:#1744ff;place-content:center;text-align:center;gap:1rem}nav.open{display:grid}nav a{font:2.5rem 'Archivo Black',sans-serif}
    .hero{min-height:920px;padding-top:66px}.hero-meta{display:none}.hero-copy{width:100%;padding-top:4.5rem}.kicker{margin-left:0}h1{font-size:clamp(4.2rem,20vw,7rem)}.hero-deck{margin:2rem 0 0;align-items:start;flex-direction:column;gap:1.5rem}.hero-frame{width:82vw;right:7vw;bottom:2rem}.hero-frame img{height:46vh}.hero-stamp{width:78px;right:3vw;bottom:30%;font-size:.8rem}
    .section-head p{display:none}.roll h2,.break h2,.sf h2{font-size:clamp(3.6rem,17vw,6rem);margin:3rem 0}.roll-layout{grid-template-columns:1fr}.route-line{display:none}.panel-side{width:75%;margin:-2rem 0 0 auto;transform:none}.roll-data{display:grid;grid-template-columns:1fr auto;align-items:end}.roll-data p,.roll-data strong{margin:.4rem 0}
    .break-intro{width:100%;margin-left:0}.lab-grid{grid-template-columns:1fr}.lab-console{min-height:360px}.lab-side{width:72%;margin:-2rem 0 0 auto;transform:none}
    .sf{grid-template-columns:1fr}.sf-image{width:86%;margin:0}.orbit{display:none}.sf-type{order:2}.protocol-row{grid-template-columns:2.5rem 1fr auto}.protocol-row strong{font-size:clamp(1.4rem,7vw,2.4rem)}.finale h2{font-size:clamp(5rem,22vw,8rem)}footer{flex-direction:column}footer p{order:3}
  }
  @media(prefers-reduced-motion:reduce){:global(html){scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition:none!important}}
</style>
