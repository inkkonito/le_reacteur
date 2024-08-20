module.exports = async (policyContext, config, { strapi }) => {
    
    // on veut verifier si l'utilisateur qui fait la requête est le propriétaire de l'offre qu'il veut supprimer
  const user = policyContext.state.user;
  // console.log(user);

  const userId = user.id;
  const offerId = policyContext.request.params.id;
  const offer = await strapi.entityService.findOne(
    "api::offer.offer",
    offerId,
    { populate: ["owner"] }
  );
  const offerOwnerId = offer.owner.id;
  // console.log(offer);
  if (userId !== offerOwnerId) {
    return false;
  } else {
    return true;
  }
};

