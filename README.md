
# Generations API
An internal [Supertype](https://supertype.ai) tool for our Development program (to be relaunched as _Supertype Fellowship_). 

## Usage
Once you are authenticated, you can access all bookmarks:
- https://generationsapi.herokuapp.com/api/bookmarks

Or retrieve all collections:
- https://generationsapi.herokuapp.com/api/collections/

Or retrieve either one or all experts
- https://generationsapi.herokuapp.com/api/experts/1/
- https://generationsapi.herokuapp.com/api/experts/

Or retrieve bookmarks belonging to a collection: 
- https://generationsapi.herokuapp.com/api/collections/1/bookmarks

Or retrieve collections that are within the circle of competence of any one expert: 
- https://generationsapi.herokuapp.com/api/experts/1/collections

Detailed documentation is coming soon but if you need help, reach out to:
- [Samuel Chan | GitHub](https://github.com/onlyphantom)
- [Aurellia Christie | GitHub](https://github.com/AurelliaChristie)

## About Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```