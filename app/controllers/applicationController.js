const dataMapper = require("../dataMapper");

const applicationController = {
  /**
   * Objet qui gère les requetes demandées par le router.
   * Chaque méthode gère une requete en particulier demandé par le router. Elle comprend en paramètre le request , le response.
   *   En récursive, une erreur et une réponse.
   * @param {req} req
   * @param {res} res
   *  @param {err} err
   * @param {response} response
   */
  getApplications: async (req, res) => {
    try {
      dataMapper.getApplications((err, response) => {
        let appReponse = response.rows;
        res.json(appReponse);
      });
    } catch (e) {
      console.trace(e);
      res.status(500).render("500");
    }
  },

  postApplication: async (req, res) => {
    try {
      let ad_id = req.params.id;
      let app = req.body;
      console.log(req.body);
      dataMapper.postApplication(
        ad_id,
        app.people_id,
        app.companies_id,
        app.tempory_firstname,
        app.tempory_lastname,
        app.tempory_email,
        app.tempory_phone,
        app.message,
        (err, response) => {
          if (err) {
            res.status(500).render("500");
            console.trace(err);
          } else {
            res.status(200).redirect("/");
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
    dataMapper.Update("application", id, req.body, (err, response) => {
      if (err) {
        res.status(500).render("500");
      } else {
        res.status(200).redirect("/admin/companies");
      }
    });
  },
  deleteApplication: (req, res) => {
    let id = req.params.id;
    dataMapper.deleteApplication(id, (err, response) => {
      if (err) {
        res.status(500).render("500");
      } else {
        res.status(200).redirect("/admin/applications");
      }
    });
  },
};

module.exports = applicationController;
