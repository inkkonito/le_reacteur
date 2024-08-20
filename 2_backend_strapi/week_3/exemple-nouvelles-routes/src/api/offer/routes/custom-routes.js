module.exports = {
    routes: [
      {
        method: "POST",
        path: "/offers/create-and-delete/:id",
        handler: "offer.createAndDelete",
      },
    ],
  };