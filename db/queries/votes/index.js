module.exports = (function() {
  const knex = require('../../knex');

  function fetchVotes(userId) {
    return knex.raw(`
      SELECT
        c.region
      FROM
        contestants_users cu
      JOIN
        contestants c
        ON c.id = cu.contestant_id
      WHERE
        cu.user_id = :userId
    `, {
      userId
    });
  }

  return {
    fetchVotes
  };
})();