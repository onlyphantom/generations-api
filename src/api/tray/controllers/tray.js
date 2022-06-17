'use strict';

/**
 *  tray controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tray.tray');
