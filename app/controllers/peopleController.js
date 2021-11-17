const dataMapper = require("../dataMapper");

const peopleController = {
  /**
     * Objet qui gère les requetes demandées par le router. 
     * Chaque méthode gère une requete en particulier demandé par le router. Elle comprend en paramètre le request , le response.
     *      En récursive, une erreur et une réponse.

     * @param {req} req 
     * @param {res} res 
     *  @param {err} err
     * @param {response} response 
     */
  getPeopleById: (req, res) => {
    const people_id = parseInt(req.params.id);
    dataMapper.getPeopleListbyIdRequest(people_id, (err, response) => {
      if (err) {
        console.trace(err);
        res.render("404");
      } else {
        res.render("people", { people: response.rows[0] });
      }
    });
  },
  fetchProfiles: (req, res) => {
    try {
      dataMapper.getPeopleList((err, response) => {
        let peopleReponse = response.rows;
        res.json(peopleReponse);
      });
    } catch (e) {
      console.trace(e);
      res.status(500).send(e.errors || e.toString());
    }
  },
  fetchInfoById: (req, res) => {
    try {
      dataMapper.getPeopleListbyIdRequest(req.params.id, (err, response) => {
        let reponse = response.rows[0];
        res.json(reponse);
      });
    } catch (e) {
      res.status(500).send(e.errors || e.toString());
    }
  },
  displayModify: (req, res) => {
    const people_id = parseInt(req.params.id);
    dataMapper.getPeopleListbyIdRequest(people_id, (err, response) => {
      if (err) {
        console.trace(err);
        res.render("404");
      } else {
        res.render("modify", { people: response.rows[0] });
      }
    });
  },
  createPeople: async (req, res) => {
    try {
      let people = req.body;
      dataMapper.addPeopleRequest(
        people.firstname,
        people.lastname,
        people.info,
        people.formation,
        people.skills,
        people.age,
        people.gender,
        people.town,
        people.email,
        people.phone,
        people.companies_id,
        (err, response) => {
          if (err) {
            res.status(500).render("500");
          } else {
            res.status(200).redirect("/admin/people");
          }
        }
      );
    } catch (e) {
      console.trace(e);
      res.status(500).send(e.errors || e.toString());
    }
  },
  Update: (req, res) => {
    let id = req.params.id;
    dataMapper.updatePeople(id, req.body, (err, response) => {
      if (err) {
        res.status(500).render("500");
      } else {
        res.status(200).redirect("/profil");
      }
    });
  },
  UpdateAdmin: (req, res) => {
    let id = req.params.id;
    dataMapper.updatePeople(id, req.body, (err, response) => {
      if (err) {
        res.status(500).render("500");
      } else {
        res.status(200).redirect("/admin/people");
      }
    });
  },
  deletePeople: async (req, res) => {
    try {
      let id = req.params.id;
      dataMapper.deletePeople(id, (err, response) => {
        if (err) {
          res.status(500).render("500");
        } else {
          res.status(200).redirect("/admin/people");
        }
      });
    } catch (e) {
      console.trace(e);
      res.status(500).send(e.errors || e.toString());
    }
  },
  deletePeopleByName: async (req, res) => {
    try {
      let name = req.params.lastname;
      dataMapper.deletePeopleByName(name, (err, response) => {
        if (err) {
          res.status(500).render("500");
        } else {
          res.status(200).redirect("/admin/people/");
        }
      });
    } catch (e) {
      console.trace(e);
      res.status(500).send(e.errors || e.toString());
    }
  },
  login: (req, res) => {
    res.render("login");
  },
};

module.exports = peopleController;
