'use strict';

/**
 * cake service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cake.cake');
