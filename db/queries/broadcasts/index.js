module.exports = (function() {
  const knex = require('../../knex');

  function getBroadcasts(eventId) {
    return knex.raw(`
      SELECT
        *
      FROM
        broadcasts
      WHERE
        event_id = :eventId
      ORDER BY
        id
    `, {
      eventId
    });
  }

  return {
    getBroadcasts
  };
})();