module.exports = (function() {
  const knex = require('../../knex');

  function logError(name, message, file, method) {
    return knex.raw(`
      INSERT INTO
        errors (name, message, file, method)
      VALUES
        (:name, :message, :file, :method)
    `, {
      name,
      message,
      file,
      method
    });
  }

  return {
    logError
  };
})();