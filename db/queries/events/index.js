module.exports = (function() {
  const knex = require('../../knex');

  function fetchByPageId(pageId) {
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

  return {
    fetchByPageId
  };
})();