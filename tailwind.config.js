/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files Tailwind should scan for class names
  content: [
    './index.html',      // Home page
    './about.html',      // About page
    './contact.html',    // Contact page
    './**/*.js',         // Any JS files (if you're using JS or Tailwind classes within JS)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
