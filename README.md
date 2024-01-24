# vue3-crud-posts

Small CRUD on Vue 3.

## Technologies Used

- Vue.js 3
- Vue Router
- Vite
- SCSS

## How to run

Project uses Vite, to run, simply do this in the repository root: `npm install` and `npm run start`. This will run vite local server and json-server for fake API. 

## Other tasks

```bash

# Install dependencies
npm install

# Start json-server & vite local server.
npm run start

# build for production with minification
npm run build

# Lint js and vue files using ESLint
npm run lint:js

# Lint style files
npm run lint:styles

# Format with Prettier
npm run format
```

## How to change db?

In the root folder, open the `db.json` file. It contains existing posts that you can work with or add your own.

## How to configure localhost URL?

The `api.js` file contains the `API_URL` variable, which you can use to make requests to the fake server. Change this URL to use the new address.