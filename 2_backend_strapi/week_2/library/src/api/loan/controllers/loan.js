// @ts-nocheck
"use strict";

/**
 * loan controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::loan.loan", ({ strapi }) => ({
  async create(ctx) {
    // verify if book requested is available for new loan
    const { book } = ctx.request.body.data;
    const bookDetails = await strapi.entityService.findOne(
      "api::book.book",
      book,
      { populate: ["currentOwner"] }
    );
    if (bookDetails.currentOwner) {
      // if currentOwner exist
      return "Book is not available";
    }

    await strapi.entityService.update("api::book.book", book, {
      data: {
        currentOwner: book.name,
      },
    });
    const { meta, data } = await super.create(ctx);
    return { meta, data };
  },
  async update(ctx) {
    
  }
}));
