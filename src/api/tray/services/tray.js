'use strict';

/**
 * tray service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tray.tray');
