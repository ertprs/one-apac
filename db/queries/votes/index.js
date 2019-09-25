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

  function castVote(region, userId) {
    return knex.raw(`
      INSERT INTO
        contestants_users cu (contestant_id, user_id)
      SELECT
        id,
        :userId
      FROM
        contestants c
      WHERE
        c.region = :region
    `, {
      region,
      userId
    });
  }

  return {
    castVote,
    fetchVotes
  };
})();