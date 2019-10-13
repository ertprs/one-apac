module.exports = (function() {
  const knex = require('../../knex');

  function getByPageId(pageId) {
    return knex.raw(`
      SELECT
        *
      FROM
        events
      WHERE
        page_id = :pageId
    `, {
      pageId
    });
  }

  function getById(id) {
    return knex.raw(`
      SELECT
        *
      FROM
        events
      WHERE
        id = :id
    `, {
      id
    });
  }

  return {
    getById,
    getByPageId
  };
})();