
exports.up = function(knex) {
  return knex.schema.createTable('contestants', (table) => {
    table.increments();
    table.string('region', 128).notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contestants');
};
