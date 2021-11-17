const express = require("express");
const router = express.Router();
// require de tous les controllers nécessaires à la gestion des routes. Chaque controller à une finalité bien assignée. AuthController par exemple va vérifier tout ce qui se rapporte à l'authentification.
const adController = require("./controllers/adController");
const companiesController = require("./controllers/companiesController");
const peopleController = require("./controllers/peopleController");
const authController = require("./controllers/authController");
const applicationController = require("./controllers/applicationController");
const adminController = require("./controllers/adminController");

// on passe en local la session sur TOUTES les routes. Dans certains cas on testera le role de user , notamment sur le adminController.
router.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
// all GET

router.get("/", adController.getAdList);
router.get("/login", peopleController.login);
router.get("/companies/:id", companiesController.getCompanieById);
router.get("/people/:id", peopleController.getPeopleById);
router.get("/fetchprofil/:id", peopleController.fetchInfoById);
router.get("/fetchprofil", peopleController.fetchProfiles);
router.get("/companies", companiesController.getAllCompanies);
router.get("/inscription", authController.register);
router.get("/logout", authController.logout);
router.get("/profil", authController.profil);
router.get("/modify/:id", peopleController.displayModify);
router.get("/companies/:id/ads", companiesController.getCompaniesAds);
router.get("/people", peopleController.fetchProfiles);
router.get("/fetchcompanies", companiesController.fetchCompanies);

// all POST
router.post("/people", peopleController.createPeople);
router.post("/ads", adController.createAd);
router.post("/companies", companiesController.createCompanies);
router.post("/ads/:id/application", applicationController.postApplication);
router.post("/inscription", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/modify", peopleController.createPeople);
// all POST UPDATING THE DB ( comme put et patch ne sont pas des verbes HTML, on procède par proxy avec le post.) CELA RESTE UN UPDATE, sans le coté RESTful de l'API.
router.post("/companies/:id", companiesController.Update);
router.post("/ads/:id", adController.Update);
router.post("/people/:id", peopleController.UpdateAdmin);
router.post("/profil/:id", peopleController.Update);

// all DELETE
router.delete("/companies/:id", companiesController.deleteCompanies);
router.delete("/ads/:id", adController.deleteAd);
router.delete("/people/:id", peopleController.deletePeople);
router.delete("/application/:id", applicationController.deleteApplication);

// admin routes.

router.get("/admin", adminController.adminPage);
router.get("/admin/companies", adminController.displayCompanies);
router.get("/admin/people", adminController.displayPeople);
router.get("/admin/ads", adminController.displayAds);
router.get("/admin/applications", adminController.displayApplications);

// on exporte le tout pour pouvoir l'utiliser;
module.exports = router;
