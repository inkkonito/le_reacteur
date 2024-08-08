// @ts-nocheck
"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async delete(ctx) {
    try {
      const eventId = ctx.request.params.id;
      const event = await strapi.entityService.findOne(
        "api::event.event",
        eventId,
        { populate: ["tickets"] }
      );
      const tickets = event.tickets;
      for (let i = 0; i < event.tickets.length; i++) {
        await strapi.entityService.delete("api::ticket.ticket", tickets[i].id);
      }
      const { meta, data } = await super.delete(ctx);
      return { meta, data };
    } catch (error) {
      ctx.response.status = 500;
      return { error: error.message };
    }
  },
}));
