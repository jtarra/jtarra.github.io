// Hawaii map configuration.
// Loaded before map-engine.js.

const CONFIG = {
      sheetId: '1XBG0uONiQoPvUxqz6V4BJBsOckDM2cahH4WylqOdz74',
      apiKey: 'AIzaSyDiUAu4Uii6gAltbyJ8G2UkLMUdydyd9Jw',
      ranges: ['Places!A:L','Reviews!A:E'],
      mapCenter: [21.4559, -157.9519],
      mapZoom: 10,
      attribution: '<a href="https://www.youtube.com/watch?v=rzLIUgnKY40">Home</a>',
      baseColors: ['#FF6347','#D62828','#00A693','#4D7D5C','#528ED1','#DEFF8D','#32CD32','#FF69B4'],
      emojiList: ['🤙🏼','🧜🏼‍♀️','🏄🏼‍♂️','🏄🏻‍♀️','🐓','🐋','🐠','🦈','🪸','🪼','🌺','🥥','🍍','🍧','🤿','🌋','🏝️','🛵','👙','🌴','⛱️'],
      userIconUrls: ['MapResources/UserIcons/Hawaii/Hula1.png','MapResources/UserIcons/Hawaii/Hula2.png','MapResources/UserIcons/Hawaii/Hula3.png','MapResources/UserIcons/Hawaii/Hula4.png','MapResources/UserIcons/Hawaii/Hula5.png'],
      colors: {
        menuBg:        '#FFF9E6',	// menu background color
        menuButton:    '#E7D8C4',	// menu buttons
        catText:  	   '#E3B505',	// category text color
        catShadow:     '#DB504A',	// category text shadow color
        searchBG:  	   '#F5F1EC',	// Search bar background color
        caroCardBg:    '#FAF1D2',	// Carousel Cards BG color
        borders: 	   '#D0B59A',	// thin border lines
		subcatBG:	   '#F8E9D5',	// background behind subcategories
		},
	  fonts: {
	  	catFont: 	   'Bardy',		// category labels on filter page
	  	subcatFont:    'Dorgan',	// subcategories under the category dropdowns
	  	popupFont:     'Dorgan',	// map popups
		menuFont:      'Dorgan',	// menu UI and buttons (select all, itinerary mode, menu)
		carouselFont:  'Dorgan'		// filter & itinerary carousels
	  }
	};
	const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyB-At6gJCbeod2Hcy-6eYrk81nigJ5w9-6tM533oueHMFvkq5rjh6XrZ3Nzu06xJ0/exec';
	const API_SECRET      = 'Fart';
