// Hawaii map configuration.
// Loaded by shared/map-loader.js before shared/map-engine.js.

const CONFIG = {
      sheetId: '1XBG0uONiQoPvUxqz6V4BJBsOckDM2cahH4WylqOdz74',
      apiKey: 'AIzaSyDiUAu4Uii6gAltbyJ8G2UkLMUdydyd9Jw',
      ranges: ['Places!A:N','Reviews!A:E'],
      mapCenter: [21.4559, -157.9519],
      mapZoom: 10,
      attribution: '<a href="https://www.youtube.com/watch?v=rzLIUgnKY40">Home</a>',
      baseColors: [
        '#E76F51', // coral
        '#2A9D8F', // ocean teal
        '#E9C46A', // golden sand
        '#F4A261', // sunset orange
        '#457B9D', // deep blue
        '#8AB17D', // palm green
        '#D62828', // hibiscus red
        '#A67C52', // warm brown
        '#6D597A', // muted purple
        '#00A6A6'  // bright aqua
      ],
      emojiList: ['🤙🏼','🧜🏼‍♀️','🏄🏼‍♂️','🏄🏻‍♀️','🐓','🐋','🐠','🦈','🪸','🪼','🌺','🥥','🍍','🍧','🤿','🌋','🏝️','🛵','👙','🌴','⛱️'],
      userIconUrls: ['MapResources/UserIcons/Hawaii/Hula1.png','MapResources/UserIcons/Hawaii/Hula2.png','MapResources/UserIcons/Hawaii/Hula3.png','MapResources/UserIcons/Hawaii/Hula4.png','MapResources/UserIcons/Hawaii/Hula5.png']
};
const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyB-At6gJCbeod2Hcy-6eYrk81nigJ5w9-6tM533oueHMFvkq5rjh6XrZ3Nzu06xJ0/exec';
const API_SECRET      = 'Fart';
