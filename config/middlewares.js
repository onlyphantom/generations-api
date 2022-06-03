module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['*'],
      origin: [
        "http://localhost",
        'fellowship.supertype.ai', 'https://thegenerations.netlify.app', 'https://fellowship.supertype.ai']
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
