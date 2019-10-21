module.exports = (function() {
  const knex = require('../../knex');

  function getStatus(description) {
    return knex.raw(`
      SELECT
        active
      FROM
        controls
      WHERE
        description = :description
    `, {
      description
    });
  }

  function setStatus(description, status) {
    return knex.raw(`
      UPDATE
        controls
      SET
        active = :status
      WHERE
        description = :description
    `, {
      description,
      status
    });
  }

  return {
    getStatus,
    setStatus
  };
})();