'use strict';

/**
 * pml service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pml.pml');
