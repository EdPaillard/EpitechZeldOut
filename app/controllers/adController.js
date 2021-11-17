const dataMapper = require("../dataMapper");

const adController = {
  /**
   * Objet qui gère les requetes demandées par le router.
   * Chaque méthode gère une requete en particulier demandé par le router. Elle comprend en paramètre le request , le response.
   *   En récursive, une erreur et une réponse.
   * @param {req} req
   * @param {res} res
   *  @param {err} err
   * @param {response} response
   */
  getAdList: (req, res) => {
    dataMapper.getAdListRequest((err, response) => {
      if (err) {
        console.trace(err);
      } else {
        const adResponse = response.rows;
        if (!req.session.user) {
          res.render("index", {
            ads: adResponse,
          });
        } else if (req.session.user.role === "admin") {
          res.redirect("/admin");
        } else {
          res.render("indexC", {
            ads: adResponse,
            locals: req.session.user,
          });
        }
      }
    });
  },

  getAllAd: async (req, res) => {
    try {
      await dataMapper.getAdListRequest((err, response) => {
        let adReponse = response.rows;
        res.json(adReponse);
      });
    } catch (e) {
      console.trace(e);
      res.status(500).render("500");
    }
  },
  getOneAd: async (req, res, next) => {
    try {
      await dataMapper.getAdListByIdRequest(req.params.id, (err, response) => {
        let AdReponse = response.rows[0];
        res.json(AdReponse);
      });
    } catch (e) {
      res.status(500).render("500");
    }
  },
  createAd: async (req, res) => {
    try {
      let ad = req.body;
      dataMapper.addAdRequest(
        ad.title,
        ad.city,
        ad.description,
        ad.salary,
        ad.detail,
        ad.companies_id,
        (err, response) => {
          if (err) {
            res.status(500).render("500");
          } else {
            res.status(200).redirect("/admin/ads");
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
    dataMapper.updateAd(id, req.body, (err, response) => {
      if (err) {
        res.status(500).render("500");
      } else {
        res.status(200).redirect("/admin/ads");
      }
    });
  },
  deleteAd: async (req, res) => {
    try {
      let id = req.params.id;
      dataMapper.deleteAd(id, (err, response) => {
        if (err) {
          res.status(500).render("500");
        } else {
          res.status(200).redirect("/admin/ads");
        }
      });
    } catch (e) {
      console.trace(e);
      res.status(500).render("500");
    }
  },
};

module.exports = adController;
