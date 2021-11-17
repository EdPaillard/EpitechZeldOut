// on require la config .env, CRUCIAL SINON TOUT PLANTE. 
require("dotenv").config();
// rm multer, si besoin on réinstalle.
const express = require("express");
const cors = require("cors");
const router = require("./app/router");
const session = require("express-session");
// on require notre middleware user pour le transférer avec le middleware traitant des routes( soit router)
const userMiddleware = require("./app/middlewares/user");
const app = express();
const PORT = process.env.PORT || 3000;
// on permet les connections externes sur notre api avec CORS. (cross origin domain.) On évite les problèmes avec les Corses souvent. 
app.use(cors());
app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");
// on définit la session ,avec le middleware express-session, très pratique pour notre projet. 
app.use(
  session({
    secret: "keyboard cat", // secret aléatoire, cela aurait pu très bien être OSS 117.
    resave: true,
    saveUninitialized: true,
  })
);
// on définit le dossier où Express va se "servir" pour rendre nos vues. Plutot que de devoir taper tout le chemin absolu, on a simplement à écrire le chemin depuis Public.
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
// on utilise le body.parser d'express pour traiter les éventuelles données reçues en json.. 
app.use(express.json());
// on balance notre gentil middleware pour s'occuper de transférer les données de la session actuelle à toutes nos vues.
app.use(userMiddleware);

// .. puis on appelle le router, pour la gestion du routage. 
app.use(router);

// on fait attention à ne pas laisser de 404 vide, ce n'est pas très UI /UX . 
app.use((request, response) => {
  response.status(404);
  response.render("404");
});

// et on lance le tout ! 
app.listen(PORT, () => {
  console.log(`Zeldout est disponible ici :  http://localhost:${PORT}`);
});
