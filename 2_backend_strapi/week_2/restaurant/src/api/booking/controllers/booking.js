// @ts-nocheck
"use strict";

const booking = require("../routes/booking");

/**
 * booking controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::booking.booking", ({ strapi }) => ({
  async create(ctx) {
    try {
      const { seats, restaurant } = ctx.request.body.data; // seats and restaurant id requested are stored in variable

      const getRestaurant = await strapi.entityService.findOne(
        "api::restaurant.restaurant",
        restaurant
      );

      let getAllRestaurants = await strapi.entityService.findMany(
        "api::restaurant.restaurant"
      );
      getAllRestaurants = getAllRestaurants.map((restaurant) => restaurant.id);

      if (!getRestaurant) {
        return ctx.badRequest("This restaurant does not exist", {
          seatsRequested: seats,
          restaurantRequested: restaurant,
          restaurantsAvailable: {
            getAllRestaurants,
          },
        });
      }

      const getTables = getRestaurant.tables; // storing tables available in variable

      const findingTable = getTables.find((table) => table.capacity >= seats);

      if (findingTable) {
        console.log(
          `Table found: ID ${findingTable.id} with capacity ${findingTable.capacity}`
        );
        const tableToUpdate = getTables.find(
          (table) => table.id === findingTable.id
        );

        if (tableToUpdate) {
          tableToUpdate.capacity -= seats;
        }

        await strapi.entityService.update(
          "api::restaurant.restaurant",
          restaurant,
          {
            data: {
              tables: getTables,
            },
          }
        );
        const { meta, data } = await super.create(ctx);
        data.attributes.tableSelected = findingTable.id;
        data.attributes.restaurantRequested = restaurant;
        return { meta, data };
      } else {
        return ctx.badRequest("No table found with enough capacity.", {
          capacityRequested: seats,
        });
      }
    } catch (error) {
      return { message: error.message };
    }
  },
}));
