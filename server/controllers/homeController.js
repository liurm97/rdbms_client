exports.homeController = (req, res, next) => {
  const title = "Home";
  res.render("home.ejs", {
    title: "Home",
  });
};
