const dataMapper = require("../dataMapper");
// utilisation de bcrypt pour hasher le mot de pass (avec 10 rounds of salt).
const bcrypt = require("bcryptjs");
const authController = {
  /**
   * Objet qui gère les requetes demandées par le router.
   * Chaque méthode gère une requete en particulier demandé par le router. Elle comprend en paramètre le request , le response.
   *   En récursive, une erreur et une réponse.
   * @param {req} req
   * @param {res} res
   * @param {err} err
   * @param {response} response
   */
  register: (request, response) => {
    response.render("inscription");
  },
  registerUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("ALL INPUT ARE REQUIRED");
      }
      const encryptedPassword = bcrypt.hashSync(password, 10);
      // On appelle la query SQL pour chercher l'email selon l'entrée de l'user; si il retourne une reponse , alors on le redirige vers la page de connexion. Sinon, on procède à son enregistrement en DB
      dataMapper.getPeopleByEmailRequest(email, (err, response) => {
        if (response.rows[0] !== undefined) {
          return res.status(409).render("loginError", {
            error: "Un compte existe déjà à cette adresse!",
          });
        } else {
          dataMapper.addPeopleRequest(
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            email,
            null,
            encryptedPassword,
            null,
            (err, response) => {
              if (err) {
                console.log(err);
                res.status(500).render("500");
              } else {
                // redirection vers la page d'accueil.
                res.status(200).redirect("/");
              }
            }
          );
        }
      });
    } catch (err) {
      res.render("500");
      console.log(err);
    }
  },
  loginUser: async (req, res) => {
    // try catch pour englober l'intégralité de la méthode ,ainsi si une erreur survient on peut facilement en déterminer lorigine. Originalement prévu en asynchrone d'ou le async. A voir pour une éventuelle refacto.
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        return res.status(400).render("400");
      }
      dataMapper.getPeopleByEmailRequest(email, (err, response) => {
        if (response.rows[0] == undefined) {
          return res.status(401).render("loginError", {
            error: "Email ou mot de passe incorrect",
          });
        }
        let userpassword = response.rows[0].password;
        const passTest = bcrypt.compareSync(password, userpassword);
        if (passTest) {
          if (err) {
            res.status(500).render("500");
            return;
          } else {
            req.session.user = response.rows[0];
            res.status(200).redirect("/");
          }
        } else {
          return res.status(401).render("loginError", {
            error: "Email ou mot de passe incorrect",
          });
        }
      });
    } catch (e) {
      console.trace(e);
    }
  },
  profil: async (req, res) => {
    // on check si un user est déja logué. Si non, on refuse l'accès à la page profil.
    if (!req.session.user) {
      res.render("loginError", {
        error: "Veuillez vous connecter pour modifier le profil",
      });
    } else {
      const peopleid = req.session.user.id;
      console.log(peopleid);
      dataMapper.getPeopleListbyIdRequest(peopleid, (err, response) => {
        if (err) {
          console.trace(err);
          res.render("404");
        } else {
          const reponse = response.rows[0];
          res.render("people", {
            people: reponse,
          });
        }
      });
    }
  },
  logout: (request, response) => {
    // on supprime toute trace de l'user en logout.
    request.session.destroy();
    response.redirect("/");
  },
};

module.exports = authController;
