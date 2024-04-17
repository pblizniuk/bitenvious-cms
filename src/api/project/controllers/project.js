"use strict";

/**
 *  project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const project = await strapi.entityService.findMany("api::project.project", query);

    const sanitizedEntity = await this.sanitizeOutput(project, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
