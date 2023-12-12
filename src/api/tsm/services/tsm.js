'use strict';

/**
 * tsm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tsm.tsm');
