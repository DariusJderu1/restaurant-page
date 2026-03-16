# Restaurant Page

A dynamic restaurant website built with vanilla JavaScript. The application uses JavaScript for DOM manipulation to switch between different tabs (Home, Menu, Contact) without reloading the HTML page.

**Live Demo:** [https://dariusjderu1.github.io/restaurant-page/](https://dariusjderu1.github.io/restaurant-page/)

## Technologies Used

* **HTML5:** Base template structure.
* **CSS3:** Flexbox and CSS Grid for layout, custom properties for colors, and `clamp()` for responsive typography.
* **JavaScript:** ES6 Modules for organizing code, arrays for data storage, and DOM manipulation for rendering content.
* **Webpack:** Module bundler used to compile JavaScript, CSS, and image assets.

## Features

* **Tabbed Navigation:** Users can navigate between Home, Menu, and Contact pages. 
* **Dynamic Rendering:** Content is generated and injected into the DOM via JavaScript (`document.createElement` and `appendChild`) rather than hardcoded in the HTML file.
* **Data-Driven Menu:** The menu items are generated dynamically by iterating over a JavaScript array containing the item data (image, name, description, price).