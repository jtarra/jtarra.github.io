// Registry of available maps for the universal map loader.
// Add new maps here after creating maps/<map-id>/config.js and maps/<map-id>/theme.css.

window.MAP_REGISTRY = {
  defaultMap: 'hawaii',
  maps: {
    hawaii: {
      title: 'Hawaii',
      theme: 'maps/hawaii/hawaii_theme.css',
      config: 'maps/hawaii/hawaii_config.js'
    }
    colorado: {
      title: 'Colorado',
      theme: 'maps/colorado/colorado_theme.css',
      config: 'maps/colorado/colorado_config.js'
    }
  }
};
