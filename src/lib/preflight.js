// with class "tailwind-preflight" we can now add preflight only to components we want
// to prevent conflicts between ant design and tailwind

const plugin = require('tailwindcss/plugin');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

module.exports = plugin(function ({ addBase }) {
  const preflightStyles = postcss.parse(
    fs.readFileSync(path.join(__dirname, './preflight.css'), 'utf8')
  );

  // Scope the selectors to specific components
  preflightStyles.walkRules((rule) => {
    rule.selector = '.tailwind-preflight ' + rule.selector;
  });

  addBase(preflightStyles.nodes);
});
