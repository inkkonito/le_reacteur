"use strict";

/**
 * offer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::offer.offer", ({ strapi }) => ({
  async deleteAll(ctx) {
    try {
      // get authenticated userID
      const userId = ctx.state.user.id;
      //  console.log(userId);

      // populate offers references from this user
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        { populate: ["offers"] }
      );
      //console.log(userOffers);

      // iterate in this array of offers and delete them

      // console.log(userOffers);
      for (let i = 0; i < user.offers.length; i++) {
        const offer = user.offers[i];
        await strapi.entityService.delete("api::offer.offer", offer.id);
      }

      // respond to the client
      return { message: "All offers deleted" };
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
  async create(ctx) {
    try {
      const userId = ctx.state.user.id;
      const body = ctx.request.body.data;
      const bodyJSON = JSON.parse(body);
      const ownerIdSent = bodyJSON.data.owner;

      if (userId === ownerIdSent) {
        const { meta, data } = await super.create(ctx);
        return { meta, data };
      } else {
        ctx.response.status = 403;
        return "You can not create an offer you do not own";
      }
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
