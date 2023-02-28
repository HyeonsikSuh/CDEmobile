'use strict';

/**
 * printer1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::printer1.printer1');
