const dataMapper = require("../dataMapper");

const adminController = {
  /**
   * Objet qui gère les requetes demandées par le router.
   * Chaque méthode gère une requete en particulier demandé par le router. Elle comprend en paramètre le request , le response.
   *   En récursive, une erreur et une réponse.
   * @param {req} req
   * @param {res} res
   *  @param {err} err
   * @param {response} response
   */
  adminPage: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    if (req.session.user.role === "admin") {
      res.render("admin/admin");
    } else {
      return res.status(401).render("forbidden");
    }
  },

  displayCompanies: (req, res) => {
    dataMapper.getCompaniesList((err, response) => {
      if (err) {
        console.trace(err);
      } else {
        if (!req.session.user) {
          return res.redirect("/login");
        }

        if (req.session.user.role === "admin") {
          res.render("admin/companies", {
            companies: response.rows,
          });
        } else {
          return res.status(401).render("forbidden");
        }
      }
    });
  },
  displayPeople: (req, res) => {
    dataMapper.getPeopleList((err, response) => {
      if (err) {
        console.trace(err);
      } else {
        if (!req.session.user) {
          return res.redirect("/login");
        }

        if (req.session.user.role === "admin") {
          res.render("admin/people", {
            peoples: response.rows,
          });
        } else {
          return res.status(401).render("forbidden");
        }
      }
    });
  },
  displayAds: (req, res) => {
    dataMapper.getFullAds((err, response) => {
      if (err) {
        console.trace(err);
      } else {
        if (!req.session.user) {
          return res.redirect("/login");
        }

        if (req.session.user.role === "admin") {
          res.render("admin/ads", {
            ads: response.rows,
          });
        } else {
          return res.status(401).render("forbidden");
        }
      }
    });
  },

  displayApplications: (req, res) => {
    dataMapper.getApplications((err, response) => {
      if (err) {
        console.trace(err);
      } else {
        if (!req.session.user) {
          return res.redirect("/login");
        }

        if (req.session.user.role === "admin") {
          res.render("admin/application", {
            applications: response.rows,
          });
        } else {
          return res.status(401).render("forbidden");
        }
      }
    });
  },
};
module.exports = adminController;
