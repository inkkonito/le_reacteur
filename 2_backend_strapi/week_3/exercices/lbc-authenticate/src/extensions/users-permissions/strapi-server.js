module.exports = (plugin) => {
  const register = plugin.controllers.auth.register;

  plugin.controllers.auth.register = async (ctx) => {
    // Création normale du user sans l'image
    await register(ctx);
    if (ctx.request.files?.avatar) {
      // Si j'ai reçu une clef avatar
      // Je vais chercher l'utilisateur qui vient d'être créé afin d'avoir accès à son id
      const user = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        { filters: { username: ctx.request.body.username } }
      );
      // Upload de l'image, en local ou sur cloudinary, et lien du user à l'image
      await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: user[0].id, // id de l'utilisateur nouvellement créé
          ref: "plugin::users-permissions.user", // la collection à laquelle appartient le user
          field: "avatar", // /!\ NOM DE LA CLEF FAISANT RÉFÉRENCE À L'IMAGE
        },
        files: ctx.request.files.avatar, // /!\ NOM DE LA CLEF DU FORMDATA DANS LAQUELLE L'IMAGE EST
      });
    }
  };
  return plugin;
};
