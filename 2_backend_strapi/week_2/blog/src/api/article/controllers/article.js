"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async delete(ctx) {
    try {
      // @ts-ignore
      const params = ctx.request.params;
      const articleId = params.id;
      const article = await strapi.entityService.findOne(
        "api::article.article",
        articleId,
        { populate: ["comments"] }
      );
      for (let i = 0; i < article.comments.length; i++) {
        await strapi.entityService.delete(
          "api::comment.comment",
          article.comments[i].id
        );
      }
      const { data, meta } = await super.delete(ctx);
      return { data, meta };
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
