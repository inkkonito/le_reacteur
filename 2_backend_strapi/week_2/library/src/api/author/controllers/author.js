// @ts-nocheck
"use strict";

/**
 * author controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::author.author", ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.request.params;

    // récupérer livres liés à cet author

    const getAuthor = await strapi.entityService.findOne(
      "api::author.author",
      id,
      { populate: ["books"] }
    );

    // on boucle sur les livres et les supprimes 
    for (let i = 0; i < getAuthor.books.length; i++) {
      await strapi.entityService.delete(
        "api::book.book",
        getAuthor.books[i].id
      );
    }
    const { meta, data } = await super.delete(ctx);
    return { meta, data };
  },
}));
