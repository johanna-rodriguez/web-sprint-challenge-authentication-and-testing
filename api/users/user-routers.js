const db = require("../../data/db-config.js");


function find(filter) {
  
      return db('users')
      .select(username,password)
        .where(filter)
      }