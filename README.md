# JS Drumkit

[![Netlify Status](https://api.netlify.com/api/v1/badges/884c7d5e-85b9-4448-9a7b-7bd8c6f4aee1/deploy-status)](https://app.netlify.com/sites/fun-js-drumkit/deploys)

This is **project 1** of the Javascript 30-day Challenge by [Wes Bos](https://wesbos.com/).

Preview: https://fun-js-drumkit.netlify.app/

### What I learned from this project

- How to use data attributes
- How to select an element using an attribute selector
  - `document.querySelector(.key[data-key] = "something")` looks for an element with `key` class that has a data attribute named `key` that is `something`.
- How to make a glowing border radius by using `box-shadow`
- Using `console.log()` to debug.

- I implemented more modern JS practices to the project.
  - Arrow functions are more modern but don't support `this` object
  - `event.target` is more modern and easier to understand than `this`
