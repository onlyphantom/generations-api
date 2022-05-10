'use strict';

/**
 * bookmark service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bookmark.bookmark');
