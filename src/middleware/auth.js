export const auth = (req, res, next) => {
  if (!req.session.userEmail) {
    res.render("msgPage", { message: "login first to access secure page" });
  } else {
    next();
  }
};
