import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="page">
    <header class="hero">
      <p class="tag">Full-stack deployment kit</p>
      <h1>Flippin launchpad for Web, APK, and iOS</h1>
      <p class="subtitle">
        A production-ready baseline with an API service, a web experience, and an
        Expo mobile shell to ship fast.
      </p>
      <div class="pill-row">
        <span>Local-first</span>
        <span>Market-aware</span>
        <span>Pricing-ready</span>
      </div>
      <div class="cta-row">
        <button class="primary">Open launch checklist</button>
        <button class="ghost">View API health</button>
      </div>
      <div class="api-status" id="api-status">API status: checking...</div>
    </header>

    <section class="grid">
      <article>
        <h2>Backend</h2>
        <p>
          Express service with health checks, CORS, and environment-ready
          configuration for fast deployment.
        </p>
        <ul>
          <li>PORT + CORS env configuration</li>
          <li>JSON API baseline</li>
          <li>Edge-ready routing</li>
          <li>Marketplace options endpoint</li>
        </ul>
      </article>
      <article>
        <h2>Frontend</h2>
        <p>
          Vite-powered landing experience designed to connect to the API and
          highlight launch readiness.
        </p>
        <ul>
          <li>Modern layout</li>
          <li>Responsive grid</li>
          <li>Deployment guidance</li>
          <li>Marketplace focus callouts</li>
        </ul>
      </article>
      <article>
        <h2>Mobile</h2>
        <p>
          Expo starter with shared branding and API hooks, ready for APK and iOS
          builds.
        </p>
        <ul>
          <li>Expo config</li>
          <li>Native-ready screens</li>
          <li>Consistent theming</li>
          <li>Local-first resale flow prompt</li>
        </ul>
      </article>
    </section>

    <section class="marketplaces">
      <h2>Marketplace priorities</h2>
      <p>
        Start with local-first channels, then expand to global or niche
        marketplaces for higher-margin flips.
      </p>
      <div class="market-grid">
        <div>
          <h3>Local + fast</h3>
          <ul>
            <li>Facebook Marketplace</li>
            <li>OfferUp / Nextdoor (if available)</li>
            <li>Local consignment</li>
          </ul>
        </div>
        <div>
          <h3>National reach</h3>
          <ul>
            <li>eBay</li>
            <li>Mercari</li>
            <li>Poshmark</li>
          </ul>
        </div>
        <div>
          <h3>Niche &amp; style</h3>
          <ul>
            <li>Etsy</li>
            <li>Depop</li>
            <li>Grailed / StockX (streetwear)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="market-data">
      <h2>Marketplace signals</h2>
      <p>
        Live data from the API endpoint helps keep marketplace options aligned
        with your flipping strategy.
      </p>
      <div class="market-data-grid" id="market-data">
        <div class="placeholder-card">Loading marketplace options...</div>
      </div>
    </section>
  </main>
`;

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

const apiStatus = document.querySelector("#api-status");
const marketData = document.querySelector("#market-data");

const fetchJson = async (path) => {
  const response = await fetch(`${apiBaseUrl}${path}`);
  if (!response.ok) {
    throw new Error("Request failed");
  }
  return response.json();
};

const renderMarketplaces = (payload) => {
  if (!payload?.options?.length) {
    marketData.innerHTML = "<div class=\"placeholder-card\">No data yet.</div>";
    return;
  }

  marketData.innerHTML = payload.options
    .map(
      (option) => `
        <article class="market-card">
          <h3>${option.name}</h3>
          <p class="market-type">${option.type}</p>
          <p>${option.notes}</p>
        </article>
      `
    )
    .join("");
};

const loadApiData = async () => {
  try {
    const [health, marketplaces] = await Promise.all([
      fetchJson("/health"),
      fetchJson("/marketplaces")
    ]);
    apiStatus.textContent = `API status: ${health.status} · ${apiBaseUrl}`;
    renderMarketplaces(marketplaces);
  } catch (error) {
    apiStatus.textContent = "API status: unavailable";
    marketData.innerHTML =
      "<div class=\"placeholder-card\">API unavailable. Start the backend to load data.</div>";
  }
};

loadApiData();
