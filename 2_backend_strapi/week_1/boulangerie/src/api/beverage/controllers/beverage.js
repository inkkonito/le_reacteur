'use strict';

/**
 * beverage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::beverage.beverage');
