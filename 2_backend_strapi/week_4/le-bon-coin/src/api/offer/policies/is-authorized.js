module.exports = async (policyContext, config, { strapi }) => {
  // policy isAuthorized, allow only owners of offers to update/delete based on JWT token

  // get userId who made the request
  const userId = policyContext.state.user.id;

  // get offerID from the params
  const offerId = policyContext.request.params.id;

  // get offer and populate owner key

  const offer = await strapi.entityService.findOne(
    "api::offer.offer",
    offerId,
    {
      populate: ["owner"],
    }
  );
  //console.log(offer);

  // verifiy if offer owner id is different from JWT user id
  const offerOwnerId = offer.owner.id;
  if (userId !== offerOwnerId) {
    return true;
  } else {
    return false;
  }
};
