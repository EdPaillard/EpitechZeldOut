const client = require("./database");

const dataMapper = {
  /**
   * Objet qui regroupe toutes les requetes sur la base de données, et qui sera exportée pour être utiliser dans chaque controller associé
   * Les méthodes prennent comme paramètre dans certains cas un id ( notamment dans le CRUD sur une entité ), mais également un callback ( recursive ) qui
   * dans les controllers passent en argument err et response.
   *
   * @param {id} req
   * @param {cb} cb
   */
  getAdListRequest: (cb) => {
    const adList_query = {
      text: 'SELECT * FROM "ad" LEFT JOIN "companies" ON ad.companies_id = companies.idc;',
    };
    client.query(adList_query, cb);
  },
  getFullAds: (cb) => {
    const adList_query = {
      text: 'SELECT * FROM "ad";',
    };
    client.query(adList_query, cb);
  },
  getAdListByIdRequest: (ad_id, callback) => {
    const queryAdList = {
      text: `SELECT * FROM "ad" WHERE "id"=$1;`,
      values: [ad_id],
    };
    client.query(queryAdList, callback);
  },
  addAdRequest: (
    title,
    city,
    description,
    salary,
    detail,
    companies_id,
    callback
  ) => {
    const addAdSQL = {
      text: `
            INSERT INTO "ad" (title,city,description,salary,detail,companies_id)
            VALUES
            ($1,$2,$3,$4,$5,$6);`,
      values: [title, city, description, salary, detail, companies_id],
    };
    client.query(addAdSQL, callback);
  },

  getPeopleListbyIdRequest: (people_id, callback) => {
    const queryPeopleList = {
      text: `SELECT * FROM "people" WHERE "id"=$1;`,
      values: [people_id],
    };
    client.query(queryPeopleList, callback);
  },
  getCompaniesListByIdRequest: (companies_id, callback) => {
    const queryCompaniesList = {
      text: 'SELECT * FROM "companies" WHERE "idc"=$1;',
      values: [companies_id],
    };
    client.query(queryCompaniesList, callback);
  },
  getCompaniesList: (callback) => {
    const queryCompanies = {
      text: `SELECT * FROM "companies";`,
    };
    client.query(queryCompanies, callback);
  },
  getCompaniesAds: (companie_id, callback) => {
    const query = {
      text: `SELECT * FROM "ad" WHERE "companies_id"=$1`,
      values: [companie_id],
    };
    client.query(query, callback);
  },
  getPeopleList: (callback) => {
    const queryPeople = {
      text: `SELECT * FROM "people";`,
    };
    client.query(queryPeople, callback);
  },

  addPeopleRequest: (
    firstname,
    lastname,
    info,
    formation,
    skills,
    age,
    gender,
    town,
    email,
    phone,
    password,
    companies_id,
    callback
  ) => {
    const addPeopleSQL = {
      text: `
            INSERT INTO "people" (firstname,lastname,info,formation,skills,age,gender,town,email,phone,password,companies_id)
            VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`,
      values: [
        firstname,
        lastname,
        info,
        formation,
        skills,
        age,
        gender,
        town,
        email,
        phone,
        password,
        companies_id,
      ],
    };
    client.query(addPeopleSQL, callback);
  },

  addCompaniesRequest: (
    name,
    about,
    location,
    email,
    phone,
    logo,
    callback
  ) => {
    const addCompaniesSQL = {
      text: `
            INSERT INTO "companies" (name,about,location,email,phone,logo)
            VALUES
            ($1,$2,$3,$4,$5,$6);`,
      values: [name, about, location, email, logo, phone],
    };
    client.query(addCompaniesSQL, callback);
  },

  // cette méthode permet de supprimer les erreurs relatives aux apostrophes en DB. ( par ex lors d'un update.)
  sanitize: (string) => {
    const map = {
      "'": "''",
    };
    const reg = /[']/gi;
    return string.replace(reg, (match) => map[match]);
  },

  updatePeople: (id, data, callback) => {
    if (Object.keys(data).length === 0) return null;
    let sql = `UPDATE people SET`;
    Object.entries(data).forEach(([key, value]) => {
      // si le type de la data est une string alors on la sanitize avec la méthode au dessus, sinon on laisse comme tel.
      const valueToSet =
        typeof data[key] === "string"
          ? `'${dataMapper.sanitize(value)}'`
          : value;
      sql += ` ${key}=${valueToSet},`;
    });
    sql = sql.slice(0, -1); // Remove last ","
    sql += ` WHERE id=${id};`;
    client.query(sql, callback);
  },

  updateCompanies: (id, data, callback) => {
    if (Object.keys(data).length === 0) return null;
    let sql = `UPDATE companies SET`;
    Object.entries(data).forEach(([key, value]) => {
      const valueToSet =
        typeof data[key] === "string"
          ? `'${dataMapper.sanitize(value)}'`
          : value;
      sql += ` ${key}=${valueToSet},`;
    });
    sql = sql.slice(0, -1); // Remove last ","
    sql += ` WHERE idc=${id};`;
    client.query(sql, callback);
  },
  updateAd: (id, data, callback) => {
    if (Object.keys(data).length === 0) return null;
    let sql = `UPDATE ad SET`;
    Object.entries(data).forEach(([key, value]) => {
      const valueToSet =
        typeof data[key] === "string"
          ? `'${dataMapper.sanitize(value)}'`
          : value;
      sql += ` ${key}=${valueToSet},`;
    });
    sql = sql.slice(0, -1); // Remove last ","
    sql += ` WHERE id=${id};`;
    client.query(sql, callback);
  },
  deleteAd: (ad_id, callback) => {
    const deleteQuery = {
      text: `DELETE FROM "ad" WHERE id=$1`,
      values: [ad_id],
    };
    client.query(deleteQuery, callback);
  },
  deleteCompany: (companie_id, callback) => {
    const deleteQuery = {
      text: `DELETE FROM companies WHERE idc=$1`,
      values: [companie_id],
    };
    client.query(deleteQuery, callback);
  },
  deletePeople: (people_id, callback) => {
    const deleteQuery = {
      text: `DELETE FROM "people" WHERE id=$1`,
      values: [people_id],
    };
    client.query(deleteQuery, callback);
  },
  deletePeopleByName: (name, callback) => {
    const deleteQuery = {
      text: `DELETE FROM "people" WHERE lastname=$1`,
      values: [name],
    };
    client.query(deleteQuery, callback);
  },
  deleteApplication: (app_id, callback) => {
    const query = {
      text: `DELETE FROM "application" WHERE ids=$1`,
      values: [app_id],
    };
    client.query(query, callback);
  },

  postApplication: (
    ad_id,
    people_id,
    companies_id,
    tempory_firstname,
    tempory_lastname,
    tempory_email,
    tempory_phone,
    message,
    callback
  ) => {
    const addapplicationSQL = {
      text: `
            INSERT INTO "application" (ad_id,people_id,companies_id,tempory_firstname,tempory_lastname,tempory_email,tempory_phone,message)
            VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8);`,
      values: [
        ad_id,
        people_id,
        companies_id,
        tempory_firstname,
        tempory_lastname,
        tempory_email,
        tempory_phone,
        message,
      ],
    };
    client.query(addapplicationSQL, callback);
  },
  getApplications: (callback) => {
    const queryApplications = {
      text: `SELECT * FROM "application" INNER JOIN "ad" ON application.ad_id = ad.id
        LEFT JOIN "people" ON application.people_id = people.id;`,
    };
    client.query(queryApplications, callback);
  },

  getPeopleByEmailRequest: (email, callback) => {
    const querySQL = {
      text: `SELECT * FROM "people" WHERE "email"=$1;`,
      values: [email],
    };
    client.query(querySQL, callback);
  },
  countEmail: (email, callback) => {
    const querySQL = {
      text: `SELECT COUNT(email) FROM "people" WHERE "email"=$1; `,
      values: [email],
    };
    client.query(querySQL, callback);
  },
};

module.exports = dataMapper;
