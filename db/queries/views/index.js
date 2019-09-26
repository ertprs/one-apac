module.exports = (function() {
  const
    knex = require('../../knex'),
    { logError } = require('../errors');

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
    })
      .then(() => {
        return;
      })
      .catch((error) => {
        return logError(error.name, error.message, error.stack);
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