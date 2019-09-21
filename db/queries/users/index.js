module.exports = (function() {
  const knex = require('../../knex');

  function fetchByPageUserId(pageUserId) {
    return knex.raw(`
      SELECT
        *
      FROM
        users
      WHERE
        page_user_id = :pageUserId
    `, {
      pageUserId
    });
  }

  function insert(pageUserId) {
    return knex.raw(`
      INSERT INTO
        users (page_user_id)
      VALUES
        (:pageUserId)
      RETURNING
        id
    `, {
      pageUserId
    });
  }

  return {
    fetchByPageUserId,
    insert
  };
})();