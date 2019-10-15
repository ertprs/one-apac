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

  function insert(pageUserId, eventId) {
    return knex.raw(`
      INSERT INTO
        users (page_user_id, event_id)
      VALUES
        (:pageUserId, :eventId)
      RETURNING
        id, page_user_id
    `, {
      eventId,
      pageUserId
    });
  }

  return {
    fetchByPageUserId,
    insert
  };
})();