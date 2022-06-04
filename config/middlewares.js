module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['*'],
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        'https://thegenerations.netlify.app',
        'https://fellowship.supertype.ai',
        'https://generationsapi.herokuapp.com']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
