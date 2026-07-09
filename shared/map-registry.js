// Registry of available maps for the universal map loader.
// Add new maps here after creating maps/<map-id>/config.js and maps/<map-id>/theme.css.

window.MAP_REGISTRY = {
  defaultMap: 'hawaii',
  maps: {
    hawaii: {
      title: 'Hawaii',
      theme: 'maps/hawaii/theme.css',
      config: 'maps/hawaii/config.js'
    }
  }
};
