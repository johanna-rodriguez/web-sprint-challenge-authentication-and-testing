const db = require("../../data/db-config.js");

async function add({ username, password, role_name }) {
    let created_user_id;
    await db.transaction(async (trx) => {
      const [user_id] = await trx("users").insert({
        username,
        password,
      });
      created_user_id = user_id;
    });
    return findById(created_user_id);
  }