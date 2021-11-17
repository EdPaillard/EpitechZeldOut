const userMiddleware = (req, res, next) => {
  /**
   * Middleware permettant de gèrer si un utilisateur est connecté avec la session. Si il y'a une session, alors on passe en local la variable user qui sera rendu sur toutes les vues.
   *
   *
   * @param {req} req
   * @param {res} res
   */
  if (req.session.user) {
    res.locals.user = req.session.user;
  } else {
    res.locals.user = false;
  }

  next();
};

module.exports = userMiddleware;
