'use strict';

/**
 * expert service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::expert.expert');
