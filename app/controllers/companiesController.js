const dataMapper = require("../dataMapper");

const companiesController = {
  /**
   * Objet qui gère les requetes demandées par le router.
   * Chaque méthode gère une requete en particulier demandé par le router. Elle comprend en paramètre le request , le response.
   * En récursive, une erreur et une réponse.
   *
   * @param {req} req
   * @param {res} res
   * @param {err} err
   * @param {response} response
   */
  getCompanieById: (req, res) => {
    const companie_id = parseInt(req.params.id);
    dataMapper.getCompaniesListByIdRequest(companie_id, (err, response) => {
      if (err) {
        console.trace(err);
        res.render("404");
      } else {
        if (!req.session.user) {
          const reponse = response.rows[0];
          res.render("compagny", {
            company: reponse,
          });
        } else {
          const reponse = response.rows[0];
          res.render("compagnyC", {
            company: reponse,
          });
        }
      }
    });
  },

  getAllCompanies: (req, res) => {
    dataMapper.getCompaniesList((err, response) => {
      if (err) {
        console.trace(err);
      } else {
        const reponse = response.rows;
        if (!req.session.user) {
          res.render("companies", {
            companies: reponse,
          });
        } else {
          res.render("companiesC", {
            companies: reponse,
          });
        }
      }
    });
  },
  getCompaniesAds: (req, res) => {
    try {
      dataMapper.getCompaniesAds(req.params.id, (err, response) => {
        const reponse = response.rows;
        if (!req.session.user) {
          res.render("compagnyAd", {
            ads: reponse,
          });
        } else {
          res.render("compagnyAdC", {
            ads: reponse,
            locals: req.session.user,
          });
        }
      });
    } catch (e) {
      console.trace(e);
      res.status(500).render("500");
    }
  },
  fetchCompanies: (req, res) => {
    try {
      dataMapper.getCompaniesList((err, response) => {
        let companiesList = response.rows;
        res.json(companiesList);
      });
    } catch (e) {
      console.trace(e);
      res.status(500).send(e.errors || e.toString());
    }
  },
  createCompanies: (req, res) => {
    try {
      let compagny = req.body;
      dataMapper.addCompaniesRequest(
        compagny.name,
        compagny.about,
        compagny.location,
        compagny.email,
        compagny.phone,
        compagny.logo,
        (err, response) => {
          if (err) {
            res.status(500).render("500");
          } else {
            res.status(200).redirect("/admin/companies");
            console.trace(req);
          }
        }
      );
    } catch (e) {
      console.trace(e);
      res.status(500).render("500");
    }
  },
  Update: (req, res) => {
    let id = req.params.id;
    dataMapper.updateCompanies(id, req.body, (err, response) => {
      if (err) {
        res.status(500).render("500");
      } else {
        res.status(200).redirect("/admin/companies");
      }
    });
  },
  deleteCompanies: (req, res) => {
    try {
      let id = req.params.id;
      dataMapper.deleteCompany(id, (err, response) => {
        if (err) {
          res.status(500).render("500");
        } else {
          res.status(200).redirect("/admin/companies");
        }
      });
    } catch (e) {
      console.trace(e);
      res.status(500).render("500");
    }
  },
};

module.exports = companiesController;
