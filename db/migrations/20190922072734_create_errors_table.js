
exports.up = function(knex) {
  return knex.schema.createTable('errors', (table) => {
    table.increments();
    table.string('name', 128).notNullable();
    table.string('message', 2048).notNullable();
    table.string('file', 128).notNullable();
    table.string('method', 128).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('errors');
};
