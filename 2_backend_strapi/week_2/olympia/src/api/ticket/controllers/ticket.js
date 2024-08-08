// @ts-nocheck
"use strict";

/**
 * ticket controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// extend controller
module.exports = createCoreController("api::ticket.ticket", ({ strapi }) => ({
  // recode create controller with request context
  async create(ctx) {
    // use try
    try {
      const body = ctx.request.body;
      // save eventid
      const eventId = body.data.event;

      // store event details
      const event = await strapi.entityService.findOne(
        "api::event.event",
        eventId
      );

      // get seats from ticket request
      const quantitySeatsRequested = body.data.seats;
      // get category from ticket request
      const categoryRequested = body.data.category;

      // if seats requested > event category value return error and message
      if (quantitySeatsRequested > event.seats[categoryRequested]) {
        ctx.response.status = 400;
        return { message: "Not enough places in this category" };
      }

      // store event seats object
      const newSeats = event.seats;

      // substract seats in category
      newSeats[categoryRequested] -= quantitySeatsRequested;

      // update event seats details using newSeats object
      await strapi.entityService.update("api::event.event", eventId, {
        data: {
          seats: newSeats,
        },
      });

      // do standard process > create ticket
      const { meta, data } = await super.create(ctx);

      // return message to client
      return { meta, data };

      // catch bloc in case of issue
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
