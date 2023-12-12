'use strict';

/**
 * sml service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sml.sml');
