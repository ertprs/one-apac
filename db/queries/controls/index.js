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


  return {
    getStatus
  };
})();