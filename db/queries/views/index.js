module.exports = (function() {
  const
    knex = require('../../knex'),
    { logError } = require('../errors');

  function getView(payload, eventId) {
    return knex.raw(`
        SELECT
          id
        FROM
          views
        WHERE
          description = :payload
        AND event_id = :eventId
      `, {
      eventId,
      payload
    });
  }

  function insertView(payload, eventId) {
    return knex.raw(`
      INSERT INTO
        views(description, event_id)
      VALUES
        (:payload, :eventId)
      RETURNING
        id
    `, {
      eventId,
      payload
    });
  }

  function increaseView(id) {
    return knex.raw(`
      UPDATE
        views
      SET
        views = views + 1
      WHERE
        id = :id
    `, {
      id
    });
  }

  function getViews(eventId) {
    return knex.raw(`
      SELECT
        *
      FROM
        views
      WHERE
        event_id = :eventId
      ORDER BY
        id
    `, {
      eventId
    });
  }

  return {
    getView,
    getViews,
    increaseView,
    insertView
  };
})();