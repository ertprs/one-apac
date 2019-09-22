module.exports = (function() {
  const knex = require('../../knex');

  function logError(name, message, stack) {
    return knex.raw(`
      INSERT INTO
        errors (name, message, stack)
      VALUES
        (:name, :message, :stack)
      RETURNING
        id
    `, {
      name,
      message,
      stack
    })
      .then((result) => {
        const { id } = result.rows[0];

        console.log(`\nError logged with id: ${id}\n`)
      });
  }

  return {
    logError
  };
})();