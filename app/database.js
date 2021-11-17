const { Client } = require("pg");
// on require client de postgres qui va permettre de communiquer avec la DB postgres.
const client = new Client();
// on instancie un nouveau client et on connecte ce dernier sur la db pour requeter
client.connect();
// ... et on exporte le client pour pouvoir l'utiliser dans le datamapper qui sera un gros objet contenant toutes les queries.
module.exports = client;
