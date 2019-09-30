module.exports = (function() {
  const knex = require('../../knex');

  function insertAdministrator(username, password, eventId) {
    return knex.raw(`
      INSERT INTO
        administrators (username, password, event_id)
      VALUES
        (:username, :password, :eventId)
    `, {
      username,
      password,
      eventId
    });
  }

  function getAdministrator(username) {
    return knex.raw(`
      SELECT
        *
      FROM
        administrators
      WHERE
        username = :username
    `, {
      username
    });
  }

  return {
    getAdministrator,
    insertAdministrator
  };
})();