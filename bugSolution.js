```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './components/**/*.{html,js,ts,jsx,tsx}'], // Added missing component directory
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db',
      },
    },
  },
  plugins: [],
};
```
This solution expands the `content` option to include the `./components` directory (or whichever directory holds your components).  If you have components in multiple directories, you must list them all to ensure Tailwind properly scans for classes.  Verify that the glob pattern matches all relevant files and adjust accordingly.