# Restaurant Menu Website

A modern, responsive restaurant menu website built with HTML, CSS, and JavaScript. This website features a beautiful user interface with filtering capabilities for menu items, smooth scrolling navigation, and a mobile-responsive design.

## Features

- Responsive design that works on desktop and mobile devices
- Interactive menu filtering system
- Smooth scroll navigation
- Modern and clean user interface
- Beautiful food imagery
- Contact information section

## Setup

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. That's it! No additional setup required

## Structure

- `index.html` - Main HTML file containing the website structure
- `styles.css` - CSS styles for the website
- `script.js` - JavaScript code for interactivity and menu filtering

## Customization

### Adding Menu Items

To add new menu items, edit the `menuItems` array in `script.js`. Each menu item should follow this format:

```javascript
{
    name: "Item Name",
    category: "category",  // starters, main, desserts, or drinks
    price: 00.00,
    description: "Item description",
    image: "URL to image"
}
```

### Modifying Styles

The website uses a color scheme based on red (#e74c3c) as the primary color. To change this:

1. Open `styles.css`
2. Look for color values and replace them with your preferred colors
3. The main color variables are used throughout the file

## Browser Support

This website works in all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## Credits

- Images from Unsplash
- Icons from Font Awesome

## License

This project is open source and available under the MIT License. 