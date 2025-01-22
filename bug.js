```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Or your source file paths
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
This configuration will scan the specified files and directories (`./src/**/*.{html,js,ts,jsx,tsx}`) for Tailwind directives. If your components are outside `./src` directory, you should update the `content` option accordingly.