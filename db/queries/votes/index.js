module.exports = (function() {
  const knex = require('../../knex');

  async function fetchVotes(userId) {
    const response = await knex.raw(`
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
    console.log('\n\n\n' + JSON.parse(response));

    return response;
  }

  return {
    fetchVotes
  };
})();