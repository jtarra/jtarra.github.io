// Universal map loader.
// Loads the map-specific theme/config and then the shared map engine.

(function () {
  function showLoaderError(message) {
    window.MAP_LOADER_ERROR = message;
    console.error(message);

    document.addEventListener('DOMContentLoaded', function () {
      document.body.innerHTML = '';

      const box = document.createElement('main');
      box.style.cssText = 'font-family: sans-serif; padding: 24px; line-height: 1.45; max-width: 760px;';
      box.innerHTML = `
        <h1>Map failed to load</h1>
        <p>${message}</p>
        <p>Check <code>shared/map-registry.js</code> and the <code>?map=</code> value in the URL.</p>
      `;
      document.body.appendChild(box);
    });
  }

  const registry = window.MAP_REGISTRY;
  if (!registry || !registry.maps) {
    showLoaderError('MAP_REGISTRY is missing or invalid.');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedMapId = (params.get('map') || registry.defaultMap || 'hawaii').trim().toLowerCase();
  const mapDef = registry.maps[requestedMapId];

  if (!mapDef) {
    const available = Object.keys(registry.maps).sort().join(', ') || '(none)';
    showLoaderError(`Unknown map ID: "${requestedMapId}". Available maps: ${available}.`);
    return;
  }

  if (!mapDef.theme || !mapDef.config) {
    showLoaderError(`Map registry entry for "${requestedMapId}" must include both theme and config paths.`);
    return;
  }

  window.ACTIVE_MAP_ID = requestedMapId;
  window.ACTIVE_MAP_DEF = mapDef;
  document.documentElement.dataset.mapId = requestedMapId;
  document.title = mapDef.title || requestedMapId;

  // document.write is intentional here: this loader runs while the HTML is still parsing,
  // so these files load in the same deterministic order as normal script tags.
  document.write(`<link href="${mapDef.theme}" rel="stylesheet">`);
  document.write(`<script src="${mapDef.config}"><\/script>`);
  document.write('<script src="shared/map-engine.js"><\/script>');
})();
