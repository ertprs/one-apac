module.exports = (function() {
  const knex = require('../../knex');

  function addView(menu) {
    return knex.raw(`
      UPDATE
        views
      SET
        views = views + 1
      WHERE
        description = :menu
    `, {
      menu
    });
  }

  function getViews() {
    return knex.raw(`
      SELECT
        *
      FROM
        views
    `);
  }

  return {
    addView,
    getViews
  };
})();