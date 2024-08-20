"use strict";

/**
 * offer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::offer.offer", ({ strapi }) => ({
  async createAndDelete(ctx) {
    try {
      const body = ctx.request.body;
      const idToDelete = ctx.request.params.id;

      body.data.publishedAt = new Date().getTime();
      await strapi.entityService.create("api::offer.offer", body);
      await strapi.entityService.delete("api::offer.offer", idToDelete);
      return { message: "New offer created and previous offer deleted" };
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
