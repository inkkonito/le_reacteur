"use strict";

/**
 * restaurant controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::restaurant.restaurant",
  ({ strapi }) => ({
    async delete(ctx) {
      try {
        const restaurantId = ctx.request.params.id;
        const restaurantDetails = await strapi.entityService.findOne(
          "api::restaurant.restaurant",
          restaurantId,
          { populate: ["bookings"] }
        );
        const bookings = restaurantDetails.bookings;
        for (let i = 0; i < bookings.length; i++) {
          await strapi.entityService.delete(
            "api::booking.booking",
            bookings[i].id
          );
        }
        const { meta, data } = await super.delete(ctx);
        return { meta, data };
      } catch (error) {
        ctx.response.status = 500;
        return { error: error.message };
      }
    },
  })
);
