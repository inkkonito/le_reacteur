'use strict';

/**
 * beverage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beverage.beverage');
